import { useCallback } from 'react';
import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import DefaultDrawer from '@components/DefaultDrawer';
import DefaultTextField from '@components/DefaultTextfield/DefaultTextfield';
import DefaultFormFooter from '@components/Form/FormFooter';
import FormContainer from '@components/FormContainer';

import { CreateTreeDrawerProps, CreateTreeForm, TreeDrawerSchema } from './TreeDrawer.types';

const TreeDrawer = ({ onCloseModal }: CreateTreeDrawerProps) => {
  const { t } = useTranslation();
  const methods = useFormContext();

  const {
    handleSubmit,
    formState: { errors },
    control,
    watch,
  } = methods;

  const onSubmit = useCallback(async (formdata: CreateTreeForm) => {
    const data = {
      userId: 1,
      name: formdata.name,
      image: formdata.image,
    };
    try {
      /*  await createTree(data); */
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <DefaultDrawer onClose={onCloseModal} label="CReata a sim">
      <FormContainer onSubmit={onSubmit} schema={TreeDrawerSchema}>
        <DefaultTextField name="name" label="Имя" />
        <DefaultTextField name="image" label="Картинка" />
        <DefaultFormFooter onSubmit={handleSubmit(onSubmit)} />
      </FormContainer>
    </DefaultDrawer>
  );
};
export default TreeDrawer;
