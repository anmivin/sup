import { ReactNode } from 'react';
import { FieldValues, UseFormReturn } from 'react-hook-form';

export interface FormContainerProps<T extends FieldValues> {
  formMethods: UseFormReturn<T>;
  children: ReactNode;
  onSubmit: (data: T) => void;
}
