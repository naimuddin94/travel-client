import axios from "axios";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import useAuthInfo from "./useAuthInfo";
import { FirebaseError } from "firebase/app";

export const axiosSecure = axios.create({
  baseURL: "http://localhost:5000/api/v1",
  withCredentials: true,
});

const useAxiosSecure = () => {

  const { logOut } = useAuthInfo;
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        console.log("error tracked in the interceptor", error.response);
        if (error.response.status === 401 || error.response.status === 403) {
          logOut()
            .then(() => {
              <Navigate to="/signin" />;
            })
            .catch((error: FirebaseError) => console.log(error));
        }
      }
    );
  }, [logOut]);

  return axiosSecure;
};

export default useAxiosSecure;
