import { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';

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
  ref,
  ...props
}: DefaultAutocompleteProps<T, Multiple, DisableClearable, FreeSolo>) => {
  const { t } = useTranslation();
  return (
    <StyledAutocomplete
      ref={ref}
      PaperComponent={CustomPaper}
      noOptionsText={t('data.utility.nooption')}
      renderInput={(params) => renderInput(params)}
      {...omit(props, ['helperText', 'error'])}
    />
  );
};

export default DefaultAutocomplete;
