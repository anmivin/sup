import { Breakpoint, createTheme, css } from '@mui/material/styles';
import { TypographyOptions, TypographyStyleOptions } from '@mui/material/styles/createTypography';
import { SerializedStyles } from '@mui/styled-engine';
import { Modify } from 'ui/libs';

import { breakpoints } from './media';

export type TypographyRules = Record<TypoVariant, TypographyStyleOptions>;

export type Typography = Modify<TypographyOptions, TypographyRules>;

export type FontStyle = Partial<Record<TypoVariant, SerializedStyles>>;

export enum TypoVariant {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6',
  subtitle1 = 'subtitle1',
  subtitle2 = 'subtitle2',
  body1 = 'body1',
  body2 = 'body2',
  button = 'button',
  caption = 'caption',
  body1medium = 'body1medium',
  body2medium = 'body2medium',
  mini = 'mini',
  overline = 'overline',
}

const breakpointsTheme = createTheme({ breakpoints: { values: breakpoints as { [key in Breakpoint]: number } } });

export const typography: Typography = {
  fontFamily: 'Graphik',
  [TypoVariant.h1]: {
    [breakpointsTheme.breakpoints.up('md')]: {
      fontSize: 40,
      lineHeight: '48px',
      fontWeight: 500,
      letterSpacing: 0.2,
    },
    fontSize: 30,
    lineHeight: '36px',
    fontWeight: 500,
    letterSpacing: 0.2,
  },
  [TypoVariant.h2]: {
    [breakpointsTheme.breakpoints.up('md')]: { fontSize: 32, lineHeight: '40px', fontWeight: 500, letterSpacing: 0.1 },
    fontSize: 26,
    lineHeight: '32px',
    fontWeight: 500,
    letterSpacing: 0.1,
  },
  [TypoVariant.h3]: {
    [breakpointsTheme.breakpoints.up('md')]: { fontSize: 28, lineHeight: '36px', fontWeight: 500, letterSpacing: 0 },
    fontSize: 24,
    lineHeight: '28px',
    fontWeight: 500,
    letterSpacing: 0,
  },
  [TypoVariant.h4]: {
    [breakpointsTheme.breakpoints.up('md')]: { fontSize: 24, lineHeight: '28px', fontWeight: 500, letterSpacing: 0.15 },
    fontSize: 22,
    lineHeight: '28px',
    fontWeight: 500,
    letterSpacing: 0.15,
  },
  [TypoVariant.h5]: {
    [breakpointsTheme.breakpoints.up('md')]: { fontSize: 20, lineHeight: '24px', fontWeight: 500, letterSpacing: 0.2 },
    fontSize: 20,
    lineHeight: '24px',
    fontWeight: 500,
    letterSpacing: 0.2,
  },
  [TypoVariant.h6]: {
    [breakpointsTheme.breakpoints.up('md')]: { fontSize: 18, lineHeight: '24px', fontWeight: 500, letterSpacing: 0.15 },
    fontSize: 18,
    lineHeight: '24px',
    fontWeight: 500,
    letterSpacing: 0.15,
  },
  [TypoVariant.subtitle1]: {
    [breakpointsTheme.breakpoints.up('md')]: { fontSize: 16, lineHeight: '20px', fontWeight: 400, letterSpacing: 0.15 },
    fontSize: 16,
    lineHeight: '20px',
    fontWeight: 400,
    letterSpacing: 0.15,
  },
  [TypoVariant.subtitle2]: {
    [breakpointsTheme.breakpoints.up('md')]: { fontSize: 14, lineHeight: '20px', fontWeight: 500, letterSpacing: 0.1 },
    fontSize: 14,
    lineHeight: '20px',
    fontWeight: 500,
    letterSpacing: 0.1,
  },
  [TypoVariant.body1]: {
    [breakpointsTheme.breakpoints.up('md')]: { fontSize: 14, lineHeight: '20px', fontWeight: 400, letterSpacing: 0.25 },
    fontSize: 14,
    lineHeight: '20px',
    fontWeight: 400,
    letterSpacing: 0.25,
  },
  [TypoVariant.body2]: {
    [breakpointsTheme.breakpoints.up('md')]: { fontSize: 16, lineHeight: '24px', fontWeight: 400, letterSpacing: 0.5 },
    fontSize: 16,
    lineHeight: '24px',
    fontWeight: 400,
    letterSpacing: 0.5,
  },
  [TypoVariant.body1medium]: {
    [breakpointsTheme.breakpoints.up('md')]: { fontSize: 14, lineHeight: '20px', fontWeight: 500, letterSpacing: 0.25 },
    fontSize: 14,
    lineHeight: '20px',
    fontWeight: 500,
    letterSpacing: 0.25,
  },
  [TypoVariant.body2medium]: {
    [breakpointsTheme.breakpoints.up('md')]: { fontSize: 16, lineHeight: '24px', fontWeight: 500, letterSpacing: 0.5 },
    fontSize: 16,
    lineHeight: '24px',
    fontWeight: 500,
    letterSpacing: 0.5,
  },
  [TypoVariant.button]: {
    [breakpointsTheme.breakpoints.up('md')]: {
      fontSize: 14,
      lineHeight: '16px',
      fontWeight: 500,
      letterSpacing: 0.5,
      textTransform: 'none',
    },
    fontSize: 14,
    lineHeight: '16px',
    fontWeight: 500,
    letterSpacing: 0.5,
    textTransform: 'none',
  },
  [TypoVariant.caption]: {
    [breakpointsTheme.breakpoints.up('md')]: {
      fontSize: 12,
      lineHeight: '16px',
      fontWeight: 400,
      letterSpacing: 0.4,
    },
    fontSize: 12,
    lineHeight: '16px',
    fontWeight: 400,
    letterSpacing: 0.4,
  },
  [TypoVariant.mini]: {
    [breakpointsTheme.breakpoints.up('md')]: {
      fontSize: 9,
      lineHeight: '12px',
      fontWeight: 500,
      letterSpacing: 0.6,
      textTransform: 'uppercase',
    },
    fontSize: 9,
    lineHeight: '12px',
    fontWeight: 500,
    letterSpacing: 0.6,
    textTransform: 'uppercase',
  },
  [TypoVariant.overline]: {
    [breakpointsTheme.breakpoints.up('md')]: {
      fontSize: 10,
      lineHeight: '16px',
      fontWeight: 500,
      letterSpacing: 1.2,
      textTransform: 'uppercase',
    },
    fontSize: 10,
    lineHeight: '16px',
    fontWeight: 500,
    letterSpacing: 1.2,
    textTransform: 'uppercase',
  },
} as const;

export const fontStyle: FontStyle = {};
Object.keys(typography).forEach((variant) => {
  if (variant) {
    const typoVariant = variant as keyof typeof TypoVariant;
    const variantStyles = typography[typoVariant];
    // @ts-expect-error style generation type error (не понимаю как решить)
    fontStyle[typoVariant] = css(variantStyles);
  }
});
