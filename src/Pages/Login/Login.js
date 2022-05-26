import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Utilities/Loading";
import { FcGoogle } from "react-icons/fc";
import { BiLogIn } from "react-icons/bi";

const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  if (gLoading) {
    return <Loading></Loading>;
  }
  return (
    <>
      <form className="mt-10">
        <div className="form-control mx-auto   max-w-xs shadow-xl p-10 rounded-2xl">
          <h1 className=" text-3xl text-center font-bold uppercase">Login</h1>
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder=""
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder=""
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            <span className="label-text-alt">Forgot Password?</span>
          </label>
          <button
            type="submit"
            className="flex items-center justify-center gap-2 btn  text-white text-md mt-2"
          >
            LogIn <BiLogIn className="text-2xl" />
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

export default Login;
