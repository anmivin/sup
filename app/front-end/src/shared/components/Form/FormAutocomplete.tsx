import { ElementType, FC, ForwardRefExoticComponent } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { AutocompleteProps, AutocompleteValue } from '@mui/material';
import { ChipTypeMap } from '@mui/material/Chip';

import DefaultAutocomplete from '@components/DefaultAutocomplete';
import { DefaultAutocompleteProps } from '@components/DefaultAutocomplete/DefaultAutocomplete.types';
import DefaultChip from '@components/DefaultChip';
import DefaultTextfield from '@components/DefaultTextfield';

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
          noOptionsText="Нет вариантов"
          renderInput={(params) => (
            <DefaultTextfield {...params} {...inputProps} error={!!error} helperText={error?.message} />
          )}
        />
      )}
    />
  );
};

export default FormAutocomplete;
