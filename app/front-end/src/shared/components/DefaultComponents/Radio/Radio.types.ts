import { SVGProps } from 'react';

import { RadioProps as MuiRadioProps } from '@mui/material';

import { RadioSize, RadioVariant } from './Radio.constants';

export type RadioVariantKey = keyof typeof RadioVariant;
export type RadioSizeKey = keyof typeof RadioSize;

export interface RadioProps extends MuiRadioProps {
  variant?: RadioVariantKey;
  error?: boolean;
}
export type RadioIconProps = SVGProps<SVGSVGElement> & {
  indeterminate: boolean;
  checked?: boolean;
  size: RadioSizeKey;
};

declare module '@mui/material/Radio' {
  interface RadioPropsSizeOverrides {
    large: true;
  }
}
