import { Controller, useFormContext } from 'react-hook-form';

import { TextField, TextFieldProps } from '@mui/material';

export type FormTextFieldProps = TextFieldProps & {
  name: string;
};

const FormTextField = ({ name, ...props }: FormTextFieldProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <TextField {...field} {...props} error={!!error} helperText={error?.message} title="" />
      )}
    />
  );
};

export default FormTextField;
