import { SVGProps } from 'react';

import { CheckboxProps as MuiCheckboxProps } from '@mui/material';

import { CheckboxSize, CheckboxVariant } from './Checkbox.constants';

export type CheckboxVariantKey = keyof typeof CheckboxVariant;
export type CheckboxSizeKey = keyof typeof CheckboxSize;

export interface CheckboxProps extends MuiCheckboxProps {
  variant?: CheckboxVariantKey;
  error?: boolean;
  isLoading?: boolean;
}
export type CheckboxIconProps = SVGProps<SVGSVGElement> & {
  indeterminate: boolean;
  checked?: boolean;
  size: CheckboxSizeKey;
};

declare module '@mui/material/Checkbox' {
  interface CheckboxPropsSizeOverrides {
    large: true;
  }
}
