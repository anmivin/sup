import { components } from '@api/Api';
import { axiosInstatnce } from '@api/axiosInstatnce';

export const fetchWorlds = (part: string) =>
  axiosInstatnce.get<components['schemas']['OutputWorldDto'][]>(`/worlds/${part}`).then((res) => res.data);
export const fetchWorldMap = (key: string) =>
  axiosInstatnce.get<components['schemas']['OutputWorldMapDto']>(`/worlds/map/${key}`).then((res) => res.data);
