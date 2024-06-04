import { createTheme } from '@mui/material/styles';

import { darkTheme } from './dark';
import { lightTheme } from './light';

export const theme = {
  light: createTheme(lightTheme),
  dark: createTheme(darkTheme),
};
