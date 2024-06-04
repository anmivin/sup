import { useCallback } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { zodResolver } from '@hookform/resolvers/zod';

import DefaultDrawer from '@components/DefaultDrawer';
import DefaultTextField from '@components/DefaultTextfield/DefaultTextfield';
import DefaultFormFooter from '@components/Form/FormFooter';
import DefaultFormContainer from '@components/FormContainer';

import { DrawerVariants } from '@constants/sharedTypes';

import { CreateTreeDrawerProps, CreateTreeForm, TreeDrawerSchema } from './TreeDrawer.types';

const TreeDrawer = ({ onCloseModal, type }: CreateTreeDrawerProps) => {
  const { t } = useTranslation();

  const formMethods = useForm<CreateTreeForm>({
    resolver: zodResolver(TreeDrawerSchema),
  });

  const {
    handleSubmit,
    formState: { errors },
    control,
    watch,
  } = formMethods;

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
    <DefaultDrawer
      onClose={onCloseModal}
      label={`${t(type === DrawerVariants.Create ? 'data.utility.create' : 'data.utility.edit')} древо`}
    >
      <DefaultFormContainer formMethods={formMethods} onSubmit={onSubmit}>
        <DefaultTextField name="name" label="Имя" />
        <DefaultTextField name="image" label="Картинка" />
        <DefaultFormFooter onSubmit={handleSubmit(onSubmit)} />
      </DefaultFormContainer>
    </DefaultDrawer>
  );
};
export default TreeDrawer;
