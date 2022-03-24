import axios from "axios";

const envBaseUrl = "http://localhost:5000/api";

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
