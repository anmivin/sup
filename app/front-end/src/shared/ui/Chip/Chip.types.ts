import { ReactNode } from 'react';

import { ChipProps as MuiChipProps } from '@mui/material';

export enum ChipSize {
  small = 'small',
  medium = 'medium',
  large = 'large',
}

export type ChipSizeKey = keyof typeof ChipSize;

export interface ChipProps extends Omit<MuiChipProps, 'children'> {
  children?: ReactNode | ReactNode[];
  selected?: boolean;
}

declare module '@mui/material/Chip' {
  interface ChipPropsSizeOverrides {
    large: true;
  }
}
