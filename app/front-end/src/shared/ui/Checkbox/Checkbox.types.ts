import { CheckboxProps as MuiCheckboxProps } from '@mui/material';

export interface CheckboxProps extends MuiCheckboxProps {
  error?: boolean;
  isLoading?: boolean;
}
export interface CheckboxIconProps {
  checked?: boolean;
}
