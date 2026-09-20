import os
import gspread
from google.oauth2.service_account import Credentials

SCOPES=["https://www.googleapis.com/auth/spreadsheets"]

def sync_dataframe(df,worksheet_name,spreadsheet_id=None):
    path=os.getenv("GOOGLE_SERVICE_ACCOUNT_JSON","")
    spreadsheet_id=spreadsheet_id or os.getenv("GOOGLE_SPREADSHEET_ID","")
    if not path or not spreadsheet_id: raise RuntimeError("Konfigurasi Google Sheets belum lengkap.")
    gc=gspread.authorize(Credentials.from_service_account_file(path,scopes=SCOPES))
    sh=gc.open_by_key(spreadsheet_id)
    try: ws=sh.worksheet(worksheet_name)
    except gspread.WorksheetNotFound: ws=sh.add_worksheet(title=worksheet_name,rows=max(100,len(df)+5),cols=max(10,len(df.columns)+2))
    values=[df.columns.tolist()]+df.fillna("").astype(str).values.tolist()
    ws.clear(); ws.update("A1",values)
