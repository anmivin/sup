import { components } from '@api/Api';
import { axiosInstatnce } from '@api/axiosInstatnce';

export const createUser = (data: components['schemas']['InputUserDto']) =>
  axiosInstatnce.post<any>('/auth/signup', data).then((res) => res.data);
export const logInRequest = (data: components['schemas']['UserCredentials']): Promise<string> =>
  axiosInstatnce.post<any>('/auth/login', data).then((res) => res.data);
export const logInWithGoogleRequest = (data: components['schemas']['UserCredentials']) =>
  axiosInstatnce.post<any>('/auth/google', data).then((res) => res.data);
export const me = () => axiosInstatnce.get<any>('/auth/me').then((res) => res.data);
