import { components } from '@api/Api';
import { axiosInstatnce } from '@api/axiosInstatnce';

export const fetchSimsForTree = (id: number) =>
  axiosInstatnce.get<components['schemas']['OutputTreeDto']>(`/tree/tree/${id}`).then((res) => res.data);
export const fetchSimsForUser = (id: number) =>
  axiosInstatnce.get<components['schemas']['OutputSimListDto']>(`/tree/${id}`).then((res) => res.data);

export const createSimRequest = (data: components['schemas']['InputSimDto']) => axiosInstatnce.post<any>('/tree', data);
export const createTreeRequest = (data: components['schemas']['InputTreeDto']) =>
  axiosInstatnce.post<any>('/tree/tree', data);

export const saveImageRequest = (data: components['schemas']['SaveFileDto']) =>
  axiosInstatnce.post<any>('/file/save', data).then((res) => res.data);

export const editImageRequest = (data: components['schemas']['EditFileDto']) =>
  axiosInstatnce.post<any>('/file/edit', data).then((res) => res.data);

export const deleteImageRequest = (data: components['schemas']['DeleteFileDto']) =>
  axiosInstatnce.post<any>('/file/delete', data).then((res) => res.data);
