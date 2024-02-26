import axios, { AxiosInstance } from 'axios';

const API_BASE_URL = "/api"; // Next 사용중인 프로젝트

const createInstance = () => {
  const instance = axios.create({
    baseURL: API_BASE_URL,
    timeout: 2000,
  });

  return instance;
};

export const clientInstance = createInstance();