import { Components, PaletteOptions, createTheme } from '@mui/material/styles';

import { Theme } from './theme.types';

import { commonColors } from './common/color';
import { commonTheme } from './common/commonTheme';
import { commonComponents } from './common/components';
import { commonPalette } from './common/palette';

export const themeColor = {
  backgroundDefault: commonColors.monoDark,
  backgroundPaper: commonColors.transparentLight,
  primaryMain: commonColors.turqoiseLight,
  primaryLight: commonColors.monoSuperdark,
  secondaryMain: commonColors.monoSuperdark,
  secondaryDark: commonColors.turqoiseSuperdark,
  secondaryLight: commonColors.monoExtra,
  textPrimary: commonColors.turqoiseLight,
  textSecondary: commonColors.monoSuperdark,
  errorMain: commonColors.blueMedium,
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
};

export const color = { ...themeColor, ...commonColors } as const;

export type Color = keyof typeof color;

export const components: Components = {
  ...commonComponents(color),
};

export const palette: PaletteOptions = {
  mode: 'dark',
  ...commonPalette(color),
};

export const darkTheme: Theme = createTheme({
  ...commonTheme,
  color,
  palette,
  components,
});
