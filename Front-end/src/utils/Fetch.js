import axios from "axios";

export const GET = (url, data) => {
  return axios.get(url, data);
};

export const POST = (url, data) => {
  return axios.post(url, data);
};
