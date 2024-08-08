import { useTranslation } from 'react-i18next';

import { AutocompleteProps, PaperProps } from '@mui/material';

import { StyledAutocomplete, StyledPaper } from './Autocomplete.styled';

const Autocomplete = <
  T,
  Multiple extends boolean | undefined = undefined,
  DisableClearable extends boolean | undefined = undefined,
  FreeSolo extends boolean | undefined = undefined,
>({
  ref,
  ...props
}: AutocompleteProps<T, Multiple, DisableClearable, FreeSolo>) => {
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

export default Autocomplete;
