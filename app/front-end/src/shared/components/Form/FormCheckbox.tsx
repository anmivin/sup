import { ChangeEvent } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { Checkbox, FormControlLabel, FormControlLabelProps } from '@mui/material';

interface FormCheckboxProps extends Omit<FormControlLabelProps, 'control'> {
  name: string;
  withOnChange?: () => void;
  fieldValuePreparator?: (value: any) => any;
  onChangeValue?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  shrinkLabel?: boolean;
}

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
