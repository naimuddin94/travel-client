import { Navigate, useLocation } from "react-router-dom";
import useAuthInfo from "../hooks/useAuthInfo";
import { ReactNode } from "react";
import Loading from "../components/utility/Loading";

interface IPrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute = ({ children }: IPrivateRouteProps) => {
  const { user, loading } = useAuthInfo();
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loading />
      </div>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate to="/signin" state={location.pathname}></Navigate>;
};

export default PrivateRoute;
