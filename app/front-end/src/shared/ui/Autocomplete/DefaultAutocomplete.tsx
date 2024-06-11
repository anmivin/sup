import { useTranslation } from 'react-i18next';

import { PaperProps } from '@mui/material';

import { StyledAutocomplete, StyledPaper } from './DefaultAutocomplete.styled';

import { DefaultAutocompleteProps } from './DefaultAutocomplete.types';

const DefaultAutocomplete = <
  T,
  Multiple extends boolean | undefined = undefined,
  DisableClearable extends boolean | undefined = undefined,
  FreeSolo extends boolean | undefined = undefined,
>({
  ref,
  ...props
}: DefaultAutocompleteProps<T, Multiple, DisableClearable, FreeSolo>) => {
  const { t } = useTranslation();
  return (
    <StyledAutocomplete
      {...props}
      ref={ref}
      PaperComponent={(props: PaperProps) => <StyledPaper {...props} />}
      noOptionsText={t('data.utility.nooption')}
    />
  );
};

export default DefaultAutocomplete;
