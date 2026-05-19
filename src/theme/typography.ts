export const fontFamily = {
  // Montserrat
  extraBold: 'Montserrat_800ExtraBold',
  bold: 'Montserrat_700Bold',
  semiBold: 'Montserrat_600SemiBold',
  medium: 'Montserrat_500Medium',
  regular: 'Montserrat_400Regular',
  // JetBrains Mono
  monoSemiBold: 'JetBrainsMono_600SemiBold',
  monoMedium: 'JetBrainsMono_500Medium',
  monoRegular: 'JetBrainsMono_400Regular',
} as const;

export const fontSize = {
  // Montserrat scale
  sectionTitle: 28,   // ExtraBold
  topbarTitle: 20,    // ExtraBold
  modalTitle: 18,     // Bold
  cardTitle: 16,      // Bold
  importantLabel: 14, // SemiBold
  body: 13,           // Medium
  meta: 12,           // Medium
  footnote: 11,       // Regular
  // JetBrains Mono scale
  monoTimestamp: 12,  // Regular
  monoLabel: 11,      // Medium
  monoEyebrow: 10,    // SemiBold uppercase
  monoBadge: 9,       // Bold uppercase
} as const;

export const letterSpacing = {
  tight: -0.03,       // relative em-unit for ExtraBold ≥28px
  eyebrow: 0.16,      // em for eyebrow labels
  inputLabel: 0.14,   // em for input labels
} as const;
