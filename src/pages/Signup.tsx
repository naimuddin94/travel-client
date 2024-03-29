import { Link, useNavigate } from "react-router-dom";
import { UserCredential, updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import { FormEvent, useState } from "react";
import useAuthInfo from "../hooks/useAuthInfo";
import ErrorAlert from "../components/utility/ErrorAlert";
import Input from "../components/utility/Input";
import Checkbox from "../components/utility/Checkbox";
import SocialLoginBtn from "../components/utility/SocialLoginBtn";
import { FirebaseError } from "firebase/app";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import animationData from "../assets/animation/login.json";
import imageUpload from "../api/imageUpload";
const Signup = () => {
  const [error, setError] = useState<string | null>(null);
  const { createUser, loading, setLoading, setName, setPhoto } = useAuthInfo();
  const navigate = useNavigate();

  const handleRegister = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const name = form.username.value;
    const email = form.email.value;
    const password = form.password.value;
    // const photo = form.photo.value;
    const photo = form.photo.files[0];
    const size = photo.size;
    if (size > 300000) {
      return setError("Image size must be smaller than 500kb");
    }

    const imageURL = await imageUpload(photo);

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const hasUppercase = /[A-Z]/.test(password);
    const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (!emailRegex.test(email)) {
      return setError("Email not valid");
    }

    if (password.length < 6) {
      return setError("Password less than 6 characters");
    }

    if (!hasUppercase) {
      return setError("Password don't have a capital letter");
    }

    if (!hasSpecialCharacter) {
      return setError("Password don't have a special character");
    }

    createUser(email, password)
      .then((result: UserCredential) => {
        setError(null);
        toast.success("Account created successfully");
        // update profile
        setName(name);
        setPhoto(imageURL);
        updateProfile(result.user, {
          displayName: name,
          photoURL: imageURL,
        })
          .then(() => {
            console.log("User name update successfully");
            form.reset();
            navigate("/");
          })
          .catch((err) => toast.error("During update profile", err.message));
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
        <Lottie animationData={animationData}></Lottie>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5, y: 200 }}
        whileInView={{ y: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center px-6 py-8 mx-auto relative"
      >
        <div className="absolute left-[64%] -top-0">
          <img src="/assets/Ellipse14.png" alt="" />
        </div>
        <div
          data-aos="flip-left"
          className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 backdrop-blur-lg border-gray-700"
        >
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-2xl text-center font-bold leading-tight tracking-tight md:text-4xl text-slate-400">
              Sign Up
            </h1>
            {error && <ErrorAlert>{error}</ErrorAlert>}
            <form onSubmit={handleRegister} className="space-y-4 md:space-y-6">
              <Input type="text" name="username" placeholder="Enter your name">
                Full Name
              </Input>
              <label>
                Photo
                <input
                  type="file"
                  accept="image"
                  name="photo"
                  className="file-input file-input-bordered file-input-secondary bg-pink-50 w-full"
                />
              </label>
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
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <Checkbox required />
                </div>
                <div className="ml-3 text-sm">
                  <label className="font-light text-gray-500 dark:text-gray-300">
                    I accept the{" "}
                    <a className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>
              <button type="submit" className="custom-btn w-full gradient">
                {loading ? (
                  <span className="loading loading-spinner text-error"></span>
                ) : (
                  "Signup"
                )}
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <Link
                  to="/signin"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Signin here
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

export default Signup;
