//axios configs
import axios from "axios";

import { getCookie, setCookie } from "@/utils/cookie";
import { getNewTokens } from "@/services/token";

//api
const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

//request to server
api.interceptors.request.use(
  (request) => {
    const token = getCookie("accessToken");
    if (token) {
      request.headers["Authorization"] = `bearer ${token}`;
    }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//response the server
api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const newRes = await getNewTokens();

      if (!newRes?.response) return;
      setCookie(newRes.response.data);
      return api(originalRequest);
    }
  }
);

export default api;
