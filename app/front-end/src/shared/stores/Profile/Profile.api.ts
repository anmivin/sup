import { components } from '@api/Api';
import { axiosInstatnce } from '@api/axiosInstatnce';

export const createUser = (data: components['schemas']['InputUserDto']) => axiosInstatnce.post<any>('/users', data);
export const logInRequest = (data: components['schemas']['UserCredentials']) =>
  axiosInstatnce.post<any>('/users/login', data).then((res) => res.data);
export const logInWithGoogleRequest = (data: components['schemas']['UserGoogleCredentials']) =>
  axiosInstatnce.post<any>('/auth/google', data).then((res) => res.data);
