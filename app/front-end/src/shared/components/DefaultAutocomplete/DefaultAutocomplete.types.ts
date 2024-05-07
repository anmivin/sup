import { ForwardedRef } from 'react';

import { AutocompleteProps as MUIAutocompleteProps, TextFieldProps } from '@mui/material';

export type DefaultAutocompleteProps<
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined,
> = Omit<MUIAutocompleteProps<T, Multiple, DisableClearable, FreeSolo>, 'renderInput'> &
  Pick<TextFieldProps, 'onBlur' | 'required' | 'label' | 'placeholder' | 'error' | 'helperText'> & {
    renderInput: MUIAutocompleteProps<T, Multiple, DisableClearable, FreeSolo>['renderInput'];
    ref?: ForwardedRef<HTMLInputElement>;
  };
