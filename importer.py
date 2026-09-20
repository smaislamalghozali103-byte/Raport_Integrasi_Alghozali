import argparse
from pathlib import Path
import pandas as pd
import database as db

def norm(x):
    return "".join(ch.lower() for ch in str(x).strip() if ch.isalnum())

def pick(df,names):
    cols={norm(c):c for c in df.columns}
    for n in names:
        if norm(n) in cols:return cols[norm(n)]
    return None

def read_all(path):
    return pd.read_excel(path,sheet_name=None)

def import_guru(path):
    for sheet,df in read_all(path).items():
        c_name=pick(df,["nama guru","nama","guru","nama_guru"])
        if not c_name: continue
        c_code=pick(df,["kode guru","kode","kode_guru"])
        c_unit=pick(df,["unit","jenjang","unit kerja"])
        for _,r in df.iterrows():
            name=str(r[c_name]).strip()
            if not name or name.lower()=="nan": continue
            code=str(r[c_code]).strip() if c_code and pd.notna(r[c_code]) else name[:30]
            unit=str(r[c_unit]).strip() if c_unit and pd.notna(r[c_unit]) else sheet
            db.upsert_guru(code,name,unit)

def import_siswa(path):
    for sheet,df in read_all(path).items():
        c_name=pick(df,["nama siswa","nama","siswa"])
        c_nisn=pick(df,["nisn","NISN"])
        c_nis=pick(df,["nis","NIS"])
        c_kelas=pick(df,["kelas","rombel","class"])
        c_unit=pick(df,["unit","jenjang"])
        if not c_name or not c_kelas: continue
        for _,r in df.iterrows():
            name=str(r[c_name]).strip()
            if not name or name.lower()=="nan": continue
            unit=str(r[c_unit]).strip() if c_unit and pd.notna(r[c_unit]) else ""
            kelas=str(r[c_kelas]).strip() if pd.notna(r[c_kelas]) else sheet
            nisn=str(r[c_nisn]).strip() if c_nisn and pd.notna(r[c_nisn]) else ""
            nis=str(r[c_nis]).strip() if c_nis and pd.notna(r[c_nis]) else ""
            db.upsert_siswa(nis,nisn,name,unit,kelas)

def import_penugasan(path):
    for sheet,df in read_all(path).items():
        c_guru=pick(df,["nama guru","guru","guru pengampu","nama_guru"])
        c_mapel=pick(df,["mata pelajaran","mapel","mata_pelajaran","subject"])
        c_unit=pick(df,["unit","jenjang"])
        c_kelas=pick(df,["kelas","rombel","class"])
        c_jam=pick(df,["jumlah jam","jam","jml jam"])
        if not c_guru or not c_mapel or not c_kelas: continue
        for _,r in df.iterrows():
            guru=str(r[c_guru]).strip() if pd.notna(r[c_guru]) else ""
            mapel=str(r[c_mapel]).strip() if pd.notna(r[c_mapel]) else ""
            if not guru or not mapel or guru.lower()=="nan" or mapel.lower()=="nan": continue
            unit=str(r[c_unit]).strip() if c_unit and pd.notna(r[c_unit]) else ""
            kelas=str(r[c_kelas]).strip() if pd.notna(r[c_kelas]) else sheet
            jam=float(r[c_jam]) if c_jam and pd.notna(r[c_jam]) else 0
            gr=db.one("SELECT id FROM guru WHERE lower(nama)=lower(?) AND (unit=? OR unit='')",(guru,unit))
            if not gr: continue
            db.upsert_mapel(None,mapel,unit)
            mp=db.one("SELECT id FROM mapel WHERE nama=? AND unit=?",(mapel,unit))
            db.upsert_penugasan(gr["id"],mp["id"],unit,kelas,jam)

if __name__=="__main__":
    ap=argparse.ArgumentParser()
    ap.add_argument("--guru"); ap.add_argument("--siswa"); ap.add_argument("--penugasan")
    args=ap.parse_args(); db.init_db()
    if args.guru: import_guru(args.guru)
    if args.siswa: import_siswa(args.siswa)
    if args.penugasan: import_penugasan(args.penugasan)
    print("Import selesai.")
