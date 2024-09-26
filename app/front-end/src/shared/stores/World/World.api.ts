import { components } from '@api/Api';
import { axiosInstatnce } from '@api/axiosInstatnce';

export const fetchWorlds = (part: string) =>
  axiosInstatnce.get<components['schemas']['OutputWorldDto'][]>(`/world/${part}`).then((res) => res.data);
export const fetchWorldMap = (key: string) =>
  axiosInstatnce.get<components['schemas']['OutputWorldMapDto']>(`/worlds/map/${key}`).then((res) => res.data);
export const saveBulding = (data: components['schemas']['InputBuildingDto'], key: string) =>
  axiosInstatnce.post<any>(`/world/building/${key}`, data).then((res) => res.data);
export const getBulding = (key: string) => axiosInstatnce.get<any>(`/world/building/${key}`).then((res) => res.data);
