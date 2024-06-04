import { TextFieldProps as MuiTextFieldProps } from '@mui/material/TextField';

export type TextFieldProps = MuiTextFieldProps & {
  resizeBoth?: boolean;
  numeric?: boolean;
  decimalPlaces?: number;
};
