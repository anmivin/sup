import { createTheme } from '@mui/material/styles';
import { commonTheme } from 'ui/theme/common/commonTheme';
import { Alpha } from 'ui/theme/common/opacity';
import { hoverEffectsFromThemeColor, rgbaFromThemeColor } from 'ui/theme/theme.lib';
import { Theme } from 'ui/theme/theme.types';

import { Color, color } from './color';
import { components } from './components';
import { palette } from './palette';

const rgba = (colorName: Color, alpha: Alpha): string => rgbaFromThemeColor(color, colorName, alpha);

export const lightTheme: Theme = createTheme({
  ...commonTheme,
  color,
  palette,
  components,
  rgba,
  hoverEffects: (options) => hoverEffectsFromThemeColor(color, options),
});

export default lightTheme;
