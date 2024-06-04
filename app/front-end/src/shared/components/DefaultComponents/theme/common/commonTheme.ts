import { createTheme } from '@mui/material/styles';
import { Color } from 'ui/theme/light/color';
import { rgbaFromHex } from 'ui/theme/theme.lib';
import { Alpha, Theme } from 'ui/theme/theme.types';

import { media } from './media';
import { opacity } from './opacity';
import { radius } from './radius';
import { shadow, muiShadows as shadows } from './shadows';
import { fontStyle, typography } from './typography';

// TODO: подумать над шаблоном анимации
// const transition = (
//   property = 'opacity',
//   duration = 200,
//   timing = 'ease-out'
// ) => `${property} ${duration}ms ${timing}`;
// // cubic-bezier(0.4, 0, 0.2, 1) //think about timing function

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const rgba = (_colorName: Color, _alpha: Alpha): string => {
  if (process.env.NODE_ENV !== 'production') {
    console.warn('Warning! Need to set theme.rgba = rgbaFromThemeColor function with theme color');
    // rgbaFromThemeColor(color, colorName, alpha);
  }
  return 'rgba(250, 5, 5, .7)';
};

export const commonTheme: Theme = createTheme({
  media,
  typography,
  fontStyle,
  opacity,
  shadows,
  shadow,
  radius,
  rgba,
  rgbaFromHex,
  spacing: 4,
});

export default commonTheme;
