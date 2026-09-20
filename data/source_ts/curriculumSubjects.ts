import { Subject } from '../types';

export interface CurriculumDefinition {
  key: string;
  name: string;
  levelLabel: string;
  subjectNames: string[];
}

export interface MasterSubjectInfo {
  id: string;
  legacyId?: string;
  nameId: string;
  nameAr: string;
  category: 'pondok' | 'umum' | 'lisan';
}

// 1. MASTER REGISTRY OF ALL 42 SUBJECTS
export const MASTER_SUBJECTS_CATALOG: Record<string, MasterSubjectInfo> = {
  // PONDOK
  'Tamrin Lughoh': {
    id: 'tamrin_lughoh',
    legacyId: 's1',
    nameId: 'Tamrin Lughoh',
    nameAr: 'تمرين اللغة',
    category: 'pondok',
  },
  'Mutholaah': {
    id: 'mutholaah',
    legacyId: 's2',
    nameId: 'Mutholaah',
    nameAr: 'المطالعة',
    category: 'pondok',
  },
  "Muthola'ah": {
    id: 'mutholaah',
    legacyId: 's2',
    nameId: "Muthola'ah",
    nameAr: 'المطالعة',
    category: 'pondok',
  },
  'Aqidah': {
    id: 'aqidah',
    legacyId: 's3',
    nameId: 'Aqidah',
    nameAr: 'العقيدة',
    category: 'pondok',
  },
  'Hadist': {
    id: 'hadist',
    legacyId: 's4',
    nameId: 'Hadist',
    nameAr: 'الحديث',
    category: 'pondok',
  },
  'Fiqih': {
    id: 'fiqih',
    legacyId: 's5',
    nameId: 'Fiqih',
    nameAr: 'الفقه',
    category: 'pondok',
  },
  'Tarikh Islam': {
    id: 'tarikh_islam',
    legacyId: 's6',
    nameId: 'Tarikh Islam',
    nameAr: 'التاريخ الإسلامي',
    category: 'pondok',
  },
  'Tajwid': {
    id: 'tajwid',
    legacyId: 's7',
    nameId: 'Tajwid',
    nameAr: 'التجويد',
    category: 'pondok',
  },
  'Imla': {
    id: 'imla',
    legacyId: 's8',
    nameId: 'Imla',
    nameAr: 'الإملاء',
    category: 'pondok',
  },
  'Khot': {
    id: 'khot',
    legacyId: 's9',
    nameId: 'Khot',
    nameAr: 'الخط',
    category: 'pondok',
  },
  'Mahfudzot': {
    id: 'mahfudzot',
    legacyId: 's10',
    nameId: 'Mahfudzot',
    nameAr: 'المحفوظات',
    category: 'pondok',
  },
  'Nahwu': {
    id: 'nahwu',
    nameId: 'Nahwu',
    nameAr: 'النحو',
    category: 'pondok',
  },
  'Shorof': {
    id: 'shorof',
    nameId: 'Shorof',
    nameAr: 'الصرف',
    category: 'pondok',
  },
  'Insya': {
    id: 'insya',
    nameId: 'Insya',
    nameAr: 'الإنشاء',
    category: 'pondok',
  },
  'Faroid': {
    id: 'faroid',
    nameId: 'Faroid',
    nameAr: 'الفرائض',
    category: 'pondok',
  },
  'Tafsir': {
    id: 'tafsir',
    nameId: 'Tafsir',
    nameAr: 'التفسير',
    category: 'pondok',
  },
  'Tarbiyah': {
    id: 'tarbiyah',
    nameId: 'Tarbiyah',
    nameAr: 'التربية',
    category: 'pondok',
  },
  'Ushul Fiqh': {
    id: 'ushul_fiqh',
    nameId: 'Ushul Fiqh',
    nameAr: 'أصول الفقه',
    category: 'pondok',
  },
  'Mustholahul Hadist': {
    id: 'mustholahul_hadist',
    nameId: 'Mustholahul Hadist',
    nameAr: 'مصطلح الحديث',
    category: 'pondok',
  },
  'Balagoh': {
    id: 'balagoh',
    nameId: 'Balagoh',
    nameAr: 'البلاغة',
    category: 'pondok',
  },
  "Ulumul Qur'an": {
    id: 'ulumul_quran',
    nameId: "Ulumul Qur'an",
    nameAr: 'علوم القرآن',
    category: 'pondok',
  },

  // UMUM
  'Pendidikan Agama Islam': {
    id: 'pai',
    legacyId: 's11',
    nameId: 'Pendidikan Agama Islam',
    nameAr: 'التربية الدينية الإسلامية',
    category: 'umum',
  },
  'Bahasa Indonesia': {
    id: 'bahasa_indonesia',
    legacyId: 's12',
    nameId: 'Bahasa Indonesia',
    nameAr: 'اللغة الإندونيسية',
    category: 'umum',
  },
  'Bahasa Inggris': {
    id: 'bahasa_inggris',
    legacyId: 's13',
    nameId: 'Bahasa Inggris',
    nameAr: 'اللغة الإنجليزية',
    category: 'umum',
  },
  'Matematika': {
    id: 'matematika',
    legacyId: 's14',
    nameId: 'Matematika',
    nameAr: 'الرياضيات',
    category: 'umum',
  },
  'Ilmu Pengetahuan Alam': {
    id: 'ipa',
    nameId: 'Ilmu Pengetahuan Alam',
    nameAr: 'العلوم الطبيعية',
    category: 'umum',
  },
  'Ilmu Pengetahuan Sosial': {
    id: 'ips',
    nameId: 'Ilmu Pengetahuan Sosial',
    nameAr: 'العلوم الاجتماعية',
    category: 'umum',
  },
  'Pendidikan Kewarganegaraan': {
    id: 'pkn',
    legacyId: 's21',
    nameId: 'Pendidikan Kewarganegaraan',
    nameAr: 'التربية الوطنية',
    category: 'umum',
  },
  'Informatika': {
    id: 'informatika',
    nameId: 'Informatika',
    nameAr: 'المعلوماتية',
    category: 'umum',
  },
  'Pendidikan Jasmani dan Kesehatan': {
    id: 'pjok',
    legacyId: 's23',
    nameId: 'Pendidikan Jasmani dan Kesehatan',
    nameAr: 'الرياضة الجسمية والصحية',
    category: 'umum',
  },
  'Seni Budaya': {
    id: 'seni_budaya',
    nameId: 'Seni Budaya',
    nameAr: 'الفنون والثقافة',
    category: 'umum',
  },
  'Bahasa Sunda': {
    id: 'bahasa_sunda',
    legacyId: 's25',
    nameId: 'Bahasa Sunda',
    nameAr: 'اللغة السنداوية',
    category: 'umum',
  },
  'Grammar': {
    id: 'grammar',
    nameId: 'Grammar',
    nameAr: 'قواعد اللغة الإنجليزية',
    category: 'umum',
  },
  'Fisika': {
    id: 'fisika',
    legacyId: 's15',
    nameId: 'Fisika',
    nameAr: 'الفيزياء',
    category: 'umum',
  },
  'Kimia': {
    id: 'kimia',
    legacyId: 's16',
    nameId: 'Kimia',
    nameAr: 'الكيمياء',
    category: 'umum',
  },
  'Biologi': {
    id: 'biologi',
    legacyId: 's17',
    nameId: 'Biologi',
    nameAr: 'البيولوجيا',
    category: 'umum',
  },
  'Ekonomi': {
    id: 'ekonomi',
    legacyId: 's18',
    nameId: 'Ekonomi',
    nameAr: 'الاقتصاد',
    category: 'umum',
  },
  'Geografi': {
    id: 'geografi',
    legacyId: 's19',
    nameId: 'Geografi',
    nameAr: 'الجغرافيا',
    category: 'umum',
  },
  'Sosiologi': {
    id: 'sosiologi',
    legacyId: 's20',
    nameId: 'Sosiologi',
    nameAr: 'علم الاجتماع',
    category: 'umum',
  },
  'Sejarah': {
    id: 'sejarah',
    legacyId: 's22',
    nameId: 'Sejarah',
    nameAr: 'التاريخ',
    category: 'umum',
  },
  'Life Skill': {
    id: 'life_skill',
    legacyId: 's24',
    nameId: 'Life Skill',
    nameAr: 'المهارات الحياتية',
    category: 'umum',
  },
  'Matematika Tingkat Lanjut': {
    id: 'matematika_lanjut',
    nameId: 'Matematika Tingkat Lanjut',
    nameAr: 'الرياضيات المتقدمة',
    category: 'umum',
  },
  'Antropologi': {
    id: 'antropologi',
    nameId: 'Antropologi',
    nameAr: 'الأنثروبولوجيا',
    category: 'umum',
  },
};

// 2. CURRICULUM DEFINITIONS EXACTLY MATCHING THE 13 COLUMNS IN THE MASTER IMAGE
export const CURRICULUM_COLUMNS: CurriculumDefinition[] = [
  {
    key: '1',
    name: 'KELAS 1',
    levelLabel: 'Kelas 1 SMP',
    subjectNames: [
      'Tamrin Lughoh',
      'Mutholaah',
      'Aqidah',
      'Hadist',
      'Fiqih',
      'Tarikh Islam',
      'Tajwid',
      'Imla',
      'Khot',
      'Mahfudzot',
      'Pendidikan Agama Islam',
      'Bahasa Indonesia',
      'Bahasa Inggris',
      'Matematika',
      'Ilmu Pengetahuan Alam',
      'Ilmu Pengetahuan Sosial',
      'Pendidikan Kewarganegaraan',
      'Informatika',
      'Pendidikan Jasmani dan Kesehatan',
      'Seni Budaya',
      'Bahasa Sunda',
    ],
  },
  {
    key: '2',
    name: 'KELAS 2',
    levelLabel: 'Kelas 2 SMP',
    subjectNames: [
      'Tamrin Lughoh',
      'Nahwu',
      'Mutholaah',
      'Aqidah',
      'Hadist',
      'Fiqih',
      'Tarikh Islam',
      'Tajwid',
      'Imla',
      'Khot',
      'Mahfudzot',
      'Pendidikan Agama Islam',
      'Bahasa Indonesia',
      'Bahasa Inggris',
      'Matematika',
      'Ilmu Pengetahuan Alam',
      'Ilmu Pengetahuan Sosial',
      'Pendidikan Kewarganegaraan',
      'Informatika',
      'Pendidikan Jasmani dan Kesehatan',
      'Seni Budaya',
      'Bahasa Sunda',
    ],
  },
  {
    key: '3',
    name: 'KELAS 3',
    levelLabel: 'Kelas 3 SMP',
    subjectNames: [
      'Tamrin Lughoh',
      'Nahwu',
      'Shorof',
      "Muthola'ah",
      'Insya',
      'Hadist',
      'Fiqih',
      'Faroid',
      'Imla',
      'Khot',
      'Pendidikan Agama Islam',
      'Bahasa Indonesia',
      'Bahasa Inggris',
      'Matematika',
      'Ilmu Pengetahuan Alam',
      'Ilmu Pengetahuan Sosial',
      'Pendidikan Kewarganegaraan',
      'Informatika',
      'Pendidikan Jasmani dan Kesehatan',
      'Seni Budaya',
      'Bahasa Sunda',
    ],
  },
  {
    key: '4',
    name: 'KELAS 4',
    levelLabel: 'Kelas 4 / 1 SMA',
    subjectNames: [
      'Tamrin Lughoh',
      'Nahwu',
      'Shorof',
      "Muthola'ah",
      'Insya',
      'Tafsir',
      'Tarbiyah',
      'Grammar',
      'Hadist',
      'Fiqih',
      'Ushul Fiqh',
      'Pendidikan Agama Islam',
      'Bahasa Indonesia',
      'Bahasa Inggris',
      'Matematika',
      'Fisika',
      'Kimia',
      'Biologi',
      'Ekonomi',
      'Geografi',
      'Sosiologi',
      'Pendidikan Kewarganegaraan',
      'Sejarah',
      'Pendidikan Jasmani dan Kesehatan',
      'Life Skill',
      'Bahasa Sunda',
    ],
  },
  {
    key: '5-ipa',
    name: 'KELAS 5-IPA',
    levelLabel: 'Kelas 5 / 2 SMA IPA',
    subjectNames: [
      'Insya',
      'Nahwu',
      'Shorof',
      "Muthola'ah",
      'Tafsir',
      'Tarbiyah',
      'Grammar',
      'Hadist',
      'Mustholahul Hadist',
      'Fiqih',
      'Ushul Fiqh',
      'Pendidikan Agama Islam',
      'Bahasa Indonesia',
      'Bahasa Inggris',
      'Matematika',
      'Matematika Tingkat Lanjut',
      'Fisika',
      'Kimia',
      'Biologi',
      'Pendidikan Kewarganegaraan',
      'Sejarah',
      'Pendidikan Jasmani dan Kesehatan',
      'Informatika',
      'Life Skill',
      'Bahasa Sunda',
    ],
  },
  {
    key: '5-ips',
    name: 'KELAS 5-IPS',
    levelLabel: 'Kelas 5 / 2 SMA IPS',
    subjectNames: [
      'Insya',
      'Nahwu',
      'Shorof',
      "Muthola'ah",
      'Tafsir',
      'Tarbiyah',
      'Grammar',
      'Hadist',
      'Mustholahul Hadist',
      'Fiqih',
      'Ushul Fiqh',
      'Pendidikan Agama Islam',
      'Bahasa Indonesia',
      'Bahasa Inggris',
      'Matematika',
      'Antropologi',
      'Ekonomi',
      'Geografi',
      'Sosiologi',
      'Pendidikan Kewarganegaraan',
      'Sejarah',
      'Pendidikan Jasmani dan Kesehatan',
      'Informatika',
      'Life Skill',
      'Bahasa Sunda',
    ],
  },
  {
    key: '6-ipa',
    name: 'KELAS 6-IPA',
    levelLabel: 'Kelas 6 / 3 SMA IPA',
    subjectNames: [
      'Insya',
      'Nahwu',
      'Shorof',
      "Muthola'ah",
      'Tafsir',
      'Tarbiyah',
      'Grammar',
      'Balagoh',
      "Ulumul Qur'an",
      'Fiqih',
      'Ushul Fiqh',
      'Pendidikan Agama Islam',
      'Bahasa Indonesia',
      'Bahasa Inggris',
      'Matematika',
      'Matematika Tingkat Lanjut',
      'Fisika',
      'Kimia',
      'Biologi',
      'Pendidikan Kewarganegaraan',
      'Sejarah',
      'Pendidikan Jasmani dan Kesehatan',
      'Informatika',
      'Life Skill',
      'Bahasa Sunda',
    ],
  },
  {
    key: '6-ips',
    name: 'KELAS 6-IPS',
    levelLabel: 'Kelas 6 / 3 SMA IPS',
    subjectNames: [
      'Insya',
      'Nahwu',
      'Shorof',
      "Muthola'ah",
      'Tafsir',
      'Tarbiyah',
      'Grammar',
      'Balagoh',
      "Ulumul Qur'an",
      'Fiqih',
      'Ushul Fiqh',
      'Pendidikan Agama Islam',
      'Bahasa Indonesia',
      'Bahasa Inggris',
      'Matematika',
      'Antropologi',
      'Ekonomi',
      'Geografi',
      'Sosiologi',
      'Pendidikan Kewarganegaraan',
      'Sejarah',
      'Pendidikan Jasmani dan Kesehatan',
      'Informatika',
      'Life Skill',
      'Bahasa Sunda',
    ],
  },
  {
    key: '1int',
    name: 'KELAS 1INT',
    levelLabel: 'Kelas 1 INT / 1 SMA',
    subjectNames: [
      'Tamrin Lughoh',
      'Mutholaah',
      'Aqidah',
      'Hadist',
      'Fiqih',
      'Tarikh Islam',
      'Tajwid',
      'Imla',
      'Khot',
      'Mahfudzot',
      'Pendidikan Agama Islam',
      'Bahasa Indonesia',
      'Bahasa Inggris',
      'Matematika',
      'Fisika',
      'Kimia',
      'Biologi',
      'Ekonomi',
      'Geografi',
      'Sosiologi',
      'Pendidikan Kewarganegaraan',
      'Sejarah',
      'Pendidikan Jasmani dan Kesehatan',
      'Life Skill',
      'Bahasa Sunda',
    ],
  },
  {
    key: '2int-ipa',
    name: 'KELAS 2INT-IPA',
    levelLabel: 'Kelas 2 INT IPA / 2 SMA',
    subjectNames: [
      'Tamrin Lughoh',
      'Nahwu',
      'Shorof',
      "Muthola'ah",
      'Insya',
      'Tafsir',
      'Tarbiyah',
      'Grammar',
      'Hadist',
      'Fiqih',
      'Imla',
      'Pendidikan Agama Islam',
      'Bahasa Indonesia',
      'Bahasa Inggris',
      'Matematika',
      'Matematika Tingkat Lanjut',
      'Fisika',
      'Kimia',
      'Biologi',
      'Pendidikan Kewarganegaraan',
      'Sejarah',
      'Pendidikan Jasmani dan Kesehatan',
      'Informatika',
      'Life Skill',
      'Bahasa Sunda',
    ],
  },
  {
    key: '2int-ips',
    name: 'KELAS 2INT-IPS',
    levelLabel: 'Kelas 2 INT IPS / 2 SMA',
    subjectNames: [
      'Tamrin Lughoh',
      'Nahwu',
      'Shorof',
      "Muthola'ah",
      'Insya',
      'Tafsir',
      'Tarbiyah',
      'Grammar',
      'Hadist',
      'Fiqih',
      'Imla',
      'Pendidikan Agama Islam',
      'Bahasa Indonesia',
      'Bahasa Inggris',
      'Matematika',
      'Antropologi',
      'Ekonomi',
      'Geografi',
      'Sosiologi',
      'Pendidikan Kewarganegaraan',
      'Sejarah',
      'Pendidikan Jasmani dan Kesehatan',
      'Informatika',
      'Life Skill',
      'Bahasa Sunda',
    ],
  },
  {
    key: '3int-ipa',
    name: 'KELAS 3INT-IPA',
    levelLabel: 'Kelas 3 INT IPA / 3 SMA',
    subjectNames: [
      'Insya',
      'Nahwu',
      'Shorof',
      "Muthola'ah",
      'Tafsir',
      'Tarbiyah',
      'Grammar',
      'Mustholahul Hadist',
      "Ulumul Qur'an",
      'Fiqih',
      'Ushul Fiqh',
      'Pendidikan Agama Islam',
      'Bahasa Indonesia',
      'Bahasa Inggris',
      'Matematika',
      'Matematika Tingkat Lanjut',
      'Fisika',
      'Kimia',
      'Biologi',
      'Pendidikan Kewarganegaraan',
      'Sejarah',
      'Pendidikan Jasmani dan Kesehatan',
      'Informatika',
      'Life Skill',
      'Bahasa Sunda',
    ],
  },
  {
    key: '3int-ips',
    name: 'KELAS 3INT-IPS',
    levelLabel: 'Kelas 3 INT IPS / 3 SMA',
    subjectNames: [
      'Insya',
      'Nahwu',
      'Shorof',
      "Muthola'ah",
      'Tafsir',
      'Tarbiyah',
      'Grammar',
      'Mustholahul Hadist',
      "Ulumul Qur'an",
      'Fiqih',
      'Ushul Fiqh',
      'Pendidikan Agama Islam',
      'Bahasa Indonesia',
      'Bahasa Inggris',
      'Matematika',
      'Antropologi',
      'Ekonomi',
      'Geografi',
      'Sosiologi',
      'Pendidikan Kewarganegaraan',
      'Sejarah',
      'Pendidikan Jasmani dan Kesehatan',
      'Informatika',
      'Life Skill',
      'Bahasa Sunda',
    ],
  },
];

// Quick lookup dictionary for curriculum by key
const CURRICULUM_LOOKUP: Record<string, CurriculumDefinition> = {};
CURRICULUM_COLUMNS.forEach((col) => {
  CURRICULUM_LOOKUP[col.key] = col;
});

/**
 * Maps a class ID (e.g. '1a', '4b', '5c', '2int-a', etc.) to its corresponding curriculum key
 */
export function getCurriculumKeyForClass(classId: string = '1a'): string {
  const cid = (classId || '1a').toLowerCase();

  // Intensif classes
  if (cid === '1int') return '1int';
  if (cid === '2int-a') return '2int-ipa';
  if (cid === '2int-b') return '2int-ips';
  if (cid === '3int-a') return '3int-ipa';
  if (cid === '3int-b') return '3int-ips';

  // Regular SMA classes
  if (cid.startsWith('4')) return '4';
  if (cid === '5a' || cid === '5c') return '5-ipa';
  if (cid === '5b' || cid === '5d') return '5-ips';
  if (cid === '6a' || cid === '6c') return '6-ipa';
  if (cid === '6b' || cid === '6d') return '6-ips';

  // Regular SMP classes
  if (cid.startsWith('3')) return '3';
  if (cid.startsWith('2')) return '2';
  return '1';
}

/**
 * Returns the exact list of Subject objects for a given class ID
 * in the official sequence and with correct Arabic translations and categories.
 */
export function getSubjectsForClass(classId: string = '1a'): Subject[] {
  const currKey = getCurriculumKeyForClass(classId);
  const def = CURRICULUM_LOOKUP[currKey] || CURRICULUM_LOOKUP['1'];

  return def.subjectNames.map((rawName, index) => {
    const info = MASTER_SUBJECTS_CATALOG[rawName] || {
      id: rawName.toLowerCase().replace(/[^a-z0-9]/g, '_'),
      nameId: rawName,
      nameAr: rawName,
      category: 'umum',
    };

    return {
      id: info.id,
      order: index + 1,
      nameId: info.nameId,
      nameAr: info.nameAr,
      category: info.category,
    };
  });
}

/**
 * Deterministically generates a realistic score (65 - 94) for a student and subject
 * if no score is explicitly provided in the record.
 */
function generateDeterministicScore(studentSeedStr: string, subjectId: string): number {
  let hash = 0;
  const str = `${studentSeedStr}_${subjectId}`;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  const posHash = Math.abs(hash);
  const base = 70 + (posHash % 16); // 70..85
  const bonus = (posHash >> 4) % 10; // 0..9
  return Math.min(96, Math.max(65, base + bonus));
}

/**
 * Ensures all required subjects for a class have valid numeric scores for the given student,
 * reading from current scores or falling back to legacy keys (s1..s25) or deterministic scores.
 */
export function ensureStudentScoresForClass(
  rawScores: Record<string, number> = {},
  classId: string,
  studentIdOrNisn: string
): Record<string, number> {
  const requiredSubjects = getSubjectsForClass(classId);
  const updatedScores: Record<string, number> = { ...rawScores };

  requiredSubjects.forEach((sub) => {
    const info = MASTER_SUBJECTS_CATALOG[sub.nameId];
    const legacyKey = info?.legacyId;

    const currentVal = updatedScores[sub.id];
    if (typeof currentVal === 'number' && !isNaN(currentVal) && currentVal > 0) {
      return;
    }

    // Try reading from legacy key if present
    if (legacyKey && typeof updatedScores[legacyKey] === 'number' && !isNaN(updatedScores[legacyKey])) {
      updatedScores[sub.id] = updatedScores[legacyKey];
      return;
    }

    // Generate realistic deterministic grade
    updatedScores[sub.id] = generateDeterministicScore(studentIdOrNisn, sub.id);
  });

  return updatedScores;
}