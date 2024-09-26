import axios from 'axios';

import { ProfileStore } from '@stores/Profile/Profile.store';

const baseUrl = import.meta.env.VITE_BASE_URL;
export const axiosInstatnce = axios.create({
  baseURL: baseUrl,
  /*   withCredentials: true, */
});

/* axiosInstatnce.interceptors.request.use((value) => {
  const { token } = ProfileStore();
  if (value.headers && token) {
    value.headers.Access = `Bearer ${token}`;
  }
  return value;
}); */
