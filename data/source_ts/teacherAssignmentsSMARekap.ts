export interface TeacherAssignmentRecord {
  no: number;
  teacherName: string;
  unit: 'SMA' | 'TMMIA';
  subjectName: string;
  className: string;
  hours: number;
}

/**
 * REKAPITULASI DAFTAR GURU UNIT SMA DAN TMMIA
 * TAHUN AJARAN 2026/2027 (75 GURU)
 */
export const TEACHER_ASSIGNMENTS_SMA_REKAP: TeacherAssignmentRecord[] = [
  // 1 ABDUL FATTAH AZZAM
  { no: 1, teacherName: 'ABDUL FATTAH AZZAM', unit: 'TMMIA', subjectName: 'IMLA TMMIA', className: '2 INT IPA', hours: 2 },
  { no: 1, teacherName: 'ABDUL FATTAH AZZAM', unit: 'TMMIA', subjectName: 'IMLA TMMIA', className: '2 INT IPS', hours: 2 },

  // 2 ABDUL HARIZ NAUFAL, S.Ag.
  { no: 2, teacherName: 'ABDUL HARIZ NAUFAL, S.Ag.', unit: 'TMMIA', subjectName: 'AQIDAH TMMIA', className: '1 Intensif', hours: 2 },

  // 3 ADE HOLIDIN, S.Ag.
  { no: 3, teacherName: 'ADE HOLIDIN, S.Ag.', unit: 'TMMIA', subjectName: 'SHOROF TMMIA', className: '2 INT IPA', hours: 1 },
  { no: 3, teacherName: 'ADE HOLIDIN, S.Ag.', unit: 'TMMIA', subjectName: 'SHOROF TMMIA', className: '2 INT IPS', hours: 1 },

  // 4 AHDINI RAHMATILLAH, Lc., S.S.I.
  { no: 4, teacherName: 'AHDINI RAHMATILLAH, Lc., S.S.I.', unit: 'TMMIA', subjectName: 'INSYA TMMIA', className: '4 A Putri', hours: 2 },
  { no: 4, teacherName: 'AHDINI RAHMATILLAH, Lc., S.S.I.', unit: 'TMMIA', subjectName: 'INSYA TMMIA', className: '4 B Putra', hours: 2 },
  { no: 4, teacherName: 'AHDINI RAHMATILLAH, Lc., S.S.I.', unit: 'TMMIA', subjectName: 'INSYA TMMIA', className: '4 C Putra', hours: 2 },
  { no: 4, teacherName: 'AHDINI RAHMATILLAH, Lc., S.S.I.', unit: 'TMMIA', subjectName: 'TAFSIR TMMIA', className: '4 A Putri', hours: 2 },

  // 5 AHMAD FATHURACHMAN, S.Pd.
  { no: 5, teacherName: 'AHMAD FATHURACHMAN, S.Pd.', unit: 'SMA', subjectName: 'PENJAS SMA', className: '1 Intensif', hours: 2 },
  { no: 5, teacherName: 'AHMAD FATHURACHMAN, S.Pd.', unit: 'SMA', subjectName: 'PENJAS SMA', className: '4 A Putri', hours: 2 },
  { no: 5, teacherName: 'AHMAD FATHURACHMAN, S.Pd.', unit: 'SMA', subjectName: 'PENJAS SMA', className: '4 B Putra', hours: 2 },
  { no: 5, teacherName: 'AHMAD FATHURACHMAN, S.Pd.', unit: 'SMA', subjectName: 'PENJAS SMA', className: '4 C Putra', hours: 2 },
  { no: 5, teacherName: 'AHMAD FATHURACHMAN, S.Pd.', unit: 'SMA', subjectName: 'PENJAS SMA', className: 'X A Non Mukim Putri', hours: 2 },
  { no: 5, teacherName: 'AHMAD FATHURACHMAN, S.Pd.', unit: 'SMA', subjectName: 'PENJAS SMA', className: 'X B Non Mukim Putra', hours: 2 },

  // 6 AHMAD FAUZI RAHMAN
  { no: 6, teacherName: 'AHMAD FAUZI RAHMAN', unit: 'TMMIA', subjectName: 'HADIS TMMIA', className: '2 INT IPA', hours: 1 },
  { no: 6, teacherName: 'AHMAD FAUZI RAHMAN', unit: 'TMMIA', subjectName: 'HADIS TMMIA', className: '2 INT IPS', hours: 1 },

  // 7 AHMAD FIRDAUS, S.Ag.
  { no: 7, teacherName: 'AHMAD FIRDAUS, S.Ag.', unit: 'SMA', subjectName: 'B. INGGRIS SMA', className: '2 INT IPA', hours: 2 },
  { no: 7, teacherName: 'AHMAD FIRDAUS, S.Ag.', unit: 'SMA', subjectName: 'B. INGGRIS SMA', className: '2 INT IPS', hours: 2 },
  { no: 7, teacherName: 'AHMAD FIRDAUS, S.Ag.', unit: 'TMMIA', subjectName: 'READING & GRAMMAR TMMIA', className: '2 INT IPA', hours: 1 },
  { no: 7, teacherName: 'AHMAD FIRDAUS, S.Ag.', unit: 'TMMIA', subjectName: 'READING & GRAMMAR TMMIA', className: '2 INT IPS', hours: 1 },

  // 8 AHMAD HASAN MUNJAJI
  { no: 8, teacherName: 'AHMAD HASAN MUNJAJI', unit: 'TMMIA', subjectName: 'NAHWU TMMIA', className: '3 INT IPA', hours: 2 },
  { no: 8, teacherName: 'AHMAD HASAN MUNJAJI', unit: 'TMMIA', subjectName: 'NAHWU TMMIA', className: '3 INT IPS', hours: 2 },

  // 9 AHMAD LUJAENILMA, S.Kom.
  { no: 9, teacherName: 'AHMAD LUJAENILMA, S.Kom.', unit: 'SMA', subjectName: 'INFORMATIKA SMA', className: '1 Intensif', hours: 2 },
  { no: 9, teacherName: 'AHMAD LUJAENILMA, S.Kom.', unit: 'SMA', subjectName: 'INFORMATIKA SMA', className: '3 INT IPA', hours: 2 },
  { no: 9, teacherName: 'AHMAD LUJAENILMA, S.Kom.', unit: 'SMA', subjectName: 'INFORMATIKA SMA', className: '3 INT IPS', hours: 2 },
  { no: 9, teacherName: 'AHMAD LUJAENILMA, S.Kom.', unit: 'SMA', subjectName: 'INFORMATIKA SMA', className: '4 C Putra', hours: 2 },
  { no: 9, teacherName: 'AHMAD LUJAENILMA, S.Kom.', unit: 'SMA', subjectName: 'INFORMATIKA SMA', className: '6 A IPA Putri', hours: 2 },
  { no: 9, teacherName: 'AHMAD LUJAENILMA, S.Kom.', unit: 'SMA', subjectName: 'INFORMATIKA SMA', className: '6 B IPS Putri', hours: 2 },
  { no: 9, teacherName: 'AHMAD LUJAENILMA, S.Kom.', unit: 'SMA', subjectName: 'INFORMATIKA SMA', className: '6 C IPA Putra', hours: 2 },
  { no: 9, teacherName: 'AHMAD LUJAENILMA, S.Kom.', unit: 'SMA', subjectName: 'INFORMATIKA SMA', className: '6 D IPS Putra', hours: 2 },
  { no: 9, teacherName: 'AHMAD LUJAENILMA, S.Kom.', unit: 'SMA', subjectName: 'INFORMATIKA SMA', className: 'XII IPA Non Mukim', hours: 2 },
  { no: 9, teacherName: 'AHMAD LUJAENILMA, S.Kom.', unit: 'SMA', subjectName: 'INFORMATIKA SMA', className: 'XII IPS Non Mukim', hours: 2 },

  // 10 AHMAD SATIBI, S.Pd.
  { no: 10, teacherName: 'AHMAD SATIBI, S.Pd.', unit: 'TMMIA', subjectName: 'NAHWU TMMIA', className: '4 A Putri', hours: 2 },
  { no: 10, teacherName: 'AHMAD SATIBI, S.Pd.', unit: 'TMMIA', subjectName: 'NAHWU TMMIA', className: '4 B Putra', hours: 2 },
  { no: 10, teacherName: 'AHMAD SATIBI, S.Pd.', unit: 'TMMIA', subjectName: 'NAHWU TMMIA', className: '4 C Putra', hours: 2 },
  { no: 10, teacherName: 'AHMAD SATIBI, S.Pd.', unit: 'TMMIA', subjectName: 'NAHWU TMMIA', className: '5 A IPA Putri', hours: 2 },
  { no: 10, teacherName: 'AHMAD SATIBI, S.Pd.', unit: 'TMMIA', subjectName: 'NAHWU TMMIA', className: '5 B IPS Putri', hours: 2 },
  { no: 10, teacherName: 'AHMAD SATIBI, S.Pd.', unit: 'TMMIA', subjectName: 'NAHWU TMMIA', className: '5 C IPA Putra', hours: 2 },
  { no: 10, teacherName: 'AHMAD SATIBI, S.Pd.', unit: 'TMMIA', subjectName: 'NAHWU TMMIA', className: '5 D IPS Putra', hours: 2 },

  // 11 ALMAAS JHOUNG ASRI, S.Sos.
  { no: 11, teacherName: 'ALMAAS JHOUNG ASRI, S.Sos.', unit: 'TMMIA', subjectName: 'IMLA TMMIA', className: '1 Intensif', hours: 2 },

  // 12 ANTONI FIRDAUS, S.H.I., M.Pd.
  { no: 12, teacherName: 'ANTONI FIRDAUS, S.H.I., M.Pd.', unit: 'SMA', subjectName: 'PEND. PANCASILA SMA', className: '3 INT IPA', hours: 2 },
  { no: 12, teacherName: 'ANTONI FIRDAUS, S.H.I., M.Pd.', unit: 'SMA', subjectName: 'PEND. PANCASILA SMA', className: '3 INT IPS', hours: 2 },
  { no: 12, teacherName: 'ANTONI FIRDAUS, S.H.I., M.Pd.', unit: 'SMA', subjectName: 'PEND. PANCASILA SMA', className: '6 A IPA Putri', hours: 2 },
  { no: 12, teacherName: 'ANTONI FIRDAUS, S.H.I., M.Pd.', unit: 'SMA', subjectName: 'PEND. PANCASILA SMA', className: '6 B IPS Putri', hours: 1 },
  { no: 12, teacherName: 'ANTONI FIRDAUS, S.H.I., M.Pd.', unit: 'SMA', subjectName: 'PEND. PANCASILA SMA', className: '6 B IPS Putri', hours: 1 },
  { no: 12, teacherName: 'ANTONI FIRDAUS, S.H.I., M.Pd.', unit: 'SMA', subjectName: 'PEND. PANCASILA SMA', className: '6 C IPA Putra', hours: 2 },
  { no: 12, teacherName: 'ANTONI FIRDAUS, S.H.I., M.Pd.', unit: 'SMA', subjectName: 'PEND. PANCASILA SMA', className: '6 D IPS Putra', hours: 2 },
  { no: 12, teacherName: 'ANTONI FIRDAUS, S.H.I., M.Pd.', unit: 'SMA', subjectName: 'PEND. PANCASILA SMA', className: 'XII IPA Non Mukim', hours: 2 },
  { no: 12, teacherName: 'ANTONI FIRDAUS, S.H.I., M.Pd.', unit: 'SMA', subjectName: 'PEND. PANCASILA SMA', className: 'XII IPS Non Mukim', hours: 2 },
  { no: 12, teacherName: 'ANTONI FIRDAUS, S.H.I., M.Pd.', unit: 'TMMIA', subjectName: 'FIQIH TMMIA', className: '5 A IPA Putri', hours: 1 },
  { no: 12, teacherName: 'ANTONI FIRDAUS, S.H.I., M.Pd.', unit: 'TMMIA', subjectName: 'FIQIH TMMIA', className: '5 A IPA Putri', hours: 1 },
  { no: 12, teacherName: 'ANTONI FIRDAUS, S.H.I., M.Pd.', unit: 'TMMIA', subjectName: 'FIQIH TMMIA', className: '5 B IPS Putri', hours: 2 },
  { no: 12, teacherName: 'ANTONI FIRDAUS, S.H.I., M.Pd.', unit: 'TMMIA', subjectName: 'FIQIH TMMIA', className: '5 C IPA Putra', hours: 2 },
  { no: 12, teacherName: 'ANTONI FIRDAUS, S.H.I., M.Pd.', unit: 'TMMIA', subjectName: 'FIQIH TMMIA', className: '5 D IPS Putra', hours: 2 },

  // 13 ASEP SAEPUL MILLAH, M.Pd.
  { no: 13, teacherName: 'ASEP SAEPUL MILLAH, M.Pd.', unit: 'TMMIA', subjectName: 'SHOROF TMMIA', className: '4 A Putri', hours: 1 },
  { no: 13, teacherName: 'ASEP SAEPUL MILLAH, M.Pd.', unit: 'TMMIA', subjectName: 'SHOROF TMMIA', className: '4 B Putra', hours: 1 },
  { no: 13, teacherName: 'ASEP SAEPUL MILLAH, M.Pd.', unit: 'TMMIA', subjectName: 'SHOROF TMMIA', className: '4 C Putra', hours: 1 },
  { no: 13, teacherName: 'ASEP SAEPUL MILLAH, M.Pd.', unit: 'TMMIA', subjectName: 'SHOROF TMMIA', className: '5 A IPA Putri', hours: 1 },
  { no: 13, teacherName: 'ASEP SAEPUL MILLAH, M.Pd.', unit: 'TMMIA', subjectName: 'SHOROF TMMIA', className: '5 B IPS Putri', hours: 1 },
  { no: 13, teacherName: 'ASEP SAEPUL MILLAH, M.Pd.', unit: 'TMMIA', subjectName: 'SHOROF TMMIA', className: '5 C IPA Putra', hours: 1 },
  { no: 13, teacherName: 'ASEP SAEPUL MILLAH, M.Pd.', unit: 'TMMIA', subjectName: 'SHOROF TMMIA', className: '5 D IPS Putra', hours: 1 },

  // 14 BARIROTUL CHOIRIYAH, S.E.I.
  { no: 14, teacherName: 'BARIROTUL CHOIRIYAH, S.E.I.', unit: 'SMA', subjectName: 'B. INDONESIA SMA', className: '1 Intensif', hours: 2 },
  { no: 14, teacherName: 'BARIROTUL CHOIRIYAH, S.E.I.', unit: 'SMA', subjectName: 'B. INDONESIA SMA', className: '5 A IPA Putri', hours: 2 },
  { no: 14, teacherName: 'BARIROTUL CHOIRIYAH, S.E.I.', unit: 'SMA', subjectName: 'B. INDONESIA SMA', className: '5 B IPS Putri', hours: 2 },
  { no: 14, teacherName: 'BARIROTUL CHOIRIYAH, S.E.I.', unit: 'SMA', subjectName: 'B. INDONESIA SMA', className: 'X A Non Mukim Putri', hours: 1 },
  { no: 14, teacherName: 'BARIROTUL CHOIRIYAH, S.E.I.', unit: 'SMA', subjectName: 'B. INDONESIA SMA', className: 'X A Non Mukim Putri', hours: 1 },
  { no: 14, teacherName: 'BARIROTUL CHOIRIYAH, S.E.I.', unit: 'SMA', subjectName: 'B. INDONESIA SMA', className: 'X B Non Mukim Putra', hours: 2 },
  { no: 14, teacherName: 'BARIROTUL CHOIRIYAH, S.E.I.', unit: 'SMA', subjectName: 'B. INDONESIA SMA', className: 'XII IPA Non Mukim', hours: 2 },
  { no: 14, teacherName: 'BARIROTUL CHOIRIYAH, S.E.I.', unit: 'SMA', subjectName: 'B. INDONESIA SMA', className: 'XII IPA Non Mukim', hours: 1 },
  { no: 14, teacherName: 'BARIROTUL CHOIRIYAH, S.E.I.', unit: 'SMA', subjectName: 'B. INDONESIA SMA', className: 'XII IPS Non Mukim', hours: 2 },
  { no: 14, teacherName: 'BARIROTUL CHOIRIYAH, S.E.I.', unit: 'SMA', subjectName: 'B. INDONESIA SMA', className: 'XII IPS Non Mukim', hours: 1 },
  { no: 14, teacherName: 'BARIROTUL CHOIRIYAH, S.E.I.', unit: 'SMA', subjectName: 'EKONOMI SMA', className: '1 Intensif', hours: 2 },
  { no: 14, teacherName: 'BARIROTUL CHOIRIYAH, S.E.I.', unit: 'SMA', subjectName: 'EKONOMI SMA', className: '2 INT IPS', hours: 2 },
  { no: 14, teacherName: 'BARIROTUL CHOIRIYAH, S.E.I.', unit: 'SMA', subjectName: 'EKONOMI SMA', className: '4 C Putra', hours: 2 },
  { no: 14, teacherName: 'BARIROTUL CHOIRIYAH, S.E.I.', unit: 'SMA', subjectName: 'EKONOMI SMA', className: '5 B IPS Putri', hours: 2 },
  { no: 14, teacherName: 'BARIROTUL CHOIRIYAH, S.E.I.', unit: 'SMA', subjectName: 'EKONOMI SMA', className: '5 D IPS Putra', hours: 2 },
  { no: 14, teacherName: 'BARIROTUL CHOIRIYAH, S.E.I.', unit: 'SMA', subjectName: 'EKONOMI SMA', className: 'XI IPS Non Mukim', hours: 2 },
  { no: 14, teacherName: 'BARIROTUL CHOIRIYAH, S.E.I.', unit: 'SMA', subjectName: 'GEOGRAFI SMA', className: '1 Intensif', hours: 2 },
  { no: 14, teacherName: 'BARIROTUL CHOIRIYAH, S.E.I.', unit: 'SMA', subjectName: 'GEOGRAFI SMA', className: '4 C Putra', hours: 2 },

  // 15 BAYU NIRPANA, M.H.
  { no: 15, teacherName: 'BAYU NIRPANA, M.H.', unit: 'TMMIA', subjectName: 'USHUL FIQH TMMIA', className: '4 A Putri', hours: 2 },
  { no: 15, teacherName: 'BAYU NIRPANA, M.H.', unit: 'TMMIA', subjectName: 'USHUL FIQH TMMIA', className: '4 B Putra', hours: 2 },
  { no: 15, teacherName: 'BAYU NIRPANA, M.H.', unit: 'TMMIA', subjectName: 'USHUL FIQH TMMIA', className: '4 C Putra', hours: 2 },

  // 16 DAVA NUR PEBRIANTO, S.Pd.
  { no: 16, teacherName: 'DAVA NUR PEBRIANTO, S.Pd.', unit: 'TMMIA', subjectName: 'INSYA TMMIA', className: '2 INT IPA', hours: 2 },
  { no: 16, teacherName: 'DAVA NUR PEBRIANTO, S.Pd.', unit: 'TMMIA', subjectName: 'INSYA TMMIA', className: '2 INT IPS', hours: 2 },
  { no: 16, teacherName: 'DAVA NUR PEBRIANTO, S.Pd.', unit: 'TMMIA', subjectName: 'INSYA TMMIA', className: '5 A IPA Putri', hours: 1 },
  { no: 16, teacherName: 'DAVA NUR PEBRIANTO, S.Pd.', unit: 'TMMIA', subjectName: 'INSYA TMMIA', className: '5 A IPA Putri', hours: 1 },
  { no: 16, teacherName: 'DAVA NUR PEBRIANTO, S.Pd.', unit: 'TMMIA', subjectName: 'INSYA TMMIA', className: '5 B IPS Putri', hours: 2 },
  { no: 16, teacherName: 'DAVA NUR PEBRIANTO, S.Pd.', unit: 'TMMIA', subjectName: "MUTHOLA'AH TMMIA", className: '5 A IPA Putri', hours: 1 },
  { no: 16, teacherName: 'DAVA NUR PEBRIANTO, S.Pd.', unit: 'TMMIA', subjectName: "MUTHOLA'AH TMMIA", className: '5 A IPA Putri', hours: 1 },
  { no: 16, teacherName: 'DAVA NUR PEBRIANTO, S.Pd.', unit: 'TMMIA', subjectName: "MUTHOLA'AH TMMIA", className: '5 B IPS Putri', hours: 2 },
  { no: 16, teacherName: 'DAVA NUR PEBRIANTO, S.Pd.', unit: 'TMMIA', subjectName: "MUTHOLA'AH TMMIA", className: '5 C IPA Putra', hours: 2 },
  { no: 16, teacherName: 'DAVA NUR PEBRIANTO, S.Pd.', unit: 'TMMIA', subjectName: "MUTHOLA'AH TMMIA", className: '5 D IPS Putra', hours: 2 },
  { no: 16, teacherName: 'DAVA NUR PEBRIANTO, S.Pd.', unit: 'TMMIA', subjectName: 'NAHWU TMMIA', className: '6 A IPA Putri', hours: 2 },
  { no: 16, teacherName: 'DAVA NUR PEBRIANTO, S.Pd.', unit: 'TMMIA', subjectName: 'NAHWU TMMIA', className: '6 B IPS Putri', hours: 1 },
  { no: 16, teacherName: 'DAVA NUR PEBRIANTO, S.Pd.', unit: 'TMMIA', subjectName: 'NAHWU TMMIA', className: '6 B IPS Putri', hours: 1 },
  { no: 16, teacherName: 'DAVA NUR PEBRIANTO, S.Pd.', unit: 'TMMIA', subjectName: 'TAFSIR TMMIA', className: '2 INT IPA', hours: 2 },
  { no: 16, teacherName: 'DAVA NUR PEBRIANTO, S.Pd.', unit: 'TMMIA', subjectName: 'TAFSIR TMMIA', className: '2 INT IPS', hours: 2 },
  { no: 16, teacherName: 'DAVA NUR PEBRIANTO, S.Pd.', unit: 'TMMIA', subjectName: 'TAMRIN LUGHOH TMMIA', className: '4 A Putri', hours: 2 },

  // 17 DIDAH ROSIDAH, S.Pd.
  { no: 17, teacherName: 'DIDAH ROSIDAH, S.Pd.', unit: 'SMA', subjectName: 'B. SUNDA SMA', className: '6 A IPA Putri', hours: 1 },
  { no: 17, teacherName: 'DIDAH ROSIDAH, S.Pd.', unit: 'SMA', subjectName: 'B. SUNDA SMA', className: '6 B IPS Putri', hours: 1 },
  { no: 17, teacherName: 'DIDAH ROSIDAH, S.Pd.', unit: 'SMA', subjectName: 'B. SUNDA SMA', className: '6 C IPA Putra', hours: 1 },

  // 18 DONI SUBIYANTO, S.E.
  { no: 18, teacherName: 'DONI SUBIYANTO, S.E.', unit: 'SMA', subjectName: 'EKONOMI SMA', className: '3 INT IPS', hours: 2 },
  { no: 18, teacherName: 'DONI SUBIYANTO, S.E.', unit: 'SMA', subjectName: 'EKONOMI SMA', className: '4 A Putri', hours: 2 },
  { no: 18, teacherName: 'DONI SUBIYANTO, S.E.', unit: 'SMA', subjectName: 'EKONOMI SMA', className: '4 B Putra', hours: 1 },
  { no: 18, teacherName: 'DONI SUBIYANTO, S.E.', unit: 'SMA', subjectName: 'EKONOMI SMA', className: '4 B Putra', hours: 1 },
  { no: 18, teacherName: 'DONI SUBIYANTO, S.E.', unit: 'SMA', subjectName: 'EKONOMI SMA', className: '6 B IPS Putri', hours: 2 },
  { no: 18, teacherName: 'DONI SUBIYANTO, S.E.', unit: 'SMA', subjectName: 'EKONOMI SMA', className: '6 D IPS Putra', hours: 1 },
  { no: 18, teacherName: 'DONI SUBIYANTO, S.E.', unit: 'SMA', subjectName: 'EKONOMI SMA', className: '6 D IPS Putra', hours: 1 },
  { no: 18, teacherName: 'DONI SUBIYANTO, S.E.', unit: 'SMA', subjectName: 'EKONOMI SMA', className: 'X A Non Mukim Putri', hours: 2 },
  { no: 18, teacherName: 'DONI SUBIYANTO, S.E.', unit: 'SMA', subjectName: 'X B Non Mukim Putra', className: 'X B Non Mukim Putra', hours: 2 },
  { no: 18, teacherName: 'DONI SUBIYANTO, S.E.', unit: 'SMA', subjectName: 'EKONOMI SMA', className: 'XII IPS Non Mukim', hours: 2 },
  { no: 18, teacherName: 'DONI SUBIYANTO, S.E.', unit: 'SMA', subjectName: 'GEOGRAFI SMA', className: '2 INT IPS', hours: 2 },
  { no: 18, teacherName: 'DONI SUBIYANTO, S.E.', unit: 'SMA', subjectName: 'GEOGRAFI SMA', className: '5 B IPS Putri', hours: 2 },
  { no: 18, teacherName: 'DONI SUBIYANTO, S.E.', unit: 'SMA', subjectName: 'GEOGRAFI SMA', className: '5 D IPS Putra', hours: 2 },
  { no: 18, teacherName: 'DONI SUBIYANTO, S.E.', unit: 'SMA', subjectName: 'GEOGRAFI SMA', className: 'X A Non Mukim Putri', hours: 2 },
  { no: 18, teacherName: 'DONI SUBIYANTO, S.E.', unit: 'SMA', subjectName: 'GEOGRAFI SMA', className: 'X B Non Mukim Putra', hours: 2 },
  { no: 18, teacherName: 'DONI SUBIYANTO, S.E.', unit: 'SMA', subjectName: 'GEOGRAFI SMA', className: 'XI IPS Non Mukim', hours: 2 },

  // 19 EDI SANJAYA, S.Pd.
  { no: 19, teacherName: 'EDI SANJAYA, S.Pd.', unit: 'SMA', subjectName: 'B. INDONESIA SMA', className: '2 INT IPA', hours: 2 },
  { no: 19, teacherName: 'EDI SANJAYA, S.Pd.', unit: 'SMA', subjectName: 'B. INDONESIA SMA', className: '2 INT IPS', hours: 2 },
  { no: 19, teacherName: 'EDI SANJAYA, S.Pd.', unit: 'SMA', subjectName: 'B. INDONESIA SMA', className: '5 C IPA Putra', hours: 2 },
  { no: 19, teacherName: 'EDI SANJAYA, S.Pd.', unit: 'SMA', subjectName: 'B. INDONESIA SMA', className: '5 D IPS Putra', hours: 2 },
  { no: 19, teacherName: 'EDI SANJAYA, S.Pd.', unit: 'SMA', subjectName: 'B. INDONESIA SMA', className: 'XI IPA Non Mukim', hours: 2 },
  { no: 19, teacherName: 'EDI SANJAYA, S.Pd.', unit: 'SMA', subjectName: 'B. INDONESIA SMA', className: 'XI IPA Non Mukim', hours: 1 },
  { no: 19, teacherName: 'EDI SANJAYA, S.Pd.', unit: 'SMA', subjectName: 'B. INDONESIA SMA', className: 'XI IPS Non Mukim', hours: 2 },
  { no: 19, teacherName: 'EDI SANJAYA, S.Pd.', unit: 'SMA', subjectName: 'B. INDONESIA SMA', className: 'XI IPS Non Mukim', hours: 1 },

  // 20 ENDANG DARMAWAN PANDAWA AGUNG, S.Pd.
  { no: 20, teacherName: 'ENDANG DARMAWAN PANDAWA AGUNG, S.Pd.', unit: 'TMMIA', subjectName: 'TAMRIN LUGHOH TMMIA', className: '1 Intensif', hours: 1 },
  { no: 20, teacherName: 'ENDANG DARMAWAN PANDAWA AGUNG, S.Pd.', unit: 'TMMIA', subjectName: 'TAMRIN LUGHOH TMMIA', className: '1 Intensif', hours: 2 },
  { no: 20, teacherName: 'ENDANG DARMAWAN PANDAWA AGUNG, S.Pd.', unit: 'TMMIA', subjectName: 'TAMRIN LUGHOH TMMIA', className: '1 Intensif', hours: 2 },

  // 21 FADHILLAH, S.Pd.
  { no: 21, teacherName: 'FADHILLAH, S.Pd.', unit: 'SMA', subjectName: 'INFORMATIKA SMA', className: 'X A Non Mukim Putri', hours: 2 },
  { no: 21, teacherName: 'FADHILLAH, S.Pd.', unit: 'SMA', subjectName: 'INFORMATIKA SMA', className: 'X B Non Mukim Putra', hours: 2 },
  { no: 21, teacherName: 'FADHILLAH, S.Pd.', unit: 'SMA', subjectName: 'LIFE SKILL SMA', className: '3 INT IPA', hours: 1 },
  { no: 21, teacherName: 'FADHILLAH, S.Pd.', unit: 'SMA', subjectName: 'LIFE SKILL SMA', className: '3 INT IPS', hours: 1 },
  { no: 21, teacherName: 'FADHILLAH, S.Pd.', unit: 'SMA', subjectName: 'LIFE SKILL SMA', className: '6 A IPA Putri', hours: 1 },
  { no: 21, teacherName: 'FADHILLAH, S.Pd.', unit: 'SMA', subjectName: 'LIFE SKILL SMA', className: '6 B IPS Putri', hours: 1 },
  { no: 21, teacherName: 'FADHILLAH, S.Pd.', unit: 'SMA', subjectName: 'LIFE SKILL SMA', className: '6 C IPA Putra', hours: 1 },
  { no: 21, teacherName: 'FADHILLAH, S.Pd.', unit: 'SMA', subjectName: 'LIFE SKILL SMA', className: '6 D IPS Putra', hours: 1 },
  { no: 21, teacherName: 'FADHILLAH, S.Pd.', unit: 'SMA', subjectName: 'LIFE SKILL SMA', className: 'X A Non Mukim Putri', hours: 2 },
  { no: 21, teacherName: 'FADHILLAH, S.Pd.', unit: 'SMA', subjectName: 'LIFE SKILL SMA', className: 'X B Non Mukim Putra', hours: 2 },
  { no: 21, teacherName: 'FADHILLAH, S.Pd.', unit: 'SMA', subjectName: 'LIFE SKILL SMA', className: 'XII IPA Non Mukim', hours: 2 },
  { no: 21, teacherName: 'FADHILLAH, S.Pd.', unit: 'SMA', subjectName: 'LIFE SKILL SMA', className: 'XII IPS Non Mukim', hours: 2 },
  { no: 21, teacherName: 'FADHILLAH, S.Pd.', unit: 'SMA', subjectName: 'TAHFIZ SMA', className: 'XII IPA Non Mukim', hours: 2 },
  { no: 21, teacherName: 'FADHILLAH, S.Pd.', unit: 'SMA', subjectName: 'TAHFIZ SMA', className: 'XII IPS Non Mukim', hours: 2 },
  { no: 21, teacherName: 'FADHILLAH, S.Pd.', unit: 'TMMIA', subjectName: 'FIQIH TMMIA', className: '2 INT IPA', hours: 1 },
  { no: 21, teacherName: 'FADHILLAH, S.Pd.', unit: 'TMMIA', subjectName: 'FIQIH TMMIA', className: '2 INT IPS', hours: 1 },

  // 22 FADILLAH ABIDANA, S.S., M.Pd.,
  { no: 22, teacherName: 'FADILLAH ABIDANA, S.S., M.Pd.,', unit: 'SMA', subjectName: 'B. INDONESIA SMA', className: '3 INT IPA', hours: 1 },
  { no: 22, teacherName: 'FADILLAH ABIDANA, S.S., M.Pd.,', unit: 'SMA', subjectName: 'B. INDONESIA SMA', className: '3 INT IPA', hours: 2 },
  { no: 22, teacherName: 'FADILLAH ABIDANA, S.S., M.Pd.,', unit: 'SMA', subjectName: 'B. INDONESIA SMA', className: '3 INT IPS', hours: 1 },
  { no: 22, teacherName: 'FADILLAH ABIDANA, S.S., M.Pd.,', unit: 'SMA', subjectName: 'B. INDONESIA SMA', className: '3 INT IPS', hours: 2 },
  { no: 22, teacherName: 'FADILLAH ABIDANA, S.S., M.Pd.,', unit: 'SMA', subjectName: 'B. INDONESIA SMA', className: '6 A IPA Putri', hours: 3 },
  { no: 22, teacherName: 'FADILLAH ABIDANA, S.S., M.Pd.,', unit: 'SMA', subjectName: 'B. INDONESIA SMA', className: '6 B IPS Putri', hours: 2 },
  { no: 22, teacherName: 'FADILLAH ABIDANA, S.S., M.Pd.,', unit: 'SMA', subjectName: 'B. INDONESIA SMA', className: '6 B IPS Putri', hours: 1 },
  { no: 22, teacherName: 'FADILLAH ABIDANA, S.S., M.Pd.,', unit: 'SMA', subjectName: 'B. INDONESIA SMA', className: '6 C IPA Putra', hours: 3 },
  { no: 22, teacherName: 'FADILLAH ABIDANA, S.S., M.Pd.,', unit: 'SMA', subjectName: 'B. INDONESIA SMA', className: '6 D IPS Putra', hours: 2 },
  { no: 22, teacherName: 'FADILLAH ABIDANA, S.S., M.Pd.,', unit: 'SMA', subjectName: 'B. INDONESIA SMA', className: '6 D IPS Putra', hours: 1 },
  { no: 22, teacherName: 'FADILLAH ABIDANA, S.S., M.Pd.,', unit: 'SMA', subjectName: 'B. INGGRIS SMA', className: '5 A IPA Putri', hours: 2 },
  { no: 22, teacherName: 'FADILLAH ABIDANA, S.S., M.Pd.,', unit: 'SMA', subjectName: 'B. INGGRIS SMA', className: '5 B IPS Putri', hours: 2 },
  { no: 22, teacherName: 'FADILLAH ABIDANA, S.S., M.Pd.,', unit: 'SMA', subjectName: 'B. INGGRIS SMA', className: '5 C IPA Putra', hours: 2 },
  { no: 22, teacherName: 'FADILLAH ABIDANA, S.S., M.Pd.,', unit: 'SMA', subjectName: 'B. INGGRIS SMA', className: '5 D IPS Putra', hours: 2 },
  { no: 22, teacherName: 'FADILLAH ABIDANA, S.S., M.Pd.,', unit: 'TMMIA', subjectName: 'READING & GRAMMAR TMMIA', className: '5 A IPA Putri', hours: 1 },
  { no: 22, teacherName: 'FADILLAH ABIDANA, S.S., M.Pd.,', unit: 'TMMIA', subjectName: 'READING & GRAMMAR TMMIA', className: '5 B IPS Putri', hours: 1 },
  { no: 22, teacherName: 'FADILLAH ABIDANA, S.S., M.Pd.,', unit: 'TMMIA', subjectName: 'READING & GRAMMAR TMMIA', className: '5 C IPA Putra', hours: 1 },
  { no: 22, teacherName: 'FADILLAH ABIDANA, S.S., M.Pd.,', unit: 'TMMIA', subjectName: 'READING & GRAMMAR TMMIA', className: '5 D IPS Putra', hours: 1 },

  // 23 H. ASEP SAEPUDIN, M.Pd.
  { no: 23, teacherName: 'H. ASEP SAEPUDIN, M.Pd.', unit: 'SMA', subjectName: 'B. INDONESIA SMA', className: '4 A Putri', hours: 2 },
  { no: 23, teacherName: 'H. ASEP SAEPUDIN, M.Pd.', unit: 'SMA', subjectName: 'B. INDONESIA SMA', className: '4 B Putra', hours: 2 },
  { no: 23, teacherName: 'H. ASEP SAEPUDIN, M.Pd.', unit: 'SMA', subjectName: 'B. INDONESIA SMA', className: '4 C Putra', hours: 2 },

  // 24 HAFIZD HIDAYAT, S.Pd., Gr.
  { no: 24, teacherName: 'HAFIZD HIDAYAT, S.Pd., Gr.', unit: 'SMA', subjectName: 'LIFE SKILL SMA', className: '2 INT IPA', hours: 2 },
  { no: 24, teacherName: 'HAFIZD HIDAYAT, S.Pd., Gr.', unit: 'SMA', subjectName: 'LIFE SKILL SMA', className: '2 INT IPS', hours: 2 },
  { no: 24, teacherName: 'HAFIZD HIDAYAT, S.Pd., Gr.', unit: 'SMA', subjectName: 'LIFE SKILL SMA', className: '5 A IPA Putri', hours: 2 },
  { no: 24, teacherName: 'HAFIZD HIDAYAT, S.Pd., Gr.', unit: 'SMA', subjectName: 'LIFE SKILL SMA', className: '5 B IPS Putri', hours: 2 },
  { no: 24, teacherName: 'HAFIZD HIDAYAT, S.Pd., Gr.', unit: 'SMA', subjectName: 'LIFE SKILL SMA', className: '5 C IPA Putra', hours: 2 },
  { no: 24, teacherName: 'HAFIZD HIDAYAT, S.Pd., Gr.', unit: 'SMA', subjectName: 'LIFE SKILL SMA', className: '5 D IPS Putra', hours: 2 },
  { no: 24, teacherName: 'HAFIZD HIDAYAT, S.Pd., Gr.', unit: 'SMA', subjectName: 'LIFE SKILL SMA', className: 'XI IPA Non Mukim', hours: 2 },
  { no: 24, teacherName: 'HAFIZD HIDAYAT, S.Pd., Gr.', unit: 'SMA', subjectName: 'LIFE SKILL SMA', className: 'XI IPS Non Mukim', hours: 2 },

  // 25 HAMMAD IYAD FAIJI
  { no: 25, teacherName: 'HAMMAD IYAD FAIJI', unit: 'TMMIA', subjectName: 'TAMRIN LUGHOH TMMIA', className: '4 B Putra', hours: 2 },
  { no: 25, teacherName: 'HAMMAD IYAD FAIJI', unit: 'TMMIA', subjectName: 'TAMRIN LUGHOH TMMIA', className: '4 C Putra', hours: 2 },

  // 26 HAMZAH ROBBANI
  { no: 26, teacherName: 'HAMZAH ROBBANI', unit: 'TMMIA', subjectName: 'INSYA TMMIA', className: '3 INT IPA', hours: 2 },
  { no: 26, teacherName: 'HAMZAH ROBBANI', unit: 'TMMIA', subjectName: 'INSYA TMMIA', className: '3 INT IPS', hours: 2 },
  { no: 26, teacherName: 'HAMZAH ROBBANI', unit: 'TMMIA', subjectName: 'INSYA TMMIA', className: '5 C IPA Putra', hours: 2 },
  { no: 26, teacherName: 'HAMZAH ROBBANI', unit: 'TMMIA', subjectName: 'INSYA TMMIA', className: '5 D IPS Putra', hours: 2 },
  { no: 26, teacherName: 'HAMZAH ROBBANI', unit: 'TMMIA', subjectName: 'TAFSIR TMMIA', className: '4 B Putra', hours: 2 },
  { no: 26, teacherName: 'HAMZAH ROBBANI', unit: 'TMMIA', subjectName: 'TAFSIR TMMIA', className: '4 C Putra', hours: 2 },
  { no: 26, teacherName: 'HAMZAH ROBBANI', unit: 'TMMIA', subjectName: 'TAFSIR TMMIA', className: '5 A IPA Putri', hours: 2 },
  { no: 26, teacherName: 'HAMZAH ROBBANI', unit: 'TMMIA', subjectName: 'TAFSIR TMMIA', className: '5 B IPS Putri', hours: 1 },
  { no: 26, teacherName: 'HAMZAH ROBBANI', unit: 'TMMIA', subjectName: 'TAFSIR TMMIA', className: '5 B IPS Putri', hours: 1 },

  // 27 ICHSANUL AFIEF, S.Sos.
  { no: 27, teacherName: 'ICHSANUL AFIEF, S.Sos.', unit: 'TMMIA', subjectName: "MUTHOLA'AH TMMIA", className: '3 INT IPA', hours: 2 },
  { no: 27, teacherName: 'ICHSANUL AFIEF, S.Sos.', unit: 'TMMIA', subjectName: "MUTHOLA'AH TMMIA", className: '3 INT IPS', hours: 1 },
  { no: 27, teacherName: 'ICHSANUL AFIEF, S.Sos.', unit: 'TMMIA', subjectName: "MUTHOLA'AH TMMIA", className: '3 INT IPS', hours: 1 },
  { no: 27, teacherName: 'ICHSANUL AFIEF, S.Sos.', unit: 'TMMIA', subjectName: 'SHOROF TMMIA', className: '3 INT IPA', hours: 1 },
  { no: 27, teacherName: 'ICHSANUL AFIEF, S.Sos.', unit: 'TMMIA', subjectName: 'SHOROF TMMIA', className: '3 INT IPS', hours: 1 },

  // 28 ILMI MIFTAHUL JANNAH
  { no: 28, teacherName: 'ILMI MIFTAHUL JANNAH', unit: 'TMMIA', subjectName: 'HADIS TMMIA', className: '1 Intensif', hours: 1 },

  // 29 ISNAN APRIZAL HAFIZH
  { no: 29, teacherName: 'ISNAN APRIZAL HAFIZH', unit: 'SMA', subjectName: 'MATEMATIKA SMA', className: '1 Intensif', hours: 2 },
  { no: 29, teacherName: 'ISNAN APRIZAL HAFIZH', unit: 'SMA', subjectName: 'MATEMATIKA SMA', className: '4 A Putri', hours: 1 },
  { no: 29, teacherName: 'ISNAN APRIZAL HAFIZH', unit: 'SMA', subjectName: 'MATEMATIKA SMA', className: '4 A Putri', hours: 1 },
  { no: 29, teacherName: 'ISNAN APRIZAL HAFIZH', unit: 'SMA', subjectName: 'MATEMATIKA SMA', className: '4 B Putra', hours: 2 },
  { no: 29, teacherName: 'ISNAN APRIZAL HAFIZH', unit: 'SMA', subjectName: 'MATEMATIKA SMA', className: '4 C Putra', hours: 2 },
  { no: 29, teacherName: 'ISNAN APRIZAL HAFIZH', unit: 'SMA', subjectName: 'MATEMATIKA SMA', className: 'X A Non Mukim Putri', hours: 2 },
  { no: 29, teacherName: 'ISNAN APRIZAL HAFIZH', unit: 'SMA', subjectName: 'MATEMATIKA SMA', className: 'X B Non Mukim Putra', hours: 2 },

  // 30 ISWAHYUDIN, S.E.
  { no: 30, teacherName: 'ISWAHYUDIN, S.E.', unit: 'SMA', subjectName: 'MATEMATIKA SMA', className: '2 INT IPS', hours: 2 },
  { no: 30, teacherName: 'ISWAHYUDIN, S.E.', unit: 'SMA', subjectName: 'MATEMATIKA SMA', className: '2 INT IPS', hours: 1 },
  { no: 30, teacherName: 'ISWAHYUDIN, S.E.', unit: 'SMA', subjectName: 'MATEMATIKA SMA', className: '5 B IPS Putri', hours: 2 },
  { no: 30, teacherName: 'ISWAHYUDIN, S.E.', unit: 'SMA', subjectName: 'MATEMATIKA SMA', className: '5 B IPS Putri', hours: 1 },
  { no: 30, teacherName: 'ISWAHYUDIN, S.E.', unit: 'SMA', subjectName: 'MATEMATIKA SMA', className: '5 D IPS Putra', hours: 2 },
  { no: 30, teacherName: 'ISWAHYUDIN, S.E.', unit: 'SMA', subjectName: 'MATEMATIKA SMA', className: '5 D IPS Putra', hours: 1 },

  // 31 Ir. RAHMAWATI, M.Pd.
  { no: 31, teacherName: 'Ir. RAHMAWATI, M.Pd.', unit: 'SMA', subjectName: 'KIMIA SMA', className: '1 Intensif', hours: 2 },
  { no: 31, teacherName: 'Ir. RAHMAWATI, M.Pd.', unit: 'SMA', subjectName: 'KIMIA SMA', className: '2 INT IPA', hours: 2 },
  { no: 31, teacherName: 'Ir. RAHMAWATI, M.Pd.', unit: 'SMA', subjectName: 'KIMIA SMA', className: '3 INT IPA', hours: 2 },
  { no: 31, teacherName: 'Ir. RAHMAWATI, M.Pd.', unit: 'SMA', subjectName: 'KIMIA SMA', className: '4 A Putri', hours: 2 },
  { no: 31, teacherName: 'Ir. RAHMAWATI, M.Pd.', unit: 'SMA', subjectName: 'KIMIA SMA', className: '4 B Putra', hours: 2 },
  { no: 31, teacherName: 'Ir. RAHMAWATI, M.Pd.', unit: 'SMA', subjectName: 'KIMIA SMA', className: '4 C Putra', hours: 2 },
  { no: 31, teacherName: 'Ir. RAHMAWATI, M.Pd.', unit: 'SMA', subjectName: 'KIMIA SMA', className: '5 A IPA Putri', hours: 2 },
  { no: 31, teacherName: 'Ir. RAHMAWATI, M.Pd.', unit: 'SMA', subjectName: 'KIMIA SMA', className: '5 C IPA Putra', hours: 2 },
  { no: 31, teacherName: 'Ir. RAHMAWATI, M.Pd.', unit: 'SMA', subjectName: 'KIMIA SMA', className: '6 A IPA Putri', hours: 2 },
  { no: 31, teacherName: 'Ir. RAHMAWATI, M.Pd.', unit: 'SMA', subjectName: 'KIMIA SMA', className: '6 C IPA Putra', hours: 2 },
  { no: 31, teacherName: 'Ir. RAHMAWATI, M.Pd.', unit: 'SMA', subjectName: 'KIMIA SMA', className: 'X A Non Mukim Putri', hours: 2 },
  { no: 31, teacherName: 'Ir. RAHMAWATI, M.Pd.', unit: 'SMA', subjectName: 'KIMIA SMA', className: 'X B Non Mukim Putra', hours: 2 },
  { no: 31, teacherName: 'Ir. RAHMAWATI, M.Pd.', unit: 'SMA', subjectName: 'KIMIA SMA', className: 'XI IPA Non Mukim', hours: 2 },
  { no: 31, teacherName: 'Ir. RAHMAWATI, M.Pd.', unit: 'SMA', subjectName: 'KIMIA SMA', className: 'XII IPA Non Mukim', hours: 2 },

  // 32 KHAIRIL FAHMI, S.Pd.
  { no: 32, teacherName: 'KHAIRIL FAHMI, S.Pd.', unit: 'SMA', subjectName: 'BIOLOGI SMA', className: '4 B Putra', hours: 2 },
  { no: 32, teacherName: 'KHAIRIL FAHMI, S.Pd.', unit: 'SMA', subjectName: 'BIOLOGI SMA', className: '4 C Putra', hours: 2 },
  { no: 32, teacherName: 'KHAIRIL FAHMI, S.Pd.', unit: 'SMA', subjectName: 'GEOGRAFI SMA', className: '3 INT IPS', hours: 2 },
  { no: 32, teacherName: 'KHAIRIL FAHMI, S.Pd.', unit: 'SMA', subjectName: 'GEOGRAFI SMA', className: '4 A Putri', hours: 2 },
  { no: 32, teacherName: 'KHAIRIL FAHMI, S.Pd.', unit: 'SMA', subjectName: 'GEOGRAFI SMA', className: '4 B Putra', hours: 2 },
  { no: 32, teacherName: 'KHAIRIL FAHMI, S.Pd.', unit: 'SMA', subjectName: 'GEOGRAFI SMA', className: '6 B IPS Putri', hours: 2 },
  { no: 32, teacherName: 'KHAIRIL FAHMI, S.Pd.', unit: 'SMA', subjectName: 'GEOGRAFI SMA', className: '6 D IPS Putra', hours: 2 },
  { no: 32, teacherName: 'KHAIRIL FAHMI, S.Pd.', unit: 'SMA', subjectName: 'GEOGRAFI SMA', className: 'XII IPS Non Mukim', hours: 1 },
  { no: 32, teacherName: 'KHAIRIL FAHMI, S.Pd.', unit: 'SMA', subjectName: 'GEOGRAFI SMA', className: 'XII IPS Non Mukim', hours: 1 },
  { no: 32, teacherName: 'KHAIRIL FAHMI, S.Pd.', unit: 'SMA', subjectName: 'TAHFIZ SMA', className: 'X A Non Mukim Putri', hours: 2 },
  { no: 32, teacherName: 'KHAIRIL FAHMI, S.Pd.', unit: 'SMA', subjectName: 'TAHFIZ SMA', className: 'X B Non Mukim Putra', hours: 2 },

  // 33 LIYAS SYARIFUDIN, M.Pd.
  { no: 33, teacherName: 'LIYAS SYARIFUDIN, M.Pd.', unit: 'SMA', subjectName: 'SOSIOLOGI SMA', className: '1 Intensif', hours: 2 },
  { no: 33, teacherName: 'LIYAS SYARIFUDIN, M.Pd.', unit: 'SMA', subjectName: 'SOSIOLOGI SMA', className: '2 INT IPS', hours: 2 },
  { no: 33, teacherName: 'LIYAS SYARIFUDIN, M.Pd.', unit: 'SMA', subjectName: 'SOSIOLOGI SMA', className: '3 INT IPS', hours: 2 },
  { no: 33, teacherName: 'LIYAS SYARIFUDIN, M.Pd.', unit: 'SMA', subjectName: 'SOSIOLOGI SMA', className: '4 A Putri', hours: 2 },
  { no: 33, teacherName: 'LIYAS SYARIFUDIN, M.Pd.', unit: 'SMA', subjectName: 'SOSIOLOGI SMA', className: '4 B Putra', hours: 2 },
  { no: 33, teacherName: 'LIYAS SYARIFUDIN, M.Pd.', unit: 'SMA', subjectName: 'SOSIOLOGI SMA', className: '4 C Putra', hours: 1 },
  { no: 33, teacherName: 'LIYAS SYARIFUDIN, M.Pd.', unit: 'SMA', subjectName: 'SOSIOLOGI SMA', className: '4 C Putra', hours: 1 },
  { no: 33, teacherName: 'LIYAS SYARIFUDIN, M.Pd.', unit: 'SMA', subjectName: 'SOSIOLOGI SMA', className: '5 B IPS Putri', hours: 2 },
  { no: 33, teacherName: 'LIYAS SYARIFUDIN, M.Pd.', unit: 'SMA', subjectName: 'SOSIOLOGI SMA', className: '5 D IPS Putra', hours: 2 },
  { no: 33, teacherName: 'LIYAS SYARIFUDIN, M.Pd.', unit: 'SMA', subjectName: 'SOSIOLOGI SMA', className: '6 B IPS Putri', hours: 2 },
  { no: 33, teacherName: 'LIYAS SYARIFUDIN, M.Pd.', unit: 'SMA', subjectName: 'SOSIOLOGI SMA', className: '6 D IPS Putra', hours: 2 },
  { no: 33, teacherName: 'LIYAS SYARIFUDIN, M.Pd.', unit: 'SMA', subjectName: 'SOSIOLOGI SMA', className: 'X A Non Mukim Putri', hours: 2 },
  { no: 33, teacherName: 'LIYAS SYARIFUDIN, M.Pd.', unit: 'SMA', subjectName: 'X B Non Mukim Putra', className: 'X B Non Mukim Putra', hours: 2 },
  { no: 33, teacherName: 'LIYAS SYARIFUDIN, M.Pd.', unit: 'SMA', subjectName: 'SOSIOLOGI SMA', className: 'XI IPS Non Mukim', hours: 2 },
  { no: 33, teacherName: 'LIYAS SYARIFUDIN, M.Pd.', unit: 'SMA', subjectName: 'SOSIOLOGI SMA', className: 'XII IPS Non Mukim', hours: 2 },

  // 34 LULU ZAHROTUN NISA, S.Pd.
  { no: 34, teacherName: 'LULU ZAHROTUN NISA, S.Pd.', unit: 'SMA', subjectName: 'B. INGGRIS SMA', className: 'XI IPA Non Mukim', hours: 2 },
  { no: 34, teacherName: 'LULU ZAHROTUN NISA, S.Pd.', unit: 'SMA', subjectName: 'B. INGGRIS SMA', className: 'XI IPA Non Mukim', hours: 1 },
  { no: 34, teacherName: 'LULU ZAHROTUN NISA, S.Pd.', unit: 'SMA', subjectName: 'B. INGGRIS SMA', className: 'XI IPS Non Mukim', hours: 1 },
  { no: 34, teacherName: 'LULU ZAHROTUN NISA, S.Pd.', unit: 'SMA', subjectName: 'B. INGGRIS SMA', className: 'XI IPS Non Mukim', hours: 2 },
  { no: 34, teacherName: 'LULU ZAHROTUN NISA, S.Pd.', unit: 'SMA', subjectName: 'TAHFIZ SMA', className: 'XI IPA Non Mukim', hours: 2 },
  { no: 34, teacherName: 'LULU ZAHROTUN NISA, S.Pd.', unit: 'SMA', subjectName: 'TAHFIZ SMA', className: 'XI IPS Non Mukim', hours: 2 },

  // 35 M. ALIEF NUGRAHA ATFA, S.H.
  { no: 35, teacherName: 'M. ALIEF NUGRAHA ATFA, S.H.', unit: 'SMA', subjectName: 'BAHASA ARAB SMA', className: 'XI IPA Non Mukim', hours: 2 },
  { no: 35, teacherName: 'M. ALIEF NUGRAHA ATFA, S.H.', unit: 'SMA', subjectName: 'BAHASA ARAB SMA', className: 'XI IPS Non Mukim', hours: 2 },
  { no: 35, teacherName: 'M. ALIEF NUGRAHA ATFA, S.H.', unit: 'SMA', subjectName: 'BAHASA ARAB SMA', className: 'XII IPA Non Mukim', hours: 2 },
  { no: 35, teacherName: 'M. ALIEF NUGRAHA ATFA, S.H.', unit: 'SMA', subjectName: 'BAHASA ARAB SMA', className: 'XII IPS Non Mukim', hours: 2 },

  // 36 M. HIDAYATU RUSYDI, SH
  { no: 36, teacherName: 'M. HIDAYATU RUSYDI, SH', unit: 'SMA', subjectName: 'ANTROPOLOGI SMA', className: '2 INT IPS', hours: 2 },
  { no: 36, teacherName: 'M. HIDAYATU RUSYDI, SH', unit: 'SMA', subjectName: 'ANTROPOLOGI SMA', className: '5 B IPS Putri', hours: 2 },
  { no: 36, teacherName: 'M. HIDAYATU RUSYDI, SH', unit: 'SMA', subjectName: 'ANTROPOLOGI SMA', className: '5 D IPS Putra', hours: 2 },
  { no: 36, teacherName: 'M. HIDAYATU RUSYDI, SH', unit: 'SMA', subjectName: 'ANTROPOLOGI SMA', className: 'XI IPS Non Mukim', hours: 2 },
  { no: 36, teacherName: 'M. HIDAYATU RUSYDI, SH', unit: 'SMA', subjectName: 'SEJARAH SMA', className: '2 INT IPA', hours: 1 },
  { no: 36, teacherName: 'M. HIDAYATU RUSYDI, SH', unit: 'SMA', subjectName: 'SEJARAH SMA', className: '2 INT IPS', hours: 1 },
  { no: 36, teacherName: 'M. HIDAYATU RUSYDI, SH', unit: 'SMA', subjectName: 'SEJARAH SMA', className: '5 A IPA Putri', hours: 1 },
  { no: 36, teacherName: 'M. HIDAYATU RUSYDI, SH', unit: 'SMA', subjectName: 'SEJARAH SMA', className: '5 B IPS Putri', hours: 1 },
  { no: 36, teacherName: 'M. HIDAYATU RUSYDI, SH', unit: 'SMA', subjectName: 'SEJARAH SMA', className: '5 C IPA Putra', hours: 1 },
  { no: 36, teacherName: 'M. HIDAYATU RUSYDI, SH', unit: 'SMA', subjectName: 'SEJARAH SMA', className: '5 D IPS Putra', hours: 1 },
  { no: 36, teacherName: 'M. HIDAYATU RUSYDI, SH', unit: 'SMA', subjectName: 'SEJARAH SMA', className: 'XI IPA Non Mukim', hours: 2 },
  { no: 36, teacherName: 'M. HIDAYATU RUSYDI, SH', unit: 'SMA', subjectName: 'SEJARAH SMA', className: 'XI IPS Non Mukim', hours: 2 },

  // 37 M. IRHAM AL-BAIHAQI
  { no: 37, teacherName: 'M. IRHAM AL-BAIHAQI', unit: 'TMMIA', subjectName: "MUTHOLA'AH TMMIA", className: '4 C Putra', hours: 2 },
  { no: 37, teacherName: 'M. IRHAM AL-BAIHAQI', unit: 'TMMIA', subjectName: 'NAHWU TMMIA', className: '2 INT IPA', hours: 2 },

  // 38 MOHAMAD FARID, S.Pd.I.
  { no: 38, teacherName: 'MOHAMAD FARID, S.Pd.I.', unit: 'TMMIA', subjectName: 'TAMRIN LUGHOH TMMIA', className: '2 INT IPA', hours: 2 },
  { no: 38, teacherName: 'MOHAMAD FARID, S.Pd.I.', unit: 'TMMIA', subjectName: 'TAMRIN LUGHOH TMMIA', className: '2 INT IPA', hours: 2 },
  { no: 38, teacherName: 'MOHAMAD FARID, S.Pd.I.', unit: 'TMMIA', subjectName: 'TAMRIN LUGHOH TMMIA', className: '2 INT IPS', hours: 2 },
  { no: 38, teacherName: 'MOHAMAD FARID, S.Pd.I.', unit: 'TMMIA', subjectName: 'TAMRIN LUGHOH TMMIA', className: '2 INT IPS', hours: 2 },

  // 39 MUHAMAD RAHUL SAYYID, S.Kom.
  { no: 39, teacherName: 'MUHAMAD RAHUL SAYYID, S.Kom.', unit: 'SMA', subjectName: 'INFORMATIKA SMA', className: '2 INT IPA', hours: 2 },
  { no: 39, teacherName: 'MUHAMAD RAHUL SAYYID, S.Kom.', unit: 'SMA', subjectName: 'INFORMATIKA SMA', className: '2 INT IPS', hours: 2 },
  { no: 39, teacherName: 'MUHAMAD RAHUL SAYYID, S.Kom.', unit: 'SMA', subjectName: 'INFORMATIKA SMA', className: '4 A Putri', hours: 2 },
  { no: 39, teacherName: 'MUHAMAD RAHUL SAYYID, S.Kom.', unit: 'SMA', subjectName: 'INFORMATIKA SMA', className: '4 B Putra', hours: 2 },
  { no: 39, teacherName: 'MUHAMAD RAHUL SAYYID, S.Kom.', unit: 'SMA', subjectName: 'INFORMATIKA SMA', className: '5 A IPA Putri', hours: 2 },
  { no: 39, teacherName: 'MUHAMAD RAHUL SAYYID, S.Kom.', unit: 'SMA', subjectName: 'INFORMATIKA SMA', className: '5 B IPS Putri', hours: 2 },
  { no: 39, teacherName: 'MUHAMAD RAHUL SAYYID, S.Kom.', unit: 'SMA', subjectName: 'INFORMATIKA SMA', className: '5 C IPA Putra', hours: 2 },
  { no: 39, teacherName: 'MUHAMAD RAHUL SAYYID, S.Kom.', unit: 'SMA', subjectName: 'INFORMATIKA SMA', className: '5 D IPS Putra', hours: 2 },
  { no: 39, teacherName: 'MUHAMAD RAHUL SAYYID, S.Kom.', unit: 'SMA', subjectName: 'INFORMATIKA SMA', className: 'XI IPA Non Mukim', hours: 2 },
  { no: 39, teacherName: 'MUHAMAD RAHUL SAYYID, S.Kom.', unit: 'SMA', subjectName: 'INFORMATIKA SMA', className: 'XI IPS Non Mukim', hours: 2 },

  // 40 MUHAMMAD AKBAR AL-GHIFARI
  { no: 40, teacherName: 'MUHAMMAD AKBAR AL-GHIFARI', unit: 'TMMIA', subjectName: 'NAHWU TMMIA', className: '2 INT IPS', hours: 2 },

  // 41 MUHAMMAD HANIF FAUZI, S.Ag., M.Pd.
  { no: 41, teacherName: 'MUHAMMAD HANIF FAUZI, S.Ag., M.Pd.', unit: 'TMMIA', subjectName: 'BALAGHAH TMMIA', className: '6 A IPA Putri', hours: 1 },
  { no: 41, teacherName: 'MUHAMMAD HANIF FAUZI, S.Ag., M.Pd.', unit: 'TMMIA', subjectName: 'BALAGHAH TMMIA', className: '6 A IPA Putri', hours: 1 },
  { no: 41, teacherName: 'MUHAMMAD HANIF FAUZI, S.Ag., M.Pd.', unit: 'TMMIA', subjectName: 'BALAGHAH TMMIA', className: '6 B IPS Putri', hours: 2 },
  { no: 41, teacherName: 'MUHAMMAD HANIF FAUZI, S.Ag., M.Pd.', unit: 'TMMIA', subjectName: 'BALAGHAH TMMIA', className: '6 C IPA Putra', hours: 2 },
  { no: 41, teacherName: 'MUHAMMAD HANIF FAUZI, S.Ag., M.Pd.', unit: 'TMMIA', subjectName: 'BALAGHAH TMMIA', className: '6 D IPS Putra', hours: 1 },
  { no: 41, teacherName: 'MUHAMMAD HANIF FAUZI, S.Ag., M.Pd.', unit: 'TMMIA', subjectName: 'BALAGHAH TMMIA', className: '6 D IPS Putra', hours: 1 },
  { no: 41, teacherName: 'MUHAMMAD HANIF FAUZI, S.Ag., M.Pd.', unit: 'TMMIA', subjectName: 'INSYA TMMIA', className: '6 A IPA Putri', hours: 2 },
  { no: 41, teacherName: 'MUHAMMAD HANIF FAUZI, S.Ag., M.Pd.', unit: 'TMMIA', subjectName: 'INSYA TMMIA', className: '6 B IPS Putri', hours: 2 },
  { no: 41, teacherName: 'MUHAMMAD HANIF FAUZI, S.Ag., M.Pd.', unit: 'TMMIA', subjectName: 'INSYA TMMIA', className: '6 C IPA Putra', hours: 2 },
  { no: 41, teacherName: 'MUHAMMAD HANIF FAUZI, S.Ag., M.Pd.', unit: 'TMMIA', subjectName: 'INSYA TMMIA', className: '6 D IPS Putra', hours: 2 },
  { no: 41, teacherName: 'MUHAMMAD HANIF FAUZI, S.Ag., M.Pd.', unit: 'TMMIA', subjectName: "MUTHOLA'AH TMMIA", className: '4 A Putri', hours: 2 },
  { no: 41, teacherName: 'MUHAMMAD HANIF FAUZI, S.Ag., M.Pd.', unit: 'TMMIA', subjectName: "MUTHOLA'AH TMMIA", className: '4 B Putra', hours: 2 },

  // 42 MUHAMMAD SUHAIL, S.Pd.I.
  { no: 42, teacherName: 'MUHAMMAD SUHAIL, S.Pd.I.', unit: 'SMA', subjectName: 'FIQIH SMA', className: 'X A Non Mukim Putri', hours: 2 },
  { no: 42, teacherName: 'MUHAMMAD SUHAIL, S.Pd.I.', unit: 'SMA', subjectName: 'FIQIH SMA', className: 'X B Non Mukim Putra', hours: 2 },
  { no: 42, teacherName: 'MUHAMMAD SUHAIL, S.Pd.I.', unit: 'SMA', subjectName: 'FIQIH SMA', className: 'XI IPA Non Mukim', hours: 2 },
  { no: 42, teacherName: 'MUHAMMAD SUHAIL, S.Pd.I.', unit: 'SMA', subjectName: 'FIQIH SMA', className: 'XI IPS Non Mukim', hours: 2 },
  { no: 42, teacherName: 'MUHAMMAD SUHAIL, S.Pd.I.', unit: 'SMA', subjectName: 'P A I SMA', className: '2 INT IPA', hours: 1 },
  { no: 42, teacherName: 'MUHAMMAD SUHAIL, S.Pd.I.', unit: 'SMA', subjectName: 'P A I SMA', className: '2 INT IPS', hours: 1 },
  { no: 42, teacherName: 'MUHAMMAD SUHAIL, S.Pd.I.', unit: 'SMA', subjectName: 'P A I SMA', className: '5 A IPA Putri', hours: 1 },
  { no: 42, teacherName: 'MUHAMMAD SUHAIL, S.Pd.I.', unit: 'SMA', subjectName: 'P A I SMA', className: '5 B IPS Putri', hours: 1 },
  { no: 42, teacherName: 'MUHAMMAD SUHAIL, S.Pd.I.', unit: 'SMA', subjectName: 'P A I SMA', className: '5 C IPA Putra', hours: 1 },
  { no: 42, teacherName: 'MUHAMMAD SUHAIL, S.Pd.I.', unit: 'SMA', subjectName: 'P A I SMA', className: '5 D IPS Putra', hours: 1 },
  { no: 42, teacherName: 'MUHAMMAD SUHAIL, S.Pd.I.', unit: 'SMA', subjectName: 'P A I SMA', className: 'XI IPA Non Mukim', hours: 2 },
  { no: 42, teacherName: 'MUHAMMAD SUHAIL, S.Pd.I.', unit: 'SMA', subjectName: 'P A I SMA', className: 'XI IPS Non Mukim', hours: 2 },

  // 43 MUHAMMAD YAQUB UNANG, S.Ag.
  { no: 43, teacherName: 'MUHAMMAD YAQUB UNANG, S.Ag.', unit: 'TMMIA', subjectName: 'TAFSIR TMMIA', className: '3 INT IPA', hours: 2 },
  { no: 43, teacherName: 'MUHAMMAD YAQUB UNANG, S.Ag.', unit: 'TMMIA', subjectName: 'TAFSIR TMMIA', className: '3 INT IPS', hours: 2 },
  { no: 43, teacherName: 'MUHAMMAD YAQUB UNANG, S.Ag.', unit: 'TMMIA', subjectName: 'TAFSIR TMMIA', className: '6 A IPA Putri', hours: 2 },
  { no: 43, teacherName: 'MUHAMMAD YAQUB UNANG, S.Ag.', unit: 'TMMIA', subjectName: 'TAFSIR TMMIA', className: '6 B IPS Putri', hours: 2 },
  { no: 43, teacherName: 'MUHAMMAD YAQUB UNANG, S.Ag.', unit: 'TMMIA', subjectName: 'TAFSIR TMMIA', className: '6 C IPA Putra', hours: 2 },
  { no: 43, teacherName: 'MUHAMMAD YAQUB UNANG, S.Ag.', unit: 'TMMIA', subjectName: 'TAFSIR TMMIA', className: '6 D IPS Putra', hours: 2 },

  // 44 MUHAMMAD ZUHDI FAUZI, S.Ag.
  { no: 44, teacherName: 'MUHAMMAD ZUHDI FAUZI, S.Ag.', unit: 'TMMIA', subjectName: "MUTHOLA'AH TMMIA", className: '6 A IPA Putri', hours: 2 },
  { no: 44, teacherName: 'MUHAMMAD ZUHDI FAUZI, S.Ag.', unit: 'TMMIA', subjectName: "MUTHOLA'AH TMMIA", className: '6 B IPS Putri', hours: 2 },
  { no: 44, teacherName: 'MUHAMMAD ZUHDI FAUZI, S.Ag.', unit: 'TMMIA', subjectName: "MUTHOLA'AH TMMIA", className: '6 C IPA Putra', hours: 2 },
  { no: 44, teacherName: 'MUHAMMAD ZUHDI FAUZI, S.Ag.', unit: 'TMMIA', subjectName: "MUTHOLA'AH TMMIA", className: '6 D IPS Putra', hours: 2 },
  { no: 44, teacherName: 'MUHAMMAD ZUHDI FAUZI, S.Ag.', unit: 'TMMIA', subjectName: 'TARBIYAH TMMIA', className: '3 INT IPA', hours: 2 },
  { no: 44, teacherName: 'MUHAMMAD ZUHDI FAUZI, S.Ag.', unit: 'TMMIA', subjectName: 'TARBIYAH TMMIA', className: '3 INT IPS', hours: 2 },
  { no: 44, teacherName: 'MUHAMMAD ZUHDI FAUZI, S.Ag.', unit: 'TMMIA', subjectName: 'TARBIYAH TMMIA', className: '6 A IPA Putri', hours: 1 },
  { no: 44, teacherName: 'MUHAMMAD ZUHDI FAUZI, S.Ag.', unit: 'TMMIA', subjectName: 'TARBIYAH TMMIA', className: '6 A IPA Putri', hours: 1 },
  { no: 44, teacherName: 'MUHAMMAD ZUHDI FAUZI, S.Ag.', unit: 'TMMIA', subjectName: 'TARBIYAH TMMIA', className: '6 B IPS Putri', hours: 2 },
  { no: 44, teacherName: 'MUHAMMAD ZUHDI FAUZI, S.Ag.', unit: 'TMMIA', subjectName: 'TARBIYAH TMMIA', className: '6 C IPA Putra', hours: 2 },
  { no: 44, teacherName: 'MUHAMMAD ZUHDI FAUZI, S.Ag.', unit: 'TMMIA', subjectName: 'TARBIYAH TMMIA', className: '6 D IPS Putra', hours: 2 },

  // 45 MURSYID ANWAR, S.Pd., M.Pd.
  { no: 45, teacherName: 'MURSYID ANWAR, S.Pd., M.Pd.', unit: 'SMA', subjectName: "ALQUR'AN SMA", className: 'X A Non Mukim Putri', hours: 2 },
  { no: 45, teacherName: 'MURSYID ANWAR, S.Pd., M.Pd.', unit: 'SMA', subjectName: "ALQUR'AN SMA", className: 'X B Non Mukim Putra', hours: 2 },
  { no: 45, teacherName: 'MURSYID ANWAR, S.Pd., M.Pd.', unit: 'TMMIA', subjectName: 'READING & GRAMMAR TMMIA', className: '3 INT IPA', hours: 1 },
  { no: 45, teacherName: 'MURSYID ANWAR, S.Pd., M.Pd.', unit: 'TMMIA', subjectName: 'READING & GRAMMAR TMMIA', className: '3 INT IPS', hours: 1 },
  { no: 45, teacherName: 'MURSYID ANWAR, S.Pd., M.Pd.', unit: 'TMMIA', subjectName: 'READING & GRAMMAR TMMIA', className: '6 A IPA Putri', hours: 1 },
  { no: 45, teacherName: 'MURSYID ANWAR, S.Pd., M.Pd.', unit: 'TMMIA', subjectName: 'READING & GRAMMAR TMMIA', className: '6 B IPS Putri', hours: 1 },
  { no: 45, teacherName: 'MURSYID ANWAR, S.Pd., M.Pd.', unit: 'TMMIA', subjectName: 'READING & GRAMMAR TMMIA', className: '6 C IPA Putra', hours: 1 },
  { no: 45, teacherName: 'MURSYID ANWAR, S.Pd., M.Pd.', unit: 'TMMIA', subjectName: 'READING & GRAMMAR TMMIA', className: '6 D IPS Putra', hours: 1 },

  // 46 MUSLICH ANWAR, M.Pd.
  { no: 46, teacherName: 'MUSLICH ANWAR, M.Pd.', unit: 'SMA', subjectName: 'B. INGGRIS SMA', className: '3 INT IPA', hours: 2 },
  { no: 46, teacherName: 'MUSLICH ANWAR, M.Pd.', unit: 'SMA', subjectName: 'B. INGGRIS SMA', className: '3 INT IPS', hours: 2 },
  { no: 46, teacherName: 'MUSLICH ANWAR, M.Pd.', unit: 'SMA', subjectName: 'B. INGGRIS SMA', className: '6 A IPA Putri', hours: 2 },
  { no: 46, teacherName: 'MUSLICH ANWAR, M.Pd.', unit: 'SMA', subjectName: 'B. INGGRIS SMA', className: '6 B IPS Putri', hours: 2 },
  { no: 46, teacherName: 'MUSLICH ANWAR, M.Pd.', unit: 'SMA', subjectName: 'B. INGGRIS SMA', className: '6 C IPA Putra', hours: 2 },
  { no: 46, teacherName: 'MUSLICH ANWAR, M.Pd.', unit: 'SMA', subjectName: 'B. INGGRIS SMA', className: '6 D IPS Putra', hours: 2 },
  { no: 46, teacherName: 'MUSLICH ANWAR, M.Pd.', unit: 'SMA', subjectName: 'B. INGGRIS SMA', className: 'X A Non Mukim Putri', hours: 2 },
  { no: 46, teacherName: 'MUSLICH ANWAR, M.Pd.', unit: 'SMA', subjectName: 'B. INGGRIS SMA', className: 'X B Non Mukim Putra', hours: 1 },
  { no: 46, teacherName: 'MUSLICH ANWAR, M.Pd.', unit: 'SMA', subjectName: 'B. INGGRIS SMA', className: 'X B Non Mukim Putra', hours: 1 },
  { no: 46, teacherName: 'MUSLICH ANWAR, M.Pd.', unit: 'SMA', subjectName: 'B. INGGRIS SMA', className: 'XII IPA Non Mukim', hours: 2 },
  { no: 46, teacherName: 'MUSLICH ANWAR, M.Pd.', unit: 'SMA', subjectName: 'B. INGGRIS SMA', className: 'XII IPA Non Mukim', hours: 1 },
  { no: 46, teacherName: 'MUSLICH ANWAR, M.Pd.', unit: 'SMA', subjectName: 'B. INGGRIS SMA', className: 'XII IPS Non Mukim', hours: 2 },
  { no: 46, teacherName: 'MUSLICH ANWAR, M.Pd.', unit: 'SMA', subjectName: 'B. INGGRIS SMA', className: 'XII IPS Non Mukim', hours: 1 },
  { no: 46, teacherName: 'MUSLICH ANWAR, M.Pd.', unit: 'TMMIA', subjectName: 'SHOROF TMMIA', className: '6 A IPA Putri', hours: 1 },
  { no: 46, teacherName: 'MUSLICH ANWAR, M.Pd.', unit: 'TMMIA', subjectName: 'SHOROF TMMIA', className: '6 B IPS Putri', hours: 1 },
  { no: 46, teacherName: 'MUSLICH ANWAR, M.Pd.', unit: 'TMMIA', subjectName: 'SHOROF TMMIA', className: '6 C IPA Putra', hours: 1 },
  { no: 46, teacherName: 'MUSLICH ANWAR, M.Pd.', unit: 'TMMIA', subjectName: 'SHOROF TMMIA', className: '6 D IPS Putra', hours: 1 },

  // 47 NADRA, S.Ag.
  { no: 47, teacherName: 'NADRA, S.Ag.', unit: 'TMMIA', subjectName: 'FIQIH TMMIA', className: '1 Intensif', hours: 2 },

  // 48 NAILUL KUNNI FUROIDA, S.Gz.
  { no: 48, teacherName: 'NAILUL KUNNI FUROIDA, S.Gz.', unit: 'TMMIA', subjectName: 'TARBIYAH TMMIA', className: '2 INT IPA', hours: 2 },
  { no: 48, teacherName: 'NAILUL KUNNI FUROIDA, S.Gz.', unit: 'TMMIA', subjectName: 'TARBIYAH TMMIA', className: '2 INT IPS', hours: 2 },
  { no: 48, teacherName: 'NAILUL KUNNI FUROIDA, S.Gz.', unit: 'TMMIA', subjectName: 'TARBIYAH TMMIA', className: '4 A Putri', hours: 2 },
  { no: 48, teacherName: 'NAILUL KUNNI FUROIDA, S.Gz.', unit: 'TMMIA', subjectName: 'TARBIYAH TMMIA', className: '4 B Putra', hours: 2 },
  { no: 48, teacherName: 'NAILUL KUNNI FUROIDA, S.Gz.', unit: 'TMMIA', subjectName: 'TARBIYAH TMMIA', className: '4 C Putra', hours: 2 },

  // 49 NAMIN, S.Pd.I.
  { no: 49, teacherName: 'NAMIN, S.Pd.I.', unit: 'SMA', subjectName: "ALQUR'AN SMA", className: 'XI IPA Non Mukim', hours: 2 },
  { no: 49, teacherName: 'NAMIN, S.Pd.I.', unit: 'SMA', subjectName: "ALQUR'AN SMA", className: 'XI IPS Non Mukim', hours: 2 },
  { no: 49, teacherName: 'NAMIN, S.Pd.I.', unit: 'SMA', subjectName: "ALQUR'AN SMA", className: 'XII IPA Non Mukim', hours: 2 },
  { no: 49, teacherName: 'NAMIN, S.Pd.I.', unit: 'SMA', subjectName: "ALQUR'AN SMA", className: 'XII IPS Non Mukim', hours: 2 },

  // 50 NOOR FAIZ, S.Pd.
  { no: 50, teacherName: 'NOOR FAIZ, S.Pd.', unit: 'TMMIA', subjectName: 'KHOT TMMIA', className: '1 Intensif', hours: 2 },

  // 51 NURACHMAN, M.Pd.
  { no: 51, teacherName: 'NURACHMAN, M.Pd.', unit: 'SMA', subjectName: 'MATEMATIKA SMA', className: '3 INT IPA', hours: 1 },
  { no: 51, teacherName: 'NURACHMAN, M.Pd.', unit: 'SMA', subjectName: 'MATEMATIKA SMA', className: '3 INT IPA', hours: 2 },
  { no: 51, teacherName: 'NURACHMAN, M.Pd.', unit: 'SMA', subjectName: 'MATEMATIKA SMA', className: '3 INT IPS', hours: 1 },
  { no: 51, teacherName: 'NURACHMAN, M.Pd.', unit: 'SMA', subjectName: 'MATEMATIKA SMA', className: '3 INT IPS', hours: 2 },
  { no: 51, teacherName: 'NURACHMAN, M.Pd.', unit: 'SMA', subjectName: 'MATEMATIKA SMA', className: '6 A IPA Putri', hours: 2 },
  { no: 51, teacherName: 'NURACHMAN, M.Pd.', unit: 'SMA', subjectName: 'MATEMATIKA SMA', className: '6 A IPA Putri', hours: 1 },
  { no: 51, teacherName: 'NURACHMAN, M.Pd.', unit: 'SMA', subjectName: 'MATEMATIKA SMA', className: '6 B IPS Putri', hours: 2 },
  { no: 51, teacherName: 'NURACHMAN, M.Pd.', unit: 'SMA', subjectName: 'MATEMATIKA SMA', className: '6 B IPS Putri', hours: 1 },
  { no: 51, teacherName: 'NURACHMAN, M.Pd.', unit: 'SMA', subjectName: 'MATEMATIKA SMA', className: '6 C IPA Putra', hours: 2 },
  { no: 51, teacherName: 'NURACHMAN, M.Pd.', unit: 'SMA', subjectName: 'MATEMATIKA SMA', className: '6 C IPA Putra', hours: 1 },
  { no: 51, teacherName: 'NURACHMAN, M.Pd.', unit: 'SMA', subjectName: 'MATEMATIKA SMA', className: '6 D IPS Putra', hours: 3 },
  { no: 51, teacherName: 'NURACHMAN, M.Pd.', unit: 'SMA', subjectName: 'MATEMATIKA SMA', className: 'XI IPS Non Mukim', hours: 1 },
  { no: 51, teacherName: 'NURACHMAN, M.Pd.', unit: 'SMA', subjectName: 'MATEMATIKA SMA', className: 'XI IPS Non Mukim', hours: 2 },
  { no: 51, teacherName: 'NURACHMAN, M.Pd.', unit: 'SMA', subjectName: 'MATEMATIKA SMA', className: 'XI IPS Non Mukim', hours: 1 },
  { no: 51, teacherName: 'NURACHMAN, M.Pd.', unit: 'SMA', subjectName: 'MATEMATIKA SMA', className: 'XII IPA Non Mukim', hours: 1 },
  { no: 51, teacherName: 'NURACHMAN, M.Pd.', unit: 'SMA', subjectName: 'MATEMATIKA SMA', className: 'XII IPA Non Mukim', hours: 3 },
  { no: 51, teacherName: 'NURACHMAN, M.Pd.', unit: 'SMA', subjectName: 'MATEMATIKA SMA', className: 'XII IPS Non Mukim', hours: 3 },
  { no: 51, teacherName: 'NURACHMAN, M.Pd.', unit: 'SMA', subjectName: 'MATEMATIKA SMA', className: 'XII IPS Non Mukim', hours: 1 },

  // 52 NURLAILA, S.Ag.
  { no: 52, teacherName: 'NURLAILA, S.Ag.', unit: 'SMA', subjectName: 'FIQIH SMA', className: 'XII IPA Non Mukim', hours: 2 },
  { no: 52, teacherName: 'NURLAILA, S.Ag.', unit: 'SMA', subjectName: 'FIQIH SMA', className: 'XII IPS Non Mukim', hours: 2 },
  { no: 52, teacherName: 'NURLAILA, S.Ag.', unit: 'SMA', subjectName: 'P A I SMA', className: '1 Intensif', hours: 1 },
  { no: 52, teacherName: 'NURLAILA, S.Ag.', unit: 'SMA', subjectName: 'P A I SMA', className: '3 INT IPA', hours: 1 },
  { no: 52, teacherName: 'NURLAILA, S.Ag.', unit: 'SMA', subjectName: 'P A I SMA', className: '3 INT IPS', hours: 1 },
  { no: 52, teacherName: 'NURLAILA, S.Ag.', unit: 'SMA', subjectName: 'P A I SMA', className: '4 A Putri', hours: 1 },
  { no: 52, teacherName: 'NURLAILA, S.Ag.', unit: 'SMA', subjectName: 'P A I SMA', className: '6 A IPA Putri', hours: 1 },
  { no: 52, teacherName: 'NURLAILA, S.Ag.', unit: 'SMA', subjectName: 'P A I SMA', className: '6 B IPS Putri', hours: 1 },
  { no: 52, teacherName: 'NURLAILA, S.Ag.', unit: 'SMA', subjectName: 'P A I SMA', className: '6 C IPA Putra', hours: 1 },
  { no: 52, teacherName: 'NURLAILA, S.Ag.', unit: 'SMA', subjectName: 'P A I SMA', className: '6 D IPS Putra', hours: 1 },
  { no: 52, teacherName: 'NURLAILA, S.Ag.', unit: 'SMA', subjectName: 'P A I SMA', className: 'X A Non Mukim Putri', hours: 1 },
  { no: 52, teacherName: 'NURLAILA, S.Ag.', unit: 'SMA', subjectName: 'P A I SMA', className: 'X A Non Mukim Putri', hours: 1 },
  { no: 52, teacherName: 'NURLAILA, S.Ag.', unit: 'SMA', subjectName: 'P A I SMA', className: 'X B Non Mukim Putra', hours: 1 },
  { no: 52, teacherName: 'NURLAILA, S.Ag.', unit: 'SMA', subjectName: 'P A I SMA', className: 'X B Non Mukim Putra', hours: 1 },
  { no: 52, teacherName: 'NURLAILA, S.Ag.', unit: 'SMA', subjectName: 'P A I SMA', className: 'XII IPA Non Mukim', hours: 2 },
  { no: 52, teacherName: 'NURLAILA, S.Ag.', unit: 'SMA', subjectName: 'P A I SMA', className: 'XII IPS Non Mukim', hours: 1 },
  { no: 52, teacherName: 'NURLAILA, S.Ag.', unit: 'SMA', subjectName: 'P A I SMA', className: 'XII IPS Non Mukim', hours: 1 },
  { no: 52, teacherName: 'NURLAILA, S.Ag.', unit: 'TMMIA', subjectName: 'FIQIH TMMIA', className: '4 A Putri', hours: 2 },
  { no: 52, teacherName: 'NURLAILA, S.Ag.', unit: 'TMMIA', subjectName: 'FIQIH TMMIA', className: '4 B Putra', hours: 2 },
  { no: 52, teacherName: 'NURLAILA, S.Ag.', unit: 'TMMIA', subjectName: 'FIQIH TMMIA', className: '4 C Putra', hours: 2 },

  // 53 PADLIN, M.Pd.
  { no: 53, teacherName: 'PADLIN, M.Pd.', unit: 'SMA', subjectName: 'BIOLOGI SMA', className: '1 Intensif', hours: 2 },
  { no: 53, teacherName: 'PADLIN, M.Pd.', unit: 'SMA', subjectName: 'BIOLOGI SMA', className: '2 INT IPA', hours: 2 },
  { no: 53, teacherName: 'PADLIN, M.Pd.', unit: 'SMA', subjectName: 'BIOLOGI SMA', className: '3 INT IPA', hours: 2 },
  { no: 53, teacherName: 'PADLIN, M.Pd.', unit: 'SMA', subjectName: 'BIOLOGI SMA', className: '4 A Putri', hours: 2 },
  { no: 53, teacherName: 'PADLIN, M.Pd.', unit: 'SMA', subjectName: 'BIOLOGI SMA', className: '5 A IPA Putri', hours: 1 },
  { no: 53, teacherName: 'PADLIN, M.Pd.', unit: 'SMA', subjectName: 'BIOLOGI SMA', className: '5 A IPA Putri', hours: 1 },
  { no: 53, teacherName: 'PADLIN, M.Pd.', unit: 'SMA', subjectName: 'BIOLOGI SMA', className: '5 C IPA Putra', hours: 2 },
  { no: 53, teacherName: 'PADLIN, M.Pd.', unit: 'SMA', subjectName: 'BIOLOGI SMA', className: '6 A IPA Putri', hours: 2 },
  { no: 53, teacherName: 'PADLIN, M.Pd.', unit: 'SMA', subjectName: 'BIOLOGI SMA', className: '6 C IPA Putra', hours: 2 },
  { no: 53, teacherName: 'PADLIN, M.Pd.', unit: 'SMA', subjectName: 'BIOLOGI SMA', className: 'X A Non Mukim Putri', hours: 2 },
  { no: 53, teacherName: 'PADLIN, M.Pd.', unit: 'SMA', subjectName: 'BIOLOGI SMA', className: 'X B Non Mukim Putra', hours: 2 },
  { no: 53, teacherName: 'PADLIN, M.Pd.', unit: 'SMA', subjectName: 'BIOLOGI SMA', className: 'XI IPA Non Mukim', hours: 2 },
  { no: 53, teacherName: 'PADLIN, M.Pd.', unit: 'SMA', subjectName: 'BIOLOGI SMA', className: 'XII IPA Non Mukim', hours: 2 },
  { no: 53, teacherName: 'PADLIN, M.Pd.', unit: 'SMA', subjectName: 'MATEMATIKA SMA', className: '2 INT IPA', hours: 2 },
  { no: 53, teacherName: 'PADLIN, M.Pd.', unit: 'SMA', subjectName: 'MATEMATIKA SMA', className: '2 INT IPA', hours: 1 },
  { no: 53, teacherName: 'PADLIN, M.Pd.', unit: 'SMA', subjectName: 'MATEMATIKA SMA', className: 'XI IPA Non Mukim', hours: 2 },
  { no: 53, teacherName: 'PADLIN, M.Pd.', unit: 'SMA', subjectName: 'MATEMATIKA SMA', className: 'XI IPA Non Mukim', hours: 1 },
  { no: 53, teacherName: 'PADLIN, M.Pd.', unit: 'SMA', subjectName: 'MATEMATIKA SMA', className: 'XI IPA Non Mukim', hours: 1 },

  // 54 PUTRA NAHDI ABIYYU, Lc., S.Pd.
  { no: 54, teacherName: 'PUTRA NAHDI ABIYYU, Lc., S.Pd.', unit: 'TMMIA', subjectName: 'TAFSIR TMMIA', className: '5 C IPA Putra', hours: 2 },
  { no: 54, teacherName: 'PUTRA NAHDI ABIYYU, Lc., S.Pd.', unit: 'TMMIA', subjectName: 'TAFSIR TMMIA', className: '5 D IPS Putra', hours: 2 },
  { no: 54, teacherName: 'PUTRA NAHDI ABIYYU, Lc., S.Pd.', unit: 'TMMIA', subjectName: "ULUMUL QUR'AN TMMIA", className: '6 A IPA Putri', hours: 2 },
  { no: 54, teacherName: 'PUTRA NAHDI ABIYYU, Lc., S.Pd.', unit: 'TMMIA', subjectName: "ULUMUL QUR'AN TMMIA", className: '6 B IPS Putri', hours: 2 },
  { no: 54, teacherName: 'PUTRA NAHDI ABIYYU, Lc., S.Pd.', unit: 'TMMIA', subjectName: "ULUMUL QUR'AN TMMIA", className: '6 C IPA Putra', hours: 2 },
  { no: 54, teacherName: 'PUTRA NAHDI ABIYYU, Lc., S.Pd.', unit: 'TMMIA', subjectName: "ULUMUL QUR'AN TMMIA", className: '6 D IPS Putra', hours: 2 },

  // 55 PUTRI DINAH OKTAVIA, S.Pd.
  { no: 55, teacherName: 'PUTRI DINAH OKTAVIA, S.Pd.', unit: 'SMA', subjectName: 'MATEMATIKA SMA', className: '5 A IPA Putri', hours: 2 },
  { no: 55, teacherName: 'PUTRI DINAH OKTAVIA, S.Pd.', unit: 'SMA', subjectName: 'MATEMATIKA SMA', className: '5 A IPA Putri', hours: 1 },
  { no: 55, teacherName: 'PUTRI DINAH OKTAVIA, S.Pd.', unit: 'SMA', subjectName: 'MATEMATIKA SMA', className: '5 C IPA Putra', hours: 3 },
  { no: 55, teacherName: 'PUTRI DINAH OKTAVIA, S.Pd.', unit: 'SMA', subjectName: 'MTK TINGKAT LANJUT SMA', className: '2 INT IPA', hours: 2 },
  { no: 55, teacherName: 'PUTRI DINAH OKTAVIA, S.Pd.', unit: 'SMA', subjectName: 'MTK TINGKAT LANJUT SMA', className: '5 A IPA Putri', hours: 2 },
  { no: 55, teacherName: 'PUTRI DINAH OKTAVIA, S.Pd.', unit: 'SMA', subjectName: 'MTK TINGKAT LANJUT SMA', className: '5 C IPA Putra', hours: 2 },
  { no: 55, teacherName: 'PUTRI DINAH OKTAVIA, S.Pd.', unit: 'SMA', subjectName: 'MTK TINGKAT LANJUT SMA', className: 'XI IPA Non Mukim', hours: 2 },

  // 56 QASIM IKHSAN, S.Ag.
  { no: 56, teacherName: 'QASIM IKHSAN, S.Ag.', unit: 'TMMIA', subjectName: 'HADIS TMMIA', className: '4 A Putri', hours: 2 },
  { no: 56, teacherName: 'QASIM IKHSAN, S.Ag.', unit: 'TMMIA', subjectName: 'MUSTHOLAH HADIS TMMIA', className: '3 INT IPA', hours: 2 },
  { no: 56, teacherName: 'QASIM IKHSAN, S.Ag.', unit: 'TMMIA', subjectName: 'MUSTHOLAH HADIS TMMIA', className: '3 INT IPS', hours: 2 },
  { no: 56, teacherName: 'QASIM IKHSAN, S.Ag.', unit: 'TMMIA', subjectName: 'MUSTHOLAH HADIS TMMIA', className: '5 A IPA Putri', hours: 2 },
  { no: 56, teacherName: 'QASIM IKHSAN, S.Ag.', unit: 'TMMIA', subjectName: 'MUSTHOLAH HADIS TMMIA', className: '5 B IPS Putri', hours: 2 },
  { no: 56, teacherName: 'QASIM IKHSAN, S.Ag.', unit: 'TMMIA', subjectName: 'MUSTHOLAH HADIS TMMIA', className: '5 C IPA Putra', hours: 2 },
  { no: 56, teacherName: 'QASIM IKHSAN, S.Ag.', unit: 'TMMIA', subjectName: 'MUSTHOLAH HADIS TMMIA', className: '5 D IPS Putra', hours: 2 },
  { no: 56, teacherName: 'QASIM IKHSAN, S.Ag.', unit: 'TMMIA', subjectName: "ULUMUL QUR'AN TMMIA", className: '3 INT IPA', hours: 2 },
  { no: 56, teacherName: 'QASIM IKHSAN, S.Ag.', unit: 'TMMIA', subjectName: "ULUMUL QUR'AN TMMIA", className: '3 INT IPS', hours: 2 },

  // 57 RENDI RAMADHAN, S.Pd.
  { no: 57, teacherName: 'RENDI RAMADHAN, S.Pd.', unit: 'SMA', subjectName: 'PEND. PANCASILA SMA', className: '1 Intensif', hours: 2 },
  { no: 57, teacherName: 'RENDI RAMADHAN, S.Pd.', unit: 'SMA', subjectName: 'PEND. PANCASILA SMA', className: '2 INT IPA', hours: 2 },
  { no: 57, teacherName: 'RENDI RAMADHAN, S.Pd.', unit: 'SMA', subjectName: 'PEND. PANCASILA SMA', className: '2 INT IPS', hours: 2 },
  { no: 57, teacherName: 'RENDI RAMADHAN, S.Pd.', unit: 'SMA', subjectName: 'PEND. PANCASILA SMA', className: '4 A Putri', hours: 2 },
  { no: 57, teacherName: 'RENDI RAMADHAN, S.Pd.', unit: 'SMA', subjectName: 'PEND. PANCASILA SMA', className: '4 B Putra', hours: 2 },
  { no: 57, teacherName: 'RENDI RAMADHAN, S.Pd.', unit: 'SMA', subjectName: 'PEND. PANCASILA SMA', className: '4 C Putra', hours: 2 },
  { no: 57, teacherName: 'RENDI RAMADHAN, S.Pd.', unit: 'SMA', subjectName: 'PEND. PANCASILA SMA', className: '5 A IPA Putri', hours: 2 },
  { no: 57, teacherName: 'RENDI RAMADHAN, S.Pd.', unit: 'SMA', subjectName: 'PEND. PANCASILA SMA', className: '5 B IPS Putri', hours: 2 },
  { no: 57, teacherName: 'RENDI RAMADHAN, S.Pd.', unit: 'SMA', subjectName: 'PEND. PANCASILA SMA', className: '5 C IPA Putra', hours: 2 },
  { no: 57, teacherName: 'RENDI RAMADHAN, S.Pd.', unit: 'SMA', subjectName: 'PEND. PANCASILA SMA', className: '5 D IPS Putra', hours: 2 },
  { no: 57, teacherName: 'RENDI RAMADHAN, S.Pd.', unit: 'SMA', subjectName: 'PEND. PANCASILA SMA', className: 'X A Non Mukim Putri', hours: 2 },
  { no: 57, teacherName: 'RENDI RAMADHAN, S.Pd.', unit: 'SMA', subjectName: 'PEND. PANCASILA SMA', className: 'X B Non Mukim Putra', hours: 1 },
  { no: 57, teacherName: 'RENDI RAMADHAN, S.Pd.', unit: 'SMA', subjectName: 'PEND. PANCASILA SMA', className: 'X B Non Mukim Putra', hours: 1 },
  { no: 57, teacherName: 'RENDI RAMADHAN, S.Pd.', unit: 'SMA', subjectName: 'PEND. PANCASILA SMA', className: 'XI IPA Non Mukim', hours: 2 },
  { no: 57, teacherName: 'RENDI RAMADHAN, S.Pd.', unit: 'SMA', subjectName: 'PEND. PANCASILA SMA', className: 'XI IPS Non Mukim', hours: 1 },
  { no: 57, teacherName: 'RENDI RAMADHAN, S.Pd.', unit: 'SMA', subjectName: 'PEND. PANCASILA SMA', className: 'XI IPS Non Mukim', hours: 1 },

  // 58 RIDWAN YULIANTO
  { no: 58, teacherName: 'RIDWAN YULIANTO', unit: 'TMMIA', subjectName: 'MAHFUDZAT TMMIA', className: '1 Intensif', hours: 1 },

  // 59 RISMAWATI, S.Sos.
  { no: 59, teacherName: 'RISMAWATI, S.Sos.', unit: 'SMA', subjectName: 'SEJARAH SMA', className: '4 A Putri', hours: 1 },
  { no: 59, teacherName: 'RISMAWATI, S.Sos.', unit: 'SMA', subjectName: 'SEJARAH SMA', className: '4 B Putra', hours: 1 },

  // 60 RIZKI ABDUL KHOTIB, S.Pd.I.
  { no: 60, teacherName: 'RIZKI ABDUL KHOTIB, S.Pd.I.', unit: 'TMMIA', subjectName: 'FIQIH TMMIA', className: '3 INT IPA', hours: 2 },
  { no: 60, teacherName: 'RIZKI ABDUL KHOTIB, S.Pd.I.', unit: 'TMMIA', subjectName: 'FIQIH TMMIA', className: '3 INT IPS', hours: 2 },
  { no: 60, teacherName: 'RIZKI ABDUL KHOTIB, S.Pd.I.', unit: 'TMMIA', subjectName: 'FIQIH TMMIA', className: '6 A IPA Putri', hours: 2 },
  { no: 60, teacherName: 'RIZKI ABDUL KHOTIB, S.Pd.I.', unit: 'TMMIA', subjectName: 'FIQIH TMMIA', className: '6 B IPS Putri', hours: 2 },
  { no: 60, teacherName: 'RIZKI ABDUL KHOTIB, S.Pd.I.', unit: 'TMMIA', subjectName: 'FIQIH TMMIA', className: '6 C IPA Putra', hours: 1 },
  { no: 60, teacherName: 'RIZKI ABDUL KHOTIB, S.Pd.I.', unit: 'TMMIA', subjectName: 'FIQIH TMMIA', className: '6 C IPA Putra', hours: 1 },
  { no: 60, teacherName: 'RIZKI ABDUL KHOTIB, S.Pd.I.', unit: 'TMMIA', subjectName: 'FIQIH TMMIA', className: '6 D IPS Putra', hours: 2 },

  // 61 RIZKI KAROMAH, S.Si.
  { no: 61, teacherName: 'RIZKI KAROMAH, S.Si.', unit: 'SMA', subjectName: 'FISIKA SMA', className: '1 Intensif', hours: 1 },
  { no: 61, teacherName: 'RIZKI KAROMAH, S.Si.', unit: 'SMA', subjectName: 'FISIKA SMA', className: '1 Intensif', hours: 1 },
  { no: 61, teacherName: 'RIZKI KAROMAH, S.Si.', unit: 'SMA', subjectName: 'FISIKA SMA', className: '2 INT IPA', hours: 2 },
  { no: 61, teacherName: 'RIZKI KAROMAH, S.Si.', unit: 'SMA', subjectName: 'FISIKA SMA', className: '3 INT IPA', hours: 2 },
  { no: 61, teacherName: 'RIZKI KAROMAH, S.Si.', unit: 'SMA', subjectName: 'FISIKA SMA', className: '4 A Putri', hours: 2 },
  { no: 61, teacherName: 'RIZKI KAROMAH, S.Si.', unit: 'SMA', subjectName: 'FISIKA SMA', className: '4 B Putra', hours: 2 },
  { no: 61, teacherName: 'RIZKI KAROMAH, S.Si.', unit: 'SMA', subjectName: 'FISIKA SMA', className: '4 C Putra', hours: 2 },
  { no: 61, teacherName: 'RIZKI KAROMAH, S.Si.', unit: 'SMA', subjectName: 'FISIKA SMA', className: '5 A IPA Putri', hours: 2 },
  { no: 61, teacherName: 'RIZKI KAROMAH, S.Si.', unit: 'SMA', subjectName: 'FISIKA SMA', className: '5 C IPA Putra', hours: 2 },
  { no: 61, teacherName: 'RIZKI KAROMAH, S.Si.', unit: 'SMA', subjectName: 'FISIKA SMA', className: '6 A IPA Putri', hours: 2 },
  { no: 61, teacherName: 'RIZKI KAROMAH, S.Si.', unit: 'SMA', subjectName: 'FISIKA SMA', className: '6 C IPA Putra', hours: 2 },
  { no: 61, teacherName: 'RIZKI KAROMAH, S.Si.', unit: 'SMA', subjectName: 'FISIKA SMA', className: 'X A Non Mukim Putri', hours: 2 },
  { no: 61, teacherName: 'RIZKI KAROMAH, S.Si.', unit: 'SMA', subjectName: 'FISIKA SMA', className: 'X B Non Mukim Putra', hours: 2 },
  { no: 61, teacherName: 'RIZKI KAROMAH, S.Si.', unit: 'SMA', subjectName: 'FISIKA SMA', className: 'XI IPA Non Mukim', hours: 2 },
  { no: 61, teacherName: 'RIZKI KAROMAH, S.Si.', unit: 'SMA', subjectName: 'FISIKA SMA', className: 'XII IPA Non Mukim', hours: 2 },
  { no: 61, teacherName: 'RIZKI KAROMAH, S.Si.', unit: 'SMA', subjectName: 'MTK TINGKAT LANJUT SMA', className: '3 INT IPA', hours: 2 },
  { no: 61, teacherName: 'RIZKI KAROMAH, S.Si.', unit: 'SMA', subjectName: 'MTK TINGKAT LANJUT SMA', className: '6 A IPA Putri', hours: 1 },
  { no: 61, teacherName: 'RIZKI KAROMAH, S.Si.', unit: 'SMA', subjectName: 'MTK TINGKAT LANJUT SMA', className: '6 A IPA Putri', hours: 1 },
  { no: 61, teacherName: 'RIZKI KAROMAH, S.Si.', unit: 'SMA', subjectName: 'MTK TINGKAT LANJUT SMA', className: '6 C IPA Putra', hours: 2 },
  { no: 61, teacherName: 'RIZKI KAROMAH, S.Si.', unit: 'SMA', subjectName: 'MTK TINGKAT LANJUT SMA', className: 'XII IPA Non Mukim', hours: 2 },

  // 62 SADAM HAMZAH, S.H.I.
  { no: 62, teacherName: 'SADAM HAMZAH, S.H.I.', unit: 'SMA', subjectName: 'P A I SMA', className: '4 B Putra', hours: 1 },
  { no: 62, teacherName: 'SADAM HAMZAH, S.H.I.', unit: 'SMA', subjectName: 'P A I SMA', className: '4 C Putra', hours: 1 },
  { no: 62, teacherName: 'SADAM HAMZAH, S.H.I.', unit: 'TMMIA', subjectName: 'NAHWU TMMIA', className: '6 C IPA Putra', hours: 2 },
  { no: 62, teacherName: 'SADAM HAMZAH, S.H.I.', unit: 'TMMIA', subjectName: 'NAHWU TMMIA', className: '6 D IPS Putra', hours: 2 },
  { no: 62, teacherName: 'SADAM HAMZAH, S.H.I.', unit: 'TMMIA', subjectName: 'USHUL FIQH TMMIA', className: '3 INT IPA', hours: 2 },
  { no: 62, teacherName: 'SADAM HAMZAH, S.H.I.', unit: 'TMMIA', subjectName: 'USHUL FIQH TMMIA', className: '3 INT IPS', hours: 2 },
  { no: 62, teacherName: 'SADAM HAMZAH, S.H.I.', unit: 'TMMIA', subjectName: 'USHUL FIQH TMMIA', className: '5 A IPA Putri', hours: 2 },
  { no: 62, teacherName: 'SADAM HAMZAH, S.H.I.', unit: 'TMMIA', subjectName: 'USHUL FIQH TMMIA', className: '5 B IPS Putri', hours: 2 },
  { no: 62, teacherName: 'SADAM HAMZAH, S.H.I.', unit: 'TMMIA', subjectName: 'USHUL FIQH TMMIA', className: '5 C IPA Putra', hours: 2 },
  { no: 62, teacherName: 'SADAM HAMZAH, S.H.I.', unit: 'TMMIA', subjectName: 'USHUL FIQH TMMIA', className: '5 D IPS Putra', hours: 2 },
  { no: 62, teacherName: 'SADAM HAMZAH, S.H.I.', unit: 'TMMIA', subjectName: 'USHUL FIQH TMMIA', className: '6 A IPA Putri', hours: 2 },
  { no: 62, teacherName: 'SADAM HAMZAH, S.H.I.', unit: 'TMMIA', subjectName: 'USHUL FIQH TMMIA', className: '6 B IPS Putri', hours: 2 },
  { no: 62, teacherName: 'SADAM HAMZAH, S.H.I.', unit: 'TMMIA', subjectName: 'USHUL FIQH TMMIA', className: '6 C IPA Putra', hours: 1 },
  { no: 62, teacherName: 'SADAM HAMZAH, S.H.I.', unit: 'TMMIA', subjectName: 'USHUL FIQH TMMIA', className: '6 C IPA Putra', hours: 1 },
  { no: 62, teacherName: 'SADAM HAMZAH, S.H.I.', unit: 'TMMIA', subjectName: 'USHUL FIQH TMMIA', className: '6 D IPS Putra', hours: 2 },

  // 63 SALEHA MUFIDA, S.Sos., M.Han.
  { no: 63, teacherName: 'SALEHA MUFIDA, S.Sos., M.Han.', unit: 'SMA', subjectName: 'ANTROPOLOGI SMA', className: '3 INT IPS', hours: 2 },
  { no: 63, teacherName: 'SALEHA MUFIDA, S.Sos., M.Han.', unit: 'SMA', subjectName: 'ANTROPOLOGI SMA', className: '6 B IPS Putri', hours: 2 },
  { no: 63, teacherName: 'SALEHA MUFIDA, S.Sos., M.Han.', unit: 'SMA', subjectName: 'ANTROPOLOGI SMA', className: '6 D IPS Putra', hours: 2 },
  { no: 63, teacherName: 'SALEHA MUFIDA, S.Sos., M.Han.', unit: 'SMA', subjectName: 'ANTROPOLOGI SMA', className: 'XII IPS Non Mukim', hours: 2 },
  { no: 63, teacherName: 'SALEHA MUFIDA, S.Sos., M.Han.', unit: 'SMA', subjectName: 'SEJARAH SMA', className: '3 INT IPA', hours: 1 },
  { no: 63, teacherName: 'SALEHA MUFIDA, S.Sos., M.Han.', unit: 'SMA', subjectName: 'SEJARAH SMA', className: '3 INT IPS', hours: 1 },
  { no: 63, teacherName: 'SALEHA MUFIDA, S.Sos., M.Han.', unit: 'SMA', subjectName: 'SEJARAH SMA', className: '6 A IPA Putri', hours: 1 },
  { no: 63, teacherName: 'SALEHA MUFIDA, S.Sos., M.Han.', unit: 'SMA', subjectName: 'SEJARAH SMA', className: '6 B IPS Putri', hours: 1 },
  { no: 63, teacherName: 'SALEHA MUFIDA, S.Sos., M.Han.', unit: 'SMA', subjectName: 'SEJARAH SMA', className: '6 C IPA Putra', hours: 1 },
  { no: 63, teacherName: 'SALEHA MUFIDA, S.Sos., M.Han.', unit: 'SMA', subjectName: 'SEJARAH SMA', className: '6 D IPS Putra', hours: 1 },
  { no: 63, teacherName: 'SALEHA MUFIDA, S.Sos., M.Han.', unit: 'SMA', subjectName: 'SEJARAH SMA', className: 'XII IPA Non Mukim', hours: 2 },
  { no: 63, teacherName: 'SALEHA MUFIDA, S.Sos., M.Han.', unit: 'SMA', subjectName: 'SEJARAH SMA', className: 'XII IPS Non Mukim', hours: 2 },

  // 64 SALWA BINTA TSANIA
  { no: 64, teacherName: 'SALWA BINTA TSANIA', unit: 'TMMIA', subjectName: "MUTHOLA'AH TMMIA", className: '1 Intensif', hours: 2 },

  // 65 SARONI
  { no: 65, teacherName: 'SARONI', unit: 'SMA', subjectName: 'HADIS SMA', className: 'X A Non Mukim Putri', hours: 2 },
  { no: 65, teacherName: 'SARONI', unit: 'SMA', subjectName: 'HADIS SMA', className: 'X B Non Mukim Putra', hours: 2 },
  { no: 65, teacherName: 'SARONI', unit: 'SMA', subjectName: 'HADIS SMA', className: 'XI IPA Non Mukim', hours: 2 },
  { no: 65, teacherName: 'SARONI', unit: 'SMA', subjectName: 'HADIS SMA', className: 'XI IPS Non Mukim', hours: 2 },
  { no: 65, teacherName: 'SARONI', unit: 'SMA', subjectName: 'HADIS SMA', className: 'XII IPA Non Mukim', hours: 2 },
  { no: 65, teacherName: 'SARONI', unit: 'SMA', subjectName: 'HADIS SMA', className: 'XII IPS Non Mukim', hours: 2 },

  // 66 SITI NURZULFIAH, S.Pd.I
  { no: 66, teacherName: 'SITI NURZULFIAH, S.Pd.I', unit: 'SMA', subjectName: 'B. SUNDA SMA', className: '2 INT IPA', hours: 1 },
  { no: 66, teacherName: 'SITI NURZULFIAH, S.Pd.I', unit: 'SMA', subjectName: 'B. SUNDA SMA', className: '2 INT IPS', hours: 1 },
  { no: 66, teacherName: 'SITI NURZULFIAH, S.Pd.I', unit: 'SMA', subjectName: 'B. SUNDA SMA', className: '3 INT IPA', hours: 1 },
  { no: 66, teacherName: 'SITI NURZULFIAH, S.Pd.I', unit: 'SMA', subjectName: 'B. SUNDA SMA', className: '3 INT IPS', hours: 1 },
  { no: 66, teacherName: 'SITI NURZULFIAH, S.Pd.I', unit: 'SMA', subjectName: 'B. SUNDA SMA', className: '5 A IPA Putri', hours: 1 },
  { no: 66, teacherName: 'SITI NURZULFIAH, S.Pd.I', unit: 'SMA', subjectName: 'B. SUNDA SMA', className: '5 B IPS Putri', hours: 1 },
  { no: 66, teacherName: 'SITI NURZULFIAH, S.Pd.I', unit: 'SMA', subjectName: 'B. SUNDA SMA', className: '5 C IPA Putra', hours: 1 },
  { no: 66, teacherName: 'SITI NURZULFIAH, S.Pd.I', unit: 'SMA', subjectName: 'B. SUNDA SMA', className: '5 D IPS Putra', hours: 1 },
  { no: 66, teacherName: 'SITI NURZULFIAH, S.Pd.I', unit: 'SMA', subjectName: 'B. SUNDA SMA', className: '6 D IPS Putra', hours: 1 },
  { no: 66, teacherName: 'SITI NURZULFIAH, S.Pd.I', unit: 'SMA', subjectName: 'B. SUNDA SMA', className: 'X A Non Mukim Putri', hours: 2 },
  { no: 66, teacherName: 'SITI NURZULFIAH, S.Pd.I', unit: 'SMA', subjectName: 'B. SUNDA SMA', className: 'X B Non Mukim Putra', hours: 2 },
  { no: 66, teacherName: 'SITI NURZULFIAH, S.Pd.I', unit: 'SMA', subjectName: 'B. SUNDA SMA', className: 'XI IPA Non Mukim', hours: 2 },
  { no: 66, teacherName: 'SITI NURZULFIAH, S.Pd.I', unit: 'SMA', subjectName: 'B. SUNDA SMA', className: 'XI IPS Non Mukim', hours: 2 },
  { no: 66, teacherName: 'SITI NURZULFIAH, S.Pd.I', unit: 'SMA', subjectName: 'B. SUNDA SMA', className: 'XII IPA Non Mukim', hours: 2 },
  { no: 66, teacherName: 'SITI NURZULFIAH, S.Pd.I', unit: 'SMA', subjectName: 'B. SUNDA SMA', className: 'XII IPS Non Mukim', hours: 2 },

  // 67 SOPIAN HADI, S.Pd.I.
  { no: 67, teacherName: 'SOPIAN HADI, S.Pd.I.', unit: 'SMA', subjectName: 'BAHASA ARAB SMA', className: 'X A Non Mukim Putri', hours: 2 },
  { no: 67, teacherName: 'SOPIAN HADI, S.Pd.I.', unit: 'SMA', subjectName: 'BAHASA ARAB SMA', className: 'X B Non Mukim Putra', hours: 2 },
  { no: 67, teacherName: 'SOPIAN HADI, S.Pd.I.', unit: 'TMMIA', subjectName: "MUTHOLA'AH TMMIA", className: '2 INT IPA', hours: 2 },
  { no: 67, teacherName: 'SOPIAN HADI, S.Pd.I.', unit: 'TMMIA', subjectName: "MUTHOLA'AH TMMIA", className: '2 INT IPS', hours: 2 },

  // 68 SUBHAN, S.Pd.
  { no: 68, teacherName: 'SUBHAN, S.Pd.', unit: 'SMA', subjectName: 'SEJARAH SMA', className: '1 Intensif', hours: 1 },
  { no: 68, teacherName: 'SUBHAN, S.Pd.', unit: 'SMA', subjectName: 'SEJARAH SMA', className: '4 C Putra', hours: 1 },
  { no: 68, teacherName: 'SUBHAN, S.Pd.', unit: 'SMA', subjectName: 'SEJARAH SMA', className: 'X A Non Mukim Putri', hours: 2 },
  { no: 68, teacherName: 'SUBHAN, S.Pd.', unit: 'SMA', subjectName: 'SEJARAH SMA', className: 'X B Non Mukim Putra', hours: 2 },

  // 69 SYAFON OKTAVIA RAHMA
  { no: 69, teacherName: 'SYAFON OKTAVIA RAHMA', unit: 'TMMIA', subjectName: 'HADIS TMMIA', className: '4 B Putra', hours: 2 },
  { no: 69, teacherName: 'SYAFON OKTAVIA RAHMA', unit: 'TMMIA', subjectName: 'HADIS TMMIA', className: '4 C Putra', hours: 2 },

  // 70 TIA RAHMAWATI, S.Pd.
  { no: 70, teacherName: 'TIA RAHMAWATI, S.Pd.', unit: 'TMMIA', subjectName: 'TAJWID TMMIA', className: '1 Intensif', hours: 1 },

  // 71 VENTI RAKHMAWATI, M.Pd.
  { no: 71, teacherName: 'VENTI RAKHMAWATI, M.Pd.', unit: 'TMMIA', subjectName: 'TARIKH ISLAM TMMIA', className: '1 Intensif', hours: 2 },

  // 72 VERARY PRATAMA PUTRI, S.E.
  { no: 72, teacherName: 'VERARY PRATAMA PUTRI, S.E.', unit: 'TMMIA', subjectName: 'TARBIYAH TMMIA', className: '5 A IPA Putri', hours: 2 },
  { no: 72, teacherName: 'VERARY PRATAMA PUTRI, S.E.', unit: 'TMMIA', subjectName: 'TARBIYAH TMMIA', className: '5 B IPS Putri', hours: 2 },
  { no: 72, teacherName: 'VERARY PRATAMA PUTRI, S.E.', unit: 'TMMIA', subjectName: 'TARBIYAH TMMIA', className: '5 C IPA Putra', hours: 2 },
  { no: 72, teacherName: 'VERARY PRATAMA PUTRI, S.E.', unit: 'TMMIA', subjectName: 'TARBIYAH TMMIA', className: '5 D IPS Putra', hours: 2 },

  // 73 WINTARSA, S.Pd.I.
  { no: 73, teacherName: 'WINTARSA, S.Pd.I.', unit: 'SMA', subjectName: 'PENJAS SMA', className: '2 INT IPA', hours: 2 },
  { no: 73, teacherName: 'WINTARSA, S.Pd.I.', unit: 'SMA', subjectName: 'PENJAS SMA', className: '2 INT IPS', hours: 2 },
  { no: 73, teacherName: 'WINTARSA, S.Pd.I.', unit: 'SMA', subjectName: 'PENJAS SMA', className: '3 INT IPA', hours: 2 },
  { no: 73, teacherName: 'WINTARSA, S.Pd.I.', unit: 'SMA', subjectName: 'PENJAS SMA', className: '3 INT IPS', hours: 2 },
  { no: 73, teacherName: 'WINTARSA, S.Pd.I.', unit: 'SMA', subjectName: 'PENJAS SMA', className: '5 A IPA Putri', hours: 2 },
  { no: 73, teacherName: 'WINTARSA, S.Pd.I.', unit: 'SMA', subjectName: 'PENJAS SMA', className: '5 B IPS Putri', hours: 2 },
  { no: 73, teacherName: 'WINTARSA, S.Pd.I.', unit: 'SMA', subjectName: 'PENJAS SMA', className: '5 C IPA Putra', hours: 2 },
  { no: 73, teacherName: 'WINTARSA, S.Pd.I.', unit: 'SMA', subjectName: 'PENJAS SMA', className: '5 D IPS Putra', hours: 2 },
  { no: 73, teacherName: 'WINTARSA, S.Pd.I.', unit: 'SMA', subjectName: 'PENJAS SMA', className: '6 A IPA Putri', hours: 2 },
  { no: 73, teacherName: 'WINTARSA, S.Pd.I.', unit: 'SMA', subjectName: 'PENJAS SMA', className: '6 B IPS Putri', hours: 2 },
  { no: 73, teacherName: 'WINTARSA, S.Pd.I.', unit: 'SMA', subjectName: 'PENJAS SMA', className: '6 C IPA Putra', hours: 2 },
  { no: 73, teacherName: 'WINTARSA, S.Pd.I.', unit: 'SMA', subjectName: 'PENJAS SMA', className: '6 D IPS Putra', hours: 2 },
  { no: 73, teacherName: 'WINTARSA, S.Pd.I.', unit: 'SMA', subjectName: 'PENJAS SMA', className: 'XI IPA Non Mukim', hours: 2 },
  { no: 73, teacherName: 'WINTARSA, S.Pd.I.', unit: 'SMA', subjectName: 'PENJAS SMA', className: 'XI IPS Non Mukim', hours: 2 },
  { no: 73, teacherName: 'WINTARSA, S.Pd.I.', unit: 'SMA', subjectName: 'PENJAS SMA', className: 'XII IPA Non Mukim', hours: 2 },
  { no: 73, teacherName: 'WINTARSA, S.Pd.I.', unit: 'SMA', subjectName: 'PENJAS SMA', className: 'XII IPS Non Mukim', hours: 2 },

  // 74 YUSUP KURNIAWAN, S.Ag.
  { no: 74, teacherName: 'YUSUP KURNIAWAN, S.Ag.', unit: 'TMMIA', subjectName: 'HADIS TMMIA', className: '5 A IPA Putri', hours: 2 },
  { no: 74, teacherName: 'YUSUP KURNIAWAN, S.Ag.', unit: 'TMMIA', subjectName: 'HADIS TMMIA', className: '5 B IPS Putri', hours: 2 },
  { no: 74, teacherName: 'YUSUP KURNIAWAN, S.Ag.', unit: 'TMMIA', subjectName: 'HADIS TMMIA', className: '5 C IPA Putra', hours: 2 },
  { no: 74, teacherName: 'YUSUP KURNIAWAN, S.Ag.', unit: 'TMMIA', subjectName: 'HADIS TMMIA', className: '5 D IPS Putra', hours: 2 },

  // 75 ZAINI FIKRI, S.Pd.
  { no: 75, teacherName: 'ZAINI FIKRI, S.Pd.', unit: 'SMA', subjectName: 'B. INGGRIS SMA', className: '1 Intensif', hours: 2 },
  { no: 75, teacherName: 'ZAINI FIKRI, S.Pd.', unit: 'SMA', subjectName: 'B. INGGRIS SMA', className: '4 A Putri', hours: 2 },
  { no: 75, teacherName: 'ZAINI FIKRI, S.Pd.', unit: 'SMA', subjectName: 'B. INGGRIS SMA', className: '4 B Putra', hours: 2 },
  { no: 75, teacherName: 'ZAINI FIKRI, S.Pd.', unit: 'SMA', subjectName: 'B. INGGRIS SMA', className: '4 C Putra', hours: 2 },
  { no: 75, teacherName: 'ZAINI FIKRI, S.Pd.', unit: 'TMMIA', subjectName: 'READING & GRAMMAR TMMIA', className: '4 A Putri', hours: 1 },
  { no: 75, teacherName: 'ZAINI FIKRI, S.Pd.', unit: 'TMMIA', subjectName: 'READING & GRAMMAR TMMIA', className: '4 B Putra', hours: 1 },
  { no: 75, teacherName: 'ZAINI FIKRI, S.Pd.', unit: 'TMMIA', subjectName: 'READING & GRAMMAR TMMIA', className: '4 C Putra', hours: 1 },
];