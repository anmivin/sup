import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { zodResolver } from '@hookform/resolvers/zod';

import DefaultTextField from '@components/DefaultTextfield/DefaultTextfield';
import DefaultFormFooter from ../../shared/ui/DefaultTextfield/DefaultTextfield
import DefaultFormContainer from '@components/FormContainer';

import { DRAWER_VARIANTS } from '@type/enums';

import { CreateTreeDrawerProps, CreateTreeForm, TreeDrawerSchema } from './TreeDrawer.types';

import DefaultDrawer from '../../shared/ui/DefaultDrawer';

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
      label={`${t(type === DRAWER_VARIANTS.Create ? 'data.utility.create' : 'data.utility.edit')} древо`}
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
