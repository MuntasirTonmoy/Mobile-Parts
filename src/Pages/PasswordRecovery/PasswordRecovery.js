import React from "react";
import { useForm } from "react-hook-form";
import { BiLock } from "react-icons/bi";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";

const PasswordRecovery = () => {
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const { email } = data;
    sendPasswordResetEmail(email);
    reset();
  };

  if (sending) {
    toast.success("Email sent.", {
      toastId: "success1",
    });
  }

  if (error) {
    toast.error(error.message, {
      toastId: "error1",
    });
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-10">
        <div className="form-control mx-auto   lg:max-w-md max-w-xs shadow-xl p-10 rounded-2xl">
          <p>
            <BiLock className="text-8xl text-center mx-auto bg-primary rounded-full p-4 mb-4"></BiLock>
          </p>
          <h1 className=" text-3xl text-center font-bold uppercase mb-4">
            Forgot Password
          </h1>
          <p className="text-center text-sm mb-4">
            Enter your email and we'll send you a link to reset your password
          </p>
          <input
            type="email"
            placeholder="Enter email"
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

          <button
            type="submit"
            className="flex items-center justify-center gap-2 btn  text-white text-md mt-2"
          >
            Submit
          </button>
          <Link to="/login">
            <p className="flex justify-center items-center text-accent text-sm mt-6">
              <IoIosArrowBack className="text-xl"></IoIosArrowBack>Back to Login
            </p>
          </Link>
        </div>
      </form>
    </>
  );
};

export default PasswordRecovery;
