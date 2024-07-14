import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:8080/api/',
    timeout: 1000,
  });