import { PaletteOptions } from '@mui/material/styles';

import { commonPalette } from 'ui/theme/common/palette';
import { color } from './color';

export const palette: PaletteOptions = {
  mode: 'light',
  ...commonPalette(color),
  // primary: {
  //   main: color.primary,
  // },
};
// console.info('palette', palette);
