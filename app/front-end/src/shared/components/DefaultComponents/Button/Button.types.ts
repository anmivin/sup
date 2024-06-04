import { ElementType } from 'react';

import { ButtonProps as MuiButtonProps } from '@mui/material';

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    default: true;
    warning: false;
    // info: false;
  }

  interface ButtonPropsSizeOverrides {
    xl: true;
    xxl: true;
  }
}

export interface ButtonProps extends MuiButtonProps {
  component?: ElementType;
  isLoading?: boolean;
}
