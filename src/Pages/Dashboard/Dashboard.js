import React from "react";
import { Outlet } from "react-router-dom";
import CustomLink from "../Utilities/CustomLink";
import { AiOutlinePlus } from "react-icons/ai";

const Dashboard = () => {
  return (
    <>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer"
            className="fixed bottom-4 right-4 btn btn-primary drawer-button rounded-full text-white w-14 h-14 flex justify-ecenter items-center"
          >
            <AiOutlinePlus className="text-5xl"></AiOutlinePlus>
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            <li className="text-lg font-bold">
              <CustomLink to="/dashboard/myOrders">My Orders</CustomLink>
            </li>
            <li className="text-lg font-bold">
              <CustomLink to="/dashboard/addReview">Add Review</CustomLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
