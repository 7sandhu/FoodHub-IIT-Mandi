import axios from "axios";

const axiosInstance = axios.create(); // Create a new instance of axios

axiosInstance.defaults.baseURL = "https://your-backend.up.railway.app";

axiosInstance.defaults.withCredentials = true; // Allow cookies to be sent with requests

export default axiosInstance;