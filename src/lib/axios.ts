import Axios, { AxiosRequestConfig } from "axios";

function authRequestInterceptor(config: AxiosRequestConfig) {
  config.headers = {
    Accept: "application/json",
    "api-key": "5ffa22d1-2d1a-4381-97f9-67939681ae5d",
  };
  return config;
}

export const axios = Axios.create();

axios.interceptors.request.use(authRequestInterceptor);
axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const message = error.response?.data?.message || error.message;

    window.alert(message);

    return Promise.reject(error);
  }
);
