import { FieldValues, FormProvider } from 'react-hook-form';

import { Box } from '@mui/material';

import { FormContainerProps } from './FormContainer.types';

const FormContainer = <T extends FieldValues>({ formMethods, onSubmit, children }: FormContainerProps<T>) => {
  const { handleSubmit } = formMethods;

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box component="form" gap={2} display="flex" flexDirection="column" noValidate>
          {children}
        </Box>
      </form>
    </FormProvider>
  );
};

export default FormContainer;
