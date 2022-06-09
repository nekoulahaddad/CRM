import axios from "axios";

const envBaseUrl = "https://back.zumzak.ru/api";

export const apiCall = axios.create({
  withCredentials: true,
  baseURL: envBaseUrl,
});

apiCall.defaults.headers.post["Content-Type"] = "application/json";

apiCall.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  config.headers.Authorization = token ? token : "";
  return config;
});
