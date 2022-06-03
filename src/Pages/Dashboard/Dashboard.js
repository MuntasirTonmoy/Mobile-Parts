import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import CustomLink from "../Utilities/CustomLink";
import { AiOutlinePlus, AiFillShopping } from "react-icons/ai";
import { FaUserCircle, FaShoppingCart, FaUserEdit } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import {
  MdDashboardCustomize,
  MdAddCircle,
  MdReviews,
  MdSettingsSuggest,
} from "react-icons/md";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const location = useLocation();
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);

  return (
    <>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {location.pathname === "/dashboard" && (
            <>
              <div className="lg:flex items-center justify-center  lg:h-[calc(100vh-100px)]">
                <div>
                  <h1 className="text-5xl font-serif text-center mb-3 mt-10 text-primary font-bold">
                    Dashboard
                  </h1>

                  <div className="mt-10 text-3xl lg:mx-10 mx-6  mb-10 grid lg:grid-cols-3 grid-cols-1 lg:gap-10 text-center">
                    <CustomLink to="/dashboard/myProfile">
                      <div className="p-10 w-sm shadow rounded-3xl hover:shadow-2xl transition-shadow ease-out duration-200 uppercase">
                        <div>
                          <FaUserCircle className="text-primary text-7xl mx-auto mb-4"></FaUserCircle>
                        </div>
                        My Profile
                      </div>
                    </CustomLink>
                    {!admin && (
                      <>
                        <CustomLink to={`/dashboard/myOrders/${user?.email}`}>
                          <div className="lg:mt-0 mt-10 p-10 w-sm shadow rounded-3xl hover:shadow-2xl transition-shadow ease-out duration-200 uppercase">
                            <div>
                              <AiFillShopping className="text-primary text-7xl mx-auto mb-4"></AiFillShopping>
                            </div>
                            My Order
                          </div>
                        </CustomLink>
                        <CustomLink to="/dashboard/addReview">
                          <div className="lg:mt-0  mt-10 p-10 w-sm shadow rounded-3xl hover:shadow-2xl transition-shadow ease-out duration-200 uppercase">
                            <div>
                              <MdReviews className="text-primary text-7xl mx-auto mb-4"></MdReviews>
                            </div>
                            Add Review
                          </div>
                        </CustomLink>
                      </>
                    )}
                    {admin && (
                      <>
                        <CustomLink to={`/dashboard/allUsers`}>
                          <div className="lg:mt-0 mt-10 p-10 w-sm shadow rounded-3xl hover:shadow-2xl transition-shadow ease-out duration-200 uppercase">
                            <div>
                              <FaUserEdit className="text-primary text-7xl mx-auto mb-4"></FaUserEdit>
                            </div>
                            Make Admin
                          </div>
                        </CustomLink>
                        <CustomLink to="/dashboard/allOrders">
                          <div className="lg:mt-0  mt-10 p-10 w-sm shadow rounded-3xl hover:shadow-2xl transition-shadow ease-out duration-200 uppercase">
                            <div>
                              <FaShoppingCart className="text-primary text-7xl mx-auto mb-4"></FaShoppingCart>
                            </div>
                            All Orders
                          </div>
                        </CustomLink>
                      </>
                    )}
                  </div>
                  {admin && (
                    <div className=" text-3xl lg:mx-10 mx-6  mb-10 grid lg:grid-cols-2 grid-cols-1 lg:gap-10 text-center">
                      <CustomLink to="/dashboard/allOrders">
                        <div className="lg:mt-0 p-10 w-sm shadow rounded-3xl hover:shadow-2xl transition-shadow ease-out duration-200 uppercase">
                          <div>
                            <MdAddCircle className="text-primary text-7xl mx-auto mb-4"></MdAddCircle>
                          </div>
                          Add product
                        </div>
                      </CustomLink>
                      <CustomLink to="/dashboard/allOrders">
                        <div className="lg:mt-0  mt-10 p-10 w-sm shadow rounded-3xl hover:shadow-2xl transition-shadow ease-out duration-200 uppercase">
                          <div>
                            <MdSettingsSuggest className="text-primary text-7xl mx-auto mb-4"></MdSettingsSuggest>
                          </div>
                          Manage Products
                        </div>
                      </CustomLink>
                    </div>
                  )}
                </div>
              </div>
            </>
          )}

          <Outlet></Outlet>
          <div
            className="tooltip tooltip-primary tooltip-left fixed bottom-12 right-16"
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
          <ul className="menu p-4  lg:w-80 w-60 bg-base-100 text-base-content font-serif">
            <li className="py-2 text-lg font-bold">
              <CustomLink to="/dashboard">
                <MdDashboardCustomize className="text-2xl"></MdDashboardCustomize>
                Dashboard
              </CustomLink>
            </li>
            <hr />
            <li className="py-2 text-lg font-bold">
              <CustomLink to="/dashboard/myProfile">
                <FaUserCircle className="text-2xl"></FaUserCircle>My Profile
              </CustomLink>
            </li>
            <hr />
            {!admin && (
              <>
                <li className="py-2 text-lg font-bold">
                  <CustomLink to={`/dashboard/myOrders/${user?.email}`}>
                    <AiFillShopping className="text-2xl"></AiFillShopping>My
                    Orders
                  </CustomLink>
                </li>
                <hr />
                <li className="py-2 text-lg font-bold">
                  <CustomLink to="/dashboard/addReview">
                    <MdReviews className="text-2xl "></MdReviews>Add Review
                  </CustomLink>
                </li>
                <hr />
              </>
            )}

            {admin && (
              <>
                <li className="py-2 text-lg font-bold">
                  <CustomLink to="/dashboard/allUsers">
                    <BsPeopleFill className="text-2xl "></BsPeopleFill>All Users
                  </CustomLink>
                </li>
                <hr />
                <li className="py-2 text-lg font-bold">
                  <CustomLink to="/dashboard/allOrders">
                    <MdSettingsSuggest className="text-2xl "></MdSettingsSuggest>
                    Manage Orders
                  </CustomLink>
                </li>
                <hr />
              </>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
