import { commonColors } from './common/color';
import { Components, PaletteOptions, createTheme } from '@mui/material/styles';
import { commonTheme } from './common/commonTheme';
import { commonPalette } from './common/palette';
import { commonComponents } from './common/components';
import { Theme } from './theme.types';

export const color = {
  backgroundDefault: commonColors.yellowLight,
  backgroundPaper: commonColors.transparentLight,
  primaryMain: commonColors.pinkLight,
  primaryLight: commonColors.pinkLight,
  secondaryMain: commonColors.transparentDark,
  secondaryDark: commonColors.transparentMedium,
  secondaryLight: commonColors.pinkSuperlight,
  textPrimary: commonColors.pinkSuperdark,
  textSecondary: commonColors.pinkSuperdark,
  errorMain: commonColors.pinkDark,
  errorLight: commonColors.monoExtra,
  errorDark: commonColors.monoExtra,
  infoMain: commonColors.monoExtra,
  infoLight: commonColors.monoExtra,
  infoDark: commonColors.blueSuperdark,
  successMain: commonColors.greenLight,
  successLight: commonColors.monoExtra,
  successDark: commonColors.monoExtra,
  actionActive: commonColors.monoSuperlight,
  actionHover: commonColors.transparentLight,
  actionSelected: commonColors.monoExtra,
  actionDisable: commonColors.monoExtra,
  actionFocus: commonColors.monoExtra,
} as const;

export type Color = keyof typeof color;
export type ColorOptions = Record<Color, string>;

export const components: Components = {
  ...commonComponents(color),
};

export const palette: PaletteOptions = {
  mode: 'light',
  ...commonPalette(color),
};

export const lightTheme: Theme = createTheme({
  ...commonTheme,
  color,
  palette,
  components,
});
