import { ElementType, FC, ForwardRefExoticComponent } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { AutocompleteProps, AutocompleteValue } from '@mui/material';
import { ChipTypeMap } from '@mui/material/Chip';

import DefaultAutocomplete from '../../ui/DefaultAutocomplete';
import { DefaultAutocompleteProps } from '../../ui/DefaultAutocomplete/DefaultAutocomplete.types';
import DefaultChip from '../../ui/DefaultChip';
import DefaultTextfield from '../../ui/DefaultTextfield';

export interface FormAutocompleteProps<
  T,
  InputProps extends object,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined,
> extends Omit<DefaultAutocompleteProps<T, Multiple, DisableClearable, FreeSolo>, 'renderInput'> {
  name: string;
  inputProps?: InputProps;
  withOnChange?: (newValue: AutocompleteValue<T, Multiple, DisableClearable, FreeSolo>) => void;
  onChangeValue?: (newValue: AutocompleteValue<T, Multiple, DisableClearable, FreeSolo>) => void;
}

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
            withOnChange?.(newValue);
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
