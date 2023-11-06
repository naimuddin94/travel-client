import { Link, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import { FormEvent, useState } from "react";
import useAuthInfo from "../hooks/useAuthInfo";
import ErrorAlert from "../components/utility/ErrorAlert";
import Input from "../components/utility/Input";
import Checkbox from "../components/utility/Checkbox";
import SocialLoginBtn from "../components/utility/SocialLoginBtn";

const Signup = () => {
  const [error, setError] = useState<string | null>(null);
  const { createUser, loading, setLoading } = useAuthInfo();
  const navigate = useNavigate();

  const handleRegister = (event: FormEvent) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const photo = event.target.photo.value;

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
      .then((result) => {
        event.target.reset();
        navigate("/");
        setError(null);
        toast.success("Account created successfully");
        // update profile
        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => console.log("User name update successfully"))
          .catch((err) => toast.error("During update profile", err.message));
      })
      .catch((err) => {
        setLoading(false);
        const errorCode = err.code;
        const errMessage = errorCode.replace("auth/", "");
        setError(errMessage);
      });
  };

  return (
    <section className="signin-background">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto">
        <div
          data-aos="flip-left"
          className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 backdrop-blur-lg border-gray-700"
        >
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-2xl text-center font-bold leading-tight tracking-tight md:text-4xl text-white">
              Register
            </h1>
            {error && <ErrorAlert>{error}</ErrorAlert>}
            <form onSubmit={handleRegister} className="space-y-4 md:space-y-6">
              <Input type="text" name="name" placeholder="Enter your name">
                Full Name
              </Input>
              <Input
                type="text"
                name="photo"
                placeholder="Enter your photo url"
              >
                Photo URL
              </Input>
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
      </div>
    </section>
  );
};

export default Signup;
