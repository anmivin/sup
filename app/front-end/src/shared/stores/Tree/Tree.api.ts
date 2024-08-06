import { AxiosRequestConfig } from 'axios';

import { components } from '@api/Api';
import { axiosInstatnce } from '@api/axiosInstatnce';

export const fetchTreesForUser = (id: string) =>
  axiosInstatnce.get<components['schemas']['OutputTreeListDto'][]>(`/dynasty/${id}`).then((res) => res.data);
export const fetchSimsForTree = (id: number) =>
  axiosInstatnce.get<components['schemas']['OutputTreeDto']>(`/tree/tree/${id}`).then((res) => res.data);
export const fetchSimsForUser = (id: number) =>
  axiosInstatnce.get<components['schemas']['OutputSimListDto']>(`/tree/${id}`).then((res) => res.data);

export const createSimRequest = (data: components['schemas']['InputSimDto']) => axiosInstatnce.post<any>('/tree', data);
export const createTreeRequest = (data: components['schemas']['InputTreeDto']) =>
  axiosInstatnce.post<any>('/dynasty/tree', data);

export const saveImageRequest = (data: components['schemas']['SaveFileDto']) =>
  axiosInstatnce.post<any>('/file/save', data).then((res) => res.data);

export const editImageRequest = (data: components['schemas']['EditFileDto']) =>
  axiosInstatnce.post<any>('/file/edit', data).then((res) => res.data);

export const deleteImageRequest = (data: components['schemas']['DeleteFileDto']) =>
  axiosInstatnce.post<any>('/file/delete', data).then((res) => res.data);

export const saveImageDebugRequest = (data: components['schemas']['Debug'], config?: AxiosRequestConfig) =>
  axiosInstatnce.post<any>('/file', data, config).then((res) => res.data);
