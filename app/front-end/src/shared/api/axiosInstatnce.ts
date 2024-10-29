import axios from 'axios';

const baseUrl = import.meta.env.VITE_BASE_URL;
export const axiosInstatnce = axios.create({
  baseURL: baseUrl,
  withCredentials: true,
});
