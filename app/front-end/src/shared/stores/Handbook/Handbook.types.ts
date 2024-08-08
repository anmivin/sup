import { components } from '@api/Api';

export interface HandbookStoreProps {
  aspirations: components['schemas']['OutputAspirationList4Dto'][] | null;
  getAspirations: () => void;
  skills: components['schemas']['OutputSkillList4Dto'][] | null;
  getSkills: () => void;
  traits: components['schemas']['OutputTraitList4Dto'][] | null;
  getTraits: () => void;
  deaths: null;
  getDeaths: () => void;
}
