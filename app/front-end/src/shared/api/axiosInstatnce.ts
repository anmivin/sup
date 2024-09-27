import axios from 'axios';

const baseUrl = import.meta.env.VITE_BASE_URL;
export const axiosInstatnce = axios.create({
  baseURL: baseUrl,
  withCredentials: true,
});

axiosInstatnce.interceptors.request.use((value) => {
  //cookie
  /*   const { token } = ProfileStore();
  if (value.headers && token) {
    value.headers.Access = `Bearer ${token}`;
  } */
  return value;
});
