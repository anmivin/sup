import axios from 'axios';

import { ProfileStore } from '@stores/Profile/Profile.store';

const baseUrl = import.meta.env.VITE_BASE_URL;
export const axiosInstatnce = axios.create({
  baseURL: baseUrl,
  withCredentials: true,
});

/* axiosInstatnce.interceptors.request.use((value) => {
  //cookie
  const token = ProfileStore.getState().token;
  console.log('token', token);
  if (value.headers && token) {
    value.headers.authorization = `Bearer ${token}`;
  }
  return value;
});

axios.interceptors.response.use(
  (res) => res,
  async (err) => {
    console.log('asd');
    const originalConfig = err.config;
    const refreshTokens = ProfileStore.getState().refreshTokens;

    if (!axios.isAxiosError(err)) throw err;
    if (err.response?.status === 401 && !originalConfig._isOriginalRequest) {
      if (
        ['/api/auth/refresh', '/api/auth/login', '/api/auth/signup', '/api/auth/google-login'].includes(
          originalConfig.url,
        )
      )
        throw err;
      originalConfig._isOriginalRequest = true;
      const refreshTokensSuccess = await refreshTokens();
      if (!refreshTokensSuccess) throw err;
      originalConfig.headers.Authorization = `Bearer ${refreshTokensSuccess}`;
      return axios(originalConfig);
    }
    throw err;
  },
); */
