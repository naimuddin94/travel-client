import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useAuthInfo = () => {
  return useContext(AuthContext);
};

export default useAuthInfo;
