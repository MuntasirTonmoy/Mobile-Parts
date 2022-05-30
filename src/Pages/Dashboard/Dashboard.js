import React, { useState } from "react";
import { Outlet, useSearchParams } from "react-router-dom";
import CustomLink from "../Utilities/CustomLink";
import { AiOutlinePlus, AiFillShopping } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { MdDashboardCustomize } from "react-icons/md";
import { MdReviews } from "react-icons/md";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Dashboard = () => {
  const [searchParams] = useSearchParams();
  const navShow = searchParams.get("show");
  const [user] = useAuthState(auth);
  const [show, setShow] = useState(true);
  const onClick = () => {
    setShow(false);
  };
  return (
    <>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {(show || navShow) && (
            <>
              <div className="lg:flex items-center justify-center  lg:h-[calc(100vh-200px)]">
                <div>
                  <h1 className="text-5xl font-serif text-center mb-3 mt-10 text-primary font-bold">
                    Dashboard
                  </h1>

                  <div className="mt-10 text-3xl lg:mx-10 mx-6  mb-10 grid lg:grid-cols-3 grid-cols-1 lg:gap-10 text-center">
                    <CustomLink to="/dashboard/myProfile">
                      <div
                        onClick={onClick}
                        className="p-10 w-sm shadow rounded-3xl hover:shadow-2xl transition-shadow ease-out duration-200 uppercase"
                      >
                        <div>
                          <FaUserCircle className="text-primary text-7xl mx-auto mb-4"></FaUserCircle>
                        </div>
                        My Profile
                      </div>
                    </CustomLink>
                    <CustomLink to={`/dashboard/myOrders/${user?.email}`}>
                      <div
                        onClick={onClick}
                        className="lg:mt-0 mt-10 p-10 w-sm shadow rounded-3xl hover:shadow-2xl transition-shadow ease-out duration-200 uppercase"
                      >
                        <div>
                          <AiFillShopping className="text-primary text-7xl mx-auto mb-4"></AiFillShopping>
                        </div>
                        My Order
                      </div>
                    </CustomLink>
                    <CustomLink to="/dashboard/addReview">
                      <div
                        onClick={onClick}
                        className="lg:mt-0  mt-10 p-10 w-sm shadow rounded-3xl hover:shadow-2xl transition-shadow ease-out duration-200 uppercase"
                      >
                        <div>
                          <MdReviews className="text-primary text-7xl mx-auto mb-4"></MdReviews>
                        </div>
                        Add Review
                      </div>
                    </CustomLink>
                  </div>
                </div>
              </div>
            </>
          )}

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
          <ul className="menu p-4  w-80 bg-base-100 text-base-content font-serif">
            <li
              onClick={() => setShow(true)}
              className="py-2 text-lg font-bold"
            >
              <CustomLink to="/dashboard/">
                <MdDashboardCustomize className="text-2xl"></MdDashboardCustomize>
                Dashboard
              </CustomLink>
            </li>
            <hr />
            <li onClick={onClick} className="py-2 text-lg font-bold">
              <CustomLink to="/dashboard/myProfile">
                <FaUserCircle className="text-2xl"></FaUserCircle>My Profile
              </CustomLink>
            </li>
            <hr />
            <li onClick={onClick} className="py-2 text-lg font-bold">
              <CustomLink to={`/dashboard/myOrders/${user?.email}`}>
                <AiFillShopping className="text-2xl"></AiFillShopping>My Orders
              </CustomLink>
            </li>
            <hr />
            <li onClick={onClick} className="py-2 text-lg font-bold">
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
