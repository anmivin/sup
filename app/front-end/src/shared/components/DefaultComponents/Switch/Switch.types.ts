import { SwitchProps as MuiSwitchProps } from '@mui/material';

export interface SwitchProps extends MuiSwitchProps {}

declare module '@mui/material/Switch' {
  interface SwitchPropsSizeOverrides {
    large: true;
  }
  interface SwitchClasses {
    sizeLarge: string;
  }
}
