import { css } from '@mui/material/styles';
import { TypographyOptions, TypographyStyleOptions } from '@mui/material/styles/createTypography';
import { SerializedStyles } from '@mui/styled-engine';

export type TypographyRules = Record<TypoVariant, TypographyStyleOptions>;

export type Typography = Omit<TypographyOptions, keyof TypographyRules> & TypographyRules;

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
  mini = 'mini',
  overline = 'overline',
}

export const typography: Typography = {
  fontFamily: 'The Sims Sans',

  [TypoVariant.h1]: {
    fontSize: 40,
    lineHeight: '48px',
    fontWeight: 500,
    letterSpacing: 0.2,
  },
  [TypoVariant.h2]: {
    fontSize: 32,
    lineHeight: '40px',
    fontWeight: 500,
    letterSpacing: 0.1,
  },
  [TypoVariant.h3]: {
    fontSize: 28,
    lineHeight: '36px',
    fontWeight: 500,
    letterSpacing: 0,
  },
  [TypoVariant.h4]: {
    fontSize: 24,
    lineHeight: '28px',
    fontWeight: 500,
    letterSpacing: 0.15,
  },
  [TypoVariant.h5]: {
    fontSize: 20,
    lineHeight: '24px',
    fontWeight: 500,
    letterSpacing: 0.2,
  },
  [TypoVariant.h6]: {
    fontSize: 18,
    lineHeight: '24px',
    fontWeight: 500,
    letterSpacing: 0.15,
  },
  [TypoVariant.subtitle1]: {
    fontSize: 16,
    lineHeight: '20px',
    fontWeight: 400,
    letterSpacing: 0.15,
  },
  [TypoVariant.subtitle2]: {
    fontSize: 14,
    lineHeight: '20px',
    fontWeight: 500,
    letterSpacing: 0.1,
  },
  [TypoVariant.body1]: {
    fontSize: 14,
    lineHeight: '20px',
    fontWeight: 400,
    letterSpacing: 0.25,
  },
  [TypoVariant.body2]: {
    fontSize: 16,
    lineHeight: '24px',
    fontWeight: 400,
    letterSpacing: 0.5,
  },
  [TypoVariant.button]: {
    fontSize: 16,
    lineHeight: '16px',
    fontWeight: 500,
    letterSpacing: 0.5,
    textTransform: 'none',
  },
  [TypoVariant.caption]: {
    fontSize: 12,
    lineHeight: '16px',
    fontWeight: 400,
    letterSpacing: 0.4,
  },
  [TypoVariant.mini]: {
    fontSize: 9,
    lineHeight: '12px',
    fontWeight: 500,
    letterSpacing: 0.6,
    textTransform: 'uppercase',
  },
  [TypoVariant.overline]: {
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
