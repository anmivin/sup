import { components } from '@api/Api';
import { axiosInstatnce } from '@api/axiosInstatnce';

export const fetchAchievements = () =>
  axiosInstatnce
    .get<components['schemas']['OutputAchievementList4Dto'][]>('/handbook/achievements')
    .then((res) => res.data);
export const fetchAspirations = () =>
  axiosInstatnce
    .get<components['schemas']['OutputAspirationList4Dto'][]>('/handbook/aspirations')
    .then((res) => res.data);
export const fetchSkills = () =>
  axiosInstatnce.get<components['schemas']['OutputSkillList4Dto'][]>('/handbook/skills').then((res) => res.data);
export const fetchTraits = () =>
  axiosInstatnce.get<components['schemas']['OutputTraitList4Dto'][]>('/handbook/traits').then((res) => res.data);
