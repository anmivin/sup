import { useCallback, useMemo, useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, Select, Tab, Typography } from '@mui/material';

import DefaultDrawer from '@components/DefaultDrawer';
import DefaultTabs from '@components/DefaultTabs';
import FormAutocomplete from '@components/Form/FormAutocomplete';
import FormCheckbox from '@components/Form/FormCheckbox';
import DefaultFormFooter from '@components/Form/FormFooter';
import FormTextField from '@components/Form/FormTextField';
import DefaultFormContainer from '@components/FormContainer';

import { TreeStore } from '@stores/Handbook/Handbook.store';

import { SIMS_DRAWER_TABS, SIMS_DRAWER_TABS_VARIATIONS } from './CreateSimDrawer.types';
import { CreateSimDrawerProps, CreateSimForm, SimDrawerSchema } from './CreateSimDrawer.types';

const CreateSimDrawer = ({ onCloseModal, simsInTree, defaultValues }: CreateSimDrawerProps) => {
  const [selectedTab, setSelectedTab] = useState<SIMS_DRAWER_TABS_VARIATIONS>(SIMS_DRAWER_TABS_VARIATIONS.PersonalData);
  const { t } = useTranslation(['aspirations', 'skills', 'traits', 'treeRelated']);
  const { aspirations, skills, traits } = TreeStore();

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
      userId: 1,
      name: formdata.name,
      image: formdata.image,
      treeId: 1,
      part: '',
      parentFirstId: formdata.parentFirstId,
      parentSecondId: formdata.parentSecondId,
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
    return simsInTree.map(({ id }) => id) ?? [];
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
    <DefaultDrawer onClose={onCloseModal} label="CReata a sim">
      <DefaultFormContainer formMethods={formMethods} onSubmit={onSubmit}>
        <DefaultTabs value={selectedTab} onChange={(_e, value) => setSelectedTab(value as SIMS_DRAWER_TABS_VARIATIONS)}>
          {SIMS_DRAWER_TABS.map((tab) => (
            <Tab key={tab.value} label={tab.label} value={tab.value} />
          ))}
        </DefaultTabs>
        {selectedTab === SIMS_DRAWER_TABS_VARIATIONS.PersonalData && (
          <>
            <FormTextField name="name" label="Имя" />
            <FormTextField name="image" label="Картинка" />
            <FormTextField name="part" label="Часть" />
            <FormTextField name="birthYear" label="Родился" />
            <FormTextField name="deathYear" label="Помер" />
            <FormAutocomplete
              name="parentFirstId"
              inputProps={{
                label: 'Первый родитель',
              }}
              options={simsIds}
              getOptionLabel={(option) => simsInTree.find(({ id }) => id === option)?.name ?? ''}
            />
            <FormAutocomplete
              name="parentSecondId"
              inputProps={{
                label: 'Второй родитель',
              }}
              options={simsIds}
              getOptionLabel={(option) => simsInTree.find(({ id }) => id === option)?.name ?? ''}
            />

            {partnersFields.map((field, index) => (
              <Box key={field.id}>
                <FormAutocomplete
                  name={`partners.${index}.id`}
                  multiple
                  inputProps={{ label: 'Партнеры' }}
                  options={simsIds}
                  getOptionLabel={(option) => simsInTree.find(({ id }) => id === option)?.name ?? ''}
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
                    label: 'Жизненные цели',
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
              inputProps={{ label: 'Черты характера' }}
              options={traitsIds}
              getOptionLabel={(option) => getLabel(option, 'traits') as string}
            />
            {skillFields.map((field, index) => (
              <Box key={field.id}>
                <FormAutocomplete
                  name={`skills.${index}.localName`}
                  inputProps={{
                    label: 'Навыки',
                  }}
                  options={skillsIds}
                  getOptionLabel={(option) => getLabel(option, 'skills')}
                />

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
