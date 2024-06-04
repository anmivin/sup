import { ForwardedRef, ReactElement, forwardRef } from 'react';

import { Autocomplete as MUIAutocomplete } from '@mui/material';
// eslint-disable-next-line import/named
import { omit, pick } from 'lodash';

import { TextField } from '@components/DefaultComponents/TextField/TextField';

import { AutocompleteProps } from './Autocomplete.types';

function Autocomplete<
  T,
  Multiple extends boolean | undefined = undefined,
  DisableClearable extends boolean | undefined = undefined,
  FreeSolo extends boolean | undefined = undefined,
>(
  {
    renderInput,
    noOptionsText = 'Нет доступных значений',
    TextFieldProps,
    ...restProps
  }: AutocompleteProps<T, Multiple, DisableClearable, FreeSolo>,
  ref: ForwardedRef<HTMLInputElement>,
) {
  const forwardedTextFieldProps = pick(restProps, [
    'label',
    'placeholder',
    'required',
    'error',
    'helperText',
    'onBlur',
  ]);

  return (
    <MUIAutocomplete<T, Multiple, DisableClearable, FreeSolo>
      ref={ref}
      noOptionsText={noOptionsText}
      renderInput={(params) =>
        renderInput ? (
          renderInput(params)
        ) : (
          <TextField
            {...params}
            {...forwardedTextFieldProps}
            {...TextFieldProps}
            InputProps={{ ...params.InputProps, ...(TextFieldProps?.InputProps || {}) }}
          />
        )
      }
      {...omit(restProps, ['helperText', 'error'])}
    />
  );
}

export default forwardRef(Autocomplete) as <
  T,
  Multiple extends boolean | undefined = undefined,
  DisableClearable extends boolean | undefined = undefined,
  FreeSolo extends boolean | undefined = undefined,
>(
  p: AutocompleteProps<T, Multiple, DisableClearable, FreeSolo> & { ref?: ForwardedRef<HTMLInputElement> },
) => ReactElement;
