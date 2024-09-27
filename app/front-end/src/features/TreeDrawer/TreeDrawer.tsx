import { useCallback, useMemo, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, TextField } from '@mui/material';
import { useStore } from 'zustand';

import { ImageUpload } from '@entities/ImageUploader';

import { DRAWER_VARIANTS } from '@type/enums';
import { PUBLIC_BUCKET_NAMES } from '@type/enums';

import { ProfileStore } from '@stores/Profile/Profile.store';
import { TreeStore } from '@stores/Tree/Tree.store';

import DefaultDrawer from '@ui/Drawer';

import { CreateTreeDrawerProps, CreateTreeForm, TreeDrawerSchema } from './TreeDrawer.types';

const TreeDrawer = ({ onCloseModal, type }: CreateTreeDrawerProps) => {
  const { t } = useTranslation();
  const { createTree, currentTree, saveImage } = useStore(TreeStore);
  const { userId } = ProfileStore();
  const defaultValues = useMemo(() => {
    return currentTree ? { name: currentTree.name } : { name: undefined };
  }, [currentTree]);
  const formMethods = useForm<CreateTreeForm>({
    resolver: zodResolver(TreeDrawerSchema),
    defaultValues: defaultValues,
  });

  const {
    handleSubmit,
    formState: { errors },
    control,
    watch,
    setValue,
  } = formMethods;

  const onSubmit = useCallback(async (formdata: CreateTreeForm) => {
    if (!userId) return;
    console.log(formdata);
    const data = {
      userId: userId,
      name: formdata.name,
      imageId: formdata.imageId ?? null,
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
      label={`${t(type === DRAWER_VARIANTS.Create ? 'data.utility.create' : 'data.utility.edit')} ${t('data.misc.tree')}`}
    >
      <Box display="flex" gap={2}>
        <ImageUpload onImageAdd={saveImage} value={null} type={PUBLIC_BUCKET_NAMES.TreeImage} />
        <Controller control={control} name="name" render={({ field }) => <TextField {...field} label="Имя" />} />
      </Box>

      <Box>
        <Button onClick={handleSubmit(onSubmit)}>{t('data.utility.save')}</Button>
      </Box>
    </DefaultDrawer>
  );
};
export default TreeDrawer;
