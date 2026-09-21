const CONFIG = {
  API_KEY: 'AL-GHOZALI-PRESENSI-2026',
  TIMEZONE: 'Asia/Jakarta',
  DATABASE: {
    SMA: {
      ID: '1C6C1pXqQFMc7EeML9sDTC1w32w6RfsP0upFwKgasr68',
      NAME: 'DAFTAR HADIR PENGAWAS ASTS GANJIL SMA'
    },
    SMP: {
      ID: '1WXd-WfnlFKegeHzyM6Uvqgu9Xmpsrv2vEebF8I9bhEM',
      NAME: 'DAFTAR HADIR PENGAWAS ASTS GANJIL SMP'
    }
  },
  SHEETS: {
    AUTH: 'AUTH_PENGAWAS',
    JADWAL: 'JADWAL_PENGAWAS',
    PRESENSI: 'PRESENSI_PENGAWAS',
    REKAP: 'REKAP_PENGAWAS'
  }
};

const STATUS = ['HADIR','IZIN','SAKIT','ALPA','DIGANTIKAN'];

function doPost(e) {
  try {
    const p = parseRequest_(e);
    if (p.api_key !== CONFIG.API_KEY) return json_({ok:false,message:'API key tidak valid.'});
    switch (String(p.action || '').toLowerCase()) {
      case 'get_pengawas': return json_(getPengawas_(p));
      case 'register_pin': return json_(registerPin_(p));
      case 'login': return json_(login_(p));
      case 'get_jadwal_pengawas': return json_(getJadwal_(p));
      case 'checkin': return json_(checkin_(p));
      case 'get_rekap': return json_(getRekap_(p));
      case 'setup': return json_(setup_(p));
      default: return json_({ok:false,message:'Action tidak dikenal.'});
    }
  } catch (err) {
    return json_({ok:false,message:err.message || String(err)});
  }
}

function doGet(e) {
  return json_({ok:true,app:'Presensi Pengawas Al-Ghozali',status:'online'});
}

function parseRequest_(e) {
  if (!e || !e.postData || !e.postData.contents) return {};
  const raw = e.postData.contents;
  try { return JSON.parse(raw); } catch (_) { return e.parameter || {}; }
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

function db_(unit) {
  const u = String(unit || '').trim().toUpperCase();
  if (!CONFIG.DATABASE[u]) throw new Error('Jenjang tidak tersedia: ' + u);
  return SpreadsheetApp.openById(CONFIG.DATABASE[u].ID);
}

function normalize_(s) {
  return String(s == null ? '' : s).trim().toUpperCase()
    .replace(/[_\-\/]+/g,' ')
    .replace(/\s+/g,' ');
}

function headerMap_(sheet) {
  const lastCol = sheet.getLastColumn();
  if (!lastCol) return {};
  const h = sheet.getRange(1,1,1,lastCol).getDisplayValues()[0];
  const m = {};
  h.forEach((v,i)=>{ if (normalize_(v)) m[normalize_(v)] = i; });
  return m;
}

function findColumn_(map, aliases) {
  for (const a of aliases) if (map[normalize_(a)] !== undefined) return map[normalize_(a)];
  return -1;
}

function findMasterSheet_(ss) {
  const sheets = ss.getSheets();
  const nameAliases = ['NAMA PENGAWAS','NAMA_PENGAWAS','NAMA PENGAWAS UJIAN','NAMA GURU','NAMA GURU/PENGAWAS','NAMA'];
  for (const sh of sheets) {
    if ([CONFIG.SHEETS.AUTH,CONFIG.SHEETS.JADWAL,CONFIG.SHEETS.PRESENSI,CONFIG.SHEETS.REKAP].indexOf(sh.getName()) >= 0) continue;
    const map = headerMap_(sh);
    const nameCol = findColumn_(map,nameAliases);
    if (nameCol >= 0) return {sheet:sh,map:map,nameCol:nameCol};
  }
  return null;
}

function getPengawas_(p) {
  const unit = String(p.unit || '').toUpperCase();
  const ss = db_(unit);
  const master = findMasterSheet_(ss);
  if (!master) return {ok:false,message:'Master pengawas tidak ditemukan. Sistem tidak membuat atau menyalin master baru.'};

  const sh = master.sheet;
  const values = sh.getDataRange().getDisplayValues();
  const unitCol = findColumn_(master.map,['UNIT','JENJANG','UNIT SEKOLAH','JENJANG SEKOLAH']);
  const activeCol = findColumn_(master.map,['AKTIF','STATUS']);
  const out = [];
  for (let r=1;r<values.length;r++) {
    const name = String(values[r][master.nameCol] || '').trim();
    if (!name) continue;
    if (unitCol >= 0 && String(values[r][unitCol]).trim() && normalize_(values[r][unitCol]) !== normalize_(unit)) continue;
    if (activeCol >= 0) {
      const a = normalize_(values[r][activeCol]);
      if (['TIDAK','NONAKTIF','INACTIVE','0','FALSE'].indexOf(a) >= 0) continue;
    }
    if (out.indexOf(name) < 0) out.push(name);
  }
  out.sort((a,b)=>a.localeCompare(b,'id'));
  return {ok:true,data:out,source_sheet:sh.getName(),count:out.length};
}

function ensureSheet_(ss,name,headers) {
  let sh = ss.getSheetByName(name);
  if (!sh) sh = ss.insertSheet(name);
  if (sh.getLastRow() === 0) sh.getRange(1,1,1,headers.length).setValues([headers]);
  else {
    const current = sh.getRange(1,1,1,Math.max(sh.getLastColumn(),headers.length)).getDisplayValues()[0];
    if (!current.slice(0,headers.length).join('|')) sh.getRange(1,1,1,headers.length).setValues([headers]);
  }
  return sh;
}

function ensureCoreSheets_(ss) {
  ensureSheet_(ss,CONFIG.SHEETS.AUTH,['NAMA_PENGAWAS','PIN_HASH','AKTIF','UPDATED_AT']);
  ensureSheet_(ss,CONFIG.SHEETS.JADWAL,['UNIT','TANGGAL','HARI','JAM_KE','RUANG','NAMA_PENGAWAS']);
  ensureSheet_(ss,CONFIG.SHEETS.PRESENSI,['HARI/TANGGAL','NAMA PENGAWAS','PENGAWAS PENGGANTI','RUANG','JAM KE','JUMLAH MENGAWAS','KETERANGAN','WAKTU INPUT']);
  ensureSheet_(ss,CONFIG.SHEETS.REKAP,['NAMA PENGAWAS','UNIT','JUMLAH MENGAWAS','HADIR','IZIN','SAKIT','ALPA','DIGANTIKAN']);
}

function sha256_(text) {
  const bytes = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256,String(text),Utilities.Charset.UTF_8);
  return bytes.map(b=>('0'+(b&255).toString(16)).slice(-2)).join('');
}

function registerPin_(p) {
  const unit=String(p.unit||'').toUpperCase(), nama=String(p.nama||'').trim(), pin=String(p.pin||'');
  if (!/^\d{6,}$/.test(pin)) return {ok:false,message:'PIN minimal 6 digit dan hanya angka.'};
  const list=getPengawas_({unit:unit});
  if (!list.ok || list.data.indexOf(nama)<0) return {ok:false,message:'Nama tidak ada di master pengawas.'};
  const ss=db_(unit); ensureCoreSheets_(ss);
  const sh=ss.getSheetByName(CONFIG.SHEETS.AUTH), values=sh.getDataRange().getDisplayValues();
  for(let r=1;r<values.length;r++) {
    if(normalize_(values[r][0])===normalize_(nama)) {
      sh.getRange(r+1,2,1,3).setValues([[sha256_(pin),true,new Date()]]);
      return {ok:true,message:'PIN berhasil diperbarui.'};
    }
  }
  sh.appendRow([nama,sha256_(pin),true,new Date()]);
  return {ok:true,message:'PIN berhasil didaftarkan.'};
}

function login_(p) {
  const unit=String(p.unit||'').toUpperCase(), nama=String(p.nama||'').trim(), pin=String(p.pin||'');
  if (!/^\d{6,}$/.test(pin)) return {ok:false,message:'PIN minimal 6 digit.'};
  const ss=db_(unit); ensureCoreSheets_(ss);
  const sh=ss.getSheetByName(CONFIG.SHEETS.AUTH), values=sh.getDataRange().getDisplayValues();
  for(let r=1;r<values.length;r++) {
    if(normalize_(values[r][0])===normalize_(nama)) {
      if(normalize_(values[r][2])==='FALSE' || normalize_(values[r][2])==='TIDAK') return {ok:false,message:'Akun tidak aktif.'};
      if(values[r][1]!==sha256_(pin)) return {ok:false,message:'PIN salah.'};
      return {ok:true,message:'Login berhasil.'};
    }
  }
  return {ok:false,message:'PIN belum terdaftar. Gunakan pendaftaran PIN terlebih dahulu.'};
}

function getJadwal_(p) {
  const unit=String(p.unit||'').toUpperCase(), nama=String(p.nama||'').trim();
  const ss=db_(unit); ensureCoreSheets_(ss);
  const sh=ss.getSheetByName(CONFIG.SHEETS.JADWAL);
  const v=sh.getDataRange().getDisplayValues();
  const out=[];
  for(let r=1;r<v.length;r++) {
    if(normalize_(v[r][5])===normalize_(nama)) out.push({
      UNIT:v[r][0],TANGGAL:v[r][1],HARI:v[r][2],JAM_KE:v[r][3],RUANG:v[r][4],NAMA_PENGAWAS:v[r][5]
    });
  }
  return {ok:true,data:out};
}

function checkin_(p) {
  const unit=String(p.unit||'').toUpperCase(), nama=String(p.nama||'').trim();
  const tanggal=String(p.tanggal||'').trim(), hari=String(p.hari||'').trim();
  const jam=String(p.jam_ke||'').trim(), ruang=String(p.ruang||'').trim();
  const status=String(p.status||'').toUpperCase(), pengganti=String(p.pengganti||'').trim();
  if(STATUS.indexOf(status)<0) return {ok:false,message:'Status presensi tidak valid.'};
  if(status==='DIGANTIKAN' && !pengganti) return {ok:false,message:'Pengawas pengganti wajib diisi.'};

  const ss=db_(unit); ensureCoreSheets_(ss);
  const jad=ss.getSheetByName(CONFIG.SHEETS.JADWAL).getDataRange().getDisplayValues();
  let scheduled=false;
  for(let r=1;r<jad.length;r++) {
    if(String(jad[r][1])===tanggal && normalize_(jad[r][2])===normalize_(hari) &&
       normalize_(jad[r][3])===normalize_(jam) && normalize_(jad[r][4])===normalize_(ruang) &&
       normalize_(jad[r][5])===normalize_(nama)) { scheduled=true; break; }
  }
  if(!scheduled) return {ok:false,message:'Validasi gagal: pengawas tidak terjadwal pada tanggal/ruang/jam tersebut.'};

  const sh=ss.getSheetByName(CONFIG.SHEETS.PRESENSI);
  const values=sh.getDataRange().getDisplayValues();
  let found=-1;
  for(let r=1;r<values.length;r++) {
    if(String(values[r][0])===tanggal+' '+hari && normalize_(values[r][1])===normalize_(nama) &&
       normalize_(values[r][3])===normalize_(ruang) && normalize_(values[r][4])===normalize_(jam)) { found=r+1; break; }
  }
  const now=Utilities.formatDate(new Date(),CONFIG.TIMEZONE,'dd/MM/yyyy HH:mm:ss');
  const row=[tanggal+' '+hari,nama,pengganti,ruang,jam,'',status,now];
  if(found>0) sh.getRange(found,1,1,row.length).setValues([row]);
  else sh.appendRow(row);
  updateRekap_(unit,nama);
  return {ok:true,message:'Presensi tersimpan.',waktu_input:now};
}

function updateRekap_(unit,nama) {
  const ss=db_(unit); ensureCoreSheets_(ss);
  const p=ss.getSheetByName(CONFIG.SHEETS.PRESENSI).getDataRange().getDisplayValues();
  const j=ss.getSheetByName(CONFIG.SHEETS.JADWAL).getDataRange().getDisplayValues();
  const assigned=j.slice(1).filter(r=>normalize_(r[0])===normalize_(unit)&&normalize_(r[5])===normalize_(nama)).length;
  const counts={HADIR:0,IZIN:0,SAKIT:0,ALPA:0,DIGANTIKAN:0};
  p.slice(1).forEach(r=>{ if(normalize_(r[1])===normalize_(nama) && counts[r[6]]!==undefined) counts[r[6]]++; });
  const sh=ss.getSheetByName(CONFIG.SHEETS.REKAP), v=sh.getDataRange().getDisplayValues();
  const row=[nama,unit,assigned,counts.HADIR,counts.IZIN,counts.SAKIT,counts.ALPA,counts.DIGANTIKAN];
  for(let r=1;r<v.length;r++) {
    if(normalize_(v[r][0])===normalize_(nama) && normalize_(v[r][1])===normalize_(unit)) {
      sh.getRange(r+1,1,1,row.length).setValues([row]); return;
    }
  }
  sh.appendRow(row);
}

function getRekap_(p) {
  const unit=String(p.unit||'').toUpperCase(), nama=String(p.nama||'').trim();
  const ss=db_(unit); ensureCoreSheets_(ss); updateRekap_(unit,nama);
  const sh=ss.getSheetByName(CONFIG.SHEETS.REKAP), v=sh.getDataRange().getDisplayValues();
  const out=[];
  for(let r=1;r<v.length;r++) if(normalize_(v[r][0])===normalize_(nama)) {
    out.push({'NAMA PENGAWAS':v[r][0],'UNIT':v[r][1],'JUMLAH MENGAWAS':v[r][2],
      'HADIR':v[r][3],'IZIN':v[r][4],'SAKIT':v[r][5],'ALPA':v[r][6],'DIGANTIKAN':v[r][7]});
  }
  return {ok:true,data:out};
}

function setup_(p) {
  const units=Object.keys(CONFIG.DATABASE), result=[];
  units.forEach(unit=>{
    const ss=db_(unit); ensureCoreSheets_(ss);
    result.push({unit:unit,spreadsheet_id:CONFIG.DATABASE[unit].ID,master:(findMasterSheet_(ss)||{}).sheet?.getName()||null});
  });
  return {ok:true,message:'Database siap. Master lama tidak dipindah atau disalin.',data:result};
}
