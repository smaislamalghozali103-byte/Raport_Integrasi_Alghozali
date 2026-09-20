/**
 * =========================================================================
 * BACKEND SINKRONISASI RAPORT PONDOK PESANTREN AL-GHOZALI (Code.gs)
 * =========================================================================
 * Skrip ini bertindak sebagai API server gratis di Google Drive Anda untuk
 * menghubungkan seluruh perangkat guru, wali kelas, & admin ke Google Spreadsheet.
 * 
 * CARA DEPLOY / UPDATE:
 * 1. Di Google Sheets, buka menu: "Ekstensi" (Extensions) -> "Apps Script".
 * 2. Hapus semua kode lama di file Code.gs, lalu tempel (paste) seluruh kode di bawah ini.
 * 3. Klik tombol "Simpan" (ikon disket).
 * 4. Klik menu "Deploy" (di kanan atas) -> pilih "New deployment" (atau "Manage deployments" -> edit versi baru jika update).
 * 5. Pilih tipe: "Web app" (ikon bola dunia).
 * 6. Description: "Raport Sync API v2"
 * 7. Execute as: "Me" (email Google Anda)
 * 8. Who has access: "Anyone" (Siapa saja)  <--- WAJIB DIPILIH AGAR BISA DIAKSES GURU DARI RUMAH!
 * 9. Klik "Deploy" -> Beri izin akses ("Authorize access" -> pilih akun -> "Advanced" -> "Go to Raport...").
 * 10. Salin "Web app URL" (akhiran /exec) dan masukkan ke menu Sinkronisasi Cloud di aplikasi Raport.
 * =========================================================================
 */

function doGet(e) {
  return handleRequest(e);
}

function doPost(e) {
  return handleRequest(e);
}

function handleRequest(e) {
  var lock = LockService.getScriptLock();
  // Tunggu antrean lock hingga 10 detik agar tidak bentrok saat banyak guru menyimpan nilai bersamaan
  lock.tryLock(10000);
  
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var params = {};
    
    // Parsing data yang dikirim oleh aplikasi web
    if (e && e.postData && e.postData.contents) {
      try {
        params = JSON.parse(e.postData.contents);
      } catch (err) {
        params = e.parameter || {};
      }
    } else if (e && e.parameter) {
      params = e.parameter;
    }
    
    var action = params.action || 'getAll';

    // FULL DAY - kelas resmi
    var FULL_DAY_CLASSES = ['X-A', 'X-B', 'XI-IPA', 'XI-IPS', 'XII-IPA', 'XII-IPS'];
    
    // -----------------------------------------------------------------------
    // 1. TES KONEKSI
    // -----------------------------------------------------------------------
    if (action === 'test') {
      return jsonResponse({
        status: 'success',
        message: 'Koneksi ke Google Spreadsheet berhasil!',
        spreadsheetName: ss.getName(),
        spreadsheetId: ss.getId(),
        timestamp: new Date().toISOString()
      });
    }
    
    // -----------------------------------------------------------------------
    // 2. AMBIL SEMUA NILAI (PULL / GET ALL DARI SEMUA SHEET REKAP KELAS)
    // -----------------------------------------------------------------------
    if (action === 'getAll') {
      var allSheets = ss.getSheets();
      var studentsScores = {};
      var totalRowsRead = 0;
      var classSheetsRead = [];

      for (var s = 0; s < allSheets.length; s++) {
        var sh = allSheets[s];
        var shName = sh.getName();

        // Hanya baca sheet rekap kelas (diawali 'Rekap_')
        if (shName.indexOf('Rekap_') !== 0) {
          continue;
        }

        var values = sh.getDataRange().getValues();
        if (values.length < 3) continue;

        classSheetsRead.push(shName);

        // Format Resmi:
        // Baris 1: NO, NISN, NAMA, KELAS, NAMA GURU, [Guru 1], [Guru 2]...
        // Baris 2: , , , , MATA PELAJARAN, [Mapel 1], [Mapel 2]...
        // Baris 3+: Data Santri
        var mapelRowIndex = 1;
        var startDataRow = 2;
        var startCol = 5;

        // Cari posisi kata 'MATA PELAJARAN' di baris 1-3 untuk fleksibilitas
        for (var h = 0; h < Math.min(4, values.length); h++) {
          for (var c = 0; c < values[h].length; c++) {
            if (String(values[h][c] || '').trim().toUpperCase() === 'MATA PELAJARAN') {
              mapelRowIndex = h;
              startDataRow = h + 1;
              startCol = c + 1;
              break;
            }
          }
        }

        var headerMapel = values[mapelRowIndex];
        var subjectCols = [];
        for (var col = startCol; col < headerMapel.length; col++) {
          var mapelName = String(headerMapel[col] || '').trim();
          if (mapelName && mapelName !== '-' && mapelName !== 'No' && mapelName !== 'NISN' && mapelName !== 'NAMA' && mapelName !== 'KELAS') {
            subjectCols.push({
              colIndex: col,
              subjectName: mapelName
            });
          }
        }

        // Baca seluruh nilai santri
        for (var r = startDataRow; r < values.length; r++) {
          var row = values[r];
          var nisn = String(row[1] || '').trim(); // Kolom B
          var studentName = String(row[2] || '').trim(); // Kolom C

          if (!studentName && !nisn) continue;

          var studentScoresMap = {};
          var hasAnyScore = false;

          for (var sc = 0; sc < subjectCols.length; sc++) {
            var colInfo = subjectCols[sc];
            var rawVal = row[colInfo.colIndex];
            if (rawVal !== "" && rawVal !== null && rawVal !== undefined && !isNaN(Number(rawVal))) {
              var numVal = Number(rawVal);
              studentScoresMap[colInfo.subjectName] = numVal;
              hasAnyScore = true;
            }
          }

          if (hasAnyScore) {
            totalRowsRead++;
            // Petakan berdasarkan NISN
            if (nisn) {
              if (!studentsScores[nisn]) studentsScores[nisn] = {};
              for (var mName in studentScoresMap) {
                studentsScores[nisn][mName] = studentScoresMap[mName];
              }
            }
            // Petakan juga berdasarkan Nama Lengkap (lowercase)
            if (studentName) {
              var nameKey = studentName.toLowerCase();
              if (!studentsScores[nameKey]) studentsScores[nameKey] = {};
              for (var mName2 in studentScoresMap) {
                studentsScores[nameKey][mName2] = studentScoresMap[mName2];
              }
            }
          }
        }
      }

      // Sebagai backup sekunder, periksa database Data_Nilai_Raport jika ada
      var rawSheet = ss.getSheetByName('Data_Nilai_Raport');
      if (rawSheet) {
        var rawData = rawSheet.getDataRange().getValues();
        for (var rw = 1; rw < rawData.length; rw++) {
          var rRow = rawData[rw];
          var sId = String(rRow[0] || '').trim();
          var sNisn = String(rRow[3] || '').trim();
          var sNameRaw = String(rRow[2] || '').trim().toLowerCase();
          var subId = String(rRow[4] || '').trim();
          var score = Number(rRow[5]) || 0;

          if (sId && subId) {
            if (!studentsScores[sId]) studentsScores[sId] = {};
            if (studentsScores[sId][subId] === undefined) {
              studentsScores[sId][subId] = score;
            }
          }
          if (sNisn && subId) {
            if (!studentsScores[sNisn]) studentsScores[sNisn] = {};
            if (studentsScores[sNisn][subId] === undefined) {
              studentsScores[sNisn][subId] = score;
            }
          }
          if (sNameRaw && subId) {
            if (!studentsScores[sNameRaw]) studentsScores[sNameRaw] = {};
            if (studentsScores[sNameRaw][subId] === undefined) {
              studentsScores[sNameRaw][subId] = score;
            }
          }
        }
      }

      return jsonResponse({
        status: 'success',
        studentsScores: studentsScores,
        classSheetsCount: classSheetsRead.length,
        classSheets: classSheetsRead,
        rowCount: totalRowsRead,
        timestamp: new Date().toISOString()
      });
    }
    
    // -----------------------------------------------------------------------
    // 3. SIMPAN SATU NILAI REAL-TIME (UPDATE LANGSUNG CELL KE SHEET KELAS)
    // -----------------------------------------------------------------------
    if (action === 'updateScore') {
      var studentId = String(params.studentId || '').trim();
      var subjectId = String(params.subjectId || '').trim();
      var subjectName = String(params.subjectName || subjectId).trim();
      var classId = String(params.classId || '').trim();
      var className = String(params.className || classId).trim();
      var studentName = String(params.studentName || '').trim();
      var teacherName = String(params.teacherName || '-').trim();
      var nisn = String(params.nisn || '').trim();
      var score = Number(params.score || 0);
      var now = Utilities.formatDate(new Date(), "Asia/Jakarta", "yyyy-MM-dd HH:mm:ss");

      // Langsung tulis nilai ke sheet kelas & sheet master
      if (className || classId) {
        updateClassRekapSheet(ss, classId, className, subjectId, subjectName, teacherName, '', [{
          studentId: studentId,
          classId: classId,
          studentName: studentName,
          nisn: nisn,
          subjectId: subjectId,
          score: score
        }], now);
      }

      // Backup ke sheet database raw
      var sheet = getOrCreateScoresSheet(ss);
      var data = sheet.getDataRange().getValues();
      var foundIndex = -1;

      for (var j = 1; j < data.length; j++) {
        if (String(data[j][0]).trim() === studentId && String(data[j][4]).trim() === subjectId) {
          foundIndex = j + 1;
          break;
        }
      }

      if (foundIndex > 0) {
        sheet.getRange(foundIndex, 6).setValue(score);
        sheet.getRange(foundIndex, 7).setValue(now);
      } else if (studentId && subjectId) {
        sheet.appendRow([studentId, classId, studentName, nisn, subjectId, score, now]);
      }

      return jsonResponse({
        status: 'success',
        message: 'Nilai berhasil langsung disimpan ke Sheet Kelas & Spreadsheet',
        studentId: studentId,
        subjectId: subjectId,
        score: score,
        updatedAt: now
      });
    }
    
    // -----------------------------------------------------------------------
    // 4. SIMPAN NILAI SATU MAPEL (UPDATE SHEET REKAP KELAS & DASHBOARD)
    // -----------------------------------------------------------------------
    if (action === 'saveSubjectScores') {
      var items = params.items || [];
      var classId = String(params.classId || (items[0] && items[0].classId) || '').trim();
      var className = String(params.className || classId);
      var subjectId = String(params.subjectId || (items[0] && items[0].subjectId) || '').trim();
      var subjectName = String(params.subjectName || subjectId);
      var teacherName = String(params.teacherName || '-');
      var waliKelas = String(params.waliKelas || '-');
      var now = Utilities.formatDate(new Date(), "Asia/Jakarta", "yyyy-MM-dd HH:mm:ss");
      
      // A. Simpan ke database raw (Data_Nilai_Raport)
      updateRawScoresSheet(ss, items, now);
      
      // B. Update / Buat Sheet Rekap Kelas (contoh: Rekap_1A)
      updateClassRekapSheet(ss, classId, className, subjectId, subjectName, teacherName, waliKelas, items, now);
      
      // C. Update Dashboard Monitoring Guru & Nilai (Dashboard_Monitoring)
      var gradedCount = 0;
      for (var g = 0; g < items.length; g++) {
        if (Number(items[g].score) > 0) gradedCount++;
      }
      updateDashboardMonitoring(ss, classId, className, subjectId, subjectName, teacherName, items.length, gradedCount, now);
      
      return jsonResponse({
        status: 'success',
        message: 'Berhasil menyimpan ' + items.length + ' nilai ke Sheet Rekap ' + className + ' & Dashboard Monitoring!',
        updatedCount: items.length,
        timestamp: new Date().toISOString()
      });
    }

    // -----------------------------------------------------------------------
    // 4B. DAFTAR KELAS FULL DAY
    // -----------------------------------------------------------------------
    if (action === 'getFullDayClasses') {
      return jsonResponse({
        status: 'success',
        jalur: 'FULL_DAY',
        unit: 'SMA-FULL-DAY',
        classes: FULL_DAY_CLASSES,
        timestamp: new Date().toISOString()
      });
    }

    // -----------------------------------------------------------------------
    // 4C. INISIALISASI KELAS FULL DAY
    // -----------------------------------------------------------------------
    if (action === 'initFullDayClasses') {
      var fdClasses = params.classes || FULL_DAY_CLASSES.map(function(name) {
        return { id: name, nameLatin: name, students: [], subjects: [] };
      });

      var allowedFd = {};
      for (var fdi = 0; fdi < FULL_DAY_CLASSES.length; fdi++) {
        allowedFd[FULL_DAY_CLASSES[fdi]] = true;
      }
      fdClasses = fdClasses.filter(function(cls) {
        var n = String(cls.nameLatin || cls.name || cls.id || '').trim().toUpperCase();
        return allowedFd[n];
      });

      initFullSpreadsheetStructure(ss, fdClasses);

      return jsonResponse({
        status: 'success',
        message: 'Kelas Full Day berhasil diinisialisasi',
        jalur: 'FULL_DAY',
        unit: 'SMA-FULL-DAY',
        classes: fdClasses.map(function(cls) { return cls.nameLatin || cls.name || cls.id; }),
        timestamp: new Date().toISOString()
      });
    }

    // -----------------------------------------------------------------------
    // 5. INISIALISASI MASSAL SELURUH SHEET REKAP KELAS & DASHBOARD (UNTUK ADMIN)
    // -----------------------------------------------------------------------
    if (action === 'initAllClasses') {
      var classesList = params.classes || [];
      initFullSpreadsheetStructure(ss, classesList);
      return jsonResponse({
        status: 'success',
        message: 'Berhasil membuat dan memformat seluruh Sheet Rekap Kelas dan Dashboard Monitoring!',
        timestamp: new Date().toISOString()
      });
    }

    // -----------------------------------------------------------------------
    // 6. SINKRONISASI MASSAL SEMUA NILAI (PUSH ALL)
    // -----------------------------------------------------------------------
    if (action === 'batchSync') {
      var sheet = getOrCreateScoresSheet(ss);
      var items = params.items || [];
      var now = Utilities.formatDate(new Date(), "Asia/Jakarta", "yyyy-MM-dd HH:mm:ss");
      
      sheet.clearContents();
      sheet.appendRow(['ID Santri', 'ID Kelas', 'Nama Lengkap', 'NISN', 'ID Mapel', 'Nilai Angka', 'Terakhir Diperbarui']);
      
      var headerRange = sheet.getRange(1, 1, 1, 7);
      headerRange.setBackground('#174D3A');
      headerRange.setFontColor('#FFFFFF');
      headerRange.setFontWeight('bold');
      
      var rowsToAppend = [];
      for (var k = 0; k < items.length; k++) {
        var it = items[k];
        rowsToAppend.push([
          String(it.studentId || ''),
          String(it.classId || ''),
          String(it.studentName || ''),
          String(it.nisn || ''),
          String(it.subjectId || ''),
          Number(it.score || 0),
          now
        ]);
      }
      
      if (rowsToAppend.length > 0) {
        sheet.getRange(2, 1, rowsToAppend.length, 7).setValues(rowsToAppend);
      }
      
      return jsonResponse({
        status: 'success',
        message: 'Berhasil menyinkronkan ' + rowsToAppend.length + ' data nilai ke Google Spreadsheet!',
        syncedCount: rowsToAppend.length,
        timestamp: new Date().toISOString()
      });
    }
    
    return jsonResponse({ status: 'error', message: 'Action tidak dikenal: ' + action });
    
  } catch (error) {
    return jsonResponse({ status: 'error', message: error.toString() });
  } finally {
    lock.releaseLock();
  }
}

// =========================================================================
// FUNGSI-FUNGSI PENDUKUNG SHEET REKAP KELAS & DASHBOARD MONITORING
// =========================================================================

function sanitizeSheetName(name) {
  var n = String(name || 'Kelas').trim();
  return n.replace(/[\\/?*[\\]]/g, '_').substring(0, 30);
}

function isFullDayClass(className) {
  var n = String(className || '').trim().toUpperCase();
  return ['X-A', 'X-B', 'XI-IPA', 'XI-IPS', 'XII-IPA', 'XII-IPS'].indexOf(n) !== -1;
}

function updateRawScoresSheet(ss, items, now) {
  var sheet = getOrCreateScoresSheet(ss);
  var data = sheet.getDataRange().getValues();
  var rowIndexMap = {};
  for (var r = 1; r < data.length; r++) {
    var key = String(data[r][0]).trim() + '_' + String(data[r][4]).trim();
    rowIndexMap[key] = r + 1;
  }
  
  var toAppend = [];
  for (var m = 0; m < items.length; m++) {
    var itm = items[m];
    var sId = String(itm.studentId || '').trim();
    var subId = String(itm.subjectId || '').trim();
    var cId = String(itm.classId || '').trim();
    var sName = String(itm.studentName || '').trim();
    var sNisn = String(itm.nisn || '').trim();
    var sc = Number(itm.score || 0);
    var k = sId + '_' + subId;
    
    if (rowIndexMap[k]) {
      sheet.getRange(rowIndexMap[k], 6).setValue(sc);
      sheet.getRange(rowIndexMap[k], 7).setValue(now);
    } else if (sId && subId) {
      toAppend.push([sId, cId, sName, sNisn, subId, sc, now]);
    }
  }
  
  if (toAppend.length > 0) {
    sheet.getRange(sheet.getLastRow() + 1, 1, toAppend.length, 7).setValues(toAppend);
  }
}

function updateClassRekapSheet(ss, classId, className, subjectId, subjectName, teacherName, waliKelas, items, now) {
  var cleanName = sanitizeSheetName(className || classId);
  var sheetName = 'Rekap_' + cleanName;
  var sheet = ss.getSheetByName(sheetName);
  
  if (!sheet) {
    sheet = ss.insertSheet(sheetName);
    setupNewClassSheet(sheet, className, subjectName, teacherName, items);
  } else {
    updateSheetScoresByMapel(sheet, className, subjectName, teacherName, items);
  }
  
  // Update juga sheet master Rekap_Semua_Santri jika ada
  var masterSheet = ss.getSheetByName('Rekap_Semua_Santri');
  if (masterSheet) {
    updateSheetScoresByMapel(masterSheet, className, subjectName, teacherName, items);
  }
}

function updateSheetScoresByMapel(sheet, className, subjectName, teacherName, items) {
  var data = sheet.getDataRange().getValues();
  if (data.length < 2) {
    setupNewClassSheet(sheet, className, subjectName, teacherName, items);
    return;
  }
  
  // Baris 2 (index 1) adalah baris MATA PELAJARAN (mulai Kolom F / index 5)
  var row2 = data[1];
  var subCol = -1;
  for (var c = 5; c < row2.length; c++) {
    var colName = String(row2[c] || '').trim();
    if (colName === subjectName || colName.indexOf(subjectName) !== -1 || subjectName.indexOf(colName) !== -1) {
      subCol = c + 1; // 1-indexed
      break;
    }
  }
  
  // Jika kolom mapel belum ada, buat kolom baru di sebelah kanan
  if (subCol === -1) {
    subCol = Math.max(6, sheet.getLastColumn() + 1);
    sheet.getRange(1, subCol).setValue(teacherName || '-').setFontWeight('bold').setBackground('#F1F5F9').setFontColor('#0F172A').setHorizontalAlignment('center');
    sheet.getRange(2, subCol).setValue(subjectName).setFontWeight('bold').setBackground('#CBD5E1').setFontColor('#0F172A').setHorizontalAlignment('center');
    sheet.setColumnWidth(subCol, 120);
  } else {
    if (teacherName && teacherName !== '-') {
      sheet.getRange(1, subCol).setValue(teacherName).setFontWeight('bold').setBackground('#F1F5F9').setFontColor('#0F172A').setHorizontalAlignment('center');
    }
  }
  
  // Petakan baris santri: Kolom B (index 1) = NISN, Kolom C (index 2) = NAMA
  var studentRowMap = {};
  for (var r = 2; r < data.length; r++) { // baris 3 ke bawah
    var nisn = String(data[r][1] || '').trim();
    var name = String(data[r][2] || '').trim().toLowerCase();
    if (nisn) studentRowMap[nisn] = r + 1;
    if (name) studentRowMap[name] = r + 1;
  }
  
  // Tuliskan nilai ke cell yang tepat
  for (var i = 0; i < items.length; i++) {
    var it = items[i];
    var targetRow = studentRowMap[String(it.nisn).trim()] || studentRowMap[String(it.studentName).trim().toLowerCase()];
    if (targetRow) {
      sheet.getRange(targetRow, subCol).setValue(Number(it.score) || 0).setHorizontalAlignment('center').setFontWeight('bold');
    }
  }
}

function setupNewClassSheet(sheet, className, subjectName, teacherName, items) {
  sheet.clear();
  
  // Baris 1: Header Guru (Sesuai Format Pengguna)
  // [NO, NISN, NAMA, KELAS, NAMA GURU, Guru 1, ...]
  var row1 = ["NO", "NISN", "NAMA", "KELAS", "NAMA GURU", teacherName || "-"];
  // Baris 2: Header Mapel
  // [, , , , MATA PELAJARAN, Mapel 1, ...]
  var row2 = ["", "", "", "", "MATA PELAJARAN", subjectName || "-"];
  
  sheet.getRange(1, 1, 1, row1.length).setValues([row1])
    .setFontWeight("bold").setBackground("#174D3A").setFontColor("#FFFFFF").setHorizontalAlignment("center");
  sheet.getRange(1, 5).setBackground("#1F6B4F").setFontColor("#FFFFFF");
  sheet.getRange(1, 6, 1, row1.length - 5).setBackground("#F1F5F9").setFontColor("#0F172A");
  
  sheet.getRange(2, 1, 1, row2.length).setValues([row2])
    .setFontWeight("bold").setBackground("#174D3A").setFontColor("#FFFFFF").setHorizontalAlignment("center");
  sheet.getRange(2, 5).setBackground("#1F6B4F").setFontColor("#FFFFFF");
  sheet.getRange(2, 6, 1, row2.length - 5).setBackground("#CBD5E1").setFontColor("#0F172A");
  
  // Baris 3+: Data Santri
  var rows = [];
  for (var i = 0; i < items.length; i++) {
    rows.push([
      i + 1,
      String(items[i].nisn || "-"),
      String(items[i].studentName || "-"),
      String(items[i].classId || className || "-"),
      "",
      Number(items[i].score || 0)
    ]);
  }
  
  if (rows.length > 0) {
    sheet.getRange(3, 1, rows.length, 6).setValues(rows);
    sheet.getRange(3, 1, rows.length, 1).setHorizontalAlignment("center");
    sheet.getRange(3, 2, rows.length, 1).setHorizontalAlignment("center");
    sheet.getRange(3, 4, rows.length, 1).setHorizontalAlignment("center");
    sheet.getRange(3, 6, rows.length, 1).setHorizontalAlignment("center").setFontWeight("bold");
  }
  
  sheet.setColumnWidth(1, 45);  // NO
  sheet.setColumnWidth(2, 120); // NISN
  sheet.setColumnWidth(3, 240); // NAMA
  sheet.setColumnWidth(4, 75);  // KELAS
  sheet.setColumnWidth(5, 140); // NAMA GURU / MATA PELAJARAN
  sheet.setColumnWidth(6, 120); // NILAI
  sheet.setFrozenRows(2);
}

function updateDashboardMonitoring(ss, classId, className, subjectId, subjectName, teacherName, totalStudents, gradedStudents, now) {
  var sheet = ss.getSheetByName('Dashboard_Monitoring');
  if (!sheet) {
    sheet = ss.insertSheet('Dashboard_Monitoring', 0);
    sheet.appendRow(['No', 'Kelas', 'Mata Pelajaran', 'Guru Pengampu', 'Total Santri', 'Santri Terisi', 'Status Nilai', 'Terakhir Disimpan']);
    var hRange = sheet.getRange(1, 1, 1, 8);
    hRange.setBackground('#174D3A').setFontColor('#FFFFFF').setFontWeight('bold').setHorizontalAlignment('center');
    sheet.setFrozenRows(1);
  }
  
  var data = sheet.getDataRange().getValues();
  var foundRow = -1;
  
  for (var r = 1; r < data.length; r++) {
    var cName = String(data[r][1] || '').trim();
    var sName = String(data[r][2] || '').trim();
    if ((cName === className || cName === classId) && (sName === subjectName || sName === subjectId)) {
      foundRow = r + 1;
      break;
    }
  }
  
  var statusText = '🔴 Belum Diisi (0/' + totalStudents + ')';
  var statusBg = '#FEE2E2';
  var statusColor = '#991B1B';
  
  if (gradedStudents >= totalStudents && totalStudents > 0) {
    statusText = '🟢 Sudah Lengkap (' + gradedStudents + '/' + totalStudents + ')';
    statusBg = '#DCFCE7';
    statusColor = '#166534';
  } else if (gradedStudents > 0) {
    statusText = '🟡 Sebagian (' + gradedStudents + '/' + totalStudents + ')';
    statusBg = '#FEF3C7';
    statusColor = '#92400E';
  }
  
  if (foundRow > 0) {
    sheet.getRange(foundRow, 4).setValue(teacherName || '-');
    sheet.getRange(foundRow, 5).setValue(totalStudents);
    sheet.getRange(foundRow, 6).setValue(gradedStudents);
    sheet.getRange(foundRow, 7).setValue(statusText).setBackground(statusBg).setFontColor(statusColor).setFontWeight('bold').setHorizontalAlignment('center');
    sheet.getRange(foundRow, 8).setValue(now).setHorizontalAlignment('center');
  } else {
    var nextNo = Math.max(1, data.length);
    sheet.appendRow([nextNo, className, subjectName, teacherName || '-', totalStudents, gradedStudents, statusText, now]);
    var newRow = sheet.getLastRow();
    sheet.getRange(newRow, 7).setBackground(statusBg).setFontColor(statusColor).setFontWeight('bold').setHorizontalAlignment('center');
    sheet.getRange(newRow, 8).setHorizontalAlignment('center');
  }
  
  sheet.setColumnWidth(1, 45);
  sheet.setColumnWidth(2, 130);
  sheet.setColumnWidth(3, 190);
  sheet.setColumnWidth(4, 220);
  sheet.setColumnWidth(5, 95);
  sheet.setColumnWidth(6, 95);
  sheet.setColumnWidth(7, 190);
  sheet.setColumnWidth(8, 150);
}

function initFullSpreadsheetStructure(ss, classesList) {
  // 1. Dashboard_Monitoring
  var dashSheet = ss.getSheetByName('Dashboard_Monitoring');
  if (!dashSheet) {
    dashSheet = ss.insertSheet('Dashboard_Monitoring', 0);
  } else {
    dashSheet.clear();
  }
  
  dashSheet.appendRow(['No', 'Kelas', 'Mata Pelajaran', 'Guru Pengampu', 'Total Santri', 'Santri Terisi', 'Status Nilai', 'Terakhir Disimpan']);
  dashSheet.getRange(1, 1, 1, 8).setBackground('#174D3A').setFontColor('#FFFFFF').setFontWeight('bold').setHorizontalAlignment('center');
  dashSheet.setFrozenRows(1);
  
  var dashRows = [];
  var rowNo = 1;
  var now = Utilities.formatDate(new Date(), "Asia/Jakarta", "yyyy-MM-dd HH:mm:ss");
  
  var allUniqueSubjects = [];
  var uniqueSubjectMap = {};
  
  for (var c0 = 0; c0 < classesList.length; c0++) {
    var cSubs = classesList[c0].subjects || [];
    for (var s0 = 0; s0 < cSubs.length; s0++) {
      var sItem = cSubs[s0];
      var sNameId = sItem.nameId || sItem.name;
      if (!uniqueSubjectMap[sNameId]) {
        uniqueSubjectMap[sNameId] = sItem.teacherName || '-';
        allUniqueSubjects.push({
          id: sItem.id,
          nameId: sNameId,
          teacherName: sItem.teacherName || '-'
        });
      }
    }
  }
  
  // 2. Buat Sheet Rekap per-Kelas
  for (var c = 0; c < classesList.length; c++) {
    var cls = classesList[c];
    var cName = cls.nameLatin || cls.id;
    var students = cls.students || [];
    var subjects = cls.subjects || [];
    
    var cleanSheetName = sanitizeSheetName(cName);
    var shName = 'Rekap_' + cleanSheetName;
    var cSheet = ss.getSheetByName(shName);
    if (!cSheet) {
      cSheet = ss.insertSheet(shName);
    } else {
      cSheet.clear();
    }
    
    var row1Vals = ["NO", "NISN", "NAMA", "KELAS", "NAMA GURU"];
    var row2Vals = ["", "", "", "", "MATA PELAJARAN"];
    
    var subjectGradedCounts = {};
    for (var s = 0; s < subjects.length; s++) {
      var sub = subjects[s];
      var sName = sub.nameId || sub.name;
      row1Vals.push(sub.teacherName || "-");
      row2Vals.push(sName);
      subjectGradedCounts[sub.id] = 0;
      if (sName !== sub.id) subjectGradedCounts[sName] = 0;
    }
    
    cSheet.getRange(1, 1, 1, row1Vals.length).setValues([row1Vals])
      .setFontWeight("bold").setBackground("#174D3A").setFontColor("#FFFFFF").setHorizontalAlignment("center");
    cSheet.getRange(1, 5).setBackground("#1F6B4F").setFontColor("#FFFFFF");
    if (row1Vals.length > 5) {
      cSheet.getRange(1, 6, 1, row1Vals.length - 5).setBackground("#F1F5F9").setFontColor("#0F172A");
    }
    
    cSheet.getRange(2, 1, 1, row2Vals.length).setValues([row2Vals])
      .setFontWeight("bold").setBackground("#174D3A").setFontColor("#FFFFFF").setHorizontalAlignment("center");
    cSheet.getRange(2, 5).setBackground("#1F6B4F").setFontColor("#FFFFFF");
    if (row2Vals.length > 5) {
      cSheet.getRange(2, 6, 1, row2Vals.length - 5).setBackground("#CBD5E1").setFontColor("#0F172A");
    }
    
    var sRows = [];
    for (var st = 0; st < students.length; st++) {
      var sObj = students[st];
      var sRow = [st + 1, sObj.nisn || "-", sObj.name || "-", cName, ""];
      for (var sb = 0; sb < subjects.length; sb++) {
        var subId = subjects[sb].id;
        var subName = subjects[sb].nameId || subjects[sb].name;
        var sc = "";
        if (sObj.scores) {
          if (sObj.scores[subId] !== undefined && sObj.scores[subId] !== "" && !isNaN(Number(sObj.scores[subId]))) {
            sc = Number(sObj.scores[subId]);
          } else if (sObj.scores[subName] !== undefined && sObj.scores[subName] !== "" && !isNaN(Number(sObj.scores[subName]))) {
            sc = Number(sObj.scores[subName]);
          }
        }
        if (sc !== "" && Number(sc) > 0) {
          subjectGradedCounts[subId] = (subjectGradedCounts[subId] || 0) + 1;
        }
        sRow.push(sc);
      }
      sRows.push(sRow);
    }
    
    if (sRows.length > 0) {
      cSheet.getRange(3, 1, sRows.length, row1Vals.length).setValues(sRows);
      cSheet.getRange(3, 1, sRows.length, 1).setHorizontalAlignment("center");
      cSheet.getRange(3, 2, sRows.length, 1).setHorizontalAlignment("center");
      cSheet.getRange(3, 4, sRows.length, 1).setHorizontalAlignment("center");
      for (var cCol = 6; cCol <= row1Vals.length; cCol++) {
        cSheet.getRange(3, cCol, sRows.length, 1).setHorizontalAlignment("center").setFontWeight("bold");
      }
    }
    
    cSheet.setColumnWidth(1, 45);  // NO
    cSheet.setColumnWidth(2, 120); // NISN
    cSheet.setColumnWidth(3, 240); // NAMA
    cSheet.setColumnWidth(4, 75);  // KELAS
    cSheet.setColumnWidth(5, 140); // NAMA GURU / MATA PELAJARAN
    for (var colI = 6; colI <= row1Vals.length; colI++) {
      cSheet.setColumnWidth(colI, 120);
    }
    cSheet.setFrozenRows(2);
    
    // Entri Dashboard_Monitoring
    for (var s2 = 0; s2 < subjects.length; s2++) {
      var sub2 = subjects[s2];
      var sName2 = sub2.nameId || sub2.name;
      var gCount = subjectGradedCounts[sub2.id] || subjectGradedCounts[sName2] || 0;
      var totalS = students.length;
      
      var statusText = '🔴 Belum Diisi (0/' + totalS + ')';
      if (gCount >= totalS && totalS > 0) {
        statusText = '🟢 Sudah Lengkap (' + gCount + '/' + totalS + ')';
      } else if (gCount > 0) {
        statusText = '🟡 Sebagian (' + gCount + '/' + totalS + ')';
      }
      
      dashRows.push([
        rowNo++,
        cName,
        sName2,
        sub2.teacherName || "-",
        totalS,
        gCount,
        statusText,
        gCount > 0 ? now : "-"
      ]);
    }
  }
  
  // 3. Buat Sheet Master: Rekap_Semua_Santri
  var masterSheet = ss.getSheetByName('Rekap_Semua_Santri');
  if (!masterSheet) {
    masterSheet = ss.insertSheet('Rekap_Semua_Santri');
  } else {
    masterSheet.clear();
  }
  
  var mRow1Vals = ["NO", "NISN", "NAMA", "KELAS", "NAMA GURU"];
  var mRow2Vals = ["", "", "", "", "MATA PELAJARAN"];
  
  for (var u = 0; u < allUniqueSubjects.length; u++) {
    mRow1Vals.push(allUniqueSubjects[u].teacherName || "-");
    mRow2Vals.push(allUniqueSubjects[u].nameId);
  }
  
  masterSheet.getRange(1, 1, 1, mRow1Vals.length).setValues([mRow1Vals])
    .setFontWeight("bold").setBackground("#174D3A").setFontColor("#FFFFFF").setHorizontalAlignment("center");
  masterSheet.getRange(1, 5).setBackground("#1F6B4F").setFontColor("#FFFFFF");
  if (mRow1Vals.length > 5) {
    masterSheet.getRange(1, 6, 1, mRow1Vals.length - 5).setBackground("#F1F5F9").setFontColor("#0F172A");
  }
  
  masterSheet.getRange(2, 1, 1, mRow2Vals.length).setValues([mRow2Vals])
    .setFontWeight("bold").setBackground("#174D3A").setFontColor("#FFFFFF").setHorizontalAlignment("center");
  masterSheet.getRange(2, 5).setBackground("#1F6B4F").setFontColor("#FFFFFF");
  if (mRow2Vals.length > 5) {
    masterSheet.getRange(2, 6, 1, mRow2Vals.length - 5).setBackground("#CBD5E1").setFontColor("#0F172A");
  }
  
  var masterStudentRows = [];
  var mIndex = 1;
  for (var mc = 0; mc < classesList.length; mc++) {
    var mCls = classesList[mc];
    var mCName = mCls.nameLatin || mCls.id;
    var mStudents = mCls.students || [];
    
    for (var ms = 0; ms < mStudents.length; ms++) {
      var mStd = mStudents[ms];
      var mRow = [mIndex++, mStd.nisn || "-", mStd.name || "-", mCName, ""];
      for (var mu = 0; mu < allUniqueSubjects.length; mu++) {
        var uSub = allUniqueSubjects[mu];
        var uSc = "";
        if (mStd.scores) {
          if (mStd.scores[uSub.id] !== undefined && mStd.scores[uSub.id] !== "" && !isNaN(Number(mStd.scores[uSub.id]))) {
            uSc = Number(mStd.scores[uSub.id]);
          } else if (mStd.scores[uSub.nameId] !== undefined && mStd.scores[uSub.nameId] !== "" && !isNaN(Number(mStd.scores[uSub.nameId]))) {
            uSc = Number(mStd.scores[uSub.nameId]);
          }
        }
        mRow.push(uSc);
      }
      masterStudentRows.push(mRow);
    }
  }
  
  if (masterStudentRows.length > 0) {
    masterSheet.getRange(3, 1, masterStudentRows.length, mRow1Vals.length).setValues(masterStudentRows);
    masterSheet.getRange(3, 1, masterStudentRows.length, 1).setHorizontalAlignment("center");
    masterSheet.getRange(3, 2, masterStudentRows.length, 1).setHorizontalAlignment("center");
    masterSheet.getRange(3, 4, masterStudentRows.length, 1).setHorizontalAlignment("center");
    for (var mCol = 6; mCol <= mRow1Vals.length; mCol++) {
      masterSheet.getRange(3, mCol, masterStudentRows.length, 1).setHorizontalAlignment("center").setFontWeight("bold");
    }
  }
  
  masterSheet.setColumnWidth(1, 45);
  masterSheet.setColumnWidth(2, 120);
  masterSheet.setColumnWidth(3, 240);
  masterSheet.setColumnWidth(4, 75);
  masterSheet.setColumnWidth(5, 140);
  for (var mci = 6; mci <= mRow1Vals.length; mci++) {
    masterSheet.setColumnWidth(mci, 120);
  }
  masterSheet.setFrozenRows(2);
  
  // Format Dashboard_Monitoring
  if (dashRows.length > 0) {
    dashSheet.getRange(2, 1, dashRows.length, 8).setValues(dashRows);
    for (var d = 0; d < dashRows.length; d++) {
      var stVal = String(dashRows[d][6]);
      var cell = dashSheet.getRange(d + 2, 7);
      if (stVal.indexOf('🟢') !== -1) {
        cell.setBackground("#DCFCE7").setFontColor("#166534").setFontWeight("bold");
      } else if (stVal.indexOf('🟡') !== -1) {
        cell.setBackground("#FEF3C7").setFontColor("#92400E").setFontWeight("bold");
      } else {
        cell.setBackground("#FEE2E2").setFontColor("#991B1B").setFontWeight("bold");
      }
    }
    dashSheet.getRange(2, 8, dashRows.length, 1).setHorizontalAlignment("center");
  }
  
  dashSheet.setColumnWidth(1, 45);
  dashSheet.setColumnWidth(2, 130);
  dashSheet.setColumnWidth(3, 190);
  dashSheet.setColumnWidth(4, 220);
  dashSheet.setColumnWidth(5, 95);
  dashSheet.setColumnWidth(6, 95);
  dashSheet.setColumnWidth(7, 190);
  dashSheet.setColumnWidth(8, 150);
}

function getOrCreateScoresSheet(ss) {
  var sheet = ss.getSheetByName('Data_Nilai_Raport');
  if (!sheet) {
    sheet = ss.insertSheet('Data_Nilai_Raport');
    sheet.appendRow(['ID Santri', 'ID Kelas', 'Nama Lengkap', 'NISN', 'ID Mapel', 'Nilai Angka', 'Terakhir Diperbarui']);
    var headerRange = sheet.getRange(1, 1, 1, 7);
    headerRange.setBackground('#174D3A');
    headerRange.setFontColor('#FFFFFF');
    headerRange.setFontWeight('bold');
  }
  return sheet;
}

function jsonResponse(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}