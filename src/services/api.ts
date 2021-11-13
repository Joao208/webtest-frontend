import axios from "axios";
import "dotenv";
import { v4 as uuidv4 } from "uuid";

const transactionId = uuidv4();

const api = axios.create({
  baseURL: process.env.REACT_APP_SERVER,
});

api.interceptors.request.use(
  (config: any) => {
    const token = sessionStorage.getItem("token");
    if (token) {
      config.headers["request_id"] = transactionId;
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      // logout partner access if not have token
    }
    return config;
  },
  (error: string) => {
    Promise.reject(error);
  }
);

export default api;
