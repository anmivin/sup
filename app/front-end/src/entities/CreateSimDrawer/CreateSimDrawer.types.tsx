import { ReactNode } from 'react';

import { ZodType, z } from 'zod';

import { components } from '@api/Api';

import { DRAWER_VARIANTS, LIFE_STAGE, LIFE_STATE, PARTNERSHIP, SEX } from '@type/enums';

import { HeartBrokenIcon, RingIcon, RingsCrossedIcon, RingsIcon, TwoHeartsIcon } from '@ui/Icons';

export interface CreateSimDrawerProps {
  simsInTree: components['schemas']['OutputSimListDto'][];
  type: DRAWER_VARIANTS;
  onCloseModal: () => void;
  defaultValues?: CreateSimForm;
}

export const PartnershipIcons: Record<PARTNERSHIP, ReactNode> = {
  [PARTNERSHIP.divorced]: <RingsCrossedIcon />,
  [PARTNERSHIP.engaged]: <RingIcon />,
  [PARTNERSHIP.exes]: <HeartBrokenIcon />,
  [PARTNERSHIP.married]: <RingsIcon />,
  [PARTNERSHIP.partners]: <TwoHeartsIcon />,
};
export interface OptionProps {
  localName: string;
}
export interface CreateSimForm {
  name: string;
  sex: SEX;
  lifestage: LIFE_STAGE;
  lifestate: LIFE_STATE;
  image: string;
  part: string;
  parentFirst?: { id: string; name: string };
  parentSecond?: { id: string; name: string };
  partners: { id?: string; name?: string; type?: PARTNERSHIP }[];
  aspirations: { localName?: string; completed: boolean }[];
  traits: string[];
  skills: { localName?: string; level: number }[];
  /*   careers: {careerId: number, level: string}[];*/
}

export const SimDrawerSchema: ZodType<CreateSimForm> = z.object({
  name: z.string(),
  sex: z.nativeEnum(SEX),
  lifestage: z.nativeEnum(LIFE_STAGE),
  lifestate: z.nativeEnum(LIFE_STATE),
  image: z.string(),
  part: z.string(),
  parentFirst: z.object({ id: z.string(), name: z.string() }).optional(),
  parentSecond: z.object({ id: z.string(), name: z.string() }).optional(),
  partners: z.array(z.object({ id: z.string(), name: z.string(), type: z.nativeEnum(PARTNERSHIP) })),
  aspirations: z.array(z.object({ localName: z.string(), completed: z.boolean() })),
  traits: z.array(z.string()),
  skills: z.array(z.object({ localName: z.string(), level: z.number() })),
});

export enum SIMS_DRAWER_TABS_VARIATIONS {
  MainInfo = 'maininfo',
  Qualities = 'qualities',
}

export enum SIMS_DRAWER_TABS_NAMES {
  MainInfo = 'Основные данные',
  Qualities = 'Качества',
}

export const SIMS_DRAWER_TABS: { value: SIMS_DRAWER_TABS_VARIATIONS; label: string }[] = [
  { value: SIMS_DRAWER_TABS_VARIATIONS.MainInfo, label: SIMS_DRAWER_TABS_NAMES.MainInfo },
  { value: SIMS_DRAWER_TABS_VARIATIONS.Qualities, label: SIMS_DRAWER_TABS_NAMES.Qualities },
];
