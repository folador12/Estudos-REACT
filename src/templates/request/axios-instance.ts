import axios, { AxiosInstance } from "axios";

const createAxiosInstance = (baseURL: string): AxiosInstance => {
  return axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export default createAxiosInstance;
