import { useCallback, useMemo, useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button } from '@mui/material';

import FormAutocomplete from '@entities/FormComponents/FormAutocomplete';
import FormCheckbox from '@entities/FormComponents/FormCheckbox';
import FormTextField from '@entities/FormComponents/FormTextField';

import { DRAWER_VARIANTS, GAME_PART, SEX } from '@type/enums';

import { HandbookStore } from '@stores/Handbook/Handbook.store';
import { ProfileStore } from '@stores/Profile/Profile.store';

import DefaultDrawer from '@ui/Drawer';
import { ImageUpload } from '@ui/ImageUploader';
import DefaultRating from '@ui/Rating';
import DefaultTabs from '@ui/Tabs';

import { SIMS_DRAWER_TABS } from './CreateSimDrawer.types';
import { CreateSimDrawerProps, CreateSimForm, SimDrawerSchema } from './CreateSimDrawer.types';

const CreateSimDrawer = ({ onCloseModal, simsInTree, defaultValues, type }: CreateSimDrawerProps) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const { t } = useTranslation(['translation', 'aspirations', 'skills', 'traits', 'misc', 'tree']);
  const { aspirations, skills, traits } = HandbookStore();
  const { userId } = ProfileStore();
  const formMethods = useForm<CreateSimForm>({
    resolver: zodResolver(SimDrawerSchema),
    defaultValues: defaultValues,
  });

  const {
    handleSubmit,
    formState: { errors },
    control,
    watch,
    getValues,
  } = formMethods;

  const formVals = watch();
  const {
    fields: aspirationFields,
    append: aspirationAppend,
    remove: aspirationRemove,
    update: aspirationUpdate,
  } = useFieldArray({ control, name: 'aspirations' });

  const { fields: skillFields, append: skillAppend, remove: skillRemove } = useFieldArray({ control, name: 'skills' });

  const {
    fields: partnersFields,
    append: partnersAppend,
    remove: partnersRemove,
  } = useFieldArray({ control, name: 'partners' });

  const onSubmit = useCallback(async (formdata: CreateSimForm) => {
    const data = {
      userId: userId,
      name: formdata.name,
      image: formdata.image,
      treeId: 1,
      part: '',
      parentFirstId: formdata.parentFirst?.id,
      parentSecondId: formdata.parentSecond?.id,
      partnersIds: formdata.partners ?? [],
      aspirations: {} as JSON,
      traits: [],
      careers: {} as JSON,
      collections: {} as JSON,
      skills: {} as JSON,
    };
    try {
      /* await createSim(data); */
    } catch (err) {
      console.log(err);
    }
  }, []);

  const simsIds = useMemo(() => {
    return (
      simsInTree.map(({ id, name }) => ({
        id: id,
        name: name,
      })) ?? []
    );
  }, [simsInTree]);

  const aspirationsIds = useMemo(() => {
    return (aspirations ?? []).map(({ key }) => key);
  }, [aspirations]);

  const traitsIds = useMemo(() => {
    return (traits ?? []).map(({ key }) => key);
  }, [traits]);

  const skillsIds = useMemo(() => {
    return (skills ?? []).map(({ key }) => key);
  }, [skills]);

  const getLabel = useCallback((key: string, optionType: 'aspirations' | 'traits' | 'skills') => {
    return t(`data.${key}.name`, { ns: optionType });
  }, []);

  return (
    <DefaultDrawer
      onClose={onCloseModal}
      label={`${t(type === DRAWER_VARIANTS.Create ? 'data.utility.create' : 'data.utility.edit')} ${t('data.misc.sim')}`}
    >
      <DefaultTabs tabs={SIMS_DRAWER_TABS} value={selectedTab} onChange={(value) => setSelectedTab(value)} />
      {selectedTab === 0 && (
        <>
          <Box display="flex" gap={2}>
            <ImageUpload onImageAdd={() => {}} value={null} />
            <Box display="flex" flexDirection="column" gap={2} flexGrow={1}>
              <FormTextField name="name" label={t('data.name', { ns: 'tree' })} />
              <FormAutocomplete
                name="sex"
                inputProps={{
                  label: 'Пол',
                }}
                options={Object.keys(SEX)}
                getOptionLabel={(option) => t(`data.misc.${option as 'male' | 'female'}`, { ns: 'translation' })}
              />
            </Box>
          </Box>

          <FormAutocomplete
            name="part"
            inputProps={{
              label: t('data.part', { ns: 'tree' }),
            }}
            options={Object.keys(GAME_PART)}
            /*  getOptionLabel={(option) => t(`data.${option}`, { ns: 'tree' })} */
          />
          <FormAutocomplete
            name="parentFirstId"
            inputProps={{
              label: t('data.parents', { ns: 'tree' }),
            }}
            options={simsIds}
            getOptionLabel={(option) => option.name ?? ''}
          />
          <FormAutocomplete
            name="parentSecondId"
            inputProps={{
              label: t('data.parents', { ns: 'tree' }),
            }}
            options={simsIds}
            getOptionLabel={(option) => option.name ?? ''}
          />

          {partnersFields.map((field, index) => (
            <Box key={field.id}>
              <FormAutocomplete
                name={`partners.${index}.id`}
                multiple
                inputProps={{ label: t('data.partners', { ns: 'tree' }) }}
                options={simsIds}
                getOptionLabel={(option) => option.name ?? ''}
              />
            </Box>
          ))}
          <Button onClick={() => partnersAppend({ id: undefined, type: undefined })}>добавить партнера</Button>
        </>
      )}
      {selectedTab === 1 && (
        <>
          {aspirationFields.map((field, index) => (
            <Box key={field.id}>
              <FormAutocomplete
                name={`aspirations.${index}.localName`}
                inputProps={{
                  label: t('data.aspirations', { ns: 'tree' }),
                }}
                options={aspirationsIds}
                getOptionLabel={(option) => getLabel(option, 'aspirations')}
                /*  onChangeValue={(val) => aspirationUpdate(index, { localName: val ?? undefined, completed: false })} */
              />

              <FormCheckbox name={`aspirations.${index}.completed`} label="" />
            </Box>
          ))}
          <Button onClick={() => aspirationAppend({ localName: undefined, completed: false })}>добавить</Button>
          <FormAutocomplete
            name="traits"
            multiple
            inputProps={{ label: t('data.traits', { ns: 'tree' }) }}
            options={traitsIds}
            getOptionLabel={(option) => getLabel(option, 'traits') as string}
          />
          {skillFields.map((field, index) => (
            <Box key={field.id}>
              <FormAutocomplete
                name={`skills.${index}.localName`}
                inputProps={{
                  label: t('data.skills', { ns: 'tree' }),
                }}
                options={skillsIds}
                getOptionLabel={(option) => getLabel(option, 'skills')}
              />
              <DefaultRating />
              <FormTextField type="number" name={`skills.${index}.level`} sx={{ width: '60px' }} />
            </Box>
          ))}
          <Button onClick={() => skillAppend({ localName: undefined, level: 0 })}>добавить</Button>
        </>
      )}

      <Box>
        <Button onClick={handleSubmit(onSubmit)}>{t('data.utility.save')}</Button>
      </Box>
    </DefaultDrawer>
  );
};
export default CreateSimDrawer;
