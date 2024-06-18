import { Controller, useFormContext } from 'react-hook-form';

import DefaultTextfield from '@ui/Textfield';

import { FormTextFieldProps } from './FormComponents.types';

const FormTextField = ({ name, ...props }: FormTextFieldProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <DefaultTextfield {...field} {...props} error={!!error} helperText={error?.message} />
      )}
    />
  );
};

export default FormTextField;
