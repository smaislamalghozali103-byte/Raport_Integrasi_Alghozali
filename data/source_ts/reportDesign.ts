export interface ReportDesignConfig {
  // 1. Bingkai (Frame)
  framePaddingTop: number; // in px
  framePaddingBottom: number;
  framePaddingLeft: number;
  framePaddingRight: number;
  frameBorderStyle: 'double' | 'solid' | 'dashed' | 'ridge' | 'none';
  frameBorderWidth: number; // in px (e.g. 3)
  frameBorderColor: string; // e.g. '#1b4d2e'
  frameOutlineWidth: number; // in px (e.g. 8)
  frameOutlineOffset: number; // in px (e.g. -12)
  frameOutlineColor: string; // e.g. '#2e7d32'
  frameAccentColor: string; // e.g. '#d4af37' (emas)
  frameBorderRadius: number; // in px (e.g. 0)

  // 2. Tabel (Table Position & Dimensions)
  tableMarginTop: number; // in px
  tableMarginBottom: number;
  tableRowHeight: number; // in px (e.g. 21)
  tableBorderWidth: number; // in px (e.g. 1)
  tableBorderColor: string; // e.g. '#000000'
  tableHeaderBg: string; // e.g. '#f2f2f2'
  numberColWidth?: number; // Lebar kolom nomor in % (e.g. 5.5)
  colWidthNo?: number; // % (default 5.5)
  colWidthSubjectAr?: number; // % (default 28.5)
  colWidthSubjectLat?: number; // % (default 24.5)
  colWidthScore?: number; // % (fallback 13)
  colWidthScoreAr?: number; // % (default 6.5)
  colWidthScoreLat?: number; // % (default 6.5)
  colWidthTerbilang?: number; // % (default 28.5)

  // 3. Ukuran Huruf (Font Sizes in pt / px)
  titleFontSize: number; // Header title كشف الدرجات (pt)
  subTitleFontSize: number; // Header subtitle (pt)
  studentInfoFontSize: number; // Identitas santri (px)
  tableHeaderFontSize: number; // Header tabel (px)
  numberFontSize?: number; // Kolom nomor (px)
  arabicSubjectFontSize: number; // Mapel Arab (px)
  latinSubjectFontSize: number; // Mapel Latin (px)
  scoreFontSize: number; // Nilai Angka (px)
  terbilangFontSize: number; // Terbilang Arab (px)
  summaryFontSize: number; // Baris jumlah/rata-rata/ranking (px)
  titimangsaFontSize: number; // Tanggal penetapan (px)
  signatureTitleFontSize: number; // Jabatan tanda tangan (px)
  signatureNameFontSize: number; // Nama penandatangan (px)

  // 4. Gaya Huruf (Font Styles & Families)
  arabicFontFamily: string; // e.g. "'Traditional Arabic', 'Amiri', 'Scheherazade New', serif"
  latinFontFamily: string; // e.g. "'Times New Roman', Arial, sans-serif"
  arabicFontWeight: 'normal' | 'bold' | '600' | '700';
  latinFontWeight: 'normal' | 'bold' | '600' | '700';
  isTitleItalic?: boolean;

  // 5. Posisi Huruf / Text Alignment (Horizontal)
  numberAlign?: 'center' | 'left' | 'right' | 'justify';
  numberFormat?: 'latin' | 'arabic';
  arabicSubjectAlign: 'right' | 'center' | 'justify' | 'left';
  latinSubjectAlign: 'left' | 'center' | 'justify' | 'right';
  scoreAlign: 'center' | 'left' | 'right';
  terbilangAlign: 'center' | 'right' | 'justify' | 'left';
  titimangsaAlign: 'right' | 'center' | 'left';
  studentInfoAlign: 'right' | 'left';

  // 6. Perataan Vertikal (Vertical Alignment: Top, Middle, Bottom)
  tableVerticalAlign?: 'top' | 'middle' | 'bottom';
  numberVerticalAlign?: 'top' | 'middle' | 'bottom';
  arabicSubjectVerticalAlign?: 'top' | 'middle' | 'bottom';
  latinSubjectVerticalAlign?: 'top' | 'middle' | 'bottom';
  scoreVerticalAlign?: 'top' | 'middle' | 'bottom';
  terbilangVerticalAlign?: 'top' | 'middle' | 'bottom';
}

export interface DesignPreset {
  id: string;
  name: string;
  description: string;
  config: ReportDesignConfig;
  isBuiltIn?: boolean;
}

export const DEFAULT_DESIGN_CONFIG: ReportDesignConfig = {
  // Bingkai
  framePaddingTop: 16,
  framePaddingBottom: 16,
  framePaddingLeft: 20,
  framePaddingRight: 20,
  frameBorderStyle: 'double',
  frameBorderWidth: 3,
  frameBorderColor: '#174D3A',
  frameOutlineWidth: 8,
  frameOutlineOffset: -12,
  frameOutlineColor: '#B28A3A',
  frameAccentColor: '#D8BE78',
  frameBorderRadius: 0,

  // Tabel
  tableMarginTop: 3,
  tableMarginBottom: 3,
  tableRowHeight: 22,
  tableBorderWidth: 0.75,
  tableBorderColor: '#1f2937',
  tableHeaderBg: '#f8fafc',
  numberColWidth: 5.5,
  colWidthNo: 5.5,
  colWidthSubjectAr: 28.5,
  colWidthSubjectLat: 24.5,
  colWidthScore: 13,
  colWidthScoreAr: 6.5,
  colWidthScoreLat: 6.5,
  colWidthTerbilang: 28.5,

  // Ukuran Huruf
  titleFontSize: 25,
  subTitleFontSize: 15,
  studentInfoFontSize: 14.5,
  tableHeaderFontSize: 13,
  numberFontSize: 12,
  arabicSubjectFontSize: 14,
  latinSubjectFontSize: 11.5,
  scoreFontSize: 12.5,
  terbilangFontSize: 14,
  summaryFontSize: 13,
  titimangsaFontSize: 14.5,
  signatureTitleFontSize: 15,
  signatureNameFontSize: 13,

  // Gaya Huruf
  arabicFontFamily: "'Traditional Arabic', 'Amiri', 'Scheherazade New', serif",
  latinFontFamily: "'Times New Roman', Arial, sans-serif",
  arabicFontWeight: '700',
  latinFontWeight: 'normal',
  isTitleItalic: false,

  // Posisi Huruf
  numberAlign: 'center',
  numberFormat: 'latin',
  arabicSubjectAlign: 'right',
  latinSubjectAlign: 'left',
  scoreAlign: 'center',
  terbilangAlign: 'center',
  titimangsaAlign: 'right',
  studentInfoAlign: 'right',

  // Perataan Vertikal (Vertical Alignment)
  tableVerticalAlign: 'middle',
  numberVerticalAlign: 'middle',
  arabicSubjectVerticalAlign: 'middle',
  latinSubjectVerticalAlign: 'middle',
  scoreVerticalAlign: 'middle',
  terbilangVerticalAlign: 'middle',
};

export const BUILT_IN_PRESETS: DesignPreset[] = [
  {
    id: 'default-gold-green',
    name: 'Klasik Hijau Emas (Resmi)',
    description: 'Format standar resmi Pesantren Al-Ghozali dengan bingkai ganda hijau dan aksen emas.',
    config: { ...DEFAULT_DESIGN_CONFIG },
    isBuiltIn: true,
  },
  {
    id: 'formal-monochrome',
    name: 'Formal Hitam Putih',
    description: 'Format elegan hitam-putih tanpa warna ornamen, cocok untuk pencetakan fotokopi atau stensil.',
    config: {
      ...DEFAULT_DESIGN_CONFIG,
      frameBorderColor: '#000000',
      frameOutlineColor: '#333333',
      frameAccentColor: 'transparent',
      tableHeaderBg: '#eaeaea',
    },
    isBuiltIn: true,
  },
  {
    id: 'royal-navy',
    name: 'Biru Kehormatan (Royal Navy)',
    description: 'Format bingkai biru gelap dengan outline sapphire dan aksen perak cerah.',
    config: {
      ...DEFAULT_DESIGN_CONFIG,
      frameBorderColor: '#0f172a',
      frameOutlineColor: '#1e3a8a',
      frameAccentColor: '#94a3b8',
      tableHeaderBg: '#f1f5f9',
    },
    isBuiltIn: true,
  },
  {
    id: 'compact-slim',
    name: 'Rapat & Ringkas (Compact Slim)',
    description: 'Format dengan padding dan baris lebih rapat untuk memuat lebih banyak mata pelajaran.',
    config: {
      ...DEFAULT_DESIGN_CONFIG,
      framePaddingTop: 14,
      framePaddingBottom: 14,
      framePaddingLeft: 18,
      framePaddingRight: 18,
      tableRowHeight: 19,
      tableMarginTop: 2,
      tableMarginBottom: 2,
      arabicSubjectFontSize: 13,
      latinSubjectFontSize: 11,
      terbilangFontSize: 13,
    },
    isBuiltIn: true,
  },
];

export const STORAGE_KEY_DESIGN_CONFIG = 'kasyfud_darajat_custom_design_v2';
export const STORAGE_KEY_DESIGN_PRESETS = 'kasyfud_darajat_custom_presets_v2';

export function getSavedDesignConfig(): ReportDesignConfig {
  try {
    const saved = localStorage.getItem(STORAGE_KEY_DESIGN_CONFIG);
    if (saved) {
      return { ...DEFAULT_DESIGN_CONFIG, ...JSON.parse(saved) };
    }
  } catch {
    // ignore
  }
  return { ...DEFAULT_DESIGN_CONFIG };
}

export function saveDesignConfig(config: ReportDesignConfig): void {
  try {
    localStorage.setItem(STORAGE_KEY_DESIGN_CONFIG, JSON.stringify(config));
  } catch {
    // ignore
  }
}

export function getSavedDesignPresets(): DesignPreset[] {
  try {
    const saved = localStorage.getItem(STORAGE_KEY_DESIGN_PRESETS);
    if (saved) {
      const parsed: DesignPreset[] = JSON.parse(saved);
      // Combine built-in with user-saved custom presets
      const customOnly = parsed.filter((p) => !p.isBuiltIn);
      return [...BUILT_IN_PRESETS, ...customOnly];
    }
  } catch {
    // ignore
  }
  return [...BUILT_IN_PRESETS];
}

export function saveDesignPreset(preset: DesignPreset): DesignPreset[] {
  const current = getSavedDesignPresets();
  const existingIdx = current.findIndex((p) => p.id === preset.id);
  let updated: DesignPreset[];
  if (existingIdx >= 0) {
    updated = current.map((p, idx) => (idx === existingIdx ? preset : p));
  } else {
    updated = [...current, preset];
  }
  try {
    localStorage.setItem(STORAGE_KEY_DESIGN_PRESETS, JSON.stringify(updated.filter((p) => !p.isBuiltIn)));
  } catch {
    // ignore
  }
  return updated;
}

export function deleteDesignPreset(presetId: string): DesignPreset[] {
  const current = getSavedDesignPresets();
  const updated = current.filter((p) => p.id !== presetId || p.isBuiltIn);
  try {
    localStorage.setItem(STORAGE_KEY_DESIGN_PRESETS, JSON.stringify(updated.filter((p) => !p.isBuiltIn)));
  } catch {
    // ignore
  }
  return updated;
}