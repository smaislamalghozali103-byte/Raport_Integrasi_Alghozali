import { StudentRecord } from '../types';

// Helper to generate realistic subject grades for each student in 1 Intensif / 1 SMA
function generateSubjectScoresIntensif(seed: number): Record<string, number> {
  const scores: Record<string, number> = {};
  for (let i = 1; i <= 28; i++) {
    const subId = `s${i}`;
    const variance = ((seed * 29 + i * 19) % 31);
    const base = 74 + ((seed * 5) % 15);
    const finalScore = Math.min(98, Math.max(65, base + (variance - 15)));
    scores[subId] = finalScore;
  }
  return scores;
}

// Master Data Siswa Kelas 1 Intensif / 1 SMA (1INT - Total 19 Siswa: 8 Putri, 11 Putra)
export const MASTER_STUDENTS_1_INTENSIF: StudentRecord[] = [
  // ===================== SANTRIWATI (PUTRI) =====================
  {
    id: 'smp-1int-1',
    no: 1,
    classId: '1int',
    nisn: '3114863309',
    name: 'ALMIRA',
    scores: generateSubjectScoresIntensif(501),
    keterangan: 'Tuntas',
  },
  {
    id: 'smp-1int-2',
    no: 2,
    classId: '1int',
    nisn: '3119640430',
    name: 'DZIHNI RAFILAH HANAFI',
    scores: generateSubjectScoresIntensif(502),
    keterangan: 'Tuntas',
  },
  {
    id: 'smp-1int-3',
    no: 3,
    classId: '1int',
    nisn: '0107709853',
    name: 'HUSNA LAILATUL SYAM',
    scores: generateSubjectScoresIntensif(503),
    keterangan: 'Tuntas',
  },
  {
    id: 'smp-1int-4',
    no: 4,
    classId: '1int',
    nisn: '0115850447',
    name: 'KHAFINZA ZAHROTUL FAIZAH',
    scores: generateSubjectScoresIntensif(504),
    keterangan: 'Tuntas',
  },
  {
    id: 'smp-1int-5',
    no: 5,
    classId: '1int',
    nisn: '3094791920',
    name: 'NAILA HIDAYAH',
    scores: generateSubjectScoresIntensif(505),
    keterangan: 'Tuntas',
  },
  {
    id: 'smp-1int-6',
    no: 6,
    classId: '1int',
    nisn: '3119922193',
    name: 'SHOLIHATUL FATIMAH',
    scores: generateSubjectScoresIntensif(506),
    keterangan: 'Tuntas',
  },
  {
    id: 'smp-1int-7',
    no: 7,
    classId: '1int',
    nisn: '3111516654',
    name: 'SITI FATHIYATUR ROHMAH',
    scores: generateSubjectScoresIntensif(507),
    keterangan: 'Tuntas',
  },
  {
    id: 'smp-1int-8',
    no: 8,
    classId: '1int',
    nisn: '3111110408',
    name: 'SUNDUS NAYLA S',
    scores: generateSubjectScoresIntensif(508),
    keterangan: 'Tuntas',
  },

  // ===================== SANTRIWAN (PUTRA) =====================
  {
    id: 'smp-1int-9',
    no: 9,
    classId: '1int',
    nisn: '3114903573',
    name: 'ACHMAD AR RAFFI SUDARYAT',
    scores: generateSubjectScoresIntensif(509),
    keterangan: 'Tuntas',
  },
  {
    id: 'smp-1int-10',
    no: 10,
    classId: '1int',
    nisn: '0105979257',
    name: 'AZAM MAULANA RAMADHAN',
    scores: generateSubjectScoresIntensif(510),
    keterangan: 'Tuntas',
  },
  {
    id: 'smp-1int-11',
    no: 11,
    classId: '1int',
    nisn: '0118418175',
    name: 'AZMI FARHAN HUDA MULYANA',
    scores: generateSubjectScoresIntensif(511),
    keterangan: 'Tuntas',
  },
  {
    id: 'smp-1int-12',
    no: 12,
    classId: '1int',
    nisn: '0109527577',
    name: 'MISHBAHUL ANAM',
    scores: generateSubjectScoresIntensif(512),
    keterangan: 'Tuntas',
  },
  {
    id: 'smp-1int-13',
    no: 13,
    classId: '1int',
    nisn: '3117065403',
    name: 'MOHAMAD RIKZA SYAH RAZAB',
    scores: generateSubjectScoresIntensif(513),
    keterangan: 'Tuntas',
  },
  {
    id: 'smp-1int-14',
    no: 14,
    classId: '1int',
    nisn: '0112710146',
    name: 'MUHAMAD AZKA RAMADHAN',
    scores: generateSubjectScoresIntensif(514),
    keterangan: 'Tuntas',
  },
  {
    id: 'smp-1int-15',
    no: 15,
    classId: '1int',
    nisn: '0113359722',
    name: 'MUHAMAD AZKI RAMADHAN',
    scores: generateSubjectScoresIntensif(515),
    keterangan: 'Tuntas',
  },
  {
    id: 'smp-1int-16',
    no: 16,
    classId: '1int',
    nisn: '3104412349',
    name: 'MUHAMMAD AIDIL ADHARI',
    scores: generateSubjectScoresIntensif(516),
    keterangan: 'Tuntas',
  },
  {
    id: 'smp-1int-17',
    no: 17,
    classId: '1int',
    nisn: '0108324992',
    name: 'MUHAMMAD FATHIR RAMADHAN',
    scores: generateSubjectScoresIntensif(517),
    keterangan: 'Tuntas',
  },
  {
    id: 'smp-1int-18',
    no: 18,
    classId: '1int',
    nisn: '0115713831',
    name: 'MUHAMMAD FAZRI',
    scores: generateSubjectScoresIntensif(518),
    keterangan: 'Tuntas',
  },
  {
    id: 'smp-1int-19',
    no: 19,
    classId: '1int',
    nisn: '0111433810',
    name: 'MUHAMMAD LABIB KHAIRUL KHAFI',
    scores: generateSubjectScoresIntensif(519),
    keterangan: 'Tuntas',
  },
];