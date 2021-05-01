import axios from "axios";

axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem("auth-token");
  if (token) config.headers["auth-token"] = token;
  return config;
});

export const GET = (url, data) => {
  return axios.get(url, data);
};

export const POST = (url, data) => {
  return axios.post(url, data);
};
