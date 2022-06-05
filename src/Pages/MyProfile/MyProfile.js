import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import CustomLink from "../Utilities/CustomLink";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const email = user?.email;
  const userPhoto = "https://i.ibb.co/jGwMrsv/user.jpg";
  const [userInfo, setUserPrfl] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/user/${email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUserPrfl(data);
      });
  }, [email]);

  return (
    <div className="mt-10 lg:mx-auto mx-6">
      <div>
        <h1 className="text-center text-5xl font-bold text-primary font-serif">
          My Profile
        </h1>
        <div className="card mx-auto lg:max-w-lg mt-2 bg-base-100 shadow-xl overflow-x-auto">
          <div className="card-body lg:max-w-md mx-auto ">
            <img
              src={user?.photoURL || userPhoto}
              alt=""
              referrerPolicy="no-referrer"
              className="w-40 h-40 rounded-full mx-auto"
            />
            <h2 className="card-title uppercase mx-auto mt-3">
              {user?.displayName || "New User"}
            </h2>
            <div>
              <ul className="list-none text-lg child:my-2">
                <li>
                  <span className="font-semibold">Email:</span> {user?.email}
                </li>
                <li>
                  <span className="font-semibold">Education:</span>{" "}
                  {userInfo[0]?.education}
                </li>
                <li>
                  <span className="font-semibold">Location:</span>{" "}
                  {userInfo[0]?.location}
                </li>
                <li>
                  <span className="font-semibold">Phone: </span>
                  {userInfo[0]?.phone}
                </li>
                <li>
                  <span className="font-semibold">Links:</span>{" "}
                  <a
                    className="text-primary"
                    href={`${userInfo[0]?.socialLinks}`}
                  >
                    {userInfo[0]?.socialLinks}
                  </a>
                </li>
              </ul>
            </div>
            <div className="card-actions justify-center mt-3">
              <CustomLink to="/dashboard/updateProfile">
                <button className="w-full btn btn-primary text-white">
                  Update Profile
                </button>
              </CustomLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
