import axios from "axios";
import { signOut } from "firebase/auth";
import { useEffect } from "react";
import auth from "../firebase/firebase.config";
import { Navigate } from "react-router-dom";

export const axiosSecure = axios.create({
  baseURL: "https://travlog-server.vercel.app/api/v1",
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
          return signOut(auth).then(() => {
            <Navigate to="/signin" />;
          });
        }
      }
    );
  }, []);

  return axiosSecure;
};

export default useAxiosSecure;
