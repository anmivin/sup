import { PaperProps } from '@mui/material';
import { omit } from 'lodash';

import { StyledAutocomplete, StyledPaper } from './DefaultAutocomplete.styled';

import { DefaultAutocompleteProps } from './DefaultAutocomplete.types';

const CustomPaper = (props: PaperProps) => {
  return <StyledPaper {...props} />;
};
const DefaultAutocomplete = <
  T,
  Multiple extends boolean | undefined = undefined,
  DisableClearable extends boolean | undefined = undefined,
  FreeSolo extends boolean | undefined = undefined,
>({
  renderInput,
  noOptionsText = 'Нет доступных значений',
  ...props
}: DefaultAutocompleteProps<T, Multiple, DisableClearable, FreeSolo>) => {
  return (
    <StyledAutocomplete<T, Multiple, DisableClearable, FreeSolo>
      PaperComponent={CustomPaper}
      noOptionsText={noOptionsText}
      renderInput={(params) => renderInput(params)}
      {...omit(props, ['helperText', 'error'])}
    />
  );
};

export default DefaultAutocomplete;
