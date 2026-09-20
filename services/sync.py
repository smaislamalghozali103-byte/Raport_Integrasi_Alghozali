import json
import os
from urllib.request import Request, urlopen
from urllib.error import URLError, HTTPError
import database as db

DEFAULT_ENDPOINT = "https://script.google.com/macros/s/AKfycbyKgETh59P0yF6NDWkK_G0KeNZDRbkq1J5pAvvusVWgKV85AeusoJDoXRsOI5IbCsIa/exec"

def get_endpoint():
    return (db.get_setting("GOOGLE_APPS_SCRIPT_URL") or os.getenv("GOOGLE_APPS_SCRIPT_URL") or DEFAULT_ENDPOINT).strip()

def set_endpoint(url):
    url = (url or "").strip()
    if not url.startswith("https://script.google.com/"):
        raise ValueError("URL Apps Script tidak valid.")
    db.set_setting("GOOGLE_APPS_SCRIPT_URL", url)
    return url

def request(action, payload=None, timeout=25):
    body = {"action": action}
    if payload:
        body.update(payload)
    raw = json.dumps(body, ensure_ascii=False).encode("utf-8")
    req = Request(get_endpoint(), data=raw, headers={"Content-Type": "application/json", "Accept": "application/json"}, method="POST")
    try:
        with urlopen(req, timeout=timeout) as response:
            data = json.loads(response.read().decode("utf-8"))
    except (HTTPError, URLError, TimeoutError) as exc:
        raise RuntimeError(f"Gagal terhubung ke Google Apps Script: {exc}") from exc
    if data.get("status") != "success":
        raise RuntimeError(data.get("message") or "Apps Script mengembalikan status error.")
    return data

def test_connection():
    return request("test", timeout=15)

def save_subject_scores(items, class_id, class_name, subject_id, subject_name, teacher_name, wali_kelas="-"):
    return request("saveSubjectScores", {
        "items": items,
        "classId": str(class_id or class_name),
        "className": str(class_name),
        "subjectId": str(subject_id),
        "subjectName": str(subject_name),
        "teacherName": str(teacher_name or "-"),
        "waliKelas": str(wali_kelas or "-")
    }, timeout=40)

def get_monitoring(tahun, unit=None, kelas=None):
    payload = {"tahun": tahun}
    if unit:
        payload["unit"] = unit
    if kelas:
        payload["kelas"] = kelas
    return request("getMonitoring", payload, timeout=20).get("rows", [])

def get_class_scores(class_id=None, class_name=None):
    payload = {}
    if class_id:
        payload["classId"] = str(class_id)
    if class_name:
        payload["className"] = str(class_name)
    return request("getClassScores", payload, timeout=25).get("rows", [])
