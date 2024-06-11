import { CSSProperties, ElementType } from 'react';

import { TypographyProps as MuiTypographyProps } from '@mui/material/Typography';

import { Color } from '@theme/index';

export enum TitleVariant {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6',
}
export type TypographyTitleVariant = keyof typeof TitleVariant;
export type TypographyTitleLevel = 1 | 2 | 3 | 4 | 5 | 6 | '1' | '2' | '3' | '4' | '5' | '6';

export enum TextVariant {
  body1 = 'body1',
  body1medium = 'body1medium',
  body2 = 'body2',
  button = 'button',
  caption = 'caption',
  mini = 'mini',
  subtitle1 = 'subtitle1',
  subtitle2 = 'subtitle2',
}
export type TypographyTextVariant = keyof typeof TextVariant;

export interface TypographyProps extends Omit<MuiTypographyProps, 'color'> {
  color?: Color | string;
  component?: ElementType;
}

export type TextProps = TypographyProps;
