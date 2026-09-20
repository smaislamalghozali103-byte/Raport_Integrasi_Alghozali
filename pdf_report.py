from io import BytesIO
from reportlab.lib.pagesizes import A4
from reportlab.platypus import SimpleDocTemplate,Table,TableStyle,Paragraph,Spacer,PageBreak
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet,ParagraphStyle
from reportlab.lib.enums import TA_CENTER

def build_report(students,grade_by_student,subject_names,unit="",kelas="",tahun=""):
    buf=BytesIO()
    doc=SimpleDocTemplate(buf,pagesize=A4,rightMargin=30,leftMargin=30,topMargin=30,bottomMargin=30)
    styles=getSampleStyleSheet()
    title=ParagraphStyle("title",parent=styles["Title"],alignment=TA_CENTER,fontSize=16,textColor=colors.HexColor("#166534"))
    story=[]
    for i,s in enumerate(students):
        story += [Paragraph("PONDOK MODERN AL-GHOZALI",title),Paragraph("RAPORT INTEGRASI",title),Spacer(1,10),
                  Paragraph(f"<b>Nama:</b> {s['nama']}<br/><b>NISN:</b> {s.get('nisn') or '-'}<br/>"
                            f"<b>Unit:</b> {unit}<br/><b>Kelas:</b> {kelas}<br/><b>Tahun Ajaran:</b> {tahun}",styles["Normal"]),Spacer(1,12)]
        data=[["No","Mata Pelajaran","Nilai"]]
        vals=grade_by_student.get(s["id"],{})
        for n,name in enumerate(subject_names,1): data.append([n,name,vals.get(name,"-")])
        t=Table(data,colWidths=[35,360,70],repeatRows=1)
        t.setStyle(TableStyle([("BACKGROUND",(0,0),(-1,0),colors.HexColor("#166534")),
                                ("TEXTCOLOR",(0,0),(-1,0),colors.white),("FONTNAME",(0,0),(-1,0),"Helvetica-Bold"),
                                ("GRID",(0,0),(-1,-1),.35,colors.HexColor("#CBD5E1")),("FONTSIZE",(0,0),(-1,-1),8),
                                ("ALIGN",(0,0),(0,-1),"CENTER"),("ALIGN",(-1,1),(-1,-1),"CENTER")]))
        story.append(t)
        if i < len(students)-1: story.append(PageBreak())
    doc.build(story); buf.seek(0); return buf.getvalue()
