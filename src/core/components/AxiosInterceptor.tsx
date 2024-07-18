// src/components/AxiosInterceptor.js
import axios from "axios";
import { useEffect } from "react";

const AxiosInterceptor = () => {
  useEffect(() => {
    // Request interceptor
    const requestInterceptor = axios.interceptors.request.use(
      (config) => {
        // You can Add jwt token here
        // config.headers.Authorization = `Bearer YOUR_TOKEN_HERE`;
        return config;
      },
      (error) => {
        // Handle request error
        return Promise.reject(error);
      }
    );

    // Response interceptor
    const responseInterceptor = axios.interceptors.response.use(
      (response) => {
        // Modify response data here
        return response;
      },
      (error) => {
        // Handle response error
        if (error.response && error.response.status === 401) {
          // Handle unauthorized error
          console.error("Unauthorized");
        }
        return Promise.reject(error);
      }
    );

    // Cleanup interceptors on component unmount
    return () => {
      axios.interceptors.request.eject(requestInterceptor);
      axios.interceptors.response.eject(responseInterceptor);
    };
  }, []);

  return null;
};

export default AxiosInterceptor;
