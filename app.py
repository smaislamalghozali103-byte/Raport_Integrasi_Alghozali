import os
import bcrypt
import pandas as pd
import streamlit as st
import database as db
from pathlib import Path
from seed_master import seed as seed_master_data
from dotenv import load_dotenv
from excel_utils import make_template, read_uploaded
from pdf_report import build_report
from services import sync

load_dotenv()
db.init_db()
needs_seed = (not db.q("SELECT id FROM siswa LIMIT 1")) or (not db.q("SELECT id FROM siswa WHERE jalur='FULL_DAY' LIMIT 1") and Path("data/full_day_students.csv").exists())
if needs_seed:
    try:
        seed_master_data()
    except Exception as exc:
        st.session_state["seed_error"]=str(exc)
st.set_page_config(page_title="Raport Integrasi Al-Ghozali",page_icon="🏫",layout="wide")

st.markdown("""<style>
:root{--ag-green:#0b6b45;--ag-green2:#116b48;--ag-dark:#164e3b;--ag-gold:#c9a227;--ag-bg:#f5f8f6;--ag-border:#dfe9e3}
.stApp{background:radial-gradient(circle at 20% 0%,#ffffff 0,#f7faf8 42%,#eef5f1 100%);color:#17352a}
.block-container{max-width:1240px;padding:1.25rem 1.25rem 3rem}
header[data-testid="stHeader"]{background:transparent}
.brand-shell{display:flex;align-items:center;justify-content:space-between;gap:18px;background:rgba(255,255,255,.94);border:1px solid var(--ag-border);border-radius:20px;padding:14px 18px;box-shadow:0 12px 30px rgba(16,60,43,.07);margin-bottom:18px}
.brand-left{display:flex;align-items:center;gap:14px}.brand-logo{width:64px;height:64px;object-fit:contain;border-radius:12px}.brand-fallback{width:64px;height:64px;border-radius:14px;background:linear-gradient(145deg,#f4f7d7,#d8ebc8);border:2px solid var(--ag-green);display:flex;align-items:center;justify-content:center;color:var(--ag-green);font-size:30px}
.brand-title{font-size:25px;font-weight:900;letter-spacing:.01em;color:var(--ag-dark);margin:0}.brand-sub{font-size:14px;color:#64748b;margin-top:2px}
.hero-card{background:rgba(255,255,255,.96);border:1px solid var(--ag-border);border-radius:24px;padding:28px;box-shadow:0 18px 50px rgba(16,60,43,.10)}
.login-wrap{max-width:560px;margin:2vh auto}.login-logo{text-align:center}.login-logo img{width:108px;height:108px;object-fit:contain}.login-title{text-align:center;color:var(--ag-dark);font-size:30px;font-weight:900;margin:6px 0 0}.login-sub{text-align:center;color:#64748b;margin:4px 0 20px}
.gold-rule{width:92px;height:3px;background:var(--ag-gold);margin:12px auto 20px;border-radius:99px}
.stepper{display:flex;align-items:center;gap:8px;margin:4px 0 20px}.step{flex:1;display:flex;align-items:center;gap:8px;color:#64748b;font-size:12px;font-weight:800}.step b{width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#e8efeb;color:#64748b}.step.active{color:var(--ag-dark)}.step.active b{background:var(--ag-green);color:white}.step.done b{background:#d9eee4;color:var(--ag-green)}
.section-card{background:rgba(255,255,255,.96);border:1px solid var(--ag-border);border-radius:20px;padding:20px;box-shadow:0 12px 35px rgba(16,60,43,.07);margin:10px 0 18px}
.info-strip{background:#edf8f1;border:1px solid #cce6d6;border-radius:12px;padding:11px 14px;color:#275b45;font-size:13px}
.teacher-chip{background:#edf8f1;border:1px solid #cce6d6;border-radius:14px;padding:12px 16px;font-weight:800;color:var(--ag-dark)}
.metric-card{background:#fff;border:1px solid var(--ag-border);border-radius:16px;padding:14px}
.stButton>button{border-radius:11px;font-weight:800;border:1px solid #d6e4dc;min-height:42px}
button[kind="primary"]{background:var(--ag-green)!important}
div[data-testid="stTextInput"] input,div[data-testid="stNumberInput"] input{border-radius:10px}
[data-testid="stDataFrame"]{border:1px solid var(--ag-border);border-radius:14px;overflow:hidden}
.sidebar-brand{padding:8px 4px 18px;text-align:center}.sidebar-brand img{width:86px;height:86px;object-fit:contain}
@media(max-width:760px){.brand-shell{padding:12px}.brand-title{font-size:20px}.hero-card{padding:18px}.step{font-size:10px}.step span{display:none}}
</style>""",unsafe_allow_html=True)

def logo_path():
    candidates=[
        Path("assets/logo-alghozali.jpg"),
        Path("assets/logo-alghozali.jpeg"),
        Path("logo alg(3).jpg"),
        Path("logo-alghozoli.jpg"),
    ]
    for p in candidates:
        if p.exists(): return p
    return None

def logo_html(cls="brand-logo"):
    p=logo_path()
    if p:
        import base64
        mime="image/png" if p.suffix.lower()==".png" else "image/jpeg"
        data=base64.b64encode(p.read_bytes()).decode()
        return f'<img class="{cls}" src="data:{mime};base64,{data}" alt="Logo YPI Al-Ghozali">'
    return '<div class="brand-fallback">✦</div>'

def is_full_day(unit): return unit in {"SMA-FULL-DAY","SMP-FULL-DAY"}

def jalur_label(unit): return "FULL DAY" if is_full_day(unit) else "MUKIM"

def header():
    st.markdown(
        f'<div class="brand-shell"><div class="brand-left">{logo_html()}<div><div class="brand-title">RAPORT INTEGRASI</div><div class="brand-sub">Pondok Modern Al-Ghozali</div></div></div></div>',
        unsafe_allow_html=True
    )

def admin_ok(pin):
    h=os.getenv("ADMIN_PIN_HASH","").strip()
    return bool(h) and bcrypt.checkpw(pin.encode(),h.encode())

def logout():
    for k in list(st.session_state.keys()): del st.session_state[k]
    st.rerun()

def raport_ui(unit,kelas,tahun):
    jalur="FULL_DAY" if is_full_day(unit) else "MUKIM"
    students=[dict(x) for x in db.get_students(unit,kelas,jalur,tahun)]
    maps=db.get_mapel_for_class(unit,kelas) if is_full_day(unit) else db.q("""SELECT DISTINCT m.id,m.nama FROM mapel m JOIN penugasan p ON p.mapel_id=m.id WHERE p.unit=? AND p.kelas=? ORDER BY m.nama""",(unit,kelas))
    names=[m["nama"] for m in maps]
    if not students:
        st.warning("Belum ada siswa untuk jalur/kelas ini."); return
    if not names:
        st.warning("Belum ada daftar mata pelajaran untuk kelas ini."); return
    grade_by={}
    for s in students:
        rows=db.q("""SELECT m.nama,n.nilai FROM nilai n JOIN mapel m ON m.id=n.mapel_id WHERE n.siswa_id=? AND n.tahun_ajaran=?""",(s["id"],tahun))
        grade_by[s["id"]]={r["nama"]:r["nilai"] for r in rows}
    wali=db.q("""SELECT g.nama FROM wali_kelas w JOIN guru g ON g.id=w.guru_id WHERE w.unit=? AND w.kelas=? AND w.tahun_ajaran=? ORDER BY w.id LIMIT 1""",(unit,kelas,tahun))
    wali_name=wali[0]["nama"] if wali else ""
    st.info(f"Mode raport: {jalur_label(unit)} • Kelas {kelas}")
    pdf=build_report(students,grade_by,names,unit=unit,kelas=kelas,tahun=tahun,jalur=jalur,wali_kelas=wali_name)
    st.download_button("📄 EXPORT RAPORT PDF",pdf,file_name=f"Raport_{jalur}_{kelas}_{tahun.replace('/','-')}.pdf",mime="application/pdf",use_container_width=True)
    st.caption("Setiap siswa dibuat satu halaman. Jumlah, rata-rata, dan peringkat dihitung otomatis.")

def grade_editor(unit,kelas,mapel,guru,tahun):
    students=db.get_students(unit,kelas,"FULL_DAY" if is_full_day(unit) else "MUKIM",tahun)
    if not students: st.warning("Belum ada siswa pada kelas ini."); return
    grades=db.get_grade_map(unit,kelas,mapel["id"],tahun)
    st.subheader(f"{mapel['nama']} — {kelas}")
    st.caption(f"Guru: {guru['nama']} • {len(students)} siswa")
    a,b=st.columns(2)
    with a:
        data=make_template(students,unit,kelas,mapel["nama"],tahun)
        st.download_button("📥 UNDUH TEMPLATE EXCEL",data,
            file_name=f"Template_Nilai_{kelas}_{mapel['nama']}.xlsx",
            mime="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            use_container_width=True)
    with b:
        upload=st.file_uploader("📤 UPLOAD NILAI EXCEL",type=["xlsx"],key=f"upload_{unit}_{kelas}_{mapel['id']}")
    with st.form(f"nilai_{unit}_{kelas}_{mapel['id']}"):
        entries=[]
        for s in students:
            c1,c2,c3=st.columns([.06,.22,.72])
            c1.write(s["id"]); c2.write(s["nisn"] or s["nis"] or "-")
            old=grades.get(s["id"])
            value=c3.number_input(s["nama"],min_value=0.0,max_value=100.0,
                                  value=float(old) if old is not None else 0.0,step=1.0,
                                  key=f"score_{s['id']}_{mapel['id']}_{tahun}")
            entries.append((s,value))
        if st.form_submit_button("💾 SIMPAN & SINKRONKAN",type="primary",use_container_width=True):
            items=[]
            for s,v in entries:
                items.append({
                    "studentId": str(s["id"]),
                    "classId": str(kelas),
                    "className": str(kelas),
                    "studentName": s["nama"],
                    "nisn": s["nisn"] or s["nis"] or "",
                    "subjectId": str(mapel["id"]),
                    "subjectName": mapel["nama"],
                    "score": float(v)
                })
            try:
                result=sync.save_subject_scores(items,kelas,kelas,mapel["id"],mapel["nama"],guru["nama"])
                for s,v in entries:
                    db.save_grade(s["id"],mapel["id"],guru["id"],unit,kelas,tahun,float(v))
                st.success(f"✓ {result.get('updatedCount', len(items))} nilai tersimpan langsung ke Google Spreadsheet.")
                st.rerun()
            except Exception as exc:
                st.error(f"Nilai belum disinkronkan ke Spreadsheet: {exc}")
    if upload:
        if st.button("🔎 PROSES & IMPORT EXCEL",key=f"import_{unit}_{kelas}_{mapel['id']}"):
            try:
                rows=read_uploaded(upload); matched=0; skipped=0; items=[]
                for r in rows:
                    sid=None
                    if r["id"] is not None and str(r["id"]).replace(".0","").isdigit():
                        sid=int(float(r["id"]))
                    if not sid and r["nisn"]:
                        x=db.one("SELECT id FROM siswa WHERE nisn=? AND unit=? AND kelas=?",(r["nisn"],unit,kelas))
                        sid=x["id"] if x else None
                    if not sid and r["nama"]:
                        x=db.one("SELECT id FROM siswa WHERE lower(nama)=lower(?) AND unit=? AND kelas=?",(r["nama"],unit,kelas))
                        sid=x["id"] if x else None
                    if sid and r["nilai"] is not None:
                        s=db.one("SELECT * FROM siswa WHERE id=?",(sid,))
                        items.append({"studentId":str(sid),"classId":str(kelas),"className":str(kelas),"studentName":s["nama"],"nisn":s["nisn"] or s["nis"] or "","subjectId":str(mapel["id"]),"subjectName":mapel["nama"],"score":float(r["nilai"])})
                        matched+=1
                    elif sid:
                        matched+=1
                    else:
                        skipped+=1
                if not items:
                    st.warning("Tidak ada nilai yang cocok untuk dikirim.")
                else:
                    sync.save_subject_scores(items,kelas,kelas,mapel["id"],mapel["nama"],guru["nama"])
                    for it in items:
                        db.save_grade(int(it["studentId"]),mapel["id"],guru["id"],unit,kelas,tahun,it["score"])
                    st.success(f"Import realtime selesai: {matched} cocok, {skipped} tidak cocok.")
                    st.rerun()
            except Exception as e: st.error(f"Gagal import: {e}")

def monitoring_cloud_ui(tahun, unit=None, kelas=None, title="📡 Monitoring Realtime"):
    try:
        rows=sync.get_monitoring(tahun,unit,kelas)
    except Exception as exc:
        st.warning(f"Monitoring cloud belum dapat diperbarui: {exc}")
        return
    st.markdown(f'<div class="section-card"><div class="kicker">LIVE MONITORING</div><h3 style="margin:.2rem 0">{title}</h3><p style="color:#64748b;margin:0">Status pengisian dari Google Spreadsheet • refresh halaman untuk mengambil perubahan terbaru.</p></div>',unsafe_allow_html=True)
    if not rows:
        st.info("Belum ada data monitoring di Spreadsheet.")
        return
    df=pd.DataFrame(rows)
    if "total" in df and "terisi" in df:
        df["progres"]=((df["terisi"]/df["total"].replace(0,1))*100).round(0).astype(int)
    show=df.rename(columns={"kelas":"Kelas","mapel":"Mata Pelajaran","guru":"Guru Pengampu","total":"Siswa","terisi":"Terisi","progres":"Progres %","status":"Status","updatedAt":"Terakhir"})
    cols=[x for x in ["Kelas","Mata Pelajaran","Guru Pengampu","Siswa","Terisi","Progres %","Status","Terakhir"] if x in show.columns]
    st.dataframe(show[cols],use_container_width=True,hide_index=True)
    if "progres" in df:
        avg=float(df["progres"].mean()) if len(df) else 0
        st.metric("Progres input terpantau",f"{avg:.0f}%")

def wali_scores_ui(unit,kelas,tahun):
    st.markdown('<div class="section-card"><div class="kicker">WALI KELAS</div><h3 style="margin:.2rem 0">Nilai Realtime Kelas</h3><p style="color:#64748b;margin:0">Data dibaca langsung dari Google Spreadsheet.</p></div>',unsafe_allow_html=True)
    try:
        rows=sync.get_class_scores(class_id=kelas,class_name=kelas)
    except Exception as exc:
        st.error(f"Gagal mengambil nilai realtime: {exc}")
        return
    students=[dict(x) for x in db.get_students(unit,kelas,"FULL_DAY" if is_full_day(unit) else "MUKIM",tahun)]
    student_map={str(s["id"]):s["nama"] for s in students}
    subjects={str(m["id"]):m["nama"] for m in db.get_mapel_for_class(unit,kelas)}
    records=[]
    for r in rows:
        records.append({"Siswa":student_map.get(str(r["studentId"]),r["studentName"]),"Mata Pelajaran":subjects.get(str(r["subjectId"]),r["subjectId"]),"Nilai":r["score"],"Terakhir":r["updatedAt"]})
    if records:
        pivot=pd.DataFrame(records).pivot_table(index="Siswa",columns="Mata Pelajaran",values="Nilai",aggfunc="last").reset_index()
        st.dataframe(pivot,use_container_width=True,hide_index=True)
    else:
        st.info("Belum ada nilai tersimpan untuk kelas ini.")

def guru_page():
    header(); guru=st.session_state["guru"]; unit=st.session_state["unit"]; mapel=st.session_state["mapel"]
    st.markdown('<div class="stepper"><div class="step done"><b>✓</b><span>Login Guru</span></div><div class="step done"><b>✓</b><span>Pilih Mapel</span></div><div class="step active"><b>3</b><span>Input Nilai</span></div></div>',unsafe_allow_html=True)
    top1,top2=st.columns([5,1])
    top1.markdown(f'<div class="teacher-chip">👤 {guru["nama"]} &nbsp; • &nbsp; {jalur_label(unit)} &nbsp; • &nbsp; {mapel["nama"]}</div>',unsafe_allow_html=True)
    if top2.button("Keluar"): logout()
    tahun=st.text_input("Tahun Ajaran",value="2026/2027")
    classes=db.get_classes_for_guru_mapel(guru["id"],mapel["id"],unit)
    st.markdown('<div class="section-card"><h3 style="color:#164e3b">✎ INPUT NILAI RAPORT</h3><div class="info-strip">💡 Pilih kelas. Daftar siswa dan kolom nilai akan muncul otomatis.</div></div>',unsafe_allow_html=True)
    cols=st.columns(min(4,max(1,len(classes))))
    for i,r in enumerate(classes):
        with cols[i%len(cols)]:
            if st.button(f"📚 {r['kelas']}",key=f"class_{r['kelas']}"): st.session_state["kelas"]=r["kelas"]
    if st.session_state.get("kelas"):
        grade_editor(unit,st.session_state["kelas"],mapel,guru,tahun)
    wali=db.get_wali_classes(guru["id"],unit,tahun)
    if wali:
        st.divider(); st.subheader("🏫 Portal Wali Kelas")
        for w in wali:
            c1,c2,c3=st.columns([4,1,1]); c1.write(f"**{w['kelas']}**")
            if c2.button("📈 Monitoring",key=f"wm_{w['kelas']}"): st.session_state["monitor_kelas"]=w["kelas"]
            if c3.button("📄 Raport",key=f"wr_{w['kelas']}"): st.session_state["raport_kelas"]=w["kelas"]
    st.divider(); monitoring_cloud_ui(tahun,title="📊 Monitoring Input Nilai Seluruh Kelas")
    if st.session_state.get("monitor_kelas"):
        k=st.session_state["monitor_kelas"]; st.divider()
        monitoring_cloud_ui(tahun,unit,k,title=f"📈 Monitoring {k}"); wali_scores_ui(unit,k,tahun)
    if st.session_state.get("raport_kelas"):
        st.divider(); raport_ui(unit,st.session_state["raport_kelas"],tahun)


    st.markdown('<div class="login-wrap"><div class="hero-card">'+logo_html("login-logo")+'<div class="login-title">RAPORT INTEGRASI</div><div class="login-sub">Pondok Modern Al-Ghozali</div><div class="gold-rule"></div><h3 style="text-align:center;color:#164e3b">LOGIN GURU</h3><p style="text-align:center;color:#64748b">Silakan masuk dengan nama guru dan PIN</p></div></div>',unsafe_allow_html=True)
    units=db.get_units()
    if not units:
        st.warning("Master data belum dimuat. Jalankan seed_master.py setelah source_ts tersedia.")
        return
    with st.container():
        st.markdown('<div class="hero-card">',unsafe_allow_html=True)
        unit=st.selectbox("Jalur / Unit",units,format_func=db.display_unit)
        gs=db.get_gurus(unit); gm={g["nama"]:g for g in gs}
        gn=st.selectbox("Nama Guru",list(gm) or ["Tidak ada guru"])
        guru=gm.get(gn)
        pin_hash=db.get_guru_pin_hash(guru["id"]) if guru else None
        if guru and not pin_hash:
            st.markdown('<div class="info-strip">🔑 Pendaftaran awal: buat PIN minimal 6 digit. PIN disimpan dalam bentuk hash.</div>',unsafe_allow_html=True)
            p1=st.text_input("Buat PIN Guru",type="password",max_chars=32)
            p2=st.text_input("Ulangi PIN Guru",type="password",max_chars=32)
            if st.button("🔐 DAFTARKAN PIN & MASUK",type="primary",use_container_width=True):
                if not p1.isdigit() or len(p1)<6: st.error("PIN harus berupa angka dan minimal 6 digit.")
                elif p1!=p2: st.error("Konfirmasi PIN tidak sama.")
                else:
                    db.set_guru_pin(guru["id"],bcrypt.hashpw(p1.encode(),bcrypt.gensalt()).decode())
                    st.session_state.update(role="guru",guru=dict(guru),unit=unit)
                    st.rerun()
        elif guru:
            pin=st.text_input("PIN Guru",type="password",max_chars=32)
            if st.button("↪ MASUK",type="primary",use_container_width=True):
                if not (pin_hash and bcrypt.checkpw(pin.encode(),pin_hash.encode())):
                    st.error("PIN Guru salah.")
                else:
                    st.session_state.update(role="guru",guru=dict(guru),unit=unit)
                    st.rerun()
        st.markdown('</div>',unsafe_allow_html=True)
    st.markdown('<div style="max-width:560px;margin:10px auto 0">',unsafe_allow_html=True)
    with st.expander("🔐 LOGIN ADMIN"):
        st.caption("PIN Admin terpisah dari PIN Guru.")
        pin=st.text_input("PIN Admin",type="password",key="admin_login_pin")
        if st.button("MASUK ADMIN",use_container_width=True):
            if admin_ok(pin):
                st.session_state["role"]="admin"; st.rerun()
            else: st.error("PIN Admin salah atau belum dikonfigurasi.")
    st.markdown('</div>',unsafe_allow_html=True)

def subject_page():
    header()
    guru=st.session_state["guru"]; unit=st.session_state["unit"]
    st.markdown('<div class="stepper"><div class="step done"><b>✓</b><span>Login Guru</span></div><div class="step active"><b>2</b><span>Pilih Mata Pelajaran</span></div><div class="step"><b>3</b><span>Input Nilai</span></div></div>',unsafe_allow_html=True)
    st.markdown('<div class="hero-card">',unsafe_allow_html=True)
    st.markdown('<h2 style="color:#164e3b">📚 PILIH MATA PELAJARAN</h2>',unsafe_allow_html=True)
    st.markdown(f'<div class="teacher-chip">👤 {guru["nama"]} &nbsp; • &nbsp; {db.display_unit(unit)}</div>',unsafe_allow_html=True)
    maps=db.get_mapel_for_guru(guru["id"],unit)
    mm={m["nama"]:m for m in maps}
    if not mm:
        st.warning("Belum ada mata pelajaran yang ditugaskan kepada guru ini.")
    else:
        mn=st.selectbox("Mata Pelajaran",list(mm),key="subject_choice")
        st.markdown('<div class="info-strip">💡 Pilih mata pelajaran yang akan diinput nilainya. Kelas yang tersedia akan mengikuti penugasan guru.</div>',unsafe_allow_html=True)
        a,b=st.columns(2)
        with a:
            if st.button("← Kembali",use_container_width=True): logout()
        with b:
            if st.button("LANJUTKAN →",type="primary",use_container_width=True):
                st.session_state["mapel"]=dict(mm[mn]); st.session_state["role"]="guru_input"; st.rerun()
    st.markdown('</div>',unsafe_allow_html=True)

def admin_page():
    header()
    a,b=st.columns([5,1]); a.success("🔐 ADMINISTRATOR — Akses penuh")
    if b.button("Keluar"): logout()
    tahun=st.text_input("Tahun Ajaran",value="2026/2027",key="admin_year")
    tabs=st.tabs(["📊 Dashboard","👨‍🏫 Guru","👨‍🎓 Siswa","📚 Mapel","📋 Penugasan","🏫 Wali Kelas","📈 Monitoring","📄 Raport","📚 Rekap Mapel","⚙️ Pengaturan"])
    with tabs[0]:
        a,b,c,d=st.columns(4)
        a.metric("Guru",len(db.get_gurus())); b.metric("Siswa",len(db.q("SELECT id FROM siswa")))
        c.metric("Mapel",len(db.q("SELECT id FROM mapel"))); d.metric("Penugasan",len(db.q("SELECT id FROM penugasan")))
        try:
            st.markdown('<div class="section-card"><div class="kicker">CLOUD DATABASE</div><div class="big-number">Google Spreadsheet</div><p>Nilai guru disimpan langsung ke Spreadsheet sebagai sumber data bersama.</p></div>',unsafe_allow_html=True)
            cloud=sync.test_connection()
            st.success(f"🟢 Spreadsheet terhubung • {cloud.get('spreadsheetName','')}")
        except Exception as exc:
            st.warning(f"🟠 Koneksi Spreadsheet perlu diperiksa: {exc}")
    queries={
        "Guru":"SELECT * FROM guru ORDER BY nama",
        "Siswa":"SELECT * FROM siswa ORDER BY unit,kelas,nama LIMIT 2000",
        "Mapel":"SELECT * FROM mapel ORDER BY unit,nama",
        "Penugasan":"""SELECT p.unit,p.kelas,g.nama guru,m.nama mapel,p.jumlah_jam
                       FROM penugasan p JOIN guru g ON g.id=p.guru_id JOIN mapel m ON m.id=p.mapel_id
                       ORDER BY p.unit,p.kelas,g.nama,m.nama""",
        "Wali Kelas":"""SELECT w.unit,w.kelas,g.nama guru,w.tahun_ajaran
                        FROM wali_kelas w JOIN guru g ON g.id=w.guru_id ORDER BY w.unit,w.kelas"""
    }
    for i,name in enumerate(["Guru","Siswa","Mapel","Penugasan","Wali Kelas"],1):
        with tabs[i]: st.dataframe(pd.DataFrame([dict(x) for x in db.q(queries[name])]),use_container_width=True,hide_index=True)
    with tabs[6]:
        units=db.get_units()
        if units:
            unit=st.selectbox("Unit",units,key="admin_mon_unit")
            monitoring_cloud_ui(tahun,unit,title=f"📈 Monitoring Realtime {db.display_unit(unit)}")
    with tabs[7]:
        units=db.get_units()
        if units:
            unit=st.selectbox("Unit",units,key="admin_rap_unit")
            classes=sorted({x["kelas"] for x in db.q("SELECT DISTINCT kelas FROM siswa WHERE unit=?",(unit,))})
            if classes: raport_ui(unit,st.selectbox("Kelas",classes,key="admin_rap_kelas"),tahun)
    with tabs[8]:
        st.markdown('<div class="section-card"><div class="kicker">REKAPITULASI</div><h3 style="margin:.2rem 0">Kelompok Mata Pelajaran</h3><p style="color:#64748b;margin:0">Rekap dinamis dari master penugasan aplikasi untuk Tahun Ajaran 2026/2027.</p></div>',unsafe_allow_html=True)
        recap=db.q("""SELECT m.nama AS mata_pelajaran,p.unit,
                     GROUP_CONCAT(DISTINCT g.nama) AS guru_pengampu,
                     GROUP_CONCAT(DISTINCT p.kelas) AS daftar_kelas,
                     COUNT(DISTINCT p.kelas) AS jumlah_kelas_diajar,
                     COALESCE(SUM(p.jumlah_jam),0) AS total_jam_mengajar
                     FROM penugasan p
                     JOIN mapel m ON m.id=p.mapel_id
                     JOIN guru g ON g.id=p.guru_id
                     GROUP BY p.unit,m.id
                     ORDER BY p.unit,m.nama""")
        if recap:
            rdf=pd.DataFrame([dict(r) for r in recap])
            rdf.columns=["Mata Pelajaran","Unit","Guru Pengampu","Daftar Kelas","Jumlah Kelas Diajar","Total Jam Mengajar"]
            st.dataframe(rdf,use_container_width=True,hide_index=True)
        else:
            st.info("Belum ada data penugasan untuk direkap.")
    with tabs[9]:
        st.markdown('<div class="section-card"><div class="kicker">ADMIN CONTROL CENTER</div><h3 style="margin:.2rem 0">Pengaturan & Sinkronisasi</h3><p style="color:#64748b">Kelola koneksi Apps Script dan pastikan setiap nilai tersimpan ke Spreadsheet.</p></div>',unsafe_allow_html=True)
        endpoint=st.text_input("Google Apps Script Web App URL",value=sync.get_endpoint(),key="admin_endpoint")
        x,y=st.columns(2)
        with x:
            if st.button("💾 Simpan Endpoint",use_container_width=True):
                try:
                    sync.set_endpoint(endpoint); st.success("Endpoint tersimpan.")
                except Exception as exc: st.error(str(exc))
        with y:
            if st.button("🔌 Tes Koneksi Sekarang",use_container_width=True):
                try:
                    result=sync.test_connection(); st.success(f"Terhubung: {result.get('spreadsheetName','Spreadsheet')}")
                except Exception as exc: st.error(str(exc))
        st.divider()
        st.subheader("Sinkronisasi Monitoring")
        st.caption("Nilai baru sudah dikirim realtime saat guru menekan tombol SIMPAN & SINKRONKAN. Tombol ini untuk verifikasi koneksi.")
        if st.button("🔄 Refresh Monitoring Cloud",type="primary"):
            st.rerun()

def main():
    role=st.session_state.get("role")
    if role=="guru_input": guru_page()
    elif role=="guru": subject_page()
    elif role=="admin": admin_page()
    else: login_page()

main()
