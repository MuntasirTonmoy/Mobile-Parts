import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import userPhoto from "../../../src/user.png";

const MyProfile = () => {
  const [user] = useAuthState(auth);

  return (
    <div className="mt-10 lg:mx-auto mx-6">
      <h1 className="text-center text-5xl font-bold text-primary font-serif">
        My Profile
      </h1>
      <div className="card mx-auto lg:max-w-lg mt-2 bg-base-100 shadow-xl">
        <div className="card-body  text-center">
          <img
            src={user?.photoURL || userPhoto}
            alt=""
            className="w-40 h-40 rounded-full mx-auto"
          />
          <h2 className="card-title uppercase mx-auto mt-3">
            {user?.displayName || "New User"}
          </h2>
          <p className="text-lg ">{user?.email}</p>
          <p className="text-lg">Education: {}</p>
          <p className="text-lg">Location: {}</p>
          <p className="text-lg">Phone: {}</p>
          <div className="card-actions justify-center mt-3">
            <button className="btn btn-primary text-white">
              Update Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
