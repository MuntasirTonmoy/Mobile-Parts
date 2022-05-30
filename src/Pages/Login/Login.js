import React, { useEffect, useState, useTransition } from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Utilities/Loading";
import { FcGoogle } from "react-icons/fc";
import { BiLogIn } from "react-icons/bi";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import CustomLink from "../Utilities/CustomLink";
import { useLocation, useNavigate } from "react-router-dom";
import useToken from "../../hooks/useToken";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;
    signInWithEmailAndPassword(email, password);
    reset();
  };

  const [token] = useToken(user || gUser);

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token]);

  // conditions
  if (gLoading || loading) {
    return <Loading></Loading>;
  }
  if (error || gError) {
    toast.error(error?.message || gError?.message, {
      toastId: "error1",
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-10 mb-10">
        <div className="form-control mx-auto   lg:max-w-md max-w-xs shadow-xl p-10 rounded-2xl">
          <h1 className=" text-3xl text-center font-bold uppercase">Login</h1>
          <p className="text-sm text-center mt-2 mb-2">
            Don't have an account?{" "}
            <CustomLink to="/signUp">
              <span className="text-primary font-bold">Sign Up</span>
            </CustomLink>
          </p>
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder=""
            className="input input-bordered w-full max-w-md"
            {...register("email", {
              required: {
                value: true,
                message: "Email is required.",
              },

              pattern: {
                value: /[A-Za-z]{3}/,
                message: "Please provide a valid email",
              },
            })}
          />
          <label className="label">
            {errors.email?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.email.message}
              </span>
            )}
          </label>
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <div className="relative">
            <input
              type={passwordShown ? "text" : "password"}
              placeholder=""
              className="input input-bordered w-full max-w-md"
              {...register("password", {
                required: {
                  value: true,
                  message: "Password is required.",
                },

                pattern: {
                  value: /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                  message:
                    "Minimum length is 8 and it must have one number, one special character",
                },
              })}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute top-3 right-4"
            >
              {passwordShown ? (
                <AiOutlineEyeInvisible className="text-2xl"></AiOutlineEyeInvisible>
              ) : (
                <AiOutlineEye className="text-2xl"></AiOutlineEye>
              )}
            </button>
          </div>
          <label className="label">
            {(errors.password?.type === "required" ||
              errors.password?.type === "pattern") && (
              <span className="label-text-alt text-red-500">
                {errors.password.message}
              </span>
            )}
          </label>
          <label className="label">
            <CustomLink to="/resetPassword">
              <span className="text-primary text-sm">Forgot Password?</span>
            </CustomLink>
          </label>
          <button
            type="submit"
            className="flex items-center justify-center gap-2 btn btn-primary  text-white text-md mt-2"
          >
            <BiLogIn className="text-2xl mr-1" /> LogIn
          </button>
          <div className="divider my-5">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-primary btn-outline text-md"
          >
            <FcGoogle className="text-xl mr-2"></FcGoogle>Continue with Google
          </button>
        </div>
      </form>
    </>
  );
};

export default Login;
