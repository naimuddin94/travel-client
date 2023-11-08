import axios from "axios";
import { useEffect } from "react";

export const axiosSecure = axios.create({
  baseURL: "https://travlog-server-gebda1w0r-naimuddin94.vercel.app/api/v1",
  withCredentials: true,
});

const useAxiosSecure = () => {
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        console.log("error tracked in the interceptor", error.response);
        if (error.response.status === 401 || error.response.status === 403) {
          console.log("logout user");
        }
      }
    );
  }, []);

  return axiosSecure;
};

export default useAxiosSecure;
