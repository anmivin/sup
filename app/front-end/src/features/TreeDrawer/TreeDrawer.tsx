import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button } from '@mui/material';

import { DRAWER_VARIANTS } from '@type/enums';

import DefaultDrawer from '@ui/Drawer';
import DefaultTextField from '@ui/Textfield';

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
      label={`${t(type === DRAWER_VARIANTS.Create ? 'data.utility.create' : 'data.utility.edit')} древо`}
    >
      <DefaultTextField name="name" label="Имя" />
      <DefaultTextField name="image" label="Картинка" />
      <Box>
        <Button onClick={handleSubmit(onSubmit)}>{t('data.utility.save')}</Button>
      </Box>
    </DefaultDrawer>
  );
};
export default TreeDrawer;