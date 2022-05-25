import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Utilities/Loading";

const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  if (gLoading) {
    return <Loading></Loading>;
  }
  return (
    <button
      onClick={() => signInWithGoogle()}
      className="btn text-white text-xl"
    >
      Continue with Google
    </button>
  );
};

export default Login;
