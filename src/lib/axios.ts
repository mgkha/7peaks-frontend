import {
  GUARDIAN_API_KEY,
  GUARDIAN_API_URL,
  REMOTE_PROXY_URL,
  USE_LOCAL_PROXY,
} from "@/config";
import Axios, { AxiosRequestConfig } from "axios";

function authRequestInterceptor(config: AxiosRequestConfig) {
  config.headers = {
    Accept: "application/json",
  };
  config.params["api-key"] = GUARDIAN_API_KEY;
  return config;
}

const baseUrl =
  process.env.REACT_APP_USE_HTTPS === "true"
    ? GUARDIAN_API_URL
    : REMOTE_PROXY_URL;

export const axios = Axios.create({
  baseURL: USE_LOCAL_PROXY === true ? "/" : baseUrl,
});

axios.interceptors.request.use(authRequestInterceptor);
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    const message = error.response?.data?.message || error.message;

    console.log(message);

    return Promise.reject(error);
  }
);
