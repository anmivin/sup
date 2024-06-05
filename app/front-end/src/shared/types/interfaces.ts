import { ACHIEVEMENTS_FOUR } from '@front/consts/enums/achievements';
import { ASPIRATIONS_FOUR, ASPIRATIONS_GROUPS_FOUR } from '@front/consts/enums/aspirations';
import { CAREERS } from '@front/consts/enums/careers';
import { COLLECTIONS } from '@front/consts/enums/collections';
import { SKILLS } from '@front/consts/enums/skills';
import { TRAITS_GROUPS, TRAITS } from '@front/consts/enums/traits';
export interface AchievementsProps_Four {
  name: ACHIEVEMENTS_FOUR;
  icon: string;
  description: string;
  difficulty: string;
}

export interface AspirationsProps_Four {
  id: number;
  localName: ASPIRATIONS_FOUR;
  icon: string;
  description: string;
  group: ASPIRATIONS_GROUPS_FOUR;
  bonus: string;
  steps: StepsProps[];
}

export interface CareersProps_Four {
  name: CAREERS;
  icon: string;
  roots: string[];
  baseSteps: JSON;
  rootSteps: JSON;
}

export interface CollectionsProps_Four {
  name: COLLECTIONS;
  description: string;
  count: number;
  items: CollectionItemsProps_Four[];
}

export interface CollectionItemsProps_Four {
  name: string;
  icon: string;
  description: string;
  rarity: string;
}

export interface DeathsProps_Four {
  name: string;
  description: string;
  pack: PacksProps;
}

export interface FearsProps_Four {
  name: string;
  icon: string;
  cause: string;
  fix: string;
}

export interface SkillsProps_Four {
  id: number;
  localName: SKILLS;
  icon: string;
  steps: string;
}

export interface TownsProps_Four {
  name: string;
  icon: string;
  description: string;
  more: string;
}

export interface TraitsProps_Four {
  id: number;
  localName: TRAITS;
  icon: string;
  description: string;
  group: TRAITS_GROUPS;
}

export interface SimsProps {
  id: number;
  userId: number;
  name: string;
  image: string;
  treeId: number;
  part: string;
  birthYear?: number;
  deathYear?: number;
  parentFirstId?: number | null;
  parentSecondId?: number | null;
  partnersIds: number[];
  aspirations: JSON;
  traits: number[];
  careers: JSON;
  collections: JSON;
  skills: JSON;
}

export interface CreateSimsProps {
  userId: number;
  name: string;
  image: string;
  treeId: number;
  part: string;
  birthYear?: number;
  deathYear?: number;
  parentFirstId?: number | null;
  parentSecondId?: number | null;
  partnersIds: number[];
  aspirations: JSON;
  traits: number[];
  careers: JSON;
  collections: JSON;
  skills: JSON;
}

export interface CreateTreeProps {
  userId: number;
  name: string;
  image: string;
}

export interface TreesProps {
  name: string;
  image: string;
  sims: SimsProps[];
}

export interface CreateUserProps {
  name: string;
  password: string;
  email?: string;
  avatar?: string;
}

export interface UsersProps {
  name: string;
  password: string;
  packsIds?: number[];
  achievements?: number[];
}

export interface PacksProps {
  name: string;
  icon: string;
  part: string;
}

export interface StepsProps {
  label: string;
  tasks: string[];
}
