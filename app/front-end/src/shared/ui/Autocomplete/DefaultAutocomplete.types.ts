import { ForwardedRef } from 'react';

import { AutocompleteProps } from '@mui/material';

export interface DefaultAutocompleteProps<
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined,
> extends AutocompleteProps<T, Multiple, DisableClearable, FreeSolo> {
  ref?: ForwardedRef<HTMLInputElement>;
}
