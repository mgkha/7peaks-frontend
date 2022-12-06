import { GUARDIAN_API_KEY, GUARDIAN_API_URL, USE_LOCAL_PROXY } from "@/config";
import Axios, { AxiosRequestConfig } from "axios";

function authRequestInterceptor(config: AxiosRequestConfig) {
  config.headers = {
    Accept: "application/json",
  };
  config.params["api-key"] = GUARDIAN_API_KEY;
  return config;
}

export const axios = Axios.create({
  baseURL: USE_LOCAL_PROXY === true ? "/" : GUARDIAN_API_URL,
});

axios.interceptors.request.use(authRequestInterceptor);
// axios.interceptors.response.use(
//   (response) => {
//     return response.data;
//   },
//   (error) => {
//     const message = error.response?.data?.message || error.message;

//     window.alert(message);

//     return Promise.reject(error);
//   }
// );
