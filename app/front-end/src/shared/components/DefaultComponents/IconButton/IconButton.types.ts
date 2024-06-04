import { ElementType } from 'react';

import { ButtonProps as MuiButtonProps } from '@mui/material';

export interface ButtonProps extends MuiButtonProps {
  component?: ElementType;
}

export type IconButtonProps = Omit<ButtonProps, 'startIcon | endIcon | icon'>;
