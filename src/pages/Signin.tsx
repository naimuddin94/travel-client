import { Link, useLocation, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import { useState, FormEvent } from "react";
import useAuthInfo from "../hooks/useAuthInfo";
import Input from "../components/utility/Input";
import Checkbox from "../components/utility/Checkbox";
import SocialLoginBtn from "../components/utility/SocialLoginBtn";
import ErrorAlert from "../components/utility/ErrorAlert";
import { FirebaseError } from "firebase/app";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import animationdata from "../assets/animation/login.json"

const Signin = () => {
  const [error, setError] = useState<string | null>(null);
  const { loginUser, loading, setLoading } = useAuthInfo();

  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
      .then(() => {
        navigate(location.state ? location.state : "/");
        toast.success("Login successfully");
        setError(null);
        form.reset();
      })
      .catch((err: FirebaseError) => {
        setLoading(false);
        const errorCode = err.code;
        const errMessage = errorCode.replace("auth/", "");
        setError(errMessage);
      });
  };

  return (
    <section className="relative py-16">
      <div className="absolute opacity-20 -z-50">
        <img src="/assets/Vector.png" alt="" />
      </div>
      <div className="absolute w-[70%] flex justify-center items-center opacity-30 -z-50">
        <Lottie animationData={animationdata}></Lottie>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5, y: 200 }}
        whileInView={{ y: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 relative"
      >
        <div className="absolute left-[64%] -top-0">
          <img src="/assets/Ellipse14.png" alt="" />
        </div>
        <div className="w-full backdrop-blur-xl rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-2xl font-bold leading-tight tracking-tight md:text-4xl text-slate-400 text-center">
              Sign In
            </h1>
            {error && <ErrorAlert>{error}</ErrorAlert>}
            <form onSubmit={handleLogin} className="space-y-4 md:space-y-6">
              <Input type="email" name="email" placeholder="Enter your email">
                Email
              </Input>
              <Input
                type="password"
                name="password"
                placeholder="Enter your password"
              >
                Password
              </Input>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <Checkbox required={false} />
                  </div>
                  <div className="ml-3 text-sm">
                    <label className="text-gray-500 dark:text-gray-300">
                      Remember me
                    </label>
                  </div>
                </div>
                <a className="text-sm font-medium text-slate-400 hover:underline">
                  Forgot password?
                </a>
              </div>
              <button type="submit" className="custom-btn w-full gradient">
                {loading ? (
                  <span className="loading loading-spinner text-error"></span>
                ) : (
                  "Sign In"
                )}
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <Link
                  to="/signup"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign up
                </Link>
              </p>
            </form>
            <SocialLoginBtn />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Signin;
