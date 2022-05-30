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
      <div class="card mx-auto lg:max-w-lg mt-2 bg-base-100 shadow-xl">
        <div class="card-body text-center">
          <img
            src={user?.photoURL || userPhoto}
            alt=""
            className="w-40 h-40 rounded-full mx-auto"
          />
          <h2 class="card-title uppercase mx-auto mt-3">
            {user?.displayName || "New User"}
          </h2>
          <p className="text-lg">{user?.email}</p>
          <div class="card-actions justify-center mt-3">
            <button class="btn btn-primary text-white">Edit Profile</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
