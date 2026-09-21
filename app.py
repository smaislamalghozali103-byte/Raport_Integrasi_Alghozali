import os
import json
from pathlib import Path
from datetime import datetime
import requests
import pandas as pd
import streamlit as st

st.set_page_config(
    page_title="Presensi Pengawas Al-Ghozali",
    page_icon="📝",
    layout="wide",
    initial_sidebar_state="collapsed",
)

API_URL_DEFAULT = "https://script.google.com/macros/s/AKfycbyjL2HGEgoZ0gr7-gIUmb02X7WSmTal8W89h3v3y5U_WboAfiaXB_GKZiVCin_rbh8W/exec"
API_KEY_DEFAULT = "AL-GHOZALI-PRESENSI-2026"

def cfg(key, default=""):
    try:
        value = st.secrets.get(key, "")
    except Exception:
        value = ""
    return str(value or os.getenv(key, default) or default).strip()

API_URL = cfg("API_URL", API_URL_DEFAULT)
API_KEY = cfg("API_KEY", API_KEY_DEFAULT)

def api(action, **payload):
    body = {"action": action, "api_key": API_KEY, **payload}
    try:
        r = requests.post(API_URL, json=body, timeout=30)
        r.raise_for_status()
        data = r.json()
    except Exception as e:
        return {"ok": False, "message": f"Koneksi Apps Script gagal: {e}"}
    if not isinstance(data, dict):
        return {"ok": False, "message": "Respons server tidak valid."}
    return data

@st.cache_data(ttl=300, show_spinner=False)
def get_pengawas(unit):
    return api("get_pengawas", unit=unit)

@st.cache_data(ttl=120, show_spinner=False)
def get_jadwal(unit, nama):
    return api("get_jadwal_pengawas", unit=unit, nama=nama)

def clear_login():
    for k in ["logged_in", "nama", "unit"]:
        st.session_state.pop(k, None)

def login_screen():
    st.markdown("""
    <style>
    .stApp { background: linear-gradient(135deg,#f8fafc 0%,#eef6ff 55%,#f8fafc 100%); }
    .block-container { max-width: 1050px; padding-top: 4rem; }
    .login-wrap { max-width: 560px; margin: auto; }
    .brand { text-align:center; margin-bottom:24px; }
    .brand h1 { margin:0; color:#0f172a; font-size:30px; }
    .brand p { color:#64748b; margin-top:8px; }
    .card { background:white; border:1px solid #e2e8f0; border-radius:22px;
            padding:28px; box-shadow:0 18px 50px rgba(15,23,42,.08); }
    </style>
    <div class="login-wrap">
      <div class="brand">
        <div style="font-size:46px">🏫</div>
        <h1>Presensi Pengawas Ujian</h1>
        <p>Pondok Modern Al-Ghozali · Tahun Pelajaran 2026–2027</p>
      </div>
      <div class="card">
    """, unsafe_allow_html=True)

    unit = st.selectbox("Jenjang", ["SMA", "SMP"])
    result = get_pengawas(unit)
    if not result.get("ok"):
        st.error(result.get("message", "Data pengawas gagal dimuat."))
        st.stop()

    names = result.get("data", [])
    if not names:
        st.warning("Master pengawas belum ditemukan pada spreadsheet jenjang ini.")
        st.stop()

    nama = st.selectbox("Nama Pengawas", names)
    pin = st.text_input("PIN", type="password", max_chars=20,
                        help="PIN minimal 6 digit.")

    c1, c2 = st.columns(2)
    with c1:
        if st.button("🔐 Masuk", type="primary", use_container_width=True):
            if not pin.isdigit() or len(pin) < 6:
                st.error("PIN harus berupa angka minimal 6 digit.")
            else:
                res = api("login", unit=unit, nama=nama, pin=pin)
                if res.get("ok"):
                    st.session_state.logged_in = True
                    st.session_state.nama = nama
                    st.session_state.unit = unit
                    st.rerun()
                else:
                    st.error(res.get("message", "Login gagal."))
    with c2:
        if st.button("♻️ Muat Ulang Master", use_container_width=True):
            get_pengawas.clear()
            st.rerun()

    st.markdown("</div></div>", unsafe_allow_html=True)

def main_app():
    nama = st.session_state.nama
    unit = st.session_state.unit

    st.markdown("""
    <style>
    .stApp { background:#f8fafc; }
    .block-container { max-width:1250px; padding-top:1.5rem; }
    .topbar { background:white; border:1px solid #e2e8f0; border-radius:18px;
              padding:18px 22px; margin-bottom:18px; }
    .muted { color:#64748b; }
    </style>
    """, unsafe_allow_html=True)

    col1, col2 = st.columns([5,1])
    with col1:
        st.title("📝 Presensi Pengawas")
        st.caption(f"{unit} · {nama}")
    with col2:
        if st.button("Keluar", use_container_width=True):
            clear_login()
            st.rerun()

    jadwal = get_jadwal(unit, nama)
    if not jadwal.get("ok"):
        st.error(jadwal.get("message", "Jadwal gagal dimuat."))
        st.stop()

    rows = jadwal.get("data", [])
    if not rows:
        st.info("Tidak ada jadwal pengawasan yang ditemukan untuk nama ini.")
        return

    df = pd.DataFrame(rows)
    expected = ["TANGGAL","HARI","JAM_KE","RUANG","NAMA_PENGAWAS"]
    for c in expected:
        if c not in df.columns:
            df[c] = ""

    tabs = st.tabs(["📌 Presensi", "📅 Jadwal Saya", "📊 Rekap"])

    with tabs[0]:
        st.subheader("Input Kehadiran")
        date_values = sorted(df["TANGGAL"].astype(str).unique().tolist())
        tanggal = st.selectbox("Tanggal Ujian", date_values)
        day_df = df[df["TANGGAL"].astype(str) == str(tanggal)].copy()

        if day_df.empty:
            st.info("Tidak ada jadwal pada tanggal tersebut.")
        else:
            options = [
                f"Ruang {r['RUANG']} · Jam {r['JAM_KE']} · {r['HARI']}"
                for _, r in day_df.iterrows()
            ]
            selected = st.selectbox("Jadwal", options)
            idx = options.index(selected)
            row = day_df.iloc[idx].to_dict()

            with st.container(border=True):
                st.write(f"**Ruang:** {row['RUANG']}   |   **Jam:** {row['JAM_KE']}   |   **Hari:** {row['HARI']}")
                st.write(f"**Pengawas terjadwal:** {row['NAMA_PENGAWAS']}")

                status = st.radio(
                    "Status Kehadiran",
                    ["HADIR", "IZIN", "SAKIT", "ALPA", "DIGANTIKAN"],
                    horizontal=True,
                )
                pengganti = ""
                if status == "DIGANTIKAN":
                    pengganti = st.text_input("Nama Pengawas Pengganti")
                    if not pengganti.strip():
                        st.warning("Nama pengawas pengganti wajib diisi.")

                if st.button("💾 Simpan Presensi", type="primary", use_container_width=True):
                    res = api(
                        "checkin",
                        unit=unit,
                        nama=nama,
                        tanggal=str(row["TANGGAL"]),
                        hari=str(row["HARI"]),
                        jam_ke=str(row["JAM_KE"]),
                        ruang=str(row["RUANG"]),
                        status=status,
                        pengganti=pengganti.strip(),
                    )
                    if res.get("ok"):
                        st.success(res.get("message", "Presensi tersimpan."))
                    else:
                        st.error(res.get("message", "Presensi gagal disimpan."))

    with tabs[1]:
        st.subheader("Jadwal Pengawasan Saya")
        show = df.rename(columns={
            "TANGGAL":"Tanggal", "HARI":"Hari", "JAM_KE":"Jam Ke",
            "RUANG":"Ruang", "NAMA_PENGAWAS":"Pengawas"
        })
        st.dataframe(show, use_container_width=True, hide_index=True)

    with tabs[2]:
        st.subheader("Rekap Presensi")
        res = api("get_rekap", unit=unit, nama=nama)
        if res.get("ok"):
            rec = pd.DataFrame(res.get("data", []))
            if not rec.empty:
                st.dataframe(rec, use_container_width=True, hide_index=True)
            else:
                st.info("Belum ada data presensi.")
        else:
            st.error(res.get("message", "Rekap gagal dimuat."))

if st.session_state.get("logged_in"):
    main_app()
else:
    login_screen()
