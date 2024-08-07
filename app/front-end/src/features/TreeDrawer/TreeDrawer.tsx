import { useCallback, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, TextField } from '@mui/material';

import { ImageDrop, ImageList, ImageUpload } from '@entities/ImageUploader';
import { ImageItem } from '@entities/ImageUploader/ImageUploader.types';

import { DRAWER_VARIANTS } from '@type/enums';

import { ProfileStore } from '@stores/Profile/Profile.store';
import { TreeStore } from '@stores/Tree/Tree.store';

import DefaultDrawer from '@ui/Drawer';
import DefaultTextField from '@ui/Textfield';

import { CreateTreeDrawerProps, CreateTreeForm, TreeDrawerSchema } from './TreeDrawer.types';

const TreeDrawer = ({ onCloseModal, type }: CreateTreeDrawerProps) => {
  const { t } = useTranslation();
  const { createTree } = TreeStore();
  const { userId } = ProfileStore();
  const formMethods = useForm<CreateTreeForm>({
    resolver: zodResolver(TreeDrawerSchema),
  });

  const {
    handleSubmit,
    formState: { errors },
    control,
    watch,
  } = formMethods;

  useEffect(() => {
    console.log(errors);
  }, [errors]);
  const onSubmit = useCallback(async (formdata: CreateTreeForm) => {
    console.log('asdad');
    if (!userId) return;
    const data = {
      userId: userId,
      name: formdata.name,
      imageId: null,
    };

    try {
      await createTree(data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <DefaultDrawer
      onClose={onCloseModal}
      label={`${t(type === DRAWER_VARIANTS.Create ? 'data.utility.create' : 'data.utility.edit')} древо`}
    >
      <Controller control={control} name="name" render={({ field }) => <TextField {...field} label="Имя" />} />

      <DefaultTextField name="image" label="Картинка" />
      <Box>
        <Button onClick={handleSubmit(onSubmit)}>{t('data.utility.save')}</Button>
      </Box>
    </DefaultDrawer>
  );
};
export default TreeDrawer;
