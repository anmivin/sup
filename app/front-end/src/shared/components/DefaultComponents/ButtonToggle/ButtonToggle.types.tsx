import { ReactNode } from 'react';

import { ButtonGroupProps, ButtonProps } from '@mui/material';

export interface ButtonToggleProps<T extends string | number> {
  className?: string;
  value?: T;
  defaultValue?: T;
  options: T[];
  getOptionLabel?: (option: T) => ReactNode;
  getOptionKey?: (option: T) => string;
  onChange?: (value: T) => void;
  ButtonGroupProps?: ButtonGroupProps;
  buttonProps?: ButtonProps;
  disableRipple?: boolean;
  key?: string | number;
}

export interface OptionItem<T> {
  key: string;
  label: ReactNode;
  value: T;
}
