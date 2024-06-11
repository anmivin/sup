import { Controller, useFormContext } from 'react-hook-form';

import { Checkbox, FormControlLabel } from '@mui/material';

import { FormCheckboxProps } from './FormComponents.types';

const FormCheckbox = ({ name, withOnChange, ...props }: FormCheckboxProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <FormControlLabel
          {...field}
          {...props}
          sx={{ maxWidth: 'max-content' }}
          control={<Checkbox />}
          onChange={(_event, value) => {
            field.onChange(value);
            withOnChange?.();
          }}
          checked={!!field.value}
        />
      )}
    />
  );
};

export default FormCheckbox;
