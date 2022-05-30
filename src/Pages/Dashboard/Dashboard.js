import React from "react";
import { Outlet } from "react-router-dom";
import CustomLink from "../Utilities/CustomLink";
import { AiOutlinePlus, AiFillShopping } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  return (
    <>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Outlet></Outlet>
          <div
            class="tooltip tooltip-primary tooltip-left fixed bottom-12 right-16"
            data-tip="Dashboard Menu"
          >
            <label
              htmlFor="my-drawer"
              className="fixed bottom-4 right-4 btn btn-primary drawer-button rounded-full text-white w-14 h-14 flex justify-center items-center"
            >
              <AiOutlinePlus className="text-5xl"></AiOutlinePlus>
            </label>
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4  w-80 bg-base-100 text-base-content">
            <li className="py-2 text-lg font-bold">
              <CustomLink to="/dashboard/myProfile">
                <FaUserCircle className="text-2xl"></FaUserCircle>My Profile
              </CustomLink>
            </li>
            <hr />
            <li className="py-2 text-lg font-bold">
              <CustomLink to={`/dashboard/myOrders/${user?.email}`}>
                <AiFillShopping className="text-2xl"></AiFillShopping>My Orders
              </CustomLink>
            </li>
            <hr />
            <li className="py-2 text-lg font-bold">
              <CustomLink to="/dashboard/addReview">
                <MdReviews className="text-2xl "></MdReviews>Add Review
              </CustomLink>
            </li>
            <hr />
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
