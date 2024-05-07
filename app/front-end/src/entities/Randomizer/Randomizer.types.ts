import { components } from '@api/Api';

export interface RandomAspirationProps {
  aspirations: components['schemas']['OutputAspirations4Dto'][] | null;
}

export interface RandomSkillProps {
  aspirations: components['schemas']['OutputSkills4Dto'][] | null;
}

export interface RandomTraitProps {
  aspirations: components['schemas']['OutputTraits4Dto'][] | null;
}
