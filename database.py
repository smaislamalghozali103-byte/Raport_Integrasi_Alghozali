import sqlite3
from pathlib import Path
from contextlib import contextmanager

DB_PATH=Path("data/app.db")
DB_PATH.parent.mkdir(parents=True,exist_ok=True)

SCHEMA="""
CREATE TABLE IF NOT EXISTS guru (
 id INTEGER PRIMARY KEY AUTOINCREMENT,
 kode_guru TEXT UNIQUE,
 nama TEXT NOT NULL,
 pin_hash TEXT,
 unit TEXT,
 status TEXT DEFAULT 'Aktif'
);
CREATE TABLE IF NOT EXISTS guru_unit (
 guru_id INTEGER NOT NULL,
 unit TEXT NOT NULL,
 PRIMARY KEY(guru_id,unit),
 FOREIGN KEY(guru_id) REFERENCES guru(id) ON DELETE CASCADE
);
CREATE TABLE IF NOT EXISTS siswa (
 id INTEGER PRIMARY KEY AUTOINCREMENT,
 nis TEXT, nisn TEXT, nama TEXT NOT NULL,
 unit TEXT, kelas TEXT NOT NULL,
 UNIQUE(nisn,unit,kelas)
);
CREATE TABLE IF NOT EXISTS mapel (
 id INTEGER PRIMARY KEY AUTOINCREMENT,
 kode_mapel TEXT, nama TEXT NOT NULL,
 unit TEXT, UNIQUE(nama,unit)
);
CREATE TABLE IF NOT EXISTS kurikulum_mapel (
 id INTEGER PRIMARY KEY AUTOINCREMENT,
 mapel_id INTEGER NOT NULL, unit TEXT NOT NULL, kelas TEXT NOT NULL, urutan INTEGER DEFAULT 0,
 UNIQUE(mapel_id,unit,kelas),
 FOREIGN KEY(mapel_id) REFERENCES mapel(id) ON DELETE CASCADE
);
CREATE TABLE IF NOT EXISTS penugasan (
 id INTEGER PRIMARY KEY AUTOINCREMENT,
 guru_id INTEGER NOT NULL, mapel_id INTEGER NOT NULL,
 unit TEXT, kelas TEXT NOT NULL, jumlah_jam REAL DEFAULT 0,
 UNIQUE(guru_id,mapel_id,unit,kelas),
 FOREIGN KEY(guru_id) REFERENCES guru(id),
 FOREIGN KEY(mapel_id) REFERENCES mapel(id)
);
CREATE TABLE IF NOT EXISTS wali_kelas (
 id INTEGER PRIMARY KEY AUTOINCREMENT,
 guru_id INTEGER NOT NULL, unit TEXT, kelas TEXT NOT NULL,
 tahun_ajaran TEXT,
 UNIQUE(guru_id,unit,kelas,tahun_ajaran),
 FOREIGN KEY(guru_id) REFERENCES guru(id)
);
CREATE TABLE IF NOT EXISTS nilai (
 id INTEGER PRIMARY KEY AUTOINCREMENT,
 siswa_id INTEGER NOT NULL, mapel_id INTEGER NOT NULL, guru_id INTEGER,
 unit TEXT, kelas TEXT NOT NULL, tahun_ajaran TEXT NOT NULL, nilai REAL,
 updated_at TEXT DEFAULT CURRENT_TIMESTAMP,
 UNIQUE(siswa_id,mapel_id,tahun_ajaran),
 FOREIGN KEY(siswa_id) REFERENCES siswa(id),
 FOREIGN KEY(mapel_id) REFERENCES mapel(id),
 FOREIGN KEY(guru_id) REFERENCES guru(id)
);
"""

@contextmanager
def connect():
    con=sqlite3.connect(DB_PATH); con.row_factory=sqlite3.Row
    con.execute("PRAGMA foreign_keys=ON")
    try:
        yield con; con.commit()
    finally: con.close()

def init_db():
    with connect() as con:
        con.executescript(SCHEMA)
        cols={r["name"] for r in con.execute("PRAGMA table_info(guru)").fetchall()}
        if "pin_hash" not in cols:
            con.execute("ALTER TABLE guru ADD COLUMN pin_hash TEXT")

def q(sql,params=()):
    with connect() as con: return con.execute(sql,params).fetchall()

def one(sql,params=()):
    with connect() as con: return con.execute(sql,params).fetchone()

def get_units():
    rows=q("""SELECT unit FROM guru_unit WHERE trim(unit)<>''
              UNION SELECT unit FROM siswa WHERE unit IS NOT NULL AND trim(unit)<>''
              UNION SELECT unit FROM mapel WHERE unit IS NOT NULL AND trim(unit)<>''
              ORDER BY unit""")
    return [r["unit"] for r in rows]

def get_gurus(unit=None):
    if unit:
        return q("""SELECT g.* FROM guru g JOIN guru_unit gu ON gu.guru_id=g.id
                    WHERE g.status='Aktif' AND gu.unit=? ORDER BY g.nama""",(unit,))
    return q("SELECT * FROM guru WHERE status='Aktif' ORDER BY nama")

def get_mapel_for_guru(guru_id,unit):
    return q("""SELECT DISTINCT m.* FROM mapel m JOIN penugasan p ON p.mapel_id=m.id
                WHERE p.guru_id=? AND p.unit=? ORDER BY m.nama""",(guru_id,unit))

def get_classes_for_guru_mapel(guru_id,mapel_id,unit):
    return q("""SELECT DISTINCT kelas FROM penugasan
                WHERE guru_id=? AND mapel_id=? AND unit=? ORDER BY kelas""",
             (guru_id,mapel_id,unit))

def get_students(unit,kelas):
    return q("SELECT * FROM siswa WHERE unit=? AND kelas=? ORDER BY nama",(unit,kelas))

def get_grade_map(unit,kelas,mapel_id,tahun):
    rows=q("SELECT siswa_id,nilai FROM nilai WHERE unit=? AND kelas=? AND mapel_id=? AND tahun_ajaran=?",
           (unit,kelas,mapel_id,tahun))
    return {r["siswa_id"]:r["nilai"] for r in rows}

def save_grade(siswa_id,mapel_id,guru_id,unit,kelas,tahun,nilai):
    with connect() as con:
        con.execute("""INSERT INTO nilai(siswa_id,mapel_id,guru_id,unit,kelas,tahun_ajaran,nilai)
        VALUES(?,?,?,?,?,?,?) ON CONFLICT(siswa_id,mapel_id,tahun_ajaran)
        DO UPDATE SET guru_id=excluded.guru_id,unit=excluded.unit,kelas=excluded.kelas,
        nilai=excluded.nilai,updated_at=CURRENT_TIMESTAMP""",
        (siswa_id,mapel_id,guru_id,unit,kelas,tahun,nilai))

def get_wali_classes(guru_id,unit,tahun):
    return q("SELECT kelas FROM wali_kelas WHERE guru_id=? AND unit=? AND tahun_ajaran=? ORDER BY kelas",
             (guru_id,unit,tahun))

def monitoring(unit,kelas,tahun):
    return q("""SELECT m.nama mapel,g.nama guru,COUNT(DISTINCT s.id) total_siswa,
                COUNT(DISTINCT CASE WHEN n.nilai IS NOT NULL THEN s.id END) terisi
                FROM penugasan p JOIN mapel m ON m.id=p.mapel_id JOIN guru g ON g.id=p.guru_id
                LEFT JOIN siswa s ON s.unit=p.unit AND s.kelas=p.kelas
                LEFT JOIN nilai n ON n.siswa_id=s.id AND n.mapel_id=p.mapel_id AND n.tahun_ajaran=?
                WHERE p.unit=? AND p.kelas=? GROUP BY p.mapel_id,p.guru_id ORDER BY m.nama""",
                (tahun,unit,kelas))

def upsert_guru(kode,nama,unit="",status="Aktif"):
    with connect() as con:
        row=con.execute("SELECT id FROM guru WHERE lower(nama)=lower(?)",(nama,)).fetchone()
        if row:
            gid=row["id"]
            con.execute("UPDATE guru SET kode_guru=COALESCE(kode_guru,?),status=? WHERE id=?",
                        (kode,status,gid))
        else:
            con.execute("INSERT INTO guru(kode_guru,nama,unit,status) VALUES(?,?,?,?)",
                        (kode,nama,unit,status))
            gid=con.execute("SELECT last_insert_rowid()").fetchone()[0]
        if unit:
            con.execute("INSERT OR IGNORE INTO guru_unit(guru_id,unit) VALUES(?,?)",(gid,unit))
        return gid

def add_guru_unit(guru_id,unit):
    if unit:
        with connect() as con:
            con.execute("INSERT OR IGNORE INTO guru_unit(guru_id,unit) VALUES(?,?)",(guru_id,unit))

def upsert_siswa(nis,nisn,nama,unit,kelas):
    with connect() as con:
        con.execute("""INSERT INTO siswa(nis,nisn,nama,unit,kelas) VALUES(?,?,?,?,?)
        ON CONFLICT(nisn,unit,kelas) DO UPDATE SET nis=excluded.nis,nama=excluded.nama""",
        (nis,nisn,nama,unit,kelas))

def upsert_mapel(kode,nama,unit):
    with connect() as con:
        con.execute("""INSERT INTO mapel(kode_mapel,nama,unit) VALUES(?,?,?)
        ON CONFLICT(nama,unit) DO UPDATE SET kode_mapel=excluded.kode_mapel""",
        (kode,nama,unit))

def upsert_penugasan(guru_id,mapel_id,unit,kelas,jumlah_jam=0):
    with connect() as con:
        con.execute("INSERT OR IGNORE INTO guru_unit(guru_id,unit) VALUES(?,?)",(guru_id,unit))
        con.execute("""INSERT INTO penugasan(guru_id,mapel_id,unit,kelas,jumlah_jam) VALUES(?,?,?,?,?)
        ON CONFLICT(guru_id,mapel_id,unit,kelas) DO UPDATE SET jumlah_jam=excluded.jumlah_jam""",
        (guru_id,mapel_id,unit,kelas,jumlah_jam or 0))

def upsert_wali(guru_id,unit,kelas,tahun):
    with connect() as con:
        con.execute("""INSERT INTO wali_kelas(guru_id,unit,kelas,tahun_ajaran) VALUES(?,?,?,?)
        ON CONFLICT(guru_id,unit,kelas,tahun_ajaran) DO NOTHING""",
        (guru_id,unit,kelas,tahun))

def set_guru_pin(guru_id,pin_hash):
    with connect() as con:
        con.execute("UPDATE guru SET pin_hash=? WHERE id=?",(pin_hash,guru_id))

def get_guru_pin_hash(guru_id):
    row=one("SELECT pin_hash FROM guru WHERE id=?",(guru_id,))
    return row["pin_hash"] if row else None
