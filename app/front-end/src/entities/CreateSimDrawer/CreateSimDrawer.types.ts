import { ZodType, z } from 'zod';

export interface CreateSimDrawerProps {
  simsInTree: SimsProps[];
  type: 'edit' | 'create';
  onCloseModal: () => void;
  defaultValues?: CreateSimForm;
}

export enum partnershipType {
  divorced = 'divorced',
  engaged = 'engaged',
  exes = 'exes',
  married = 'married',
  partners = 'partners',
}
export interface OptionProps {
  localName: string;
}
export interface CreateSimForm {
  name: string;
  image: string;
  part: string;
  birthYear?: string;
  deathYear?: string;
  parentFirstId?: number | null;
  parentSecondId?: number | null;
  partners: { id?: string; type?: partnershipType }[];
  aspirations: { localName?: string; completed: boolean }[];

  traits: OptionProps[];
  /*   careers: {careerId: number, level: string}[];
    collections: {collectionId: number, }[]; */
  skills: { localName?: string; level: number }[];
}

export const SimDrawerSchema: ZodType<CreateSimForm> = z.object({
  name: z.string(),
  image: z.string(),
  part: z.string(),
  birthYear: z.string().optional(),
  deathYear: z.string().optional(),
  parentFirstId: z.number().optional(),
  parentSecondId: z.number().optional(),
  partners: z.array(z.object({ id: z.string(), type: z.nativeEnum(partnershipType) })),
  aspirations: z.array(z.object({ localName: z.string(), completed: z.boolean() })),
  traits: z.array(z.string()),
  skills: z.array(z.object({ localName: z.string(), level: z.number() })),
});

export enum SIMS_DRAWER_TABS_VARIATIONS {
  PersonalData = 'personalData',
  Qualities = 'qualities',
}

export enum SIMS_DRAWER_TABS_NAMES {
  PersonalData = 'Основные данные',
  Qualities = 'Качества',
}

export const SIMS_DRAWER_TABS: { value: SIMS_DRAWER_TABS_VARIATIONS; label: string }[] = [
  { value: SIMS_DRAWER_TABS_VARIATIONS.PersonalData, label: SIMS_DRAWER_TABS_NAMES.PersonalData },
  { value: SIMS_DRAWER_TABS_VARIATIONS.Qualities, label: SIMS_DRAWER_TABS_NAMES.Qualities },
];
