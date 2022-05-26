import React, { useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Utilities/Loading";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineAdd } from "react-icons/md";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const SignUp = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const { name, email, password } = data;
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    reset();
  };

  if (gLoading || loading || updating) {
    return <Loading></Loading>;
  }
  if (error || gError || updateError) {
    toast.error(error?.message || gError?.message || updateError?.message, {
      toastId: "error1",
    });
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-10">
        <div className="form-control mx-auto  max-w-xs lg:max-w-md shadow-xl p-10 rounded-2xl">
          <h1 className=" text-3xl text-center font-bold uppercase">Sign up</h1>
          <p className="text-sm text-center mt-2 mb-2">
            Already have an account?{" "}
            <Link to="/login">
              <span className="text-accent font-bold">Login</span>
            </Link>
          </p>
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder=""
            className="input input-bordered w-full max-w-md"
            {...register("name", {
              required: {
                value: true,
                message: "Name is required.",
              },
            })}
          />
          <label className="label">
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.name.message}
              </span>
            )}
          </label>
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
              className="absolute top-3 right-4 "
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
          <button
            type="submit"
            className="flex items-center justify-center gap-2 btn  text-white text-md mt-2"
          >
            <MdOutlineAdd className="text-2xl" /> Create Account
          </button>

          <div className="divider my-5">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline text-md"
          >
            <FcGoogle className="text-xl mr-2"></FcGoogle>Continue with Google
          </button>
        </div>
      </form>
    </>
  );
};

export default SignUp;
