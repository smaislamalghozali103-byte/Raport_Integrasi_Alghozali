import { TEACHER_ASSIGNMENTS_SMA_REKAP } from './teacherAssignmentsSMARekap';

export interface TeacherAssignmentRecord {
  no: number;
  teacherName: string;
  unit: 'SMP' | 'SMA' | 'TMMIA';
  subjectName: string;
  className: string;
  hours: number;
}

/**
 * REKAPITULASI DAFTAR GURU UNIT SMP DAN TMMIA
 * TAHUN AJARAN 2026/2027 (96 GURU)
 */
export const TEACHER_ASSIGNMENTS_SMP_REKAP: TeacherAssignmentRecord[] = [
  // 1 ABDUL FATTAH AZZAM
  { no: 1, teacherName: 'ABDUL FATTAH AZZAM', unit: 'TMMIA', subjectName: "MUTHOLA'AH TMMIA", className: '2 E Putra', hours: 2 },
  { no: 1, teacherName: 'ABDUL FATTAH AZZAM', unit: 'TMMIA', subjectName: "MUTHOLA'AH TMMIA", className: '2 F Putra', hours: 2 },
  { no: 1, teacherName: 'ABDUL FATTAH AZZAM', unit: 'TMMIA', subjectName: 'TAMRIN LUGHOH TMMIA', className: '2 F Putra', hours: 2 },
  { no: 1, teacherName: 'ABDUL FATTAH AZZAM', unit: 'TMMIA', subjectName: 'TAMRIN LUGHOH TMMIA', className: '2 F Putra', hours: 2 },

  // 2 ABDUL HARIZ NAUFAL, S.Ag.
  { no: 2, teacherName: 'ABDUL HARIZ NAUFAL, S.Ag.', unit: 'TMMIA', subjectName: 'FIQIH TMMIA', className: '3 D Tahfiz Putra', hours: 2 },
  { no: 2, teacherName: 'ABDUL HARIZ NAUFAL, S.Ag.', unit: 'TMMIA', subjectName: 'FIQIH TMMIA', className: '3 E Putra', hours: 2 },
  { no: 2, teacherName: 'ABDUL HARIZ NAUFAL, S.Ag.', unit: 'TMMIA', subjectName: 'FIQIH TMMIA', className: '3 F Putra', hours: 2 },
  { no: 2, teacherName: 'ABDUL HARIZ NAUFAL, S.Ag.', unit: 'TMMIA', subjectName: 'TAJWID TMMIA', className: '2 E Putra', hours: 2 },
  { no: 2, teacherName: 'ABDUL HARIZ NAUFAL, S.Ag.', unit: 'TMMIA', subjectName: 'TAJWID TMMIA', className: '2 F Putra', hours: 2 },

  // 3 ADE HOLIDIN, S.Ag.
  { no: 3, teacherName: 'ADE HOLIDIN, S.Ag.', unit: 'TMMIA', subjectName: 'SHOROF TMMIA', className: '3 A Tahfiz Putri', hours: 2 },
  { no: 3, teacherName: 'ADE HOLIDIN, S.Ag.', unit: 'TMMIA', subjectName: 'SHOROF TMMIA', className: '3 B Putri', hours: 2 },

  // 4 ADE IHSAN FIRDAUS
  { no: 4, teacherName: 'ADE IHSAN FIRDAUS', unit: 'TMMIA', subjectName: 'AQIDAH TMMIA', className: '1 D Tahfiz Putra', hours: 2 },
  { no: 4, teacherName: 'ADE IHSAN FIRDAUS', unit: 'TMMIA', subjectName: 'MAHFUDZAT TMMIA', className: '1 D Tahfiz Putra', hours: 1 },

  // 5 AHMAD YANI, S.Pd. / AHAMD YANI, S.Pd.
  { no: 5, teacherName: 'AHMAD YANI, S.Pd.', unit: 'SMP', subjectName: 'I P S SMP', className: '2 B Putri', hours: 2 },
  { no: 5, teacherName: 'AHMAD YANI, S.Pd.', unit: 'SMP', subjectName: 'I P S SMP', className: '2 C Putri', hours: 2 },
  { no: 5, teacherName: 'AHMAD YANI, S.Pd.', unit: 'SMP', subjectName: 'I P S SMP', className: 'IX.4 Non Mukim Putri', hours: 2 },
  { no: 5, teacherName: 'AHMAD YANI, S.Pd.', unit: 'SMP', subjectName: 'I P S SMP', className: 'IX.4 Non Mukim Putri', hours: 2 },
  { no: 5, teacherName: 'AHMAD YANI, S.Pd.', unit: 'SMP', subjectName: 'I P S SMP', className: 'IX.8 Non Mukim Putra', hours: 2 },
  { no: 5, teacherName: 'AHMAD YANI, S.Pd.', unit: 'SMP', subjectName: 'I P S SMP', className: 'IX.8 Non Mukim Putra', hours: 2 },
  { no: 5, teacherName: 'AHMAD YANI, S.Pd.', unit: 'SMP', subjectName: 'I P S SMP', className: 'VII.3 Non Mukim Putri', hours: 2 },
  { no: 5, teacherName: 'AHMAD YANI, S.Pd.', unit: 'SMP', subjectName: 'I P S SMP', className: 'VII.3 Non Mukim Putri', hours: 1 },
  { no: 5, teacherName: 'AHMAD YANI, S.Pd.', unit: 'SMP', subjectName: 'I P S SMP', className: 'VII.3 Non Mukim Putri', hours: 1 },
  { no: 5, teacherName: 'AHMAD YANI, S.Pd.', unit: 'SMP', subjectName: 'I P S SMP', className: 'VII.6 Non Mukim Putra', hours: 2 },
  { no: 5, teacherName: 'AHMAD YANI, S.Pd.', unit: 'SMP', subjectName: 'I P S SMP', className: 'VII.6 Non Mukim Putra', hours: 1 },
  { no: 5, teacherName: 'AHMAD YANI, S.Pd.', unit: 'SMP', subjectName: 'I P S SMP', className: 'VII.6 Non Mukim Putra', hours: 1 },
  { no: 5, teacherName: 'AHMAD YANI, S.Pd.', unit: 'SMP', subjectName: 'I P S SMP', className: 'VIII.4 Non Mukim', hours: 2 },
  { no: 5, teacherName: 'AHMAD YANI, S.Pd.', unit: 'SMP', subjectName: 'I P S SMP', className: 'VIII.4 Non Mukim', hours: 2 },

  // 6 AHDINI RAHMATILLAH, Lc., S.S.I.
  { no: 6, teacherName: 'AHDINI RAHMATILLAH, Lc., S.S.I.', unit: 'TMMIA', subjectName: 'HADIS TMMIA', className: '3 A Tahfiz Putri', hours: 1 },
  { no: 6, teacherName: 'AHDINI RAHMATILLAH, Lc., S.S.I.', unit: 'TMMIA', subjectName: 'HADIS TMMIA', className: '3 D Tahfiz Putra', hours: 1 },
  { no: 6, teacherName: 'AHDINI RAHMATILLAH, Lc., S.S.I.', unit: 'TMMIA', subjectName: 'TAMRIN LUGHOH TMMIA', className: '3 A Tahfiz Putri', hours: 2 },
  { no: 6, teacherName: 'AHDINI RAHMATILLAH, Lc., S.S.I.', unit: 'TMMIA', subjectName: 'TAMRIN LUGHOH TMMIA', className: '3 A Tahfiz Putri', hours: 1 },
  { no: 6, teacherName: 'AHDINI RAHMATILLAH, Lc., S.S.I.', unit: 'TMMIA', subjectName: 'TAMRIN LUGHOH TMMIA', className: '3 B Putri', hours: 2 },
  { no: 6, teacherName: 'AHDINI RAHMATILLAH, Lc., S.S.I.', unit: 'TMMIA', subjectName: 'TAMRIN LUGHOH TMMIA', className: '3 B Putri', hours: 2 },

  // 7 AHMAD FAUZI RAHMAN
  { no: 7, teacherName: 'AHMAD FAUZI RAHMAN', unit: 'TMMIA', subjectName: 'HADIS TMMIA', className: '2 D Tahfiz Putra', hours: 1 },

  // 8 AHMAD HASAN MUNJAJI
  { no: 8, teacherName: 'AHMAD HASAN MUNJAJI', unit: 'TMMIA', subjectName: "MUTHOLA'AH TMMIA", className: '3 D Tahfiz Putra', hours: 2 },
  { no: 8, teacherName: 'AHMAD HASAN MUNJAJI', unit: 'TMMIA', subjectName: "MUTHOLA'AH TMMIA", className: '3 E Putra', hours: 2 },
  { no: 8, teacherName: 'AHMAD HASAN MUNJAJI', unit: 'TMMIA', subjectName: 'TAHFIZ TMMIA', className: '3 D Tahfiz Putra', hours: 2 },
  { no: 8, teacherName: 'AHMAD HASAN MUNJAJI', unit: 'TMMIA', subjectName: 'TAHFIZ TMMIA', className: '3 D Tahfiz Putra', hours: 2 },
  { no: 8, teacherName: 'AHMAD HASAN MUNJAJI', unit: 'TMMIA', subjectName: 'TAHFIZ TMMIA', className: '3 D Tahfiz Putra', hours: 2 },
  { no: 8, teacherName: 'AHMAD HASAN MUNJAJI', unit: 'TMMIA', subjectName: 'TAHFIZ TMMIA', className: '3 D Tahfiz Putra', hours: 2 },
  { no: 8, teacherName: 'AHMAD HASAN MUNJAJI', unit: 'TMMIA', subjectName: 'TAHFIZ TMMIA', className: '3 D Tahfiz Putra', hours: 2 },
  { no: 8, teacherName: 'AHMAD HASAN MUNJAJI', unit: 'TMMIA', subjectName: 'TAHFIZ TMMIA', className: '3 D Tahfiz Putra', hours: 2 },
  { no: 8, teacherName: 'AHMAD HASAN MUNJAJI', unit: 'TMMIA', subjectName: 'TAJWID TMMIA', className: '2 D Tahfiz Putra', hours: 1 },

  // 9 AHMAD LUJAENILMA, S.Kom.
  { no: 9, teacherName: 'AHMAD LUJAENILMA, S.Kom.', unit: 'SMP', subjectName: 'INFORMATIKA SMP', className: '3 B Putri', hours: 2 },
  { no: 9, teacherName: 'AHMAD LUJAENILMA, S.Kom.', unit: 'SMP', subjectName: 'INFORMATIKA SMP', className: '3 C Putri', hours: 2 },
  { no: 9, teacherName: 'AHMAD LUJAENILMA, S.Kom.', unit: 'SMP', subjectName: 'INFORMATIKA SMP', className: '3 E Putra', hours: 2 },
  { no: 9, teacherName: 'AHMAD LUJAENILMA, S.Kom.', unit: 'SMP', subjectName: 'INFORMATIKA SMP', className: '3 F Putra', hours: 2 },

  // 10 AHMAD SATIBI, S.Pd.
  { no: 10, teacherName: 'AHMAD SATIBI, S.Pd.', unit: 'TMMIA', subjectName: 'NAHWU TMMIA', className: '3 D Tahfiz Putra', hours: 2 },
  { no: 10, teacherName: 'AHMAD SATIBI, S.Pd.', unit: 'TMMIA', subjectName: 'NAHWU TMMIA', className: '3 E Putra', hours: 2 },
  { no: 10, teacherName: 'AHMAD SATIBI, S.Pd.', unit: 'TMMIA', subjectName: 'NAHWU TMMIA', className: '3 F Putra', hours: 2 },

  // 11 AHMAD SUKANTA, S.Pd.I.
  { no: 11, teacherName: 'AHMAD SUKANTA, S.Pd.I.', unit: 'SMP', subjectName: 'FIQIH SMP', className: 'VIII.4 Non Mukim', hours: 2 },
  { no: 11, teacherName: 'AHMAD SUKANTA, S.Pd.I.', unit: 'SMP', subjectName: 'HADIS SMP', className: 'IX.4 Non Mukim Putri', hours: 2 },
  { no: 11, teacherName: 'AHMAD SUKANTA, S.Pd.I.', unit: 'SMP', subjectName: 'HADIS SMP', className: 'IX.8 Non Mukim Putra', hours: 2 },
  { no: 11, teacherName: 'AHMAD SUKANTA, S.Pd.I.', unit: 'SMP', subjectName: 'HADIS SMP', className: 'VII.6 Non Mukim Putra', hours: 2 },
  { no: 11, teacherName: 'AHMAD SUKANTA, S.Pd.I.', unit: 'SMP', subjectName: 'HADIS SMP', className: 'VIII.4 Non Mukim', hours: 2 },
  { no: 11, teacherName: 'AHMAD SUKANTA, S.Pd.I.', unit: 'SMP', subjectName: 'INFORMATIKA SMP', className: 'IX.4 Non Mukim Putri', hours: 2 },
  { no: 11, teacherName: 'AHMAD SUKANTA, S.Pd.I.', unit: 'SMP', subjectName: 'INFORMATIKA SMP', className: 'IX.8 Non Mukim Putra', hours: 2 },
  { no: 11, teacherName: 'AHMAD SUKANTA, S.Pd.I.', unit: 'SMP', subjectName: 'INFORMATIKA SMP', className: 'VII.3 Non Mukim Putri', hours: 2 },
  { no: 11, teacherName: 'AHMAD SUKANTA, S.Pd.I.', unit: 'SMP', subjectName: 'INFORMATIKA SMP', className: 'VII.6 Non Mukim Putra', hours: 2 },
  { no: 11, teacherName: 'AHMAD SUKANTA, S.Pd.I.', unit: 'SMP', subjectName: 'INFORMATIKA SMP', className: 'VIII.4 Non Mukim', hours: 2 },

  // 12 AINI SYIFA, S.S.
  { no: 12, teacherName: 'AINI SYIFA, S.S.', unit: 'SMP', subjectName: 'B. INDONESIA SMP', className: '1 A Tahfiz Putri', hours: 2 },
  { no: 12, teacherName: 'AINI SYIFA, S.S.', unit: 'SMP', subjectName: 'B. INDONESIA SMP', className: '1 D Tahfiz Putra', hours: 2 },
  { no: 12, teacherName: 'AINI SYIFA, S.S.', unit: 'SMP', subjectName: 'B. INDONESIA SMP', className: '2 A Tahfiz Putri', hours: 2 },
  { no: 12, teacherName: 'AINI SYIFA, S.S.', unit: 'SMP', subjectName: 'B. INDONESIA SMP', className: '2 B Putri', hours: 2 },
  { no: 12, teacherName: 'AINI SYIFA, S.S.', unit: 'SMP', subjectName: 'B. INDONESIA SMP', className: '2 B Putri', hours: 1 },
  { no: 12, teacherName: 'AINI SYIFA, S.S.', unit: 'SMP', subjectName: 'B. INDONESIA SMP', className: '2 C Putri', hours: 2 },
  { no: 12, teacherName: 'AINI SYIFA, S.S.', unit: 'SMP', subjectName: 'B. INDONESIA SMP', className: '2 C Putri', hours: 1 },
  { no: 12, teacherName: 'AINI SYIFA, S.S.', unit: 'SMP', subjectName: 'B. INDONESIA SMP', className: '2 D Tahfiz Putra', hours: 2 },
  { no: 12, teacherName: 'AINI SYIFA, S.S.', unit: 'TMMIA', subjectName: 'NAHWU TMMIA', className: '3 B Putri', hours: 2 },
  { no: 12, teacherName: 'AINI SYIFA, S.S.', unit: 'TMMIA', subjectName: 'NAHWU TMMIA', className: '3 C Putri', hours: 2 },

  // 13 ALFI NURFADILAH
  { no: 13, teacherName: 'ALFI NURFADILAH', unit: 'SMP', subjectName: 'METEMATIKA SMP', className: '1 B Putri', hours: 2 },
  { no: 13, teacherName: 'ALFI NURFADILAH', unit: 'SMP', subjectName: 'METEMATIKA SMP', className: '1 B Putri', hours: 2 },
  { no: 13, teacherName: 'ALFI NURFADILAH', unit: 'TMMIA', subjectName: "MUTHOLA'AH TMMIA", className: '1 A Tahfiz Putri', hours: 2 },
  { no: 13, teacherName: 'ALFI NURFADILAH', unit: 'TMMIA', subjectName: "MUTHOLA'AH TMMIA", className: '1 B Putri', hours: 2 },

  // 14 ALMAAS JHOUNG ASRI, S.Sos.
  { no: 14, teacherName: 'ALMAAS JHOUNG ASRI, S.Sos.', unit: 'TMMIA', subjectName: 'AQIDAH TMMIA', className: '1 E Putra', hours: 2 },

  // 15 AMALIA NUR FARIHA, S.Pd.
  { no: 15, teacherName: 'AMALIA NUR FARIHA, S.Pd.', unit: 'TMMIA', subjectName: 'TAHFIZ TMMIA', className: '1 A Tahfiz Putri', hours: 2 },
  { no: 15, teacherName: 'AMALIA NUR FARIHA, S.Pd.', unit: 'TMMIA', subjectName: 'TAHFIZ TMMIA', className: '1 A Tahfiz Putri', hours: 2 },
  { no: 15, teacherName: 'AMALIA NUR FARIHA, S.Pd.', unit: 'TMMIA', subjectName: 'TAHFIZ TMMIA', className: '1 A Tahfiz Putri', hours: 2 },
  { no: 15, teacherName: 'AMALIA NUR FARIHA, S.Pd.', unit: 'TMMIA', subjectName: 'TAHFIZ TMMIA', className: '1 A Tahfiz Putri', hours: 2 },
  { no: 15, teacherName: 'AMALIA NUR FARIHA, S.Pd.', unit: 'TMMIA', subjectName: 'TAHFIZ TMMIA', className: '1 A Tahfiz Putri', hours: 2 },
  { no: 15, teacherName: 'AMALIA NUR FARIHA, S.Pd.', unit: 'TMMIA', subjectName: 'TAHFIZ TMMIA', className: '1 A Tahfiz Putri', hours: 2 },

  // 16 ANISA SITI NABILAH, S.Pd.
  { no: 16, teacherName: 'ANISA SITI NABILAH, S.Pd.', unit: 'SMP', subjectName: 'PEND. PANCASILA SMP', className: '1 A Tahfiz Putri', hours: 1 },
  { no: 16, teacherName: 'ANISA SITI NABILAH, S.Pd.', unit: 'SMP', subjectName: 'PEND. PANCASILA SMP', className: '1 B Putri', hours: 2 },
  { no: 16, teacherName: 'ANISA SITI NABILAH, S.Pd.', unit: 'SMP', subjectName: 'PEND. PANCASILA SMP', className: '1 D Tahfiz Putra', hours: 1 },
  { no: 16, teacherName: 'ANISA SITI NABILAH, S.Pd.', unit: 'SMP', subjectName: 'PEND. PANCASILA SMP', className: '1 E Putra', hours: 2 },
  { no: 16, teacherName: 'ANISA SITI NABILAH, S.Pd.', unit: 'SMP', subjectName: 'PEND. PANCASILA SMP', className: 'VII.3 Non Mukim Putri', hours: 2 },
  { no: 16, teacherName: 'ANISA SITI NABILAH, S.Pd.', unit: 'SMP', subjectName: 'PEND. PANCASILA SMP', className: 'VII.6 Non Mukim Putra', hours: 2 },
  { no: 16, teacherName: 'ANISA SITI NABILAH, S.Pd.', unit: 'SMP', subjectName: 'PEND. PANCASILA SMP', className: 'VIII.4 Non Mukim', hours: 2 },
  { no: 16, teacherName: 'ANISA SITI NABILAH, S.Pd.', unit: 'TMMIA', subjectName: 'TARIKH ISLAM TMMIA', className: '1 B Putri', hours: 2 },
  { no: 16, teacherName: 'ANISA SITI NABILAH, S.Pd.', unit: 'TMMIA', subjectName: 'TARIKH ISLAM TMMIA', className: '1 E Putra', hours: 2 },

  // 17 ASEP SAEPUL MILLAH, M.Pd.
  { no: 17, teacherName: 'ASEP SAEPUL MILLAH, M.Pd.', unit: 'SMP', subjectName: 'B. INGGRIS SMP', className: '2 F Putra', hours: 1 },
  { no: 17, teacherName: 'ASEP SAEPUL MILLAH, M.Pd.', unit: 'SMP', subjectName: 'B. INGGRIS SMP', className: '2 F Putra', hours: 2 },

  // 18 ASEP TARUNA JAYA
  { no: 18, teacherName: 'ASEP TARUNA JAYA', unit: 'TMMIA', subjectName: 'MAHFUDZAT TMMIA', className: '2 E Putra', hours: 1 },
  { no: 18, teacherName: 'ASEP TARUNA JAYA', unit: 'TMMIA', subjectName: 'MAHFUDZAT TMMIA', className: '2 F Putra', hours: 1 },

  // 19 AULIA SABILA MUFIDA
  { no: 19, teacherName: 'AULIA SABILA MUFIDA', unit: 'TMMIA', subjectName: 'MAHFUDZAT TMMIA', className: '2 C Putri', hours: 1 },

  // 20 BAYU NIRPANA, M.H.
  { no: 20, teacherName: 'BAYU NIRPANA, M.H.', unit: 'SMP', subjectName: 'BAHASA ARAB SMP', className: 'IX.4 Non Mukim Putri', hours: 2 },
  { no: 20, teacherName: 'BAYU NIRPANA, M.H.', unit: 'SMP', subjectName: 'BAHASA ARAB SMP', className: 'IX.8 Non Mukim Putra', hours: 2 },
  { no: 20, teacherName: 'BAYU NIRPANA, M.H.', unit: 'TMMIA', subjectName: 'INSYA TMMIA', className: '3 A Tahfiz Putri', hours: 2 },
  { no: 20, teacherName: 'BAYU NIRPANA, M.H.', unit: 'TMMIA', subjectName: 'INSYA TMMIA', className: '3 B Putri', hours: 2 },
  { no: 20, teacherName: 'BAYU NIRPANA, M.H.', unit: 'TMMIA', subjectName: 'INSYA TMMIA', className: '3 C Putri', hours: 2 },

  // 21 DAVA NUR PEBRIANTO, S.Pd.
  { no: 21, teacherName: 'DAVA NUR PEBRIANTO, S.Pd.', unit: 'TMMIA', subjectName: 'NAHWU TMMIA', className: '3 A Tahfiz Putri', hours: 2 },

  // 22 DEA AMANDA PUTRI
  { no: 22, teacherName: 'DEA AMANDA PUTRI', unit: 'TMMIA', subjectName: 'TARIKH ISLAM TMMIA', className: '1 A Tahfiz Putri', hours: 2 },

  // 23 DIDAH ROSIDAH, S.Pd.
  { no: 23, teacherName: 'DIDAH ROSIDAH, S.Pd.', unit: 'SMP', subjectName: 'B. SUNDA SMP', className: '1 B Putri', hours: 1 },
  { no: 23, teacherName: 'DIDAH ROSIDAH, S.Pd.', unit: 'SMP', subjectName: 'B. SUNDA SMP', className: '1 E Putra', hours: 1 },
  { no: 23, teacherName: 'DIDAH ROSIDAH, S.Pd.', unit: 'SMP', subjectName: 'B. SUNDA SMP', className: '2 B Putri', hours: 1 },
  { no: 23, teacherName: 'DIDAH ROSIDAH, S.Pd.', unit: 'SMP', subjectName: 'B. SUNDA SMP', className: '2 C Putri', hours: 1 },
  { no: 23, teacherName: 'DIDAH ROSIDAH, S.Pd.', unit: 'SMP', subjectName: 'B. SUNDA SMP', className: '2 E Putra', hours: 1 },
  { no: 23, teacherName: 'DIDAH ROSIDAH, S.Pd.', unit: 'SMP', subjectName: 'B. SUNDA SMP', className: '2 F Putra', hours: 1 },
  { no: 23, teacherName: 'DIDAH ROSIDAH, S.Pd.', unit: 'SMP', subjectName: 'B. SUNDA SMP', className: '3 B Putri', hours: 1 },
  { no: 23, teacherName: 'DIDAH ROSIDAH, S.Pd.', unit: 'SMP', subjectName: 'B. SUNDA SMP', className: '3 C Putri', hours: 1 },
  { no: 23, teacherName: 'DIDAH ROSIDAH, S.Pd.', unit: 'SMP', subjectName: 'B. SUNDA SMP', className: '3 E Putra', hours: 1 },
  { no: 23, teacherName: 'DIDAH ROSIDAH, S.Pd.', unit: 'SMP', subjectName: 'B. SUNDA SMP', className: '3 F Putra', hours: 1 },
  { no: 23, teacherName: 'DIDAH ROSIDAH, S.Pd.', unit: 'SMP', subjectName: 'B. SUNDA SMP', className: 'IX.4 Non Mukim Putri', hours: 2 },
  { no: 23, teacherName: 'DIDAH ROSIDAH, S.Pd.', unit: 'SMP', subjectName: 'B. SUNDA SMP', className: 'IX.8 Non Mukim Putra', hours: 2 },
  { no: 23, teacherName: 'DIDAH ROSIDAH, S.Pd.', unit: 'SMP', subjectName: 'B. SUNDA SMP', className: 'VII.3 Non Mukim Putri', hours: 2 },
  { no: 23, teacherName: 'DIDAH ROSIDAH, S.Pd.', unit: 'SMP', subjectName: 'B. SUNDA SMP', className: 'VII.6 Non Mukim Putra', hours: 2 },
  { no: 23, teacherName: 'DIDAH ROSIDAH, S.Pd.', unit: 'SMP', subjectName: 'B. SUNDA SMP', className: 'VIII.4 Non Mukim', hours: 2 },

  // 24 DINDA NAAFIDA ARIFIN, S.S.
  { no: 24, teacherName: 'DINDA NAAFIDA ARIFIN, S.S.', unit: 'SMP', subjectName: 'HADIS SMP', className: 'VII.3 Non Mukim Putri', hours: 2 },
  { no: 24, teacherName: 'DINDA NAAFIDA ARIFIN, S.S.', unit: 'TMMIA', subjectName: 'HADIS TMMIA', className: '1 A Tahfiz Putri', hours: 1 },
  { no: 24, teacherName: 'DINDA NAAFIDA ARIFIN, S.S.', unit: 'TMMIA', subjectName: 'HADIS TMMIA', className: '1 B Putri', hours: 1 },
  { no: 24, teacherName: 'DINDA NAAFIDA ARIFIN, S.S.', unit: 'TMMIA', subjectName: 'HADIS TMMIA', className: '1 D Tahfiz Putra', hours: 1 },
  { no: 24, teacherName: 'DINDA NAAFIDA ARIFIN, S.S.', unit: 'TMMIA', subjectName: 'HADIS TMMIA', className: '1 E Putra', hours: 1 },

  // 25 EDI SANJAYA, S.Pd.
  { no: 25, teacherName: 'EDI SANJAYA, S.Pd.', unit: 'SMP', subjectName: 'B. INDONESIA SMP', className: '2 E Putra', hours: 1 },
  { no: 25, teacherName: 'EDI SANJAYA, S.Pd.', unit: 'SMP', subjectName: 'B. INDONESIA SMP', className: '2 E Putra', hours: 2 },
  { no: 25, teacherName: 'EDI SANJAYA, S.Pd.', unit: 'SMP', subjectName: 'B. INDONESIA SMP', className: '2 F Putra', hours: 1 },
  { no: 25, teacherName: 'EDI SANJAYA, S.Pd.', unit: 'SMP', subjectName: 'B. INDONESIA SMP', className: '2 F Putra', hours: 2 },
  { no: 25, teacherName: 'EDI SANJAYA, S.Pd.', unit: 'SMP', subjectName: 'B. INDONESIA SMP', className: 'VII.3 Non Mukim Putri', hours: 1 },
  { no: 25, teacherName: 'EDI SANJAYA, S.Pd.', unit: 'SMP', subjectName: 'B. INDONESIA SMP', className: 'VII.3 Non Mukim Putri', hours: 2 },
  { no: 25, teacherName: 'EDI SANJAYA, S.Pd.', unit: 'SMP', subjectName: 'B. INDONESIA SMP', className: 'VII.6 Non Mukim Putra', hours: 1 },
  { no: 25, teacherName: 'EDI SANJAYA, S.Pd.', unit: 'SMP', subjectName: 'B. INDONESIA SMP', className: 'VII.6 Non Mukim Putra', hours: 2 },
  { no: 25, teacherName: 'EDI SANJAYA, S.Pd.', unit: 'SMP', subjectName: 'B. INDONESIA SMP', className: 'VIII.4 Non Mukim', hours: 1 },
  { no: 25, teacherName: 'EDI SANJAYA, S.Pd.', unit: 'SMP', subjectName: 'B. INDONESIA SMP', className: 'VIII.4 Non Mukim', hours: 2 },

  // 26 ENDANG DARMAWAN PANDAWA AGUNG, S.Pd.
  { no: 26, teacherName: 'ENDANG DARMAWAN PANDAWA AGUNG, S.Pd.', unit: 'TMMIA', subjectName: 'NAHWU TMMIA', className: '2 A Tahfiz Putri', hours: 2 },
  { no: 26, teacherName: 'ENDANG DARMAWAN PANDAWA AGUNG, S.Pd.', unit: 'TMMIA', subjectName: 'NAHWU TMMIA', className: '2 B Putri', hours: 2 },
  { no: 26, teacherName: 'ENDANG DARMAWAN PANDAWA AGUNG, S.Pd.', unit: 'TMMIA', subjectName: 'NAHWU TMMIA', className: '2 C Putri', hours: 2 },

  // 27 FAHRU ROJI MALIK, S.M.
  { no: 27, teacherName: 'FAHRU ROJI MALIK, S.M.', unit: 'TMMIA', subjectName: 'HADIS TMMIA', className: '2 E Putra', hours: 1 },
  { no: 27, teacherName: 'FAHRU ROJI MALIK, S.M.', unit: 'TMMIA', subjectName: 'HADIS TMMIA', className: '2 F Putra', hours: 1 },

  // 28 FIQIH KARTIKA MURNI, S.Pd.
  { no: 28, teacherName: 'FIQIH KARTIKA MURNI, S.Pd.', unit: 'SMP', subjectName: 'I P A SMP', className: '3 A Tahfiz Putri', hours: 2 },
  { no: 28, teacherName: 'FIQIH KARTIKA MURNI, S.Pd.', unit: 'SMP', subjectName: 'I P A SMP', className: '3 B Putri', hours: 2 },
  { no: 28, teacherName: 'FIQIH KARTIKA MURNI, S.Pd.', unit: 'SMP', subjectName: 'I P A SMP', className: '3 B Putri', hours: 1 },
  { no: 28, teacherName: 'FIQIH KARTIKA MURNI, S.Pd.', unit: 'SMP', subjectName: 'I P A SMP', className: '3 C Putri', hours: 2 },
  { no: 28, teacherName: 'FIQIH KARTIKA MURNI, S.Pd.', unit: 'SMP', subjectName: 'I P A SMP', className: '3 C Putri', hours: 1 },
  { no: 28, teacherName: 'FIQIH KARTIKA MURNI, S.Pd.', unit: 'SMP', subjectName: 'I P A SMP', className: '3 D Tahfiz Putra', hours: 2 },
  { no: 28, teacherName: 'FIQIH KARTIKA MURNI, S.Pd.', unit: 'SMP', subjectName: 'I P A SMP', className: '3 E Putra', hours: 2 },
  { no: 28, teacherName: 'FIQIH KARTIKA MURNI, S.Pd.', unit: 'SMP', subjectName: 'I P A SMP', className: '3 E Putra', hours: 1 },
  { no: 28, teacherName: 'FIQIH KARTIKA MURNI, S.Pd.', unit: 'SMP', subjectName: 'I P A SMP', className: '3 F Putra', hours: 2 },
  { no: 28, teacherName: 'FIQIH KARTIKA MURNI, S.Pd.', unit: 'SMP', subjectName: 'I P A SMP', className: '3 F Putra', hours: 1 },
  { no: 28, teacherName: 'FIQIH KARTIKA MURNI, S.Pd.', unit: 'SMP', subjectName: 'I P A SMP', className: 'IX.4 Non Mukim Putri', hours: 2 },
  { no: 28, teacherName: 'FIQIH KARTIKA MURNI, S.Pd.', unit: 'SMP', subjectName: 'I P A SMP', className: 'IX.4 Non Mukim Putri', hours: 1 },
  { no: 28, teacherName: 'FIQIH KARTIKA MURNI, S.Pd.', unit: 'SMP', subjectName: 'I P A SMP', className: 'IX.4 Non Mukim Putri', hours: 1 },
  { no: 28, teacherName: 'FIQIH KARTIKA MURNI, S.Pd.', unit: 'SMP', subjectName: 'I P A SMP', className: 'IX.8 Non Mukim Putra', hours: 2 },
  { no: 28, teacherName: 'FIQIH KARTIKA MURNI, S.Pd.', unit: 'SMP', subjectName: 'I P A SMP', className: 'IX.8 Non Mukim Putra', hours: 2 },

  // 29 HAFIZD HIDAYAT, S.Pd., Gr.
  { no: 29, teacherName: 'HAFIZD HIDAYAT, S.Pd., Gr.', unit: 'SMP', subjectName: 'B. INGGRIS SMP', className: '3 E Putra', hours: 1 },
  { no: 29, teacherName: 'HAFIZD HIDAYAT, S.Pd., Gr.', unit: 'SMP', subjectName: 'B. INGGRIS SMP', className: '3 E Putra', hours: 2 },
  { no: 29, teacherName: 'HAFIZD HIDAYAT, S.Pd., Gr.', unit: 'SMP', subjectName: 'B. INGGRIS SMP', className: '3 F Putra', hours: 1 },
  { no: 29, teacherName: 'HAFIZD HIDAYAT, S.Pd., Gr.', unit: 'SMP', subjectName: 'B. INGGRIS SMP', className: '3 F Putra', hours: 2 },
  { no: 29, teacherName: 'HAFIZD HIDAYAT, S.Pd., Gr.', unit: 'SMP', subjectName: 'B. INGGRIS SMP', className: 'IX.8 Non Mukim Putra', hours: 1 },
  { no: 29, teacherName: 'HAFIZD HIDAYAT, S.Pd., Gr.', unit: 'SMP', subjectName: 'B. INGGRIS SMP', className: 'IX.8 Non Mukim Putra', hours: 2 },

  // 30 HAMMAD IYAD FAIJI
  { no: 30, teacherName: 'HAMMAD IYAD FAIJI', unit: 'TMMIA', subjectName: 'TAHFIZ TMMIA', className: '2 D Tahfiz Putra', hours: 2 },
  { no: 30, teacherName: 'HAMMAD IYAD FAIJI', unit: 'TMMIA', subjectName: 'TAHFIZ TMMIA', className: '2 D Tahfiz Putra', hours: 2 },
  { no: 30, teacherName: 'HAMMAD IYAD FAIJI', unit: 'TMMIA', subjectName: 'TAHFIZ TMMIA', className: '2 D Tahfiz Putra', hours: 2 },
  { no: 30, teacherName: 'HAMMAD IYAD FAIJI', unit: 'TMMIA', subjectName: 'TAHFIZ TMMIA', className: '2 D Tahfiz Putra', hours: 2 },
  { no: 30, teacherName: 'HAMMAD IYAD FAIJI', unit: 'TMMIA', subjectName: 'TAHFIZ TMMIA', className: '2 D Tahfiz Putra', hours: 2 },
  { no: 30, teacherName: 'HAMMAD IYAD FAIJI', unit: 'TMMIA', subjectName: 'TAHFIZ TMMIA', className: '2 D Tahfiz Putra', hours: 2 },
  { no: 30, teacherName: 'HAMMAD IYAD FAIJI', unit: 'TMMIA', subjectName: 'TAMRIN LUGHOH TMMIA', className: '2 D Tahfiz Putra', hours: 1 },
  { no: 30, teacherName: 'HAMMAD IYAD FAIJI', unit: 'TMMIA', subjectName: 'TAMRIN LUGHOH TMMIA', className: '2 D Tahfiz Putra', hours: 2 },

  // 31 HAMZAH ROBBANI
  { no: 31, teacherName: 'HAMZAH ROBBANI', unit: 'TMMIA', subjectName: 'FIQIH TMMIA', className: '2 A Tahfiz Putri', hours: 2 },
  { no: 31, teacherName: 'HAMZAH ROBBANI', unit: 'TMMIA', subjectName: 'FIQIH TMMIA', className: '2 D Tahfiz Putra', hours: 2 },

  // 32 HILDA MAULIDA NUR HIDAYATI
  { no: 32, teacherName: 'HILDA MAULIDA NUR HIDAYATI', unit: 'TMMIA', subjectName: 'MAHFUDZAT TMMIA', className: '1 B Putri', hours: 1 },

  // 33 ICHSANUL AFIEF, S.Sos.
  { no: 33, teacherName: 'ICHSANUL AFIEF, S.Sos.', unit: 'SMP', subjectName: 'BAHASA ARAB SMP', className: 'VII.3 Non Mukim Putri', hours: 2 },
  { no: 33, teacherName: 'ICHSANUL AFIEF, S.Sos.', unit: 'SMP', subjectName: 'BAHASA ARAB SMP', className: 'VII.6 Non Mukim Putra', hours: 2 },
  { no: 33, teacherName: 'ICHSANUL AFIEF, S.Sos.', unit: 'SMP', subjectName: 'BAHASA ARAB SMP', className: 'VIII.4 Non Mukim', hours: 2 },
  { no: 33, teacherName: 'ICHSANUL AFIEF, S.Sos.', unit: 'TMMIA', subjectName: 'SHOROF TMMIA', className: '3 C Putri', hours: 2 },
  { no: 33, teacherName: 'ICHSANUL AFIEF, S.Sos.', unit: 'TMMIA', subjectName: 'SHOROF TMMIA', className: '3 D Tahfiz Putra', hours: 2 },
  { no: 33, teacherName: 'ICHSANUL AFIEF, S.Sos.', unit: 'TMMIA', subjectName: 'SHOROF TMMIA', className: '3 E Putra', hours: 2 },
  { no: 33, teacherName: 'ICHSANUL AFIEF, S.Sos.', unit: 'TMMIA', subjectName: 'SHOROF TMMIA', className: '3 F Putra', hours: 2 },

  // 34 ILMI MIFTAHUL JANNAH
  { no: 34, teacherName: 'ILMI MIFTAHUL JANNAH', unit: 'TMMIA', subjectName: 'HADIS TMMIA', className: '2 A Tahfiz Putri', hours: 1 },
  { no: 34, teacherName: 'ILMI MIFTAHUL JANNAH', unit: 'TMMIA', subjectName: 'HADIS TMMIA', className: '2 B Putri', hours: 1 },
  { no: 34, teacherName: 'ILMI MIFTAHUL JANNAH', unit: 'TMMIA', subjectName: 'IMLA TMMIA', className: '2 A Tahfiz Putri', hours: 2 },

  // 35 IRMAYANTI, M.Pd.
  { no: 35, teacherName: 'IRMAYANTI, M.Pd.', unit: 'SMP', subjectName: 'METEMATIKA SMP', className: '3 A Tahfiz Putri', hours: 2 },
  { no: 35, teacherName: 'IRMAYANTI, M.Pd.', unit: 'SMP', subjectName: 'METEMATIKA SMP', className: '3 B Putri', hours: 2 },
  { no: 35, teacherName: 'IRMAYANTI, M.Pd.', unit: 'SMP', subjectName: 'METEMATIKA SMP', className: '3 B Putri', hours: 2 },
  { no: 35, teacherName: 'IRMAYANTI, M.Pd.', unit: 'SMP', subjectName: 'METEMATIKA SMP', className: '3 C Putri', hours: 2 },
  { no: 35, teacherName: 'IRMAYANTI, M.Pd.', unit: 'SMP', subjectName: 'METEMATIKA SMP', className: '3 C Putri', hours: 2 },
  { no: 35, teacherName: 'IRMAYANTI, M.Pd.', unit: 'SMP', subjectName: 'METEMATIKA SMP', className: '3 D Tahfiz Putra', hours: 2 },
  { no: 35, teacherName: 'IRMAYANTI, M.Pd.', unit: 'SMP', subjectName: 'METEMATIKA SMP', className: '3 E Putra', hours: 2 },
  { no: 35, teacherName: 'IRMAYANTI, M.Pd.', unit: 'SMP', subjectName: 'METEMATIKA SMP', className: '3 E Putra', hours: 2 },
  { no: 35, teacherName: 'IRMAYANTI, M.Pd.', unit: 'SMP', subjectName: 'METEMATIKA SMP', className: '3 F Putra', hours: 2 },
  { no: 35, teacherName: 'IRMAYANTI, M.Pd.', unit: 'SMP', subjectName: 'METEMATIKA SMP', className: '3 F Putra', hours: 2 },

  // 36 ISWAHYUDIN, S.E.
  { no: 36, teacherName: 'ISWAHYUDIN, S.E.', unit: 'SMP', subjectName: 'I P S SMP', className: '2 A Tahfiz Putri', hours: 2 },
  { no: 36, teacherName: 'ISWAHYUDIN, S.E.', unit: 'SMP', subjectName: 'I P S SMP', className: '2 D Tahfiz Putra', hours: 2 },
  { no: 36, teacherName: 'ISWAHYUDIN, S.E.', unit: 'SMP', subjectName: 'I P S SMP', className: '3 A Tahfiz Putri', hours: 2 },
  { no: 36, teacherName: 'ISWAHYUDIN, S.E.', unit: 'SMP', subjectName: 'I P S SMP', className: '3 B Putri', hours: 2 },
  { no: 36, teacherName: 'ISWAHYUDIN, S.E.', unit: 'SMP', subjectName: 'I P S SMP', className: '3 C Putri', hours: 2 },
  { no: 36, teacherName: 'ISWAHYUDIN, S.E.', unit: 'SMP', subjectName: 'I P S SMP', className: '3 D Tahfiz Putra', hours: 2 },
  { no: 36, teacherName: 'ISWAHYUDIN, S.E.', unit: 'SMP', subjectName: 'I P S SMP', className: '3 E Putra', hours: 2 },
  { no: 36, teacherName: 'ISWAHYUDIN, S.E.', unit: 'SMP', subjectName: 'I P S SMP', className: '3 F Putra', hours: 2 },

  // 37 KHAIRIL FAHMI, S.Pd.
  { no: 37, teacherName: 'KHAIRIL FAHMI, S.Pd.', unit: 'TMMIA', subjectName: 'TARIKH ISLAM TMMIA', className: '2 D Tahfiz Putra', hours: 1 },
  { no: 37, teacherName: 'KHAIRIL FAHMI, S.Pd.', unit: 'TMMIA', subjectName: 'TARIKH ISLAM TMMIA', className: '2 E Putra', hours: 2 },
  { no: 37, teacherName: 'KHAIRIL FAHMI, S.Pd.', unit: 'TMMIA', subjectName: 'TARIKH ISLAM TMMIA', className: '2 F Putra', hours: 2 },

  // 38 LULU ZAHROTUN NISA, S.Pd.
  { no: 38, teacherName: 'LULU ZAHROTUN NISA, S.Pd.', unit: 'SMP', subjectName: 'B. INGGRIS SMP', className: '3 A Tahfiz Putri', hours: 2 },
  { no: 38, teacherName: 'LULU ZAHROTUN NISA, S.Pd.', unit: 'SMP', subjectName: 'B. INGGRIS SMP', className: '3 B Putri', hours: 2 },
  { no: 38, teacherName: 'LULU ZAHROTUN NISA, S.Pd.', unit: 'SMP', subjectName: 'B. INGGRIS SMP', className: '3 B Putri', hours: 1 },
  { no: 38, teacherName: 'LULU ZAHROTUN NISA, S.Pd.', unit: 'SMP', subjectName: 'B. INGGRIS SMP', className: '3 C Putri', hours: 2 },
  { no: 38, teacherName: 'LULU ZAHROTUN NISA, S.Pd.', unit: 'SMP', subjectName: 'B. INGGRIS SMP', className: '3 C Putri', hours: 1 },
  { no: 38, teacherName: 'LULU ZAHROTUN NISA, S.Pd.', unit: 'SMP', subjectName: 'B. INGGRIS SMP', className: 'IX.4 Non Mukim Putri', hours: 2 },
  { no: 38, teacherName: 'LULU ZAHROTUN NISA, S.Pd.', unit: 'SMP', subjectName: 'B. INGGRIS SMP', className: 'IX.4 Non Mukim Putri', hours: 1 },
  { no: 38, teacherName: 'LULU ZAHROTUN NISA, S.Pd.', unit: 'SMP', subjectName: 'METEMATIKA SMP', className: '1 A Tahfiz Putri', hours: 2 },
  { no: 38, teacherName: 'LULU ZAHROTUN NISA, S.Pd.', unit: 'SMP', subjectName: 'METEMATIKA SMP', className: '1 D Tahfiz Putra', hours: 2 },

  // 39 M. ALIEF NUGRAHA ATFA, S.H.
  { no: 39, teacherName: 'M. ALIEF NUGRAHA ATFA, S.H.', unit: 'SMP', subjectName: 'BTQ SMP', className: 'VII.3 Non Mukim Putri', hours: 2 },
  { no: 39, teacherName: 'M. ALIEF NUGRAHA ATFA, S.H.', unit: 'SMP', subjectName: 'BTQ SMP', className: 'VIII.4 Non Mukim', hours: 2 },
  { no: 39, teacherName: 'M. ALIEF NUGRAHA ATFA, S.H.', unit: 'TMMIA', subjectName: 'TAMRIN LUGHOH TMMIA', className: '3 C Putri', hours: 2 },
  { no: 39, teacherName: 'M. ALIEF NUGRAHA ATFA, S.H.', unit: 'TMMIA', subjectName: 'TAMRIN LUGHOH TMMIA', className: '3 C Putri', hours: 2 },

  // 40 M. IRHAM AL-BAIHAQI
  { no: 40, teacherName: 'M. IRHAM AL-BAIHAQI', unit: 'TMMIA', subjectName: "MUTHOLA'AH TMMIA", className: '2 D Tahfiz Putra', hours: 2 },
  { no: 40, teacherName: 'M. IRHAM AL-BAIHAQI', unit: 'TMMIA', subjectName: 'NAHWU TMMIA', className: '2 D Tahfiz Putra', hours: 2 },
  { no: 40, teacherName: 'M. IRHAM AL-BAIHAQI', unit: 'TMMIA', subjectName: 'TAMRIN LUGHOH TMMIA', className: '3 D Tahfiz Putra', hours: 1 },
  { no: 40, teacherName: 'M. IRHAM AL-BAIHAQI', unit: 'TMMIA', subjectName: 'TAMRIN LUGHOH TMMIA', className: '3 D Tahfiz Putra', hours: 2 },

  // 41 M. WILDAN MAULANA, S.Pd.
  { no: 41, teacherName: 'M. WILDAN MAULANA, S.Pd.', unit: 'SMP', subjectName: 'PENJAS SMP', className: '1 B Putri', hours: 2 },
  { no: 41, teacherName: 'M. WILDAN MAULANA, S.Pd.', unit: 'SMP', subjectName: 'PENJAS SMP', className: 'VII.3 Non Mukim Putri', hours: 2 },
  { no: 41, teacherName: 'M. WILDAN MAULANA, S.Pd.', unit: 'SMP', subjectName: 'PENJAS SMP', className: 'VII.6 Non Mukim Putra', hours: 2 },
  { no: 41, teacherName: 'M. WILDAN MAULANA, S.Pd.', unit: 'SMP', subjectName: 'PENJAS SMP', className: 'VIII.4 Non Mukim', hours: 2 },
  { no: 41, teacherName: 'M. WILDAN MAULANA, S.Pd.', unit: 'SMP', subjectName: 'PENJAS TAHFIZ SMP', className: '1 A Tahfiz Putri', hours: 2 },
  { no: 41, teacherName: 'M. WILDAN MAULANA, S.Pd.', unit: 'SMP', subjectName: 'PENJAS TAHFIZ SMP', className: '1 D Tahfiz Putra', hours: 2 },
  { no: 41, teacherName: 'M. WILDAN MAULANA, S.Pd.', unit: 'SMP', subjectName: 'PENJAS TAHFIZ SMP', className: '2 A Tahfiz Putri', hours: 2 },
  { no: 41, teacherName: 'M. WILDAN MAULANA, S.Pd.', unit: 'SMP', subjectName: 'PENJAS TAHFIZ SMP', className: '2 D Tahfiz Putra', hours: 2 },
  { no: 41, teacherName: 'M. WILDAN MAULANA, S.Pd.', unit: 'TMMIA', subjectName: 'IMLA TMMIA', className: '3 E Putra', hours: 2 },
  { no: 41, teacherName: 'M. WILDAN MAULANA, S.Pd.', unit: 'TMMIA', subjectName: 'IMLA TMMIA', className: '3 F Putra', hours: 2 },

  // 42 MARIA ULFA, S.S
  { no: 42, teacherName: 'MARIA ULFA, S.S', unit: 'SMP', subjectName: 'B. INGGRIS SMP', className: '2 A Tahfiz Putri', hours: 2 },
  { no: 42, teacherName: 'MARIA ULFA, S.S', unit: 'SMP', subjectName: 'B. INGGRIS SMP', className: '2 B Putri', hours: 2 },
  { no: 42, teacherName: 'MARIA ULFA, S.S', unit: 'SMP', subjectName: 'B. INGGRIS SMP', className: '2 B Putri', hours: 1 },
  { no: 42, teacherName: 'MARIA ULFA, S.S', unit: 'SMP', subjectName: 'B. INGGRIS SMP', className: '2 C Putri', hours: 2 },
  { no: 42, teacherName: 'MARIA ULFA, S.S', unit: 'SMP', subjectName: 'B. INGGRIS SMP', className: '2 C Putri', hours: 1 },
  { no: 42, teacherName: 'MARIA ULFA, S.S', unit: 'SMP', subjectName: 'B. INGGRIS SMP', className: '2 D Tahfiz Putra', hours: 2 },

  // 43 MOH AFRIZA TRIWARDANA
  { no: 43, teacherName: 'MOH AFRIZA TRIWARDANA', unit: 'TMMIA', subjectName: 'TARIKH ISLAM TMMIA', className: '1 D Tahfiz Putra', hours: 2 },

  // 44 MUHAMAD JAELANI BASRI, S.Pd.
  { no: 44, teacherName: 'MUHAMAD JAELANI BASRI, S.Pd.', unit: 'SMP', subjectName: 'INFORMATIKA SMP', className: '1 A Tahfiz Putri', hours: 2 },
  { no: 44, teacherName: 'MUHAMAD JAELANI BASRI, S.Pd.', unit: 'SMP', subjectName: 'INFORMATIKA SMP', className: '1 B Putri', hours: 2 },
  { no: 44, teacherName: 'MUHAMAD JAELANI BASRI, S.Pd.', unit: 'SMP', subjectName: 'INFORMATIKA SMP', className: '2 A Tahfiz Putri', hours: 2 },
  { no: 44, teacherName: 'MUHAMAD JAELANI BASRI, S.Pd.', unit: 'SMP', subjectName: 'INFORMATIKA SMP', className: '2 B Putri', hours: 2 },
  { no: 44, teacherName: 'MUHAMAD JAELANI BASRI, S.Pd.', unit: 'SMP', subjectName: 'INFORMATIKA SMP', className: '2 C Putri', hours: 2 },
  { no: 44, teacherName: 'MUHAMAD JAELANI BASRI, S.Pd.', unit: 'SMP', subjectName: 'INFORMATIKA SMP', className: '2 E Putra', hours: 2 },
  { no: 44, teacherName: 'MUHAMAD JAELANI BASRI, S.Pd.', unit: 'SMP', subjectName: 'INFORMATIKA SMP', className: '2 F Putra', hours: 2 },
  { no: 44, teacherName: 'MUHAMAD JAELANI BASRI, S.Pd.', unit: 'TMMIA', subjectName: 'IMLA TMMIA', className: '2 B Putri', hours: 2 },
  { no: 44, teacherName: 'MUHAMAD JAELANI BASRI, S.Pd.', unit: 'TMMIA', subjectName: 'IMLA TMMIA', className: '2 C Putri', hours: 2 },

  // 45 MUHAMMAD AKBAR AL-GHIFARI
  { no: 45, teacherName: 'MUHAMMAD AKBAR AL-GHIFARI', unit: 'TMMIA', subjectName: 'IMLA TMMIA', className: '3 D Tahfiz Putra', hours: 2 },
  { no: 45, teacherName: 'MUHAMMAD AKBAR AL-GHIFARI', unit: 'TMMIA', subjectName: 'NAHWU TMMIA', className: '2 E Putra', hours: 2 },
  { no: 45, teacherName: 'MUHAMMAD AKBAR AL-GHIFARI', unit: 'TMMIA', subjectName: 'NAHWU TMMIA', className: '2 F Putra', hours: 2 },

  // 46 MUHAMMAD ANWAR ALIF
  { no: 46, teacherName: 'MUHAMMAD ANWAR ALIF', unit: 'TMMIA', subjectName: 'FIQIH TMMIA', className: '1 D Tahfiz Putra', hours: 2 },

  // 47 MUHAMMAD FIKRI AL ANSHORY
  { no: 47, teacherName: 'MUHAMMAD FIKRI AL ANSHORY', unit: 'TMMIA', subjectName: 'IMLA TMMIA', className: '1 D Tahfiz Putra', hours: 2 },
  { no: 47, teacherName: 'MUHAMMAD FIKRI AL ANSHORY', unit: 'TMMIA', subjectName: 'IMLA TMMIA', className: '2 F Putra', hours: 2 },
  { no: 47, teacherName: 'MUHAMMAD FIKRI AL ANSHORY', unit: 'TMMIA', subjectName: 'MAHFUDZAT TMMIA', className: '2 D Tahfiz Putra', hours: 1 },

  // 48 MUHAMMAD FIKRI AMRULLAH
  { no: 48, teacherName: 'MUHAMMAD FIKRI AMRULLAH', unit: 'TMMIA', subjectName: "MUTHOLA'AH TMMIA", className: '1 D Tahfiz Putra', hours: 2 },
  { no: 48, teacherName: 'MUHAMMAD FIKRI AMRULLAH', unit: 'TMMIA', subjectName: "MUTHOLA'AH TMMIA", className: '3 F Putra', hours: 2 },

  // 49 MUHAMMAD HANIF FAUZI, S.Ag., M.Pd.
  { no: 49, teacherName: 'MUHAMMAD HANIF FAUZI, S.Ag., M.Pd.', unit: 'TMMIA', subjectName: 'TAMRIN LUGHOH TMMIA', className: '1 D Tahfiz Putra', hours: 2 },
  { no: 49, teacherName: 'MUHAMMAD HANIF FAUZI, S.Ag., M.Pd.', unit: 'TMMIA', subjectName: 'TAMRIN LUGHOH TMMIA', className: '1 D Tahfiz Putra', hours: 2 },

  // 50 MUHAMMAD HASBY PUTRA
  { no: 50, teacherName: 'MUHAMMAD HASBY PUTRA', unit: 'TMMIA', subjectName: 'TAMRIN LUGHOH TMMIA', className: '2 E Putra', hours: 2 },
  { no: 50, teacherName: 'MUHAMMAD HASBY PUTRA', unit: 'TMMIA', subjectName: 'TAMRIN LUGHOH TMMIA', className: '2 E Putra', hours: 2 },

  // 51 MUHAMMAD IHSAN
  { no: 51, teacherName: 'MUHAMMAD IHSAN', unit: 'TMMIA', subjectName: 'FIQIH TMMIA', className: '1 E Putra', hours: 2 },
  { no: 51, teacherName: 'MUHAMMAD IHSAN', unit: 'TMMIA', subjectName: 'TAJWID TMMIA', className: '1 D Tahfiz Putra', hours: 1 },

  // 52 MUHAMMAD JAUHAR HAECKAL, S.HI.
  { no: 52, teacherName: 'MUHAMMAD JAUHAR HAECKAL, S.HI.', unit: 'SMP', subjectName: 'SENI BUDAYA SMP', className: '2 E Putra', hours: 1 },
  { no: 52, teacherName: 'MUHAMMAD JAUHAR HAECKAL, S.HI.', unit: 'SMP', subjectName: 'SENI BUDAYA SMP', className: '2 F Putra', hours: 1 },

  // 53 MUHAMMAD MASYHUR
  { no: 53, teacherName: 'MUHAMMAD MASYHUR', unit: 'SMP', subjectName: 'PENJAS SMP', className: '1 E Putra', hours: 2 },

  // 54 MUHAMMAD SUHAIL, S.Pd.I.
  { no: 54, teacherName: 'MUHAMMAD SUHAIL, S.Pd.I.', unit: 'TMMIA', subjectName: 'HADIS TMMIA', className: '3 B Putri', hours: 2 },
  { no: 54, teacherName: 'MUHAMMAD SUHAIL, S.Pd.I.', unit: 'TMMIA', subjectName: 'HADIS TMMIA', className: '3 C Putri', hours: 2 },
  { no: 54, teacherName: 'MUHAMMAD SUHAIL, S.Pd.I.', unit: 'TMMIA', subjectName: 'HADIS TMMIA', className: '3 E Putra', hours: 2 },
  { no: 54, teacherName: 'MUHAMMAD SUHAIL, S.Pd.I.', unit: 'TMMIA', subjectName: 'HADIS TMMIA', className: '3 F Putra', hours: 2 },

  // 55 MUHAMMAD ZAKI
  { no: 55, teacherName: 'MUHAMMAD ZAKI', unit: 'TMMIA', subjectName: 'MAHFUDZAT TMMIA', className: '1 E Putra', hours: 1 },

  // 56 MUHAMMAD ZUHDI FAUZI, S.Ag.
  { no: 56, teacherName: 'MUHAMMAD ZUHDI FAUZI, S.Ag.', unit: 'TMMIA', subjectName: 'TAMRIN LUGHOH TMMIA', className: '1 E Putra', hours: 2 },
  { no: 56, teacherName: 'MUHAMMAD ZUHDI FAUZI, S.Ag.', unit: 'TMMIA', subjectName: 'TAMRIN LUGHOH TMMIA', className: '1 E Putra', hours: 2 },
  { no: 56, teacherName: 'MUHAMMAD ZUHDI FAUZI, S.Ag.', unit: 'TMMIA', subjectName: 'TAMRIN LUGHOH TMMIA', className: '1 E Putra', hours: 2 },

  // 57 MURSYID ANWAR, S.Pd., M.Pd.
  { no: 57, teacherName: 'MURSYID ANWAR, S.Pd., M.Pd.', unit: 'SMP', subjectName: 'B. INGGRIS SMP', className: '3 D Tahfiz Putra', hours: 2 },

  // 58 NADRA, S.Ag.
  { no: 58, teacherName: 'NADRA, S.Ag.', unit: 'TMMIA', subjectName: 'AQIDAH TMMIA', className: '1 A Tahfiz Putri', hours: 2 },
  { no: 58, teacherName: 'NADRA, S.Ag.', unit: 'TMMIA', subjectName: 'TAHFIZ TMMIA', className: '3 A Tahfiz Putri', hours: 2 },
  { no: 58, teacherName: 'NADRA, S.Ag.', unit: 'TMMIA', subjectName: 'TAHFIZ TMMIA', className: '3 A Tahfiz Putri', hours: 2 },
  { no: 58, teacherName: 'NADRA, S.Ag.', unit: 'TMMIA', subjectName: 'TAHFIZ TMMIA', className: '3 A Tahfiz Putri', hours: 2 },
  { no: 58, teacherName: 'NADRA, S.Ag.', unit: 'TMMIA', subjectName: 'TAHFIZ TMMIA', className: '3 A Tahfiz Putri', hours: 2 },
  { no: 58, teacherName: 'NADRA, S.Ag.', unit: 'TMMIA', subjectName: 'TAHFIZ TMMIA', className: '3 A Tahfiz Putri', hours: 2 },
  { no: 58, teacherName: 'NADRA, S.Ag.', unit: 'TMMIA', subjectName: 'TAHFIZ TMMIA', className: '3 A Tahfiz Putri', hours: 2 },
  { no: 58, teacherName: 'NADRA, S.Ag.', unit: 'TMMIA', subjectName: 'TAJWID TMMIA', className: '2 B Putri', hours: 2 },
  { no: 58, teacherName: 'NADRA, S.Ag.', unit: 'TMMIA', subjectName: 'TAJWID TMMIA', className: '2 C Putri', hours: 2 },

  // 59 NAMIN, S.Pd.I.
  { no: 59, teacherName: 'NAMIN, S.Pd.I.', unit: 'SMP', subjectName: 'P A I SMP', className: '3 B Putri', hours: 2 },
  { no: 59, teacherName: 'NAMIN, S.Pd.I.', unit: 'SMP', subjectName: 'P A I SMP', className: '3 C Putri', hours: 2 },
  { no: 59, teacherName: 'NAMIN, S.Pd.I.', unit: 'SMP', subjectName: 'P A I SMP', className: '3 E Putra', hours: 2 },
  { no: 59, teacherName: 'NAMIN, S.Pd.I.', unit: 'SMP', subjectName: 'P A I SMP', className: '3 F Putra', hours: 2 },
  { no: 59, teacherName: 'NAMIN, S.Pd.I.', unit: 'SMP', subjectName: 'P A I SMP', className: 'IX.4 Non Mukim Putri', hours: 2 },
  { no: 59, teacherName: 'NAMIN, S.Pd.I.', unit: 'SMP', subjectName: 'P A I SMP', className: 'IX.8 Non Mukim Putra', hours: 2 },
  { no: 59, teacherName: 'NAMIN, S.Pd.I.', unit: 'SMP', subjectName: 'P A I SMP', className: 'VII.3 Non Mukim Putri', hours: 2 },
  { no: 59, teacherName: 'NAMIN, S.Pd.I.', unit: 'SMP', subjectName: 'P A I SMP', className: 'VII.6 Non Mukim Putra', hours: 2 },
  { no: 59, teacherName: 'NAMIN, S.Pd.I.', unit: 'SMP', subjectName: 'P A I SMP', className: 'VIII.4 Non Mukim', hours: 2 },

  // 60 NAZWA YUNITA
  { no: 60, teacherName: 'NAZWA YUNITA', unit: 'TMMIA', subjectName: 'FIQIH TMMIA', className: '1 B Putri', hours: 2 },
  { no: 60, teacherName: 'NAZWA YUNITA', unit: 'TMMIA', subjectName: 'MAHFUDZAT TMMIA', className: '2 B Putri', hours: 1 },

  // 61 NOOR FAIZ, S.Pd.
  { no: 61, teacherName: 'NOOR FAIZ, S.Pd.', unit: 'TMMIA', subjectName: 'KHOT TMMIA', className: '2 A Tahfiz Putri', hours: 1 },
  { no: 61, teacherName: 'NOOR FAIZ, S.Pd.', unit: 'TMMIA', subjectName: 'KHOT TMMIA', className: '2 B Putri', hours: 1 },
  { no: 61, teacherName: 'NOOR FAIZ, S.Pd.', unit: 'TMMIA', subjectName: 'KHOT TMMIA', className: '2 C Putri', hours: 1 },
  { no: 61, teacherName: 'NOOR FAIZ, S.Pd.', unit: 'TMMIA', subjectName: 'KHOT TMMIA', className: '2 D Tahfiz Putra', hours: 1 },
  { no: 61, teacherName: 'NOOR FAIZ, S.Pd.', unit: 'TMMIA', subjectName: 'KHOT TMMIA', className: '2 E Putra', hours: 1 },
  { no: 61, teacherName: 'NOOR FAIZ, S.Pd.', unit: 'TMMIA', subjectName: 'KHOT TMMIA', className: '2 F Putra', hours: 1 },
  { no: 61, teacherName: 'NOOR FAIZ, S.Pd.', unit: 'TMMIA', subjectName: 'KHOT TMMIA', className: '3 A Tahfiz Putri', hours: 1 },
  { no: 61, teacherName: 'NOOR FAIZ, S.Pd.', unit: 'TMMIA', subjectName: 'KHOT TMMIA', className: '3 B Putri', hours: 2 },
  { no: 61, teacherName: 'NOOR FAIZ, S.Pd.', unit: 'TMMIA', subjectName: 'KHOT TMMIA', className: '3 C Putri', hours: 2 },
  { no: 61, teacherName: 'NOOR FAIZ, S.Pd.', unit: 'TMMIA', subjectName: 'KHOT TMMIA', className: '3 D Tahfiz Putra', hours: 1 },
  { no: 61, teacherName: 'NOOR FAIZ, S.Pd.', unit: 'TMMIA', subjectName: 'KHOT TMMIA', className: '3 E Putra', hours: 2 },
  { no: 61, teacherName: 'NOOR FAIZ, S.Pd.', unit: 'TMMIA', subjectName: 'KHOT TMMIA', className: '3 F Putra', hours: 2 },

  // 62 NUR AZIZAH, S.Pd.I.
  { no: 62, teacherName: 'NUR AZIZAH, S.Pd.I.', unit: 'SMP', subjectName: 'P A I SMP', className: '1 A Tahfiz Putri', hours: 1 },
  { no: 62, teacherName: 'NUR AZIZAH, S.Pd.I.', unit: 'SMP', subjectName: 'P A I SMP', className: '1 B Putri', hours: 2 },
  { no: 62, teacherName: 'NUR AZIZAH, S.Pd.I.', unit: 'SMP', subjectName: 'P A I SMP', className: '2 A Tahfiz Putri', hours: 1 },
  { no: 62, teacherName: 'NUR AZIZAH, S.Pd.I.', unit: 'SMP', subjectName: 'P A I SMP', className: '2 B Putri', hours: 2 },
  { no: 62, teacherName: 'NUR AZIZAH, S.Pd.I.', unit: 'SMP', subjectName: 'P A I SMP', className: '2 C Putri', hours: 2 },
  { no: 62, teacherName: 'NUR AZIZAH, S.Pd.I.', unit: 'SMP', subjectName: 'P A I SMP', className: '2 D Tahfiz Putra', hours: 1 },

  // 63 NURIZAL MUZAKI
  { no: 63, teacherName: 'NURIZAL MUZAKI', unit: 'TMMIA', subjectName: 'AQIDAH TMMIA', className: '2 F Putra', hours: 2 },

  // 64 NURLELA, S.Ag., M.M.
  { no: 64, teacherName: 'NURLELA, S.Ag., M.M.', unit: 'SMP', subjectName: 'S K I SMP', className: 'VII.3 Non Mukim Putri', hours: 2 },
  { no: 64, teacherName: 'NURLELA, S.Ag., M.M.', unit: 'SMP', subjectName: 'S K I SMP', className: 'VII.6 Non Mukim Putra', hours: 2 },
  { no: 64, teacherName: 'NURLELA, S.Ag., M.M.', unit: 'SMP', subjectName: 'S K I SMP', className: 'VIII.4 Non Mukim', hours: 2 },

  // 65 PRITA FATHIMAH ASRA
  { no: 65, teacherName: 'PRITA FATHIMAH ASRA', unit: 'SMP', subjectName: 'B. INGGRIS SMP', className: '1 A Tahfiz Putri', hours: 1 },
  { no: 65, teacherName: 'PRITA FATHIMAH ASRA', unit: 'SMP', subjectName: 'B. INGGRIS SMP', className: '1 A Tahfiz Putri', hours: 1 },
  { no: 65, teacherName: 'PRITA FATHIMAH ASRA', unit: 'SMP', subjectName: 'B. INGGRIS SMP', className: '1 B Putri', hours: 2 },
  { no: 65, teacherName: 'PRITA FATHIMAH ASRA', unit: 'SMP', subjectName: 'B. INGGRIS SMP', className: '1 B Putri', hours: 1 },
  { no: 65, teacherName: 'PRITA FATHIMAH ASRA', unit: 'SMP', subjectName: 'B. INGGRIS SMP', className: 'VII.3 Non Mukim Putri', hours: 2 },
  { no: 65, teacherName: 'PRITA FATHIMAH ASRA', unit: 'SMP', subjectName: 'B. INGGRIS SMP', className: 'VII.3 Non Mukim Putri', hours: 1 },
  { no: 65, teacherName: 'PRITA FATHIMAH ASRA', unit: 'SMP', subjectName: 'B. INGGRIS SMP', className: 'VII.6 Non Mukim Putra', hours: 2 },
  { no: 65, teacherName: 'PRITA FATHIMAH ASRA', unit: 'SMP', subjectName: 'B. INGGRIS SMP', className: 'VII.6 Non Mukim Putra', hours: 1 },
  { no: 65, teacherName: 'PRITA FATHIMAH ASRA', unit: 'SMP', subjectName: 'B. INGGRIS SMP', className: 'VIII.4 Non Mukim', hours: 2 },
  { no: 65, teacherName: 'PRITA FATHIMAH ASRA', unit: 'SMP', subjectName: 'B. INGGRIS SMP', className: 'VIII.4 Non Mukim', hours: 1 },

  // 66 PUTRA NAHDI ABIYYU, Lc., S.Pd.
  { no: 66, teacherName: 'PUTRA NAHDI ABIYYU, Lc., S.Pd.', unit: 'TMMIA', subjectName: 'AQIDAH TMMIA', className: '2 A Tahfiz Putri', hours: 2 },
  { no: 66, teacherName: 'PUTRA NAHDI ABIYYU, Lc., S.Pd.', unit: 'TMMIA', subjectName: 'AQIDAH TMMIA', className: '2 D Tahfiz Putra', hours: 2 },
  { no: 66, teacherName: 'PUTRA NAHDI ABIYYU, Lc., S.Pd.', unit: 'TMMIA', subjectName: 'FAROID TMMIA', className: '3 A Tahfiz Putri', hours: 1 },
  { no: 66, teacherName: 'PUTRA NAHDI ABIYYU, Lc., S.Pd.', unit: 'TMMIA', subjectName: 'FAROID TMMIA', className: '3 B Putri', hours: 1 },
  { no: 66, teacherName: 'PUTRA NAHDI ABIYYU, Lc., S.Pd.', unit: 'TMMIA', subjectName: 'FAROID TMMIA', className: '3 C Putri', hours: 1 },
  { no: 66, teacherName: 'PUTRA NAHDI ABIYYU, Lc., S.Pd.', unit: 'TMMIA', subjectName: 'FAROID TMMIA', className: '3 D Tahfiz Putra', hours: 1 },
  { no: 66, teacherName: 'PUTRA NAHDI ABIYYU, Lc., S.Pd.', unit: 'TMMIA', subjectName: 'FAROID TMMIA', className: '3 E Putra', hours: 1 },
  { no: 66, teacherName: 'PUTRA NAHDI ABIYYU, Lc., S.Pd.', unit: 'TMMIA', subjectName: 'FAROID TMMIA', className: '3 F Putra', hours: 1 },
  { no: 66, teacherName: 'PUTRA NAHDI ABIYYU, Lc., S.Pd.', unit: 'TMMIA', subjectName: 'TAHFIZ TMMIA', className: '1 D Tahfiz Putra', hours: 2 },
  { no: 66, teacherName: 'PUTRA NAHDI ABIYYU, Lc., S.Pd.', unit: 'TMMIA', subjectName: 'TAHFIZ TMMIA', className: '1 D Tahfiz Putra', hours: 2 },
  { no: 66, teacherName: 'PUTRA NAHDI ABIYYU, Lc., S.Pd.', unit: 'TMMIA', subjectName: 'TAHFIZ TMMIA', className: '1 D Tahfiz Putra', hours: 2 },
  { no: 66, teacherName: 'PUTRA NAHDI ABIYYU, Lc., S.Pd.', unit: 'TMMIA', subjectName: 'TAHFIZ TMMIA', className: '1 D Tahfiz Putra', hours: 2 },
  { no: 66, teacherName: 'PUTRA NAHDI ABIYYU, Lc., S.Pd.', unit: 'TMMIA', subjectName: 'TAHFIZ TMMIA', className: '1 D Tahfiz Putra', hours: 2 },
  { no: 66, teacherName: 'PUTRA NAHDI ABIYYU, Lc., S.Pd.', unit: 'TMMIA', subjectName: 'TAHFIZ TMMIA', className: '1 D Tahfiz Putra', hours: 2 },

  // 67 PUTRI DINAH OKTAVIA, S.Pd.
  { no: 67, teacherName: 'PUTRI DINAH OKTAVIA, S.Pd.', unit: 'SMP', subjectName: 'METEMATIKA SMP', className: '2 A Tahfiz Putri', hours: 2 },
  { no: 67, teacherName: 'PUTRI DINAH OKTAVIA, S.Pd.', unit: 'SMP', subjectName: 'METEMATIKA SMP', className: '2 B Putri', hours: 2 },
  { no: 67, teacherName: 'PUTRI DINAH OKTAVIA, S.Pd.', unit: 'SMP', subjectName: 'METEMATIKA SMP', className: '2 B Putri', hours: 2 },
  { no: 67, teacherName: 'PUTRI DINAH OKTAVIA, S.Pd.', unit: 'SMP', subjectName: 'METEMATIKA SMP', className: '2 C Putri', hours: 2 },
  { no: 67, teacherName: 'PUTRI DINAH OKTAVIA, S.Pd.', unit: 'SMP', subjectName: 'METEMATIKA SMP', className: '2 C Putri', hours: 2 },
  { no: 67, teacherName: 'PUTRI DINAH OKTAVIA, S.Pd.', unit: 'SMP', subjectName: 'METEMATIKA SMP', className: '2 D Tahfiz Putra', hours: 2 },
  { no: 67, teacherName: 'PUTRI DINAH OKTAVIA, S.Pd.', unit: 'SMP', subjectName: 'METEMATIKA SMP', className: '2 E Putra', hours: 2 },
  { no: 67, teacherName: 'PUTRI DINAH OKTAVIA, S.Pd.', unit: 'SMP', subjectName: 'METEMATIKA SMP', className: '2 E Putra', hours: 2 },
  { no: 67, teacherName: 'PUTRI DINAH OKTAVIA, S.Pd.', unit: 'SMP', subjectName: 'METEMATIKA SMP', className: '2 F Putra', hours: 2 },
  { no: 67, teacherName: 'PUTRI DINAH OKTAVIA, S.Pd.', unit: 'SMP', subjectName: 'METEMATIKA SMP', className: '2 F Putra', hours: 2 },

  // 68 PUTRI ENJELIKAL FALAH, S.E.
  { no: 68, teacherName: 'PUTRI ENJELIKAL FALAH, S.E.', unit: 'SMP', subjectName: 'FIQIH SMP', className: 'IX.4 Non Mukim Putri', hours: 2 },
  { no: 68, teacherName: 'PUTRI ENJELIKAL FALAH, S.E.', unit: 'SMP', subjectName: 'S K I SMP', className: 'IX.4 Non Mukim Putri', hours: 2 },
  { no: 68, teacherName: 'PUTRI ENJELIKAL FALAH, S.E.', unit: 'TMMIA', subjectName: 'FIQIH TMMIA', className: '2 B Putri', hours: 2 },
  { no: 68, teacherName: 'PUTRI ENJELIKAL FALAH, S.E.', unit: 'TMMIA', subjectName: 'FIQIH TMMIA', className: '2 C Putri', hours: 2 },
  { no: 68, teacherName: 'PUTRI ENJELIKAL FALAH, S.E.', unit: 'TMMIA', subjectName: 'TARIKH ISLAM TMMIA', className: '2 A Tahfiz Putri', hours: 1 },
  { no: 68, teacherName: 'PUTRI ENJELIKAL FALAH, S.E.', unit: 'TMMIA', subjectName: 'TARIKH ISLAM TMMIA', className: '2 B Putri', hours: 2 },
  { no: 68, teacherName: 'PUTRI ENJELIKAL FALAH, S.E.', unit: 'TMMIA', subjectName: 'TARIKH ISLAM TMMIA', className: '2 C Putri', hours: 2 },

  // 69 RAHMATI KURRATA'AINI, S.S.
  { no: 69, teacherName: "RAHMATI KURRATA'AINI, S.S.", unit: 'SMP', subjectName: 'B. INGGRIS SMP', className: '1 D Tahfiz Putra', hours: 2 },
  { no: 69, teacherName: "RAHMATI KURRATA'AINI, S.S.", unit: 'SMP', subjectName: 'B. INGGRIS SMP', className: '1 E Putra', hours: 2 },
  { no: 69, teacherName: "RAHMATI KURRATA'AINI, S.S.", unit: 'SMP', subjectName: 'B. INGGRIS SMP', className: '1 E Putra', hours: 1 },
  { no: 69, teacherName: "RAHMATI KURRATA'AINI, S.S.", unit: 'SMP', subjectName: 'B. INGGRIS SMP', className: '2 E Putra', hours: 2 },
  { no: 69, teacherName: "RAHMATI KURRATA'AINI, S.S.", unit: 'SMP', subjectName: 'B. INGGRIS SMP', className: '2 E Putra', hours: 1 },

  // 70 RIDWAN YULIANTO
  { no: 70, teacherName: 'RIDWAN YULIANTO', unit: 'TMMIA', subjectName: 'IMLA TMMIA', className: '1 E Putra', hours: 2 },
  { no: 70, teacherName: 'RIDWAN YULIANTO', unit: 'TMMIA', subjectName: 'IMLA TMMIA', className: '2 D Tahfiz Putra', hours: 2 },
  { no: 70, teacherName: 'RIDWAN YULIANTO', unit: 'TMMIA', subjectName: 'IMLA TMMIA', className: '2 E Putra', hours: 2 },
  { no: 70, teacherName: 'RIDWAN YULIANTO', unit: 'TMMIA', subjectName: 'TAJWID TMMIA', className: '1 E Putra', hours: 2 },
  { no: 70, teacherName: 'RIDWAN YULIANTO', unit: 'TMMIA', subjectName: 'TAMRIN LUGHOH TMMIA', className: '3 F Putra', hours: 2 },
  { no: 70, teacherName: 'RIDWAN YULIANTO', unit: 'TMMIA', subjectName: 'TAMRIN LUGHOH TMMIA', className: '3 F Putra', hours: 2 },

  // 71 RIFQI RAHMATULOH
  { no: 71, teacherName: 'RIFQI RAHMATULOH', unit: 'SMP', subjectName: 'INFORMATIKA SMP', className: '1 D Tahfiz Putra', hours: 2 },
  { no: 71, teacherName: 'RIFQI RAHMATULOH', unit: 'SMP', subjectName: 'INFORMATIKA SMP', className: '1 E Putra', hours: 2 },
  { no: 71, teacherName: 'RIFQI RAHMATULOH', unit: 'SMP', subjectName: 'INFORMATIKA SMP', className: '2 D Tahfiz Putra', hours: 2 },
  { no: 71, teacherName: 'RIFQI RAHMATULOH', unit: 'SMP', subjectName: 'INFORMATIKA SMP', className: '3 A Tahfiz Putri', hours: 2 },
  { no: 71, teacherName: 'RIFQI RAHMATULOH', unit: 'SMP', subjectName: 'INFORMATIKA SMP', className: '3 D Tahfiz Putra', hours: 2 },

  // 72 RISMAWATI, S.Sos.
  { no: 72, teacherName: 'RISMAWATI, S.Sos.', unit: 'TMMIA', subjectName: "MUTHOLA'AH TMMIA", className: '3 A Tahfiz Putri', hours: 2 },
  { no: 72, teacherName: 'RISMAWATI, S.Sos.', unit: 'TMMIA', subjectName: "MUTHOLA'AH TMMIA", className: '3 B Putri', hours: 2 },
  { no: 72, teacherName: 'RISMAWATI, S.Sos.', unit: 'TMMIA', subjectName: "MUTHOLA'AH TMMIA", className: '3 C Putri', hours: 2 },
  { no: 72, teacherName: 'RISMAWATI, S.Sos.', unit: 'TMMIA', subjectName: 'TAMRIN LUGHOH TMMIA', className: '1 B Putri', hours: 2 },
  { no: 72, teacherName: 'RISMAWATI, S.Sos.', unit: 'TMMIA', subjectName: 'TAMRIN LUGHOH TMMIA', className: '1 B Putri', hours: 2 },
  { no: 72, teacherName: 'RISMAWATI, S.Sos.', unit: 'TMMIA', subjectName: 'TAMRIN LUGHOH TMMIA', className: '1 B Putri', hours: 2 },
  { no: 72, teacherName: 'RISMAWATI, S.Sos.', unit: 'TMMIA', subjectName: 'TAMRIN LUGHOH TMMIA', className: '2 B Putri', hours: 2 },
  { no: 72, teacherName: 'RISMAWATI, S.Sos.', unit: 'TMMIA', subjectName: 'TAMRIN LUGHOH TMMIA', className: '2 B Putri', hours: 2 },

  // 73 RIZAL FIRDAUS
  { no: 73, teacherName: 'RIZAL FIRDAUS', unit: 'TMMIA', subjectName: 'FIQIH TMMIA', className: '2 F Putra', hours: 2 },

  // 74 RIZKA SYAFFITRI AMENDA, S.Hum
  { no: 74, teacherName: 'RIZKA SYAFFITRI AMENDA, S.Hum', unit: 'SMP', subjectName: 'SENI BUDAYA SMP', className: '1 B Putri', hours: 1 },
  { no: 74, teacherName: 'RIZKA SYAFFITRI AMENDA, S.Hum', unit: 'SMP', subjectName: 'SENI BUDAYA SMP', className: '1 E Putra', hours: 1 },
  { no: 74, teacherName: 'RIZKA SYAFFITRI AMENDA, S.Hum', unit: 'SMP', subjectName: 'SENI BUDAYA SMP', className: '2 B Putri', hours: 1 },
  { no: 74, teacherName: 'RIZKA SYAFFITRI AMENDA, S.Hum', unit: 'SMP', subjectName: 'SENI BUDAYA SMP', className: '2 C Putri', hours: 1 },
  { no: 74, teacherName: 'RIZKA SYAFFITRI AMENDA, S.Hum', unit: 'SMP', subjectName: 'SENI BUDAYA SMP', className: '3 B Putri', hours: 1 },
  { no: 74, teacherName: 'RIZKA SYAFFITRI AMENDA, S.Hum', unit: 'SMP', subjectName: 'SENI BUDAYA SMP', className: '3 C Putri', hours: 1 },
  { no: 74, teacherName: 'RIZKA SYAFFITRI AMENDA, S.Hum', unit: 'SMP', subjectName: 'SENI BUDAYA SMP', className: '3 E Putra', hours: 1 },
  { no: 74, teacherName: 'RIZKA SYAFFITRI AMENDA, S.Hum', unit: 'SMP', subjectName: 'SENI BUDAYA SMP', className: '3 F Putra', hours: 1 },
  { no: 74, teacherName: 'RIZKA SYAFFITRI AMENDA, S.Hum', unit: 'SMP', subjectName: 'SENI BUDAYA SMP', className: 'IX.4 Non Mukim Putri', hours: 2 },
  { no: 74, teacherName: 'RIZKA SYAFFITRI AMENDA, S.Hum', unit: 'SMP', subjectName: 'SENI BUDAYA SMP', className: 'IX.8 Non Mukim Putra', hours: 2 },
  { no: 74, teacherName: 'RIZKA SYAFFITRI AMENDA, S.Hum', unit: 'SMP', subjectName: 'SENI BUDAYA SMP', className: 'VII.3 Non Mukim Putri', hours: 2 },
  { no: 74, teacherName: 'RIZKA SYAFFITRI AMENDA, S.Hum', unit: 'SMP', subjectName: 'SENI BUDAYA SMP', className: 'VII.6 Non Mukim Putra', hours: 2 },
  { no: 74, teacherName: 'RIZKA SYAFFITRI AMENDA, S.Hum', unit: 'SMP', subjectName: 'SENI BUDAYA SMP', className: 'VIII.4 Non Mukim', hours: 2 },

  // 75 RIZKI ABDUL KHOTIB, S.Pd.I.
  { no: 75, teacherName: 'RIZKI ABDUL KHOTIB, S.Pd.I.', unit: 'TMMIA', subjectName: 'KHOT TMMIA', className: '1 A Tahfiz Putri', hours: 1 },
  { no: 75, teacherName: 'RIZKI ABDUL KHOTIB, S.Pd.I.', unit: 'TMMIA', subjectName: 'KHOT TMMIA', className: '1 B Putri', hours: 1 },
  { no: 75, teacherName: 'RIZKI ABDUL KHOTIB, S.Pd.I.', unit: 'TMMIA', subjectName: 'KHOT TMMIA', className: '1 D Tahfiz Putra', hours: 1 },
  { no: 75, teacherName: 'RIZKI ABDUL KHOTIB, S.Pd.I.', unit: 'TMMIA', subjectName: 'KHOT TMMIA', className: '1 E Putra', hours: 1 },

  // 76 ROMLI RIAN, M.Pd.
  { no: 76, teacherName: 'ROMLI RIAN, M.Pd.', unit: 'SMP', subjectName: 'I P A SMP', className: '2 B Putri', hours: 2 },
  { no: 76, teacherName: 'ROMLI RIAN, M.Pd.', unit: 'SMP', subjectName: 'I P A SMP', className: '2 B Putri', hours: 1 },
  { no: 76, teacherName: 'ROMLI RIAN, M.Pd.', unit: 'SMP', subjectName: 'I P A SMP', className: '2 C Putri', hours: 2 },
  { no: 76, teacherName: 'ROMLI RIAN, M.Pd.', unit: 'SMP', subjectName: 'I P A SMP', className: '2 C Putri', hours: 1 },
  { no: 76, teacherName: 'ROMLI RIAN, M.Pd.', unit: 'SMP', subjectName: 'I P A SMP', className: '2 E Putra', hours: 2 },
  { no: 76, teacherName: 'ROMLI RIAN, M.Pd.', unit: 'SMP', subjectName: 'I P A SMP', className: '2 E Putra', hours: 1 },
  { no: 76, teacherName: 'ROMLI RIAN, M.Pd.', unit: 'SMP', subjectName: 'I P A SMP', className: '2 F Putra', hours: 2 },
  { no: 76, teacherName: 'ROMLI RIAN, M.Pd.', unit: 'SMP', subjectName: 'I P A SMP', className: '2 F Putra', hours: 1 },
  { no: 76, teacherName: 'ROMLI RIAN, M.Pd.', unit: 'SMP', subjectName: 'I P A SMP', className: 'VIII.4 Non Mukim', hours: 2 },
  { no: 76, teacherName: 'ROMLI RIAN, M.Pd.', unit: 'SMP', subjectName: 'I P A SMP', className: 'VIII.4 Non Mukim', hours: 1 },
  { no: 76, teacherName: 'ROMLI RIAN, M.Pd.', unit: 'SMP', subjectName: 'I P A SMP', className: 'VIII.4 Non Mukim', hours: 1 },
  { no: 76, teacherName: 'ROMLI RIAN, M.Pd.', unit: 'TMMIA', subjectName: "MUTHOLA'AH TMMIA", className: '2 A Tahfiz Putri', hours: 2 },
  { no: 76, teacherName: 'ROMLI RIAN, M.Pd.', unit: 'TMMIA', subjectName: "MUTHOLA'AH TMMIA", className: '2 B Putri', hours: 2 },
  { no: 76, teacherName: 'ROMLI RIAN, M.Pd.', unit: 'TMMIA', subjectName: "MUTHOLA'AH TMMIA", className: '2 C Putri', hours: 2 },

  // 77 SALEHA MUFIDA, S.Sos., M.Han.
  { no: 77, teacherName: 'SALEHA MUFIDA, S.Sos., M.Han.', unit: 'TMMIA', subjectName: 'TAMRIN LUGHOH TMMIA', className: '2 A Tahfiz Putri', hours: 2 },
  { no: 77, teacherName: 'SALEHA MUFIDA, S.Sos., M.Han.', unit: 'TMMIA', subjectName: 'TAMRIN LUGHOH TMMIA', className: '2 A Tahfiz Putri', hours: 1 },

  // 78 SALWA BINTA TSANIA
  { no: 78, teacherName: 'SALWA BINTA TSANIA', unit: 'TMMIA', subjectName: 'MAHFUDZAT TMMIA', className: '2 A Tahfiz Putri', hours: 1 },

  // 79 SATRIA NUR OKTAVIANTO
  { no: 79, teacherName: 'SATRIA NUR OKTAVIANTO', unit: 'SMP', subjectName: 'BTQ SMP', className: 'IX.4 Non Mukim Putri', hours: 2 },
  { no: 79, teacherName: 'SATRIA NUR OKTAVIANTO', unit: 'SMP', subjectName: 'BTQ SMP', className: 'IX.8 Non Mukim Putra', hours: 2 },
  { no: 79, teacherName: 'SATRIA NUR OKTAVIANTO', unit: 'SMP', subjectName: 'FIQIH SMP', className: 'IX.8 Non Mukim Putra', hours: 2 },
  { no: 79, teacherName: 'SATRIA NUR OKTAVIANTO', unit: 'SMP', subjectName: 'S K I SMP', className: 'IX.8 Non Mukim Putra', hours: 2 },
  { no: 79, teacherName: 'SATRIA NUR OKTAVIANTO', unit: 'SMP', subjectName: 'TAHFIZ SMP', className: 'VII.3 Non Mukim Putri', hours: 2 },
  { no: 79, teacherName: 'SATRIA NUR OKTAVIANTO', unit: 'SMP', subjectName: 'TAHFIZ SMP', className: 'VII.6 Non Mukim Putra', hours: 2 },
  { no: 79, teacherName: 'SATRIA NUR OKTAVIANTO', unit: 'SMP', subjectName: 'TAHFIZ SMP', className: 'VIII.4 Non Mukim', hours: 2 },
  { no: 79, teacherName: 'SATRIA NUR OKTAVIANTO', unit: 'TMMIA', subjectName: 'INSYA TMMIA', className: '3 D Tahfiz Putra', hours: 2 },
  { no: 79, teacherName: 'SATRIA NUR OKTAVIANTO', unit: 'TMMIA', subjectName: 'INSYA TMMIA', className: '3 E Putra', hours: 2 },
  { no: 79, teacherName: 'SATRIA NUR OKTAVIANTO', unit: 'TMMIA', subjectName: 'INSYA TMMIA', className: '3 F Putra', hours: 2 },
  { no: 79, teacherName: 'SATRIA NUR OKTAVIANTO', unit: 'TMMIA', subjectName: 'TAMRIN LUGHOH TMMIA', className: '3 E Putra', hours: 2 },
  { no: 79, teacherName: 'SATRIA NUR OKTAVIANTO', unit: 'TMMIA', subjectName: 'TAMRIN LUGHOH TMMIA', className: '3 E Putra', hours: 2 },

  // 80 SILMI SABILA
  { no: 80, teacherName: 'SILMI SABILA', unit: 'TMMIA', subjectName: 'HADIS TMMIA', className: '2 C Putri', hours: 1 },
  { no: 80, teacherName: 'SILMI SABILA', unit: 'TMMIA', subjectName: 'IMLA TMMIA', className: '1 B Putri', hours: 2 },

  // 81 SISKA INDRIYANI, S.Sos.
  { no: 81, teacherName: 'SISKA INDRIYANI, S.Sos.', unit: 'TMMIA', subjectName: 'FIQIH TMMIA', className: '3 A Tahfiz Putri', hours: 2 },
  { no: 81, teacherName: 'SISKA INDRIYANI, S.Sos.', unit: 'TMMIA', subjectName: 'FIQIH TMMIA', className: '3 B Putri', hours: 2 },
  { no: 81, teacherName: 'SISKA INDRIYANI, S.Sos.', unit: 'TMMIA', subjectName: 'FIQIH TMMIA', className: '3 C Putri', hours: 2 },

  // 82 SISKA YUNITA DEWI
  { no: 82, teacherName: 'SISKA YUNITA DEWI', unit: 'TMMIA', subjectName: 'FIQIH TMMIA', className: '1 A Tahfiz Putri', hours: 2 },
  { no: 82, teacherName: 'SISKA YUNITA DEWI', unit: 'TMMIA', subjectName: 'TAJWID TMMIA', className: '1 A Tahfiz Putri', hours: 1 },
  { no: 82, teacherName: 'SISKA YUNITA DEWI', unit: 'TMMIA', subjectName: 'TAJWID TMMIA', className: '1 B Putri', hours: 2 },

  // 83 SITI FATIMAH ZAHRA
  { no: 83, teacherName: 'SITI FATIMAH ZAHRA', unit: 'TMMIA', subjectName: 'AQIDAH TMMIA', className: '1 B Putri', hours: 2 },
  { no: 83, teacherName: 'SITI FATIMAH ZAHRA', unit: 'TMMIA', subjectName: 'TAHFIZ TMMIA', className: '2 A Tahfiz Putri', hours: 2 },
  { no: 83, teacherName: 'SITI FATIMAH ZAHRA', unit: 'TMMIA', subjectName: 'TAHFIZ TMMIA', className: '2 A Tahfiz Putri', hours: 2 },
  { no: 83, teacherName: 'SITI FATIMAH ZAHRA', unit: 'TMMIA', subjectName: 'TAHFIZ TMMIA', className: '2 A Tahfiz Putri', hours: 2 },
  { no: 83, teacherName: 'SITI FATIMAH ZAHRA', unit: 'TMMIA', subjectName: 'TAHFIZ TMMIA', className: '2 A Tahfiz Putri', hours: 2 },
  { no: 83, teacherName: 'SITI FATIMAH ZAHRA', unit: 'TMMIA', subjectName: 'TAHFIZ TMMIA', className: '2 A Tahfiz Putri', hours: 2 },
  { no: 83, teacherName: 'SITI FATIMAH ZAHRA', unit: 'TMMIA', subjectName: 'TAHFIZ TMMIA', className: '2 A Tahfiz Putri', hours: 2 },
  { no: 83, teacherName: 'SITI FATIMAH ZAHRA', unit: 'TMMIA', subjectName: 'TAJWID TMMIA', className: '2 A Tahfiz Putri', hours: 1 },

  // 84 SITI HALIMAH, S.Si., S.Pd.
  { no: 84, teacherName: 'SITI HALIMAH, S.Si., S.Pd.', unit: 'SMP', subjectName: 'I P A SMP', className: '2 A Tahfiz Putri', hours: 2 },
  { no: 84, teacherName: 'SITI HALIMAH, S.Si., S.Pd.', unit: 'SMP', subjectName: 'I P A SMP', className: '2 D Tahfiz Putra', hours: 2 },
  { no: 84, teacherName: 'SITI HALIMAH, S.Si., S.Pd.', unit: 'SMP', subjectName: 'METEMATIKA SMP', className: '1 E Putra', hours: 2 },
  { no: 84, teacherName: 'SITI HALIMAH, S.Si., S.Pd.', unit: 'SMP', subjectName: 'METEMATIKA SMP', className: '1 E Putra', hours: 2 },
  { no: 84, teacherName: 'SITI HALIMAH, S.Si., S.Pd.', unit: 'SMP', subjectName: 'METEMATIKA SMP', className: 'IX.4 Non Mukim Putri', hours: 2 },
  { no: 84, teacherName: 'SITI HALIMAH, S.Si., S.Pd.', unit: 'SMP', subjectName: 'METEMATIKA SMP', className: 'IX.4 Non Mukim Putri', hours: 2 },
  { no: 84, teacherName: 'SITI HALIMAH, S.Si., S.Pd.', unit: 'SMP', subjectName: 'METEMATIKA SMP', className: 'IX.8 Non Mukim Putra', hours: 2 },
  { no: 84, teacherName: 'SITI HALIMAH, S.Si., S.Pd.', unit: 'SMP', subjectName: 'METEMATIKA SMP', className: 'IX.8 Non Mukim Putra', hours: 1 },
  { no: 84, teacherName: 'SITI HALIMAH, S.Si., S.Pd.', unit: 'SMP', subjectName: 'METEMATIKA SMP', className: 'IX.8 Non Mukim Putra', hours: 1 },
  { no: 84, teacherName: 'SITI HALIMAH, S.Si., S.Pd.', unit: 'SMP', subjectName: 'METEMATIKA SMP', className: 'VII.3 Non Mukim Putri', hours: 2 },
  { no: 84, teacherName: 'SITI HALIMAH, S.Si., S.Pd.', unit: 'SMP', subjectName: 'METEMATIKA SMP', className: 'VII.3 Non Mukim Putri', hours: 1 },
  { no: 84, teacherName: 'SITI HALIMAH, S.Si., S.Pd.', unit: 'SMP', subjectName: 'METEMATIKA SMP', className: 'VII.3 Non Mukim Putri', hours: 1 },
  { no: 84, teacherName: 'SITI HALIMAH, S.Si., S.Pd.', unit: 'SMP', subjectName: 'METEMATIKA SMP', className: 'VII.6 Non Mukim Putra', hours: 2 },
  { no: 84, teacherName: 'SITI HALIMAH, S.Si., S.Pd.', unit: 'SMP', subjectName: 'METEMATIKA SMP', className: 'VII.6 Non Mukim Putra', hours: 2 },
  { no: 84, teacherName: 'SITI HALIMAH, S.Si., S.Pd.', unit: 'SMP', subjectName: 'METEMATIKA SMP', className: 'VIII.4 Non Mukim', hours: 2 },
  { no: 84, teacherName: 'SITI HALIMAH, S.Si., S.Pd.', unit: 'SMP', subjectName: 'METEMATIKA SMP', className: 'VIII.4 Non Mukim', hours: 2 },

  // 85 SOFIYAH AL WIDAD
  { no: 85, teacherName: 'SOFIYAH AL WIDAD', unit: 'TMMIA', subjectName: 'MAHFUDZAT TMMIA', className: '1 A Tahfiz Putri', hours: 1 },

  // 86 SOPIAN HADI, S.Pd.I.
  { no: 86, teacherName: 'SOPIAN HADI, S.Pd.I.', unit: 'SMP', subjectName: 'BTQ SMP', className: 'VII.6 Non Mukim Putra', hours: 2 },
  { no: 86, teacherName: 'SOPIAN HADI, S.Pd.I.', unit: 'SMP', subjectName: 'FIQIH SMP', className: 'VII.3 Non Mukim Putri', hours: 2 },
  { no: 86, teacherName: 'SOPIAN HADI, S.Pd.I.', unit: 'SMP', subjectName: 'FIQIH SMP', className: 'VII.6 Non Mukim Putra', hours: 2 },
  { no: 86, teacherName: 'SOPIAN HADI, S.Pd.I.', unit: 'SMP', subjectName: 'P A I SMP', className: '2 E Putra', hours: 2 },
  { no: 86, teacherName: 'SOPIAN HADI, S.Pd.I.', unit: 'SMP', subjectName: 'P A I SMP', className: '2 F Putra', hours: 2 },
  { no: 86, teacherName: 'SOPIAN HADI, S.Pd.I.', unit: 'SMP', subjectName: 'P A I SMP', className: '3 A Tahfiz Putri', hours: 1 },
  { no: 86, teacherName: 'SOPIAN HADI, S.Pd.I.', unit: 'SMP', subjectName: 'P A I SMP', className: '3 D Tahfiz Putra', hours: 1 },
  { no: 86, teacherName: 'SOPIAN HADI, S.Pd.I.', unit: 'TMMIA', subjectName: 'TAMRIN LUGHOH TMMIA', className: '2 C Putri', hours: 2 },
  { no: 86, teacherName: 'SOPIAN HADI, S.Pd.I.', unit: 'TMMIA', subjectName: 'TAMRIN LUGHOH TMMIA', className: '2 C Putri', hours: 2 },

  // 87 SUBHAN, S.Pd.
  { no: 87, teacherName: 'SUBHAN, S.Pd.', unit: 'SMP', subjectName: 'I P S SMP', className: '1 A Tahfiz Putri', hours: 2 },
  { no: 87, teacherName: 'SUBHAN, S.Pd.', unit: 'SMP', subjectName: 'I P S SMP', className: '1 B Putri', hours: 2 },
  { no: 87, teacherName: 'SUBHAN, S.Pd.', unit: 'SMP', subjectName: 'I P S SMP', className: '1 D Tahfiz Putra', hours: 2 },
  { no: 87, teacherName: 'SUBHAN, S.Pd.', unit: 'SMP', subjectName: 'I P S SMP', className: '1 E Putra', hours: 2 },
  { no: 87, teacherName: 'SUBHAN, S.Pd.', unit: 'SMP', subjectName: 'I P S SMP', className: '2 E Putra', hours: 2 },
  { no: 87, teacherName: 'SUBHAN, S.Pd.', unit: 'SMP', subjectName: 'I P S SMP', className: '2 F Putra', hours: 2 },
  { no: 87, teacherName: 'SUBHAN, S.Pd.', unit: 'SMP', subjectName: 'TAHFIZ SMP', className: 'IX.4 Non Mukim Putri', hours: 2 },
  { no: 87, teacherName: 'SUBHAN, S.Pd.', unit: 'SMP', subjectName: 'TAHFIZ SMP', className: 'IX.8 Non Mukim Putra', hours: 2 },

  // 88 SUMARTIN, S.Pd.
  { no: 88, teacherName: 'SUMARTIN, S.Pd.', unit: 'SMP', subjectName: 'I P A SMP', className: '1 A Tahfiz Putri', hours: 2 },
  { no: 88, teacherName: 'SUMARTIN, S.Pd.', unit: 'SMP', subjectName: 'I P A SMP', className: '1 B Putri', hours: 2 },
  { no: 88, teacherName: 'SUMARTIN, S.Pd.', unit: 'SMP', subjectName: 'I P A SMP', className: '1 B Putri', hours: 1 },
  { no: 88, teacherName: 'SUMARTIN, S.Pd.', unit: 'SMP', subjectName: 'I P A SMP', className: '1 D Tahfiz Putra', hours: 2 },
  { no: 88, teacherName: 'SUMARTIN, S.Pd.', unit: 'SMP', subjectName: 'I P A SMP', className: '1 E Putra', hours: 2 },
  { no: 88, teacherName: 'SUMARTIN, S.Pd.', unit: 'SMP', subjectName: 'I P A SMP', className: '1 E Putra', hours: 1 },
  { no: 88, teacherName: 'SUMARTIN, S.Pd.', unit: 'SMP', subjectName: 'I P A SMP', className: 'VII.3 Non Mukim Putri', hours: 2 },
  { no: 88, teacherName: 'SUMARTIN, S.Pd.', unit: 'SMP', subjectName: 'I P A SMP', className: 'VII.3 Non Mukim Putri', hours: 2 },
  { no: 88, teacherName: 'SUMARTIN, S.Pd.', unit: 'SMP', subjectName: 'I P A SMP', className: 'VII.6 Non Mukim Putra', hours: 2 },
  { no: 88, teacherName: 'SUMARTIN, S.Pd.', unit: 'SMP', subjectName: 'I P A SMP', className: 'VII.6 Non Mukim Putra', hours: 2 },
  { no: 88, teacherName: 'SUMARTIN, S.Pd.', unit: 'TMMIA', subjectName: 'FIQIH TMMIA', className: '2 E Putra', hours: 2 },

  // 89 SYAFON OKTAVIA RAHMA
  { no: 89, teacherName: 'SYAFON OKTAVIA RAHMA', unit: 'TMMIA', subjectName: 'IMLA TMMIA', className: '1 A Tahfiz Putri', hours: 2 },

  // 90 TIA RAHMAWATI, S.Pd.
  { no: 90, teacherName: 'TIA RAHMAWATI, S.Pd.', unit: 'TMMIA', subjectName: 'IMLA TMMIA', className: '3 A Tahfiz Putri', hours: 2 },
  { no: 90, teacherName: 'TIA RAHMAWATI, S.Pd.', unit: 'TMMIA', subjectName: 'IMLA TMMIA', className: '3 B Putri', hours: 2 },
  { no: 90, teacherName: 'TIA RAHMAWATI, S.Pd.', unit: 'TMMIA', subjectName: 'IMLA TMMIA', className: '3 C Putri', hours: 2 },

  // 91 TONI, S.Pd.
  { no: 91, teacherName: 'TONI, S.Pd.', unit: 'SMP', subjectName: 'PENJAS SMP', className: '2 B Putri', hours: 2 },
  { no: 91, teacherName: 'TONI, S.Pd.', unit: 'SMP', subjectName: 'PENJAS SMP', className: '2 C Putri', hours: 2 },
  { no: 91, teacherName: 'TONI, S.Pd.', unit: 'SMP', subjectName: 'PENJAS SMP', className: '2 E Putra', hours: 2 },
  { no: 91, teacherName: 'TONI, S.Pd.', unit: 'SMP', subjectName: 'PENJAS SMP', className: '2 F Putra', hours: 2 },
  { no: 91, teacherName: 'TONI, S.Pd.', unit: 'SMP', subjectName: 'PENJAS SMP', className: '3 B Putri', hours: 2 },
  { no: 91, teacherName: 'TONI, S.Pd.', unit: 'SMP', subjectName: 'PENJAS SMP', className: '3 C Putri', hours: 2 },
  { no: 91, teacherName: 'TONI, S.Pd.', unit: 'SMP', subjectName: 'PENJAS SMP', className: '3 E Putra', hours: 2 },
  { no: 91, teacherName: 'TONI, S.Pd.', unit: 'SMP', subjectName: 'PENJAS SMP', className: '3 F Putra', hours: 2 },
  { no: 91, teacherName: 'TONI, S.Pd.', unit: 'SMP', subjectName: 'PENJAS SMP', className: 'IX.4 Non Mukim Putri', hours: 2 },
  { no: 91, teacherName: 'TONI, S.Pd.', unit: 'SMP', subjectName: 'PENJAS SMP', className: 'IX.8 Non Mukim Putra', hours: 2 },
  { no: 91, teacherName: 'TONI, S.Pd.', unit: 'SMP', subjectName: 'PENJAS TAHFIZ SMP', className: '3 A Tahfiz Putri', hours: 2 },
  { no: 91, teacherName: 'TONI, S.Pd.', unit: 'SMP', subjectName: 'PENJAS TAHFIZ SMP', className: '3 D Tahfiz Putra', hours: 2 },
  { no: 91, teacherName: 'TONI, S.Pd.', unit: 'TMMIA', subjectName: "MUTHOLA'AH TMMIA", className: '1 E Putra', hours: 2 },

  // 92 VENTI RAKHMAWATI, M.Pd.
  { no: 92, teacherName: 'VENTI RAKHMAWATI, M.Pd.', unit: 'SMP', subjectName: 'PEND. PANCASILA SMP', className: '2 A Tahfiz Putri', hours: 1 },
  { no: 92, teacherName: 'VENTI RAKHMAWATI, M.Pd.', unit: 'SMP', subjectName: 'PEND. PANCASILA SMP', className: '2 B Putri', hours: 2 },
  { no: 92, teacherName: 'VENTI RAKHMAWATI, M.Pd.', unit: 'SMP', subjectName: 'PEND. PANCASILA SMP', className: '2 C Putri', hours: 2 },
  { no: 92, teacherName: 'VENTI RAKHMAWATI, M.Pd.', unit: 'SMP', subjectName: 'PEND. PANCASILA SMP', className: '2 D Tahfiz Putra', hours: 1 },
  { no: 92, teacherName: 'VENTI RAKHMAWATI, M.Pd.', unit: 'SMP', subjectName: 'PEND. PANCASILA SMP', className: '2 E Putra', hours: 2 },
  { no: 92, teacherName: 'VENTI RAKHMAWATI, M.Pd.', unit: 'SMP', subjectName: 'PEND. PANCASILA SMP', className: '2 F Putra', hours: 2 },
  { no: 92, teacherName: 'VENTI RAKHMAWATI, M.Pd.', unit: 'SMP', subjectName: 'PEND. PANCASILA SMP', className: '3 A Tahfiz Putri', hours: 1 },
  { no: 92, teacherName: 'VENTI RAKHMAWATI, M.Pd.', unit: 'SMP', subjectName: 'PEND. PANCASILA SMP', className: '3 B Putri', hours: 2 },
  { no: 92, teacherName: 'VENTI RAKHMAWATI, M.Pd.', unit: 'SMP', subjectName: 'PEND. PANCASILA SMP', className: '3 C Putri', hours: 2 },
  { no: 92, teacherName: 'VENTI RAKHMAWATI, M.Pd.', unit: 'SMP', subjectName: 'PEND. PANCASILA SMP', className: '3 D Tahfiz Putra', hours: 1 },
  { no: 92, teacherName: 'VENTI RAKHMAWATI, M.Pd.', unit: 'SMP', subjectName: 'PEND. PANCASILA SMP', className: '3 E Putra', hours: 2 },
  { no: 92, teacherName: 'VENTI RAKHMAWATI, M.Pd.', unit: 'SMP', subjectName: 'PEND. PANCASILA SMP', className: '3 F Putra', hours: 2 },
  { no: 92, teacherName: 'VENTI RAKHMAWATI, M.Pd.', unit: 'SMP', subjectName: 'PEND. PANCASILA SMP', className: 'IX.4 Non Mukim Putri', hours: 2 },
  { no: 92, teacherName: 'VENTI RAKHMAWATI, M.Pd.', unit: 'SMP', subjectName: 'PEND. PANCASILA SMP', className: 'IX.8 Non Mukim Putra', hours: 1 },
  { no: 92, teacherName: 'VENTI RAKHMAWATI, M.Pd.', unit: 'SMP', subjectName: 'PEND. PANCASILA SMP', className: 'IX.8 Non Mukim Putra', hours: 1 },

  // 93 VERARY PRATAMA PUTRI, S.E.
  { no: 93, teacherName: 'VERARY PRATAMA PUTRI, S.E.', unit: 'TMMIA', subjectName: 'TAMRIN LUGHOH TMMIA', className: '1 A Tahfiz Putri', hours: 2 },
  { no: 93, teacherName: 'VERARY PRATAMA PUTRI, S.E.', unit: 'TMMIA', subjectName: 'TAMRIN LUGHOH TMMIA', className: '1 A Tahfiz Putri', hours: 1 },
  { no: 93, teacherName: 'VERARY PRATAMA PUTRI, S.E.', unit: 'TMMIA', subjectName: 'TAMRIN LUGHOH TMMIA', className: '1 A Tahfiz Putri', hours: 1 },

  // 94 WALDA FAUZIAH
  { no: 94, teacherName: 'WALDA FAUZIAH', unit: 'TMMIA', subjectName: 'AQIDAH TMMIA', className: '2 B Putri', hours: 2 },
  { no: 94, teacherName: 'WALDA FAUZIAH', unit: 'TMMIA', subjectName: 'AQIDAH TMMIA', className: '2 C Putri', hours: 2 },
  { no: 94, teacherName: 'WALDA FAUZIAH', unit: 'TMMIA', subjectName: 'AQIDAH TMMIA', className: '2 E Putra', hours: 2 },

  // 95 YAYAT FITRIYAH, M.Pd.
  { no: 95, teacherName: 'YAYAT FITRIYAH, M.Pd.', unit: 'SMP', subjectName: 'B. INDONESIA SMP', className: '1 B Putri', hours: 2 },
  { no: 95, teacherName: 'YAYAT FITRIYAH, M.Pd.', unit: 'SMP', subjectName: 'B. INDONESIA SMP', className: '1 B Putri', hours: 1 },
  { no: 95, teacherName: 'YAYAT FITRIYAH, M.Pd.', unit: 'SMP', subjectName: 'B. INDONESIA SMP', className: '1 E Putra', hours: 2 },
  { no: 95, teacherName: 'YAYAT FITRIYAH, M.Pd.', unit: 'SMP', subjectName: 'B. INDONESIA SMP', className: '1 E Putra', hours: 1 },
  { no: 95, teacherName: 'YAYAT FITRIYAH, M.Pd.', unit: 'SMP', subjectName: 'B. INDONESIA SMP', className: '3 A Tahfiz Putri', hours: 2 },
  { no: 95, teacherName: 'YAYAT FITRIYAH, M.Pd.', unit: 'SMP', subjectName: 'B. INDONESIA SMP', className: '3 B Putri', hours: 2 },
  { no: 95, teacherName: 'YAYAT FITRIYAH, M.Pd.', unit: 'SMP', subjectName: 'B. INDONESIA SMP', className: '3 B Putri', hours: 1 },
  { no: 95, teacherName: 'YAYAT FITRIYAH, M.Pd.', unit: 'SMP', subjectName: 'B. INDONESIA SMP', className: '3 C Putri', hours: 2 },
  { no: 95, teacherName: 'YAYAT FITRIYAH, M.Pd.', unit: 'SMP', subjectName: 'B. INDONESIA SMP', className: '3 C Putri', hours: 1 },
  { no: 95, teacherName: 'YAYAT FITRIYAH, M.Pd.', unit: 'SMP', subjectName: 'B. INDONESIA SMP', className: '3 D Tahfiz Putra', hours: 2 },
  { no: 95, teacherName: 'YAYAT FITRIYAH, M.Pd.', unit: 'SMP', subjectName: 'B. INDONESIA SMP', className: '3 E Putra', hours: 2 },
  { no: 95, teacherName: 'YAYAT FITRIYAH, M.Pd.', unit: 'SMP', subjectName: 'B. INDONESIA SMP', className: '3 E Putra', hours: 1 },
  { no: 95, teacherName: 'YAYAT FITRIYAH, M.Pd.', unit: 'SMP', subjectName: 'B. INDONESIA SMP', className: '3 F Putra', hours: 2 },
  { no: 95, teacherName: 'YAYAT FITRIYAH, M.Pd.', unit: 'SMP', subjectName: 'B. INDONESIA SMP', className: '3 F Putra', hours: 1 },
  { no: 95, teacherName: 'YAYAT FITRIYAH, M.Pd.', unit: 'SMP', subjectName: 'B. INDONESIA SMP', className: 'IX.4 Non Mukim Putri', hours: 2 },
  { no: 95, teacherName: 'YAYAT FITRIYAH, M.Pd.', unit: 'SMP', subjectName: 'B. INDONESIA SMP', className: 'IX.4 Non Mukim Putri', hours: 1 },
  { no: 95, teacherName: 'YAYAT FITRIYAH, M.Pd.', unit: 'SMP', subjectName: 'B. INDONESIA SMP', className: 'IX.8 Non Mukim Putra', hours: 2 },
  { no: 95, teacherName: 'YAYAT FITRIYAH, M.Pd.', unit: 'SMP', subjectName: 'B. INDONESIA SMP', className: 'IX.8 Non Mukim Putra', hours: 1 },

  // 96 ZAINI FIKRI, S.Pd.
  { no: 96, teacherName: 'ZAINI FIKRI, S.Pd.', unit: 'SMP', subjectName: 'P A I SMP', className: '1 D Tahfiz Putra', hours: 1 },
  { no: 96, teacherName: 'ZAINI FIKRI, S.Pd.', unit: 'SMP', subjectName: 'P A I SMP', className: '1 E Putra', hours: 2 },
];

/**
 * Combined Official Teacher Assignments (SMP, SMA, and TMMIA)
 * Total: 96 SMP/TMMIA teachers + 75 SMA/TMMIA teachers
 */
export const TEACHER_ASSIGNMENTS_REKAP: TeacherAssignmentRecord[] = [
  ...TEACHER_ASSIGNMENTS_SMP_REKAP,
  ...TEACHER_ASSIGNMENTS_SMA_REKAP,
];