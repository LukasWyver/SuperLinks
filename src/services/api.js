import axios from "axios";

export const key = "70b2d002e663bcadfb3f2bd23f1651e96cbd341a";

const api = axios.create({
  baseURL: "https://api-ssl.bitly.com/v4/",
  headers: {
    Authorization: `Bearer ${key}`,
  },
});

export default api;
