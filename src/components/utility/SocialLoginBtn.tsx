import { useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import useAuthInfo from "../../hooks/useAuthInfo";
import { FirebaseError } from "firebase/app";

const SocialLoginBtn = () => {
  const { signInWithGoogle } = useAuthInfo();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = () => {
    signInWithGoogle()
      .then(() => {
        navigate(location.state ? location.state : "/");
        toast.success("Login successfully");
      })
      .catch((err: FirebaseError) => {
        const errorCode = err.code;
        const errMessage = errorCode.replace("auth/", "");
        toast.error(errMessage);
      });
  };

  return (
    <div className="flex  gap-2">
      <button onClick={handleLogin} className="custom-btn">
        <FcGoogle />
        Google
      </button>
    </div>
  );
};

export default SocialLoginBtn;
