import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://foodhub-iit-mandi.onrender.com",
  withCredentials: true // Always send cookies for cross-origin requests
});

export default axiosInstance;