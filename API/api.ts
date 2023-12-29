import axios, { AxiosError, AxiosResponse } from "axios";

export const API = axios.create({
  baseURL: "http://192.168.100.118:3007",
});

API.interceptors.request.use(
  async (axiosConfig) => {
    console.log("Api Call", axiosConfig.url);
    44;

    return axiosConfig;
  },
  (error: AxiosError) => Promise.reject(error)
);

API.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  async (error) => {
    if (error?.response?.data?.error?.status?.code === 401) {
    }

    return Promise.reject({
      message: "Error occured",
      ...error?.response?.data,
    });
  }
);
