import { SelectProps as MuiSelectProps } from '@mui/material/Select';

export interface DefaultSelectOptionValue {
  id: string;
  name: string;
}

export type SelectProps<T = unknown> = MuiSelectProps<T> & {
  options?: DefaultSelectOptionValue[];
  // @NOTE: работает только с options
  showRadios?: boolean;
};
