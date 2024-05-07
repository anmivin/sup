import type { Theme } from '@mui/material';

import type { Breakpoints, Media } from './common/media';
import type { Radius } from './common/radius';
import type { Shadow, ShadowObject } from './common/shadows';
import type { FontStyle, Typography } from './common/typography';
import type { Color, ColorOptions } from './lightTheme';
import { ThemeKey } from './theme.constants';

export type { Radius, Shadow, Color, ColorOptions, Breakpoints, Media };

export type PaletteMode = ThemeKey;

export type ExtTheme = {
  // theme colors
  color: ColorOptions;
  // styled media query helper
  media: Media;
  // mui font styles
  typography: Typography;
  // css font styles
  fontStyle: FontStyle;
  // theme shadows
  shadows: ShadowObject;
  // theme border radius's
  radius: Radius;
};

declare module '@mui/material/styles' {
  interface Theme extends ExtTheme {}
  interface ThemeOptions extends Partial<ExtTheme> {}

  /* interface Palette {
    default: Palette['primary'];
  }
  interface PaletteOptions {
    default?: PaletteOptions['primary'];
  } */
}

export { Theme };
