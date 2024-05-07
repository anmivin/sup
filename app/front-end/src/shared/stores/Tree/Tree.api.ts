import { components } from '@api/Api';
import { axiosInstatnce } from '@api/axiosInstatnce';

export const fetchSimsForTree = (id: number) =>
  axiosInstatnce.get<components['schemas']['OutputTreeDto']>(`/sims/tree/${id}`).then((res) => res.data);
/* export const fetchSimsForUser = (id: number) =>
  axiosInstatnce.get<components['schemas']['OutputAspirations4Dto']>(`/sims/${id}`).then((res) => res.data);
export const createSimRequest = (data: CreateSimsProps) => axiosInstatnce.post<any>('/sims', data);
export const createTreeRequest = (data: CreateTreeProps) => axiosInstatnce.post<any>('/sims/tree', data);
 */
