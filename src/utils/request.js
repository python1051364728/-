import store from "@/store";
import axios from "axios";

const request = axios.create({
  baseURL: "http://liufusong.top:8080",
  timeout: 100000,
});

// 请求拦截器
request.interceptors.request.use(
  (config) => {
    const token = store.state?.user?.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default request;
