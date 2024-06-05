import { ForwardedRef, ReactElement, forwardRef } from 'react';

import { Autocomplete as MUIAutocomplete } from '@mui/material';
import { omit } from 'lodash';

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
  return (
    <MUIAutocomplete<T, Multiple, DisableClearable, FreeSolo>
      ref={ref}
      noOptionsText={noOptionsText}
      renderInput={(params) => renderInput(params)}
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
