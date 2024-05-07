import { createTheme } from '@mui/material/styles';

import { Theme } from '../theme.types';
import { media } from './media';
import { radius } from './radius';
import { shadows } from './shadows';
import { fontStyle, typography } from './typography';

export const commonTheme: Theme = createTheme({
  media,
  typography,
  fontStyle,
  shadows,
  radius,
  spacing: 4,
});

export default commonTheme;
