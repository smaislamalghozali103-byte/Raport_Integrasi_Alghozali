import re
from pathlib import Path
from collections import defaultdict
import csv
import database as db

ROOT=Path(__file__).parent/"data"/"source_ts"
FULL_DAY_STUDENTS=Path(__file__).parent/"data"/"full_day_students.csv"
FULL_DAY_SUBJECTS=Path(__file__).parent/"data"/"full_day_subjects.csv"

def read(name):
    return (ROOT/name).read_text(encoding="utf-8")

def sval(x): return x.replace("\\'","'").strip()

def parse_students():
    files=[
        "masterStudents.ts","masterStudents1Intensif.ts","masterStudents2Intensif.ts",
        "masterStudents2SMP.ts","masterStudents3Intensif.ts","masterStudents3SMP.ts",
        "masterStudents4SMA.ts","masterStudents5SMA.ts","masterStudents6SMA.ts"
    ]
    pat=re.compile(r"\{\s*id:\s*['\"]([^'\"]+)['\"],\s*no:\s*(\d+),\s*classId:\s*['\"]([^'\"]+)['\"],\s*nisn:\s*['\"]([^'\"]*)['\"],\s*name:\s*(['\"])(.*?)\5,\s*scores:",re.S)
    for name in files:
        p=ROOT/name
        if not p.exists(): continue
        for m in pat.finditer(p.read_text(encoding="utf-8")):
            yield {"id":m.group(1),"no":int(m.group(2)),"class_id":m.group(3),
                   "nisn":m.group(4),"nama":m.group(6),"source":name}

def parse_assignments():
    files=["teacherAssignmentsRekap.ts","teacherAssignmentsSMARekap.ts"]
    pat=re.compile(r"\{\s*no:\s*(\d+),\s*teacherName:\s*(['\"])(.*?)\2,\s*unit:\s*['\"]([^'\"]+)['\"],\s*subjectName:\s*(['\"])(.*?)\5,\s*className:\s*(['\"])(.*?)\7,\s*hours:\s*([\d.]+)\s*\}",re.S)
    grouped=defaultdict(float)
    teachers={}
    for name in files:
        p=ROOT/name
        if not p.exists(): continue
        for m in pat.finditer(p.read_text(encoding="utf-8")):
            no=int(m.group(1)); teacher=m.group(3); unit=m.group(4); subject=m.group(6); kelas=m.group(8); hours=float(m.group(9))
            grouped[(teacher,unit,subject,kelas)]+=hours
            teachers[teacher]=no
    return grouped,teachers

def parse_subjects():
    p=ROOT/"teacherSubjectsDatabase.ts"
    if not p.exists(): return []
    pat=re.compile(r'\{\s*"Kode Mata Pelajaran":\s*"([^"]+)",\s*"Nama Mata Pelajaran":\s*"([^"]+)",\s*"Guru Pengampu":\s*"([^"]*)",\s*"Unit":\s*"([^"]+)",\s*"Daftar Kelas":\s*"([^"]*)"\s*\}',re.S)
    out=[]
    for m in pat.finditer(p.read_text(encoding="utf-8")):
        out.append((m.group(1),m.group(2),m.group(4)))
    return out

def parse_wali():
    p=ROOT/"waliKelasDatabase.ts"
    if not p.exists(): return []
    pat=re.compile(r"\{\s*no:\s*(\d+),\s*className:\s*(['\"])(.*?)\2,\s*waliName:\s*(['\"])(.*?)\4,\s*unit:\s*['\"]([^'\"]+)['\"],\s*gender:\s*['\"]([^'\"]+)['\"](?:,\s*classId:\s*['\"]([^'\"]+)['\"])?(?:,\s*levelLabel:\s*['\"]([^'\"]+)['\"])?",re.S)
    return [{"class_name":m.group(3),"wali":m.group(5),"unit":m.group(6),"class_id":m.group(8)} for m in pat.finditer(p.read_text(encoding="utf-8"))]

def seed_full_day():
    if FULL_DAY_STUDENTS.exists():
        with FULL_DAY_STUDENTS.open(encoding="utf-8",newline="") as f:
            for r in csv.DictReader(f):
                fd_key=f"FD-{r['kelas'].strip()}-{r.get('no','')}"
                db.upsert_siswa(r.get("no",""),fd_key,r["nama"].strip(),"SMA-FULL-DAY",r["kelas"].strip(),"FULL_DAY",r.get("tahun_ajaran","2026/2027"))
    if FULL_DAY_SUBJECTS.exists():
        with FULL_DAY_SUBJECTS.open(encoding="utf-8",newline="") as f:
            for r in csv.DictReader(f):
                name=r["nama_mapel"].strip()
                db.upsert_mapel(r["kode_mapel"],name,"SMA-FULL-DAY")
                m=db.one("SELECT id FROM mapel WHERE nama=? AND unit=?",(name,"SMA-FULL-DAY"))
                if m:
                    targets=[r["kelas"].strip()]
                    if targets[0]=="X": targets=["X-A","X-B"]
                    for target in targets:
                        db.upsert_kurikulum_mapel(m["id"],"SMA-FULL-DAY",target,int(r.get("no") or 0))

def seed():
    db.init_db()
    if not ROOT.exists(): raise FileNotFoundError(f"Folder master tidak ditemukan: {ROOT}")
    teachers=set()
    grouped,teacher_no=parse_assignments()
    for r in parse_students():
        if r["source"]=="masterStudents.ts":
            unit="SMP"
        elif "Intensif" in r["source"]:
            unit="INTENSIF"
        else:
            unit="SMA"
        db.upsert_siswa("",r["nisn"],r["nama"],unit,r["class_id"],"MUKIM","2026/2027")
    for code,name,unit in parse_subjects():
        db.upsert_mapel(code,name,unit)
    for (teacher,unit,subject,kelas),hours in grouped.items():
        teachers.add(teacher)
        db.upsert_guru(f"G{teacher_no.get(teacher,0):03d}-{abs(hash(teacher))%10000}",teacher,unit)
        g=db.one("SELECT id FROM guru WHERE lower(nama)=lower(?)",(teacher,))
        db.upsert_mapel(None,subject,unit)
        m=db.one("SELECT id FROM mapel WHERE nama=? AND unit=?",(subject,unit))
        if g and m: db.upsert_penugasan(g["id"],m["id"],unit,kelas,hours)
    for w in parse_wali():
        db.upsert_guru(f"W-{abs(hash(w['wali']))%100000}",w["wali"],w["unit"])
        g=db.one("SELECT id FROM guru WHERE lower(nama)=lower(?)",(w["wali"],))
        if g: db.upsert_wali(g["id"],w["unit"],w["class_id"] or w["class_name"],"2026/2027")
    seed_full_day()
    return {"students":len(db.q("SELECT id FROM siswa")),"teachers":len(db.q("SELECT id FROM guru")),
            "subjects":len(db.q("SELECT id FROM mapel")),"assignments":len(db.q("SELECT id FROM penugasan")),
            "wali":len(db.q("SELECT id FROM wali_kelas")),
            "full_day_students":len(db.q("SELECT id FROM siswa WHERE jalur='FULL_DAY'")),
            "full_day_subjects":len(db.q("SELECT id FROM mapel WHERE unit='SMA-FULL-DAY'"))}

if __name__=="__main__":
    print(seed())
