# Raport Integrasi Pondok Modern Al-Ghozali

Aplikasi **Python + Streamlit** untuk pengelolaan nilai dan pembuatan raport Pondok Modern Al-Ghozali.

## Dua jalur raport

### 1. Mukim
- Sumber master: data TypeScript yang sudah ada di `data/source_ts/`.
- Format raport: **Arab + Indonesia**.
- Template PDF mengikuti karakter **Kasyfud Darajat**: RTL, tabel Arab/Indonesia, jumlah, rata-rata, peringkat, wali kelas, wali murid, dan pimpinan.
- Login guru: pilih unit → nama guru → mata pelajaran → PIN minimal 6 digit.

### 2. Non Mukim / Full Day
- Sumber siswa: `data/full_day_students.csv`, diturunkan dari workbook Full Day 2026/2027 yang diberikan.
- Kurikulum: `data/full_day_subjects.csv`, diturunkan dari workbook Mapel Dapodik SMA 2026/2027.
- Kelas: X-A, X-B, XI-IPA, XI-IPS, XII-IPA, XII-IPS.
- Format raport: **100% Bahasa Indonesia**.
- Sistem memisahkan jalur Full Day dari data Mukim agar mapel, siswa, nilai, dan raport tidak tercampur.

## Menjalankan

```bash
python -m pip install -r requirements.txt
streamlit run app.py
```

## Konfigurasi Admin

Buat hash PIN admin dan simpan pada environment variable:

```text
ADMIN_PIN_HASH=
```

Database aplikasi menggunakan SQLite lokal. Google Sheets tetap tersedia sebagai jalur sinkronisasi/rekap admin melalui service yang sudah disiapkan. **Firebase dan Vercel tidak digunakan dalam arsitektur Python ini.**

## Catatan data

Nilai pada master siswa TypeScript tidak otomatis dianggap sebagai nilai raport. Master tersebut digunakan untuk identitas siswa dan struktur akademik. Nilai raport diinput melalui aplikasi/import Excel.


## Arsitektur saat ini

```
Browser
   ↓
Streamlit / Python
   ↓
SQLite (database aplikasi)
   ↓
Google Sheets (opsional, rekap Admin)
```

Komponen legacy JavaScript, Firebase Authentication/Firestore, konfigurasi Firebase, dan artefak deployment Vercel telah dihapus dari branch Python.


## Realtime nilai & monitoring

- Guru hanya melihat jenjang/unit, mata pelajaran, dan kelas yang berasal dari penugasannya.
- Saat guru menekan **Simpan & Sinkronkan**, nilai dikirim langsung ke Google Apps Script lalu ditulis ke Google Spreadsheet.
- **Guru mapel** dapat melihat dashboard status/progres input seluruh kelas, tetapi tidak melihat angka nilai guru lain.
- **Wali kelas** dapat membuka nilai realtime kelasnya dari Spreadsheet.
- **Admin** memiliki dashboard seluruh data dan menu **Pengaturan & Sinkronisasi**.
- SQLite tetap digunakan sebagai cache/data aplikasi, sedangkan Google Spreadsheet menjadi sumber bersama untuk transaksi nilai.
- Endpoint Apps Script disimpan di tabel `app_settings` dan dapat diubah Admin tanpa mengubah kode aplikasi.
