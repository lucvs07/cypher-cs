export const darkColors = {
  bg: '#0D0F14',
  bg2: '#11141B',
  surface: '#15181F',
  surface2: '#1B1F28',
  surfaceHi: '#232834',
  line: 'rgba(255,255,255,0.08)',
  line2: 'rgba(255,255,255,0.14)',
  line3: 'rgba(255,255,255,0.22)',
  ink: '#ECECEE',
  ink2: '#B8BAC0',
  inkMute: '#75787F',
  inkGhost: '#4A4D55',
} as const;

export const lightColors = {
  bg: '#F5F2EC',
  bg2: '#ECE8DF',
  surface: '#FBF9F4',
  surface2: '#F0EDE5',
  surfaceHi: '#E6E1D5',
  line: 'rgba(20,20,25,0.07)',
  line2: 'rgba(20,20,25,0.14)',
  line3: 'rgba(20,20,25,0.22)',
  ink: '#16161A',
  ink2: '#36363D',
  inkMute: '#6A6A72',
  inkGhost: '#A8A59C',
} as const;

export const universalColors = {
  accent: '#FF6A1E',
  accentSoft: 'rgba(255,106,30,0.14)',
  accentDeep: '#CC5018',
  red: '#EE4242',
  redSoft: 'rgba(238,66,66,0.12)',
  green: '#34D07E',
  greenSoft: 'rgba(52,208,126,0.12)',
  yellow: '#FFCE38',
  yellowSoft: 'rgba(255,206,56,0.12)',
  blue: '#3D88F6',
  blueSoft: 'rgba(61,136,246,0.12)',
} as const;

export type ThemeColors = typeof darkColors & typeof universalColors;

export function getPalette(isDark: boolean): ThemeColors {
  return {
    ...(isDark ? darkColors : lightColors),
    ...universalColors,
  };
}
