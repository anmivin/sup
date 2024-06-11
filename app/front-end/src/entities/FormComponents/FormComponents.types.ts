import { AutocompleteValue, FormControlLabelProps } from '@mui/material';

import { DefaultAutocompleteProps } from '@ui/Autocomplete/DefaultAutocomplete.types';
import { DefaultTextfieldProps } from '@ui/Textfield';

export interface FormAutocompleteProps<
  T,
  InputProps extends object,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined,
> extends Omit<DefaultAutocompleteProps<T, Multiple, DisableClearable, FreeSolo>, 'renderInput'> {
  name: string;
  inputProps?: InputProps;
  withOnChange?: () => void;
  onChangeValue?: (newValue: AutocompleteValue<T, Multiple, DisableClearable, FreeSolo>) => void;
}

export interface FormCheckboxProps extends Omit<FormControlLabelProps, 'control'> {
  name: string;
  withOnChange?: () => void;
}

export type FormTextFieldProps = DefaultTextfieldProps & {
  name: string;
};
