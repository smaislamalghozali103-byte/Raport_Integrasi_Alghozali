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

load_dotenv()
db.init_db()
if not db.q("SELECT id FROM siswa LIMIT 1") and Path("data/source_ts").exists():
    try:
        seed_master_data()
    except Exception as exc:
        st.session_state["seed_error"]=str(exc)
st.set_page_config(page_title="Raport Integrasi Al-Ghozali",page_icon="🏫",layout="wide")

st.markdown("""
<style>
.stApp{background:linear-gradient(180deg,#f8faf9,#eef7f1)}
.block-container{max-width:1180px;padding-top:1rem}
.brand{display:flex;align-items:center;gap:14px;padding:10px 0 20px}
.brand-icon{width:54px;height:54px;border-radius:16px;background:#166534;color:white;display:flex;align-items:center;justify-content:center;font-size:25px}
.brand h1{margin:0;color:#14532d;font-size:26px}.brand p{margin:2px 0;color:#64748b}
div[data-testid="stMetric"]{background:#fff;border:1px solid #dbe7df;border-radius:16px;padding:12px}
.stButton>button{border-radius:10px;font-weight:700}
</style>
""",unsafe_allow_html=True)

def header():
    st.markdown('<div class="brand"><div class="brand-icon">🏫</div><div><h1>RAPORT INTEGRASI</h1><p>Pondok Modern Al-Ghozali</p></div></div>',unsafe_allow_html=True)

def admin_ok(pin):
    h=os.getenv("ADMIN_PIN_HASH","").strip()
    return bool(h) and bcrypt.checkpw(pin.encode(),h.encode())

def logout():
    for k in list(st.session_state.keys()): del st.session_state[k]
    st.rerun()

def raport_ui(unit,kelas,tahun):
    students=[dict(x) for x in db.get_students(unit,kelas)]
    maps=db.q("""SELECT DISTINCT m.id,m.nama FROM mapel m JOIN nilai n ON n.mapel_id=m.id
                 WHERE n.unit=? AND n.kelas=? AND n.tahun_ajaran=? ORDER BY m.nama""",(unit,kelas,tahun))
    names=[m["nama"] for m in maps]
    grade_by={}
    for s in students:
        rows=db.q("""SELECT m.nama,n.nilai FROM nilai n JOIN mapel m ON m.id=n.mapel_id
                     WHERE n.siswa_id=? AND n.tahun_ajaran=?""",(s["id"],tahun))
        grade_by[s["id"]]={r["nama"]:r["nilai"] for r in rows}
    pdf=build_report(students,grade_by,names,unit=unit,kelas=kelas,tahun=tahun)
    st.download_button("📄 EXPORT RAPORT PDF",pdf,
        file_name=f"Raport_{unit}_{kelas}_{tahun.replace('/','-')}.pdf",
        mime="application/pdf",use_container_width=True)
    st.caption("Untuk cetak fisik: buka PDF hasil export lalu pilih Print/Cetak.")

def grade_editor(unit,kelas,mapel,guru,tahun):
    students=db.get_students(unit,kelas)
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
        if st.form_submit_button("💾 SIMPAN NILAI",type="primary",use_container_width=True):
            for s,v in entries: db.save_grade(s["id"],mapel["id"],guru["id"],unit,kelas,tahun,float(v))
            st.success("Nilai tersimpan."); st.rerun()
    if upload:
        if st.button("🔎 PROSES & IMPORT EXCEL",key=f"import_{unit}_{kelas}_{mapel['id']}"):
            try:
                rows=read_uploaded(upload); matched=0; skipped=0
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
                    if sid:
                        if r["nilai"] is not None: db.save_grade(sid,mapel["id"],guru["id"],unit,kelas,tahun,r["nilai"])
                        matched+=1
                    else: skipped+=1
                st.success(f"Import selesai: {matched} cocok, {skipped} tidak cocok."); st.rerun()
            except Exception as e: st.error(f"Gagal import: {e}")

def guru_page():
    header(); guru=st.session_state["guru"]; unit=st.session_state["unit"]; mapel=st.session_state["mapel"]
    top1,top2=st.columns([5,1])
    top1.success(f"👤 {guru['nama']} • {unit} • {mapel['nama']}")
    if top2.button("Keluar"): logout()
    tahun=st.text_input("Tahun Ajaran",value="2026/2027")
    classes=db.get_classes_for_guru_mapel(guru["id"],mapel["id"],unit)
    st.subheader("Kelas yang Anda Ajar")
    cols=st.columns(min(3,max(1,len(classes))))
    for i,r in enumerate(classes):
        with cols[i%len(cols)]:
            if st.button(f"📚 {r['kelas']}",key=f"class_{r['kelas']}"):
                st.session_state["kelas"]=r["kelas"]
    if st.session_state.get("kelas"):
        grade_editor(unit,st.session_state["kelas"],mapel,guru,tahun)
    wali=db.get_wali_classes(guru["id"],unit,tahun)
    if wali:
        st.divider(); st.subheader("🏫 Portal Wali Kelas")
        for w in wali:
            c1,c2,c3=st.columns([4,1,1]); c1.write(f"**{w['kelas']}**")
            if c2.button("📈 Monitoring",key=f"wm_{w['kelas']}"): st.session_state["monitor_kelas"]=w["kelas"]
            if c3.button("📄 Raport",key=f"wr_{w['kelas']}"): st.session_state["raport_kelas"]=w["kelas"]
    if st.session_state.get("monitor_kelas"):
        k=st.session_state["monitor_kelas"]; st.divider(); st.subheader(f"📈 Monitoring — {k}")
        st.dataframe(pd.DataFrame([dict(x) for x in db.monitoring(unit,k,tahun)]),use_container_width=True,hide_index=True)
    if st.session_state.get("raport_kelas"):
        st.divider(); raport_ui(unit,st.session_state["raport_kelas"],tahun)

def login_page():
    header()
    left,right=st.columns(2)
    with left:
        st.subheader("👨‍🏫 LOGIN GURU")
        units=db.get_units()
        if not units:
            st.warning("Master data belum dimuat. Jalankan seed_master.py setelah source_ts tersedia.")
        else:
            unit=st.selectbox("1. Jenjang / Unit",units)
            gs=db.get_gurus(unit)
            gm={g["nama"]:g for g in gs}
            gn=st.selectbox("2. Nama Guru",list(gm) or ["Tidak ada guru"])
            guru=gm.get(gn)
            if guru:
                maps=db.get_mapel_for_guru(guru["id"],unit)
                mm={m["nama"]:m for m in maps}
            else:
                mm={}
            mn=st.selectbox("3. Mata Pelajaran",list(mm) or ["Tidak ada mapel"])
            pin_hash=db.get_guru_pin_hash(guru["id"]) if guru else None
            if guru and not pin_hash:
                st.info("🔑 Pendaftaran awal: buat PIN minimal 6 digit. PIN disimpan dalam bentuk hash.")
                p1=st.text_input("Buat PIN Guru",type="password",max_chars=32)
                p2=st.text_input("Ulangi PIN Guru",type="password",max_chars=32)
                if st.button("🔐 DAFTARKAN PIN & MASUK",type="primary",use_container_width=True):
                    if not p1.isdigit() or len(p1)<6:
                        st.error("PIN harus berupa angka dan minimal 6 digit.")
                    elif p1!=p2:
                        st.error("Konfirmasi PIN tidak sama.")
                    elif mn not in mm:
                        st.warning("Pilih mata pelajaran terlebih dahulu.")
                    else:
                        db.set_guru_pin(guru["id"],bcrypt.hashpw(p1.encode(),bcrypt.gensalt()).decode())
                        st.session_state.update(role="guru",guru=dict(guru),unit=unit,mapel=dict(mm[mn]))
                        st.rerun()
            elif guru:
                pin=st.text_input("PIN Guru",type="password",max_chars=32)
                if st.button("🚀 MASUK KE RAPORT",type="primary",use_container_width=True):
                    valid=bool(pin_hash) and bcrypt.checkpw(pin.encode(),pin_hash.encode())
                    if not valid:
                        st.error("PIN Guru salah.")
                    elif mn not in mm:
                        st.warning("Pilih mata pelajaran terlebih dahulu.")
                    else:
                        st.session_state.update(role="guru",guru=dict(guru),unit=unit,mapel=dict(mm[mn]))
                        st.rerun()
    with right:
        st.subheader("🔐 LOGIN ADMIN")
        st.caption("PIN Admin terpisah dari PIN Guru.")
        pin=st.text_input("PIN Admin",type="password",key="admin_login_pin")
        if st.button("MASUK ADMIN",use_container_width=True):
            if admin_ok(pin):
                st.session_state["role"]="admin"
                st.rerun()
            else:
                st.error("PIN Admin salah atau belum dikonfigurasi.")
        st.info("Admin mengelola master, monitoring, rekap, raport, dan sinkronisasi.")

def admin_page():
    header()
    a,b=st.columns([5,1]); a.success("🔐 ADMINISTRATOR — Akses penuh")
    if b.button("Keluar"): logout()
    tahun=st.text_input("Tahun Ajaran",value="2026/2027",key="admin_year")
    tabs=st.tabs(["📊 Dashboard","👨‍🏫 Guru","👨‍🎓 Siswa","📚 Mapel","📋 Penugasan","🏫 Wali Kelas","📈 Monitoring","📄 Raport"])
    with tabs[0]:
        a,b,c,d=st.columns(4)
        a.metric("Guru",len(db.get_gurus())); b.metric("Siswa",len(db.q("SELECT id FROM siswa")))
        c.metric("Mapel",len(db.q("SELECT id FROM mapel"))); d.metric("Penugasan",len(db.q("SELECT id FROM penugasan")))
        st.info("Google Sheets digunakan hanya sebagai rekap Admin; input guru berjalan di database aplikasi.")
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
            classes=sorted({x["kelas"] for x in db.q("SELECT DISTINCT kelas FROM siswa WHERE unit=?",(unit,))})
            if classes:
                kelas=st.selectbox("Kelas",classes,key="admin_mon_kelas")
                st.dataframe(pd.DataFrame([dict(x) for x in db.monitoring(unit,kelas,tahun)]),use_container_width=True,hide_index=True)
    with tabs[7]:
        units=db.get_units()
        if units:
            unit=st.selectbox("Unit",units,key="admin_rap_unit")
            classes=sorted({x["kelas"] for x in db.q("SELECT DISTINCT kelas FROM siswa WHERE unit=?",(unit,))})
            if classes: raport_ui(unit,st.selectbox("Kelas",classes,key="admin_rap_kelas"),tahun)

def main():
    role=st.session_state.get("role")
    if role=="guru": guru_page()
    elif role=="admin": admin_page()
    else: login_page()

main()
