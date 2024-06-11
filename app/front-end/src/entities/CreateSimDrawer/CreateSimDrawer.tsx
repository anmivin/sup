import { useCallback, useMemo, useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, Tab } from '@mui/material';

import FormAutocomplete from '@components/Form/FormAutocomplete';
import FormCheckbox from '@components/Form/FormCheckbox';
import DefaultFormFooter from '@components/Form/FormFooter';
import FormTextField from '@components/Form/FormTextField';
import DefaultFormContainer from '@components/FormContainer';

import { DRAWER_VARIANTS, GAME_PART, SEX } from '@type/enums';

import { HandbookStore } from '@stores/Handbook/Handbook.store';
import { ProfileStore } from '@stores/Profile/Profile.store';

import DefaultDrawer from '@ui/DefaultDrawer';
import DefaultRating from '@ui/DefaultRating';
import DefaultTabs from '@ui/DefaultTabs';
import { ImageUpload } from '@ui/ImageUploader';

import { SIMS_DRAWER_TABS, SIMS_DRAWER_TABS_VARIATIONS } from './CreateSimDrawer.types';
import { CreateSimDrawerProps, CreateSimForm, SimDrawerSchema } from './CreateSimDrawer.types';

const CreateSimDrawer = ({ onCloseModal, simsInTree, defaultValues, type }: CreateSimDrawerProps) => {
  const [selectedTab, setSelectedTab] = useState<SIMS_DRAWER_TABS_VARIATIONS>(SIMS_DRAWER_TABS_VARIATIONS.MainInfo);
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
      <DefaultFormContainer formMethods={formMethods} onSubmit={onSubmit}>
        <DefaultTabs value={selectedTab} onChange={(_e, value) => setSelectedTab(value as SIMS_DRAWER_TABS_VARIATIONS)}>
          {SIMS_DRAWER_TABS.map((tab) => (
            <Tab key={tab.value} label={tab.label} value={tab.value} />
          ))}
        </DefaultTabs>
        {selectedTab === SIMS_DRAWER_TABS_VARIATIONS.MainInfo && (
          <>
            <Box display="flex" gap={2}>
              <ImageUpload onImageAdd={() => {}} />
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
        {selectedTab === SIMS_DRAWER_TABS_VARIATIONS.Qualities && (
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

        <DefaultFormFooter onSubmit={handleSubmit(onSubmit)} />
      </DefaultFormContainer>
    </DefaultDrawer>
  );
};
export default CreateSimDrawer;
