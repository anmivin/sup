import { PaletteOptions } from '@mui/material/styles';
import { ColorOptions } from 'ui/theme/theme.types';

export const commonPalette: (color: ColorOptions) => PaletteOptions = (color) => ({
  primary: {
    main: color.primary,
  },
  secondary: {
    main: color.secondary,
  },
  error: {
    main: color.error,
  },
  success: {
    main: color.success,
  },
  warning: {
    main: color.warning,
  },
  default: {
    main: color.monoA800,
    light: color.monoA400,
    dark: color.monoA800,
  },
  background: {
    default: color.background,
    paper: color.monoB,
  },
  text: {
    primary: color.monoA900,
    secondary: color.monoA600,
    disabled: color.monoA500,
  },
});
