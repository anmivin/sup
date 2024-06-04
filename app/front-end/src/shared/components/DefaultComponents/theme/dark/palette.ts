import { PaletteOptions } from '@mui/material/styles';

import { commonPalette } from 'ui/theme/common/palette';
import { color } from './color';

export const palette: PaletteOptions = {
  mode: 'dark',
  ...commonPalette(color),
  // primary: {
  //   main: color.primary,
  // },
};
