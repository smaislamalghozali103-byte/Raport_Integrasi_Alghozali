import { StudentRecord } from '../types';

// Helper to generate realistic subject grades for each student in 2 Intensif / 2 SMA
function generateSubjectScores2Intensif(seed: number): Record<string, number> {
  const scores: Record<string, number> = {};
  for (let i = 1; i <= 28; i++) {
    const subId = `s${i}`;
    const variance = ((seed * 31 + i * 17) % 29);
    const base = 75 + ((seed * 7) % 15);
    const finalScore = Math.min(98, Math.max(68, base + (variance - 14)));
    scores[subId] = finalScore;
  }
  return scores;
}

// Master Data Siswa Kelas 2 Intensif / 2 SMA (Total 17 Siswa: 2INT.A = 8 Siswa, 2INT.B = 9 Siswa)
export const MASTER_STUDENTS_2_INTENSIF: StudentRecord[] = [
  // ========================================================
  // KELAS 2INT.A (Total 8 Siswa: 4 Putri, 4 Putra)
  // ========================================================
  {
    id: 'sma-2inta-1',
    no: 1,
    classId: '2int-a',
    nisn: '0103255017',
    name: 'AZSYURA CARIZTA PUTERI',
    scores: generateSubjectScores2Intensif(601),
    keterangan: 'Tuntas',
  },
  {
    id: 'sma-2inta-2',
    no: 2,
    classId: '2int-a',
    nisn: '0095965349',
    name: 'NABILLA TYAS KHAYDAH',
    scores: generateSubjectScores2Intensif(602),
    keterangan: 'Tuntas',
  },
  {
    id: 'sma-2inta-3',
    no: 3,
    classId: '2int-a',
    nisn: '0104195595',
    name: 'PUTRI BAHRAINI MUSTOFA',
    scores: generateSubjectScores2Intensif(603),
    keterangan: 'Tuntas',
  },
  {
    id: 'sma-2inta-4',
    no: 4,
    classId: '2int-a',
    nisn: '3098541367',
    name: 'ZHEE AURELIA ALWI',
    scores: generateSubjectScores2Intensif(604),
    keterangan: 'Tuntas',
  },
  {
    id: 'sma-2inta-5',
    no: 5,
    classId: '2int-a',
    nisn: '0102145071',
    name: 'DARRELL LUTHFIR RAHMAN',
    scores: generateSubjectScores2Intensif(605),
    keterangan: 'Tuntas',
  },
  {
    id: 'sma-2inta-6',
    no: 6,
    classId: '2int-a',
    nisn: '3085085184',
    name: 'LATIP KHAERUL IKHWAN',
    scores: generateSubjectScores2Intensif(606),
    keterangan: 'Tuntas',
  },
  {
    id: 'sma-2inta-7',
    no: 7,
    classId: '2int-a',
    nisn: '0098422574',
    name: 'M. WILDAN SAYYIDUSHIBYAN',
    scores: generateSubjectScores2Intensif(607),
    keterangan: 'Tuntas',
  },
  {
    id: 'sma-2inta-8',
    no: 8,
    classId: '2int-a',
    nisn: '3103459328',
    name: 'WALID IKHSAN NURIL',
    scores: generateSubjectScores2Intensif(608),
    keterangan: 'Tuntas',
  },

  // ========================================================
  // KELAS 2INT.B (Total 9 Siswa: 5 Putri, 4 Putra)
  // ========================================================
  {
    id: 'sma-2intb-1',
    no: 1,
    classId: '2int-b',
    nisn: '0091056538',
    name: 'ASSYIFA ADHESKA PUTRI WINATA',
    scores: generateSubjectScores2Intensif(609),
    keterangan: 'Tuntas',
  },
  {
    id: 'sma-2intb-2',
    no: 2,
    classId: '2int-b',
    nisn: '0105906811',
    name: 'SYIFA AULIA PUTRI',
    scores: generateSubjectScores2Intensif(610),
    keterangan: 'Tuntas',
  },
  {
    id: 'sma-2intb-3',
    no: 3,
    classId: '2int-b',
    nisn: '0099177353',
    name: 'SITI DUWI ZAHROTUSITA',
    scores: generateSubjectScores2Intensif(611),
    keterangan: 'Tuntas',
  },
  {
    id: 'sma-2intb-4',
    no: 4,
    classId: '2int-b',
    nisn: '0103142617',
    name: 'NAISILA ALRAMADHANI',
    scores: generateSubjectScores2Intensif(612),
    keterangan: 'Tuntas',
  },
  {
    id: 'sma-2intb-5',
    no: 5,
    classId: '2int-b',
    nisn: '0105821200',
    name: 'TRI AISYAH SAHILLA',
    scores: generateSubjectScores2Intensif(613),
    keterangan: 'Tuntas',
  },
  {
    id: 'sma-2intb-6',
    no: 6,
    classId: '2int-b',
    nisn: '0109574979',
    name: 'FAHRI GINANJAR PUTRA RAMADHAN',
    scores: generateSubjectScores2Intensif(614),
    keterangan: 'Tuntas',
  },
  {
    id: 'sma-2intb-7',
    no: 7,
    classId: '2int-b',
    nisn: '0098478802',
    name: 'MIFTAH RUSYDILHAQ',
    scores: generateSubjectScores2Intensif(615),
    keterangan: 'Tuntas',
  },
  {
    id: 'sma-2intb-8',
    no: 8,
    classId: '2int-b',
    nisn: '0094614669',
    name: 'MUHAMMAD RIZIK NASRULLOH',
    scores: generateSubjectScores2Intensif(616),
    keterangan: 'Tuntas',
  },
  {
    id: 'sma-2intb-9',
    no: 9,
    classId: '2int-b',
    nisn: '0094118769',
    name: 'RAHMAT BAKA HADZLIN',
    scores: generateSubjectScores2Intensif(617),
    keterangan: 'Tuntas',
  },
];