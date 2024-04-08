import axios, { AxiosInstance } from 'axios';

export const BACKEND_URL = `${import.meta.env.VITE_BACKEND_URL}/api/v1`;

const axiosInstance: AxiosInstance = axios.create({
  baseURL: BACKEND_URL,
});

axiosInstance.interceptors.request.use((config) => {
  const userDetails = localStorage.getItem('user');

  if (userDetails) {
    const token = JSON.parse(userDetails).token;
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default axiosInstance;
