import { components } from '@api/Api';

export interface RandomAspirationProps {
  aspirations: components['schemas']['OutputAspirationList4Dto'][] | null;
}

export interface RandomSkillProps {
  aspirations: components['schemas']['OutputSkillList4Dto'][] | null;
}

export interface RandomTraitProps {
  aspirations: components['schemas']['OutputTraitList4Dto'][] | null;
}
