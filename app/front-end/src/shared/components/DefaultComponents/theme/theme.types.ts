import type { Theme } from '@mui/material';
import { SerializedStyles } from '@mui/styled-engine';

import type { Breakpoints, Media } from './common/media';
import type { Alpha, Opacity } from './common/opacity';
import type { Radius } from './common/radius';
import type { MuiShadows, Shadow, ShadowObject } from './common/shadows';
import type { FontStyle, Typography } from './common/typography';
import type { Color, ColorOptions } from './light/color';
import { ThemeKey } from './theme.constants';

export type { Alpha, Radius, Shadow, Color, ColorOptions, Breakpoints, Media };

export type HoverEffectsProps = {
  withBeforeElement: boolean;
};

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
  // theme opacity values
  opacity: Opacity;
  // theme shadows
  shadow: ShadowObject;
  // mui shadows
  shadows: MuiShadows;
  // theme border radius's
  radius: Radius;
  // helper to take opacity variant of theme color
  rgba: (colorName: Color, alpha: Alpha) => string;
  // helper to take opacity variant from HEX color
  rgbaFromHex: (hex: string, alpha: Alpha) => string;
  // add css style for hover (experimental)
  hoverEffects: (options: HoverEffectsProps) => SerializedStyles;
};

declare module '@mui/material/styles' {
  interface Theme extends ExtTheme {}
  interface ThemeOptions extends Partial<ExtTheme> {}

  interface Palette {
    default: Palette['primary'];
  }
  interface PaletteOptions {
    default?: PaletteOptions['primary'];
  }
}

export { Theme };
