import axios from "axios";

const axiosInstance = axios.create(); // Create a new instance of axios

axiosInstance.defaults.baseURL = import.meta.env.VITE_BACKEND_URL || 'https://web-production-26189.up.railway.app'; // Set the base URL
axiosInstance.defaults.withCredentials = true; // Allow cookies to be sent with requests

// Performance optimizations
axiosInstance.defaults.timeout = 10000; // 10 second timeout
axiosInstance.defaults.headers.common['Accept'] = 'application/json';
axiosInstance.defaults.headers.common['Content-Type'] = 'application/json';

// Request interceptor for performance monitoring
axiosInstance.interceptors.request.use(
    (config) => {
        config.metadata = { startTime: new Date() };
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor for performance monitoring and error handling
axiosInstance.interceptors.response.use(
    (response) => {
        const endTime = new Date();
        const duration = endTime - response.config.metadata.startTime;
        
        // Log slow requests in development
        if (import.meta.env.DEV && duration > 3000) {
            console.warn(`Slow request detected: ${response.config.url} took ${duration}ms`);
        }
        
        return response;
    },
    (error) => {
        // Handle network errors gracefully
        if (error.code === 'ECONNABORTED') {
            console.error('Request timeout - please check your internet connection');
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;