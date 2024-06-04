export const opacity = {
  '25': 0.02,
  '50': 0.04,
  '75': 0.06,
  '100': 0.08,
  '150': 0.1,
  '200': 0.12,
  '300': 0.16,
  '400': 0.24,
  '500': 0.34,
  '550': 0.44,
  '600': 0.54,
  '700': 0.6,
  '800': 0.72,
  '900': 0.88,
} as const;

export type Alpha = keyof typeof opacity | number;
export type Opacity = Record<Alpha, number>;
