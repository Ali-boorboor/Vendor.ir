import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "http://192.168.1.48:3000/auth",
});

export default AxiosInstance;
