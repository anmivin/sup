import { Controller, RegisterOptions, useFormContext } from 'react-hook-form';

import DefaulDatePicker, { DefaultDatePickerProps } from '@front/components/Default/DatePicker';

export interface FormDatePickerProps extends Omit<DefaultDatePickerProps, 'value' | 'onChange'> {
  name: string;
  rules?: Omit<RegisterOptions, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;
  value?: DefaultDatePickerProps['value'];
  onChange?: DefaultDatePickerProps['onChange'];
}

const FormDatePicker = ({ name, rules, ...props }: FormDatePickerProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <DefaulDatePicker {...field} {...props} error={!!error} helperText={error?.message} />
      )}
    />
  );
};

export default FormDatePicker;
