import { Controller, useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import DefaultAutocomplete from '@ui/Autocomplete';
import DefaultChip from '@ui/Chip';
import DefaultTextfield from '@ui/Textfield';

import { FormAutocompleteProps } from './FormComponents.types';

const FormAutocomplete = <
  T,
  InputProps extends object,
  Multiple extends boolean | undefined = undefined,
  DisableClearable extends boolean | undefined = undefined,
  FreeSolo extends boolean | undefined = undefined,
>({
  name,
  inputProps,
  withOnChange,
  onChangeValue,
  ...props
}: FormAutocompleteProps<T, InputProps, Multiple, DisableClearable, FreeSolo>) => {
  const { control } = useFormContext();
  const { t } = useTranslation('translation');
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <DefaultAutocomplete
          {...field}
          {...props}
          onChange={(_event, newValue) => {
            onChangeValue ? onChangeValue(newValue) : field.onChange(newValue);
            withOnChange?.();
          }}
          noOptionsText={t('data.utility.nooption')}
          renderInput={(params) => (
            <DefaultTextfield {...params} {...inputProps} error={!!error} helperText={error?.message} />
          )}
        />
      )}
    />
  );
};

export default FormAutocomplete;
