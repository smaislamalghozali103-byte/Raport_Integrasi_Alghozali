from io import BytesIO
from pathlib import Path
from statistics import mean
import os
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.pagesizes import A4
from reportlab.platypus import SimpleDocTemplate,Table,TableStyle,Paragraph,Spacer,PageBreak
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet,ParagraphStyle
from reportlab.lib.enums import TA_CENTER,TA_RIGHT
from reportlab.lib.units import mm

try:
    import arabic_reshaper
    from bidi.algorithm import get_display
except Exception:
    arabic_reshaper=None
    get_display=lambda x:x

def _font(name,paths):
    for p in paths:
        if p and Path(p).exists():
            try:
                pdfmetrics.registerFont(TTFont(name,p)); return name
            except Exception: pass
    return "Helvetica"

LF=_font("RaportLatin",[os.getenv("RAPORT_LATIN_FONT",""),"/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"])
AF=_font("RaportArabic",[os.getenv("RAPORT_ARABIC_FONT",""),"/usr/share/fonts/truetype/noto/NotoNaskhArabic-Regular.ttf"])

def ar(text):
    text=str(text or "")
    return get_display(arabic_reshaper.reshape(text)) if arabic_reshaper else text

ARABIC_SUBJECTS={
 "Tamrin Lughoh":"تمرين اللغة","Mutholaah":"المطالعة","Aqidah":"العقيدة","Hadist":"الحديث",
 "Fiqih":"الفقه","Tarikh Islam":"التاريخ الإسلامي","Tajwid":"التجويد","Imla":"الإملاء",
 "Khot":"الخط","Mahfudzot":"المحفوظات","Pendidikan Agama Islam":"التربية الدينية الإسلامية",
 "Bahasa Indonesia":"اللغة الإندونيسية","Bahasa Inggris":"اللغة الإنجليزية","Matematika":"الرياضيات",
 "Ilmu Pengetahuan Alam":"العلوم الطبيعية","Ilmu Pengetahuan Sosial":"العلوم الاجتماعية",
 "Pendidikan Kewarganegaraan":"التربية الوطنية","Informatika":"المعلوماتية",
 "Pendidikan Jasmani dan Kesehatan":"التربية البدنية والصحية","Seni Budaya":"الفنون والثقافة",
 "Bahasa Sunda":"اللغة السوندانية"
}

def arabic_subject(name):
    return ar(ARABIC_SUBJECTS.get(str(name).strip(),""))

def _page(canvas,doc):
    w,h=A4
    canvas.saveState()
    canvas.setStrokeColor(colors.HexColor("#315f3a")); canvas.setLineWidth(1.5); canvas.rect(7*mm,7*mm,w-14*mm,h-14*mm)
    canvas.setStrokeColor(colors.HexColor("#c9a646")); canvas.setLineWidth(.7); canvas.rect(10*mm,10*mm,w-20*mm,h-20*mm)
    for x,y in [(14*mm,14*mm),(w-14*mm,14*mm),(14*mm,h-14*mm),(w-14*mm,h-14*mm)]:
        canvas.setFillColor(colors.HexColor("#315f3a")); canvas.circle(x,y,4*mm,fill=1,stroke=0)
        canvas.setFillColor(colors.HexColor("#d8bd62")); canvas.circle(x,y,1.5*mm,fill=1,stroke=0)
    canvas.setFont(LF,7); canvas.setFillColor(colors.HexColor("#475569")); canvas.drawCentredString(w/2,6*mm,f"Halaman {doc.page}")
    canvas.restoreState()

def build_report(students,grade_by_student,subject_names,unit="",kelas="",tahun="",jalur="MUKIM",wali_kelas="",semester="Ganjil",kepala_sekolah="M. Ya'qub Unang, S.Ag"):
    buf=BytesIO()
    doc=SimpleDocTemplate(buf,pagesize=A4,rightMargin=16*mm,leftMargin=16*mm,topMargin=14*mm,bottomMargin=14*mm)
    ss=getSampleStyleSheet()
    title=ParagraphStyle("rt",parent=ss["Title"],fontName=AF,fontSize=18,leading=22,alignment=TA_CENTER)
    sub=ParagraphStyle("rs",parent=ss["Normal"],fontName=LF,fontSize=9,leading=12,alignment=TA_CENTER)
    arab=ParagraphStyle("ra",parent=ss["Normal"],fontName=AF,fontSize=8.5,leading=11,alignment=TA_RIGHT)
    cen=ParagraphStyle("rc",parent=ss["Normal"],fontName=LF,fontSize=8,leading=10,alignment=TA_CENTER)
    story=[]; bilingual=str(jalur).upper()=="MUKIM"
    totals={}
    for s in students:
        vals=grade_by_student.get(s["id"],{})
        totals[s["id"]]=sum(float(vals[n]) for n in subject_names if vals.get(n) not in (None,"","-"))
    ranked=sorted([v for v in totals.values() if v],reverse=True)
    def rank(sid):
        v=totals.get(sid,0); return ranked.index(v)+1 if v else "-"
    for ix,s in enumerate(students):
        vals=grade_by_student.get(s["id"],{})
        nums=[float(vals[n]) for n in subject_names if vals.get(n) not in (None,"","-")]
        total=sum(nums); avg=round(mean(nums),2) if nums else 0
        if bilingual:
            story += [Paragraph(ar("كشف الدرجات"),title),Paragraph(ar("للإمتحان التحريري للفصل الدراسي الأول"),arab),Spacer(1,3*mm)]
            ident=Table([
                [Paragraph(ar("الاسم الكامل"),arab),Paragraph(s["nama"],cen),Paragraph(ar("الصف"),arab),Paragraph(kelas,cen)],
                [Paragraph(ar("الرقم"),arab),Paragraph(str(s.get("nisn") or s.get("nis") or "-"),cen),Paragraph(ar("العام الدراسي"),arab),Paragraph(tahun,cen)]
            ],colWidths=[30*mm,65*mm,30*mm,60*mm])
            ident.setStyle(TableStyle([("BOX",(0,0),(-1,-1),.5,colors.HexColor("#94a3b8")),("INNERGRID",(0,0),(-1,-1),.3,colors.HexColor("#cbd5e1")),("VALIGN",(0,0),(-1,-1),"MIDDLE")]))
            story += [ident,Spacer(1,4*mm)]
            data=[[Paragraph(ar("الرقم"),arab),Paragraph(ar("المواد الدراسية"),arab),Paragraph("Mata Pelajaran",cen),Paragraph(ar("الدرجة"),arab),Paragraph("Nilai",cen)]]
            for n,name in enumerate(subject_names,1):
                v=vals.get(name,"-"); v=f"{float(v):g}" if v not in ("-",None,"") else "-"
                data.append([Paragraph(str(n),cen),Paragraph(arabic_subject(name),arab),Paragraph(name,cen),Paragraph(ar(v),arab),Paragraph(v,cen)])
            t=Table(data,colWidths=[13*mm,43*mm,72*mm,20*mm,18*mm],repeatRows=1)
            t.setStyle(TableStyle([("BACKGROUND",(0,0),(-1,0),colors.HexColor("#e8efe9")),("GRID",(0,0),(-1,-1),.35,colors.HexColor("#64748b")),("VALIGN",(0,0),(-1,-1),"MIDDLE"),("ALIGN",(0,0),(-1,-1),"CENTER"),("FONTSIZE",(0,0),(-1,-1),7),("TOPPADDING",(0,0),(-1,-1),3),("BOTTOMPADDING",(0,0),(-1,-1),3)]))
            story += [t,Spacer(1,3*mm)]
            sm=Table([["المجموع","Jumlah",f"{total:g}"],["النتيجة المعدلة","Rata-rata Nilai",f"{avg:g}"],["المقام","Peringkat",str(rank(s["id"]))]],colWidths=[50*mm,70*mm,30*mm])
            sm.setStyle(TableStyle([("GRID",(0,0),(-1,-1),.35,colors.HexColor("#64748b")),("FONTNAME",(0,0),(-1,-1),LF),("ALIGN",(0,0),(-1,-1),"CENTER"),("FONTSIZE",(0,0),(-1,-1),8)]))
        else:
            story += [Paragraph("PONDOK MODERN AL-GHOZALI",title),Paragraph("RAPOR HASIL BELAJAR",title),Paragraph(f"SEMESTER {str(semester).upper()} • TAHUN PELAJARAN {tahun}",sub),Spacer(1,3*mm)]
            ident=Table([["Nama Siswa",s["nama"],"Kelas",kelas],["NIS/NISN",str(s.get("nisn") or s.get("nis") or "-"),"Program","FULL DAY / NON MUKIM"]],colWidths=[28*mm,72*mm,28*mm,58*mm])
            ident.setStyle(TableStyle([("BOX",(0,0),(-1,-1),.5,colors.HexColor("#94a3b8")),("INNERGRID",(0,0),(-1,-1),.3,colors.HexColor("#cbd5e1")),("FONTNAME",(0,0),(-1,-1),LF),("FONTSIZE",(0,0),(-1,-1),8.5),("BACKGROUND",(0,0),(0,-1),colors.HexColor("#eef4ef")),("BACKGROUND",(2,0),(2,-1),colors.HexColor("#eef4ef"))]))
            story += [ident,Spacer(1,4*mm)]
            data=[["No","Mata Pelajaran","Nilai"]]
            for n,name in enumerate(subject_names,1):
                v=vals.get(name,"-"); v=f"{float(v):g}" if v not in ("-",None,"") else "-"
                data.append([n,name,v])
            t=Table(data,colWidths=[15*mm,132*mm,25*mm],repeatRows=1)
            t.setStyle(TableStyle([("BACKGROUND",(0,0),(-1,0),colors.HexColor("#315f3a")),("TEXTCOLOR",(0,0),(-1,0),colors.white),("GRID",(0,0),(-1,-1),.35,colors.HexColor("#64748b")),("FONTNAME",(0,0),(-1,-1),LF),("FONTSIZE",(0,0),(-1,-1),8),("ALIGN",(0,0),(0,-1),"CENTER"),("ALIGN",(-1,1),(-1,-1),"CENTER"),("VALIGN",(0,0),(-1,-1),"MIDDLE")]))
            story += [t,Spacer(1,4*mm)]
            sm=Table([["Jumlah Nilai",f"{total:g}"],["Rata-rata Nilai",f"{avg:g}"],["Peringkat",str(rank(s["id"]))]],colWidths=[55*mm,40*mm],hAlign="RIGHT")
            sm.setStyle(TableStyle([("GRID",(0,0),(-1,-1),.35,colors.HexColor("#64748b")),("FONTNAME",(0,0),(-1,-1),LF),("BACKGROUND",(0,0),(0,-1),colors.HexColor("#eef4ef")),("ALIGN",(1,0),(1,-1),"CENTER")]))
        story += [sm,Spacer(1,8*mm)]
        sign=Table([["Wali Kelas","Wali Murid" if bilingual else "Orang Tua/Wali","Direktur/Pimpinan" if bilingual else "Kepala Sekolah"],
                    [wali_kelas or "........................","........................",kepala_sekolah],
                    ["(........................)","(........................)","(........................)"]],colWidths=[60*mm,60*mm,60*mm])
        sign.setStyle(TableStyle([("ALIGN",(0,0),(-1,-1),"CENTER"),("FONTNAME",(0,0),(-1,-1),LF),("FONTSIZE",(0,0),(-1,-1),8),("TOPPADDING",(0,1),(-1,1),12)]))
        story.append(sign)
        if ix<len(students)-1: story.append(PageBreak())
    doc.build(story,onFirstPage=_page,onLaterPages=_page)
    buf.seek(0); return buf.getvalue()
