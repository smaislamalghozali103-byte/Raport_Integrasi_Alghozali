export interface WaliKelasEntry {
  no: number;
  className: string;
  waliName: string;
  unit: 'SMP' | 'SMA' | 'INTENSIF' | 'FULL DAY';
  gender: 'Putri' | 'Putra' | 'Campuran';
  classId?: string;
  levelLabel?: string;
}

export const DAFTAR_WALI_KELAS: WaliKelasEntry[] = [
  {
    no: 1,
    className: '1 A Tahfiz Putri',
    waliName: 'AMALIA NUR FARIHA, S.Pd.',
    unit: 'SMP',
    gender: 'Putri',
    classId: '1a',
    levelLabel: 'Kelas 1 SMP',
  },
  {
    no: 2,
    className: '1 B Putri',
    waliName: 'PUTRI DINAH OKTAVIA, S.Pd., Gr.',
    unit: 'SMP',
    gender: 'Putri',
    classId: '1b',
    levelLabel: 'Kelas 1 SMP',
  },
  {
    no: 3,
    className: '1 D Tahfiz Putra',
    waliName: 'PUTRA NAHDI ABIYYU, Lc., S.Pd.',
    unit: 'SMP',
    gender: 'Putra',
    classId: '1d',
    levelLabel: 'Kelas 1 SMP',
  },
  {
    no: 4,
    className: '1 E Putra',
    waliName: 'TONI, S.Pd.',
    unit: 'SMP',
    gender: 'Putra',
    classId: '1e',
    levelLabel: 'Kelas 1 SMP',
  },
  {
    no: 5,
    className: '1 Intensif',
    waliName: 'SADAM HAMZAH, S.H.I.',
    unit: 'INTENSIF',
    gender: 'Campuran',
    classId: '1int',
    levelLabel: '1 Intensif / 1 SMA',
  },
  {
    no: 6,
    className: '2 A Tahfiz Putri',
    waliName: 'SITI FATIMAH ZAHRA',
    unit: 'SMP',
    gender: 'Putri',
    classId: '2a',
    levelLabel: 'Kelas 2 SMP',
  },
  {
    no: 7,
    className: '2 B Putri',
    waliName: 'AINI SYIFA, S.S.',
    unit: 'SMP',
    gender: 'Putri',
    classId: '2b',
    levelLabel: 'Kelas 2 SMP',
  },
  {
    no: 8,
    className: '2 C Putri',
    waliName: 'RISMAWATI, S.Sos.',
    unit: 'SMP',
    gender: 'Putri',
    classId: '2c',
    levelLabel: 'Kelas 2 SMP',
  },
  {
    no: 9,
    className: '2 D Tahfiz Putra',
    waliName: 'HAMMAD IYAD FAIJI',
    unit: 'SMP',
    gender: 'Putra',
    classId: '2d',
    levelLabel: 'Kelas 2 SMP',
  },
  {
    no: 10,
    className: '2 E Putra',
    waliName: 'SUBHAN, S.Pd.',
    unit: 'SMP',
    gender: 'Putra',
    classId: '2e',
    levelLabel: 'Kelas 2 SMP',
  },
  {
    no: 11,
    className: '2 F Putra',
    waliName: 'ABDUL FATTAH AZZAM',
    unit: 'SMP',
    gender: 'Putra',
    classId: '2f',
    levelLabel: 'Kelas 2 SMP',
  },
  {
    no: 12,
    className: '2 INT IPA',
    waliName: 'LULU ZAHROTUN NISA, S.Pd.',
    unit: 'INTENSIF',
    gender: 'Campuran',
    classId: '2int-a',
    levelLabel: '2 Intensif IPA / 2 SMA',
  },
  {
    no: 13,
    className: '2 INT IPS',
    waliName: 'ICHSANUL AFIEF, S.Sos.',
    unit: 'INTENSIF',
    gender: 'Campuran',
    classId: '2int-b',
    levelLabel: '2 Intensif IPS / 2 SMA',
  },
  {
    no: 14,
    className: '3 A Tahfiz Putri',
    waliName: 'NADRA, S.Ag.',
    unit: 'SMP',
    gender: 'Putri',
    classId: '3a',
    levelLabel: 'Kelas 3 SMP',
  },
  {
    no: 15,
    className: '3 B Putri',
    waliName: 'NUR AZIZAH, S.Pd.I.',
    unit: 'SMP',
    gender: 'Putri',
    classId: '3b',
    levelLabel: 'Kelas 3 SMP',
  },
  {
    no: 16,
    className: '3 C Putri',
    waliName: 'MARIA ULFA, S.S.',
    unit: 'SMP',
    gender: 'Putri',
    classId: '3c',
    levelLabel: 'Kelas 3 SMP',
  },
  {
    no: 17,
    className: '3 D Tahfiz Putra',
    waliName: 'AHMAD HASAN MUNJAJI',
    unit: 'SMP',
    gender: 'Putra',
    classId: '3d',
    levelLabel: 'Kelas 3 SMP',
  },
  {
    no: 18,
    className: '3 E Putra',
    waliName: 'MUHAMMAD WILDAN MAULANA, S.Pd.',
    unit: 'SMP',
    gender: 'Putra',
    classId: '3e',
    levelLabel: 'Kelas 3 SMP',
  },
  {
    no: 19,
    className: '3 F Putra',
    waliName: 'M. ALIEF NUGRAHA ATFA, S.H.',
    unit: 'SMP',
    gender: 'Putra',
    classId: '3f',
    levelLabel: 'Kelas 3 SMP',
  },
  {
    no: 20,
    className: '3 INT IPA',
    waliName: 'NAILUL KUNNI FUROIDA, S.Gz.',
    unit: 'INTENSIF',
    gender: 'Campuran',
    classId: '3int-a',
    levelLabel: '3 Intensif IPA / 3 SMA',
  },
  {
    no: 21,
    className: '3 INT IPS',
    waliName: 'ICHSANUL AFIEF, S.Sos.',
    unit: 'INTENSIF',
    gender: 'Campuran',
    classId: '3int-b',
    levelLabel: '3 Intensif IPS / 3 SMA',
  },
  {
    no: 22,
    className: '4 A Putri',
    waliName: 'AMALIA NUR FARIHA, S.Pd.',
    unit: 'SMA',
    gender: 'Putri',
    classId: '4a',
    levelLabel: 'Kelas 4 / 1 SMA',
  },
  {
    no: 23,
    className: '4 B Putra',
    waliName: 'RENDI RAMADHAN, S.Pd.',
    unit: 'SMA',
    gender: 'Putra',
    classId: '4b',
    levelLabel: 'Kelas 4 / 1 SMA',
  },
  {
    no: 24,
    className: '4 C Putra',
    waliName: 'DONI SUBIYANTO, S.E.',
    unit: 'SMA',
    gender: 'Putra',
    classId: '4c',
    levelLabel: 'Kelas 4 / 1 SMA',
  },
  {
    no: 25,
    className: '5 A IPA Putri',
    waliName: 'PADLIN, M.Pd.',
    unit: 'SMA',
    gender: 'Putri',
    classId: '5a',
    levelLabel: 'Kelas 5 / 2 SMA IPA',
  },
  {
    no: 26,
    className: '5 B IPS Putri',
    waliName: 'AHDINI RAHMATILLAH, Lc., S.S.I.',
    unit: 'SMA',
    gender: 'Putri',
    classId: '5b',
    levelLabel: 'Kelas 5 / 2 SMA IPS',
  },
  {
    no: 27,
    className: '5 C IPA Putra',
    waliName: 'FADILLAH ABIDANA, S.S., M.Pd., Gr.',
    unit: 'SMA',
    gender: 'Putra',
    classId: '5c',
    levelLabel: 'Kelas 5 / 2 SMA IPA',
  },
  {
    no: 28,
    className: '5 D IPS Putra',
    waliName: 'DAVA NUR PEBRIANTO, S.Pd.',
    unit: 'SMA',
    gender: 'Putra',
    classId: '5d',
    levelLabel: 'Kelas 5 / 2 SMA IPS',
  },
  {
    no: 29,
    className: '6 A IPA Putra',
    waliName: 'RIZKI KAROMAH, S.Si.',
    unit: 'SMA',
    gender: 'Putra',
    classId: '6a',
    levelLabel: 'Kelas 6 / 3 SMA IPA',
  },
  {
    no: 30,
    className: '6 B IPS Putri',
    waliName: 'BARIROTUL CHOIRIYAH, S.E.I.',
    unit: 'SMA',
    gender: 'Putri',
    classId: '6b',
    levelLabel: 'Kelas 6 / 3 SMA IPS',
  },
  {
    no: 31,
    className: '6 C IPA Putra',
    waliName: 'FADHILLAH, S.Pd.',
    unit: 'SMA',
    gender: 'Putra',
    classId: '6c',
    levelLabel: 'Kelas 6 / 3 SMA IPA',
  },
  {
    no: 32,
    className: '6 D IPS Putra',
    waliName: 'KHAIRIL FAHMI, S.Pd.',
    unit: 'SMA',
    gender: 'Putra',
    classId: '6d',
    levelLabel: 'Kelas 6 / 3 SMA IPS',
  },
  {
    no: 33,
    className: 'IX.4 Full Day Putri',
    waliName: 'SITI HALIMAH, S.Si., S.Pd.',
    unit: 'FULL DAY',
    gender: 'Putri',
    classId: 'ix-4-fd-pi',
    levelLabel: 'Kelas IX Full Day',
  },
  {
    no: 34,
    className: 'VII.3 Full Day Putri',
    waliName: 'ANISA SITI NABILAH, S.Pd.',
    unit: 'FULL DAY',
    gender: 'Putri',
    classId: 'vii-3-fd-pi',
    levelLabel: 'Kelas VII Full Day',
  },
  {
    no: 35,
    className: 'VII.6 Full Day Putra',
    waliName: 'EDI SANJAYA, S.Pd.',
    unit: 'FULL DAY',
    gender: 'Putra',
    classId: 'vii-6-fd-pa',
    levelLabel: 'Kelas VII Full Day',
  },
  {
    no: 36,
    className: 'X A Full Day',
    waliName: 'MUHAMMAD ZAKI',
    unit: 'FULL DAY',
    gender: 'Campuran',
    classId: 'x-a-fd',
    levelLabel: 'Kelas X SMA Full Day',
  },
  {
    no: 37,
    className: 'X B Full Day',
    waliName: 'MUHAMMAD ZAKI',
    unit: 'FULL DAY',
    gender: 'Campuran',
    classId: 'x-b-fd',
    levelLabel: 'Kelas X SMA Full Day',
  },
];

/**
 * Mapping index helper to look up wali kelas by class name or class ID
 */
export function getWaliKelasForClass(
  identifier: string,
  customClasses?: { id: string; nameLatin?: string; nameAr?: string; waliKelasName?: string }[]
): string | undefined {
  if (!identifier) return undefined;
  const cleanId = identifier.trim().toLowerCase();

  // 1. Check customClasses if provided (user-edited classes)
  if (customClasses && customClasses.length > 0) {
    const fromCustom = customClasses.find((c) => {
      if (c.id.toLowerCase() === cleanId) return true;
      if (c.nameLatin && c.nameLatin.toLowerCase() === cleanId) return true;
      if (c.nameAr && c.nameAr.trim() === identifier.trim()) return true;
      const cleanCustomId = c.id.toLowerCase().replace(/[^a-z0-9]/g, '');
      const search = cleanId.replace(/[^a-z0-9]/g, '');
      if (search.length >= 2 && cleanCustomId === search) return true;
      return false;
    });
    if (fromCustom && fromCustom.waliKelasName) {
      return fromCustom.waliKelasName;
    }
  }

  // 2. Direct match by classId
  const byId = DAFTAR_WALI_KELAS.find(
    (w) => w.classId && w.classId.toLowerCase() === cleanId
  );
  if (byId) return byId.waliName;

  // 3. Direct match by className
  const byName = DAFTAR_WALI_KELAS.find(
    (w) => w.className.toLowerCase() === cleanId
  );
  if (byName) return byName.waliName;

  // 4. Match by alphanumeric parts (ONLY if search length >= 2 to prevent empty/1-char match)
  const search = cleanId.replace(/[^a-z0-9]/g, '');
  if (search.length >= 2) {
    // Exact normalized match first
    const exactNormalized = DAFTAR_WALI_KELAS.find((w) => {
      const cId = (w.classId || '').toLowerCase().replace(/[^a-z0-9]/g, '');
      const cn = w.className.toLowerCase().replace(/[^a-z0-9]/g, '');
      return cId === search || cn === search;
    });
    if (exactNormalized) return exactNormalized.waliName;

    // Substring match
    const loose = DAFTAR_WALI_KELAS.find((w) => {
      const cId = (w.classId || '').toLowerCase().replace(/[^a-z0-9]/g, '');
      const cn = w.className.toLowerCase().replace(/[^a-z0-9]/g, '');
      return (
        (cId.length >= 2 && (cId.includes(search) || search.includes(cId))) ||
        (cn.length >= 2 && (cn.includes(search) || search.includes(cn)))
      );
    });
    if (loose) return loose.waliName;
  }

  return undefined;
}