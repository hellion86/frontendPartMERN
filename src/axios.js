import axios from "axios";

const instance = axios.create({
  baseURL: process.env.BACKEND_API,
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = window.localStorage.getItem("token");
  return config;
});

export default instance;
