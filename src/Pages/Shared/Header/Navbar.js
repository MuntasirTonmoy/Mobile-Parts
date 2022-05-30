import React from "react";
import logo from "../../../logo.png";
import auth from "../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { BiLogIn } from "react-icons/bi";
import { AiOutlineUserAdd } from "react-icons/ai";
import { FiPower } from "react-icons/fi";
import { signOut } from "firebase/auth";
import CustomLink from "../../Utilities/CustomLink";
import userPhoto from "../../../user.png";

const Navbar = () => {
  const [user] = useAuthState(auth);
  return (
    <>
      <div className="navbar sticky top-0 z-50 bg-slate-50">
        <div className="navbar-start">
          {/* Mobile */}
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-bold uppercase"
            >
              <li>
                <CustomLink to="/blogs">Blogs</CustomLink>
              </li>
              <hr />
              <li>
                <CustomLink to="/myPortfolio">My Portfolio</CustomLink>
              </li>
              {user && (
                <li>
                  <CustomLink to="/dashboard?show=true">Dashboard</CustomLink>
                </li>
              )}
            </ul>
          </div>

          {/* pc */}
          <CustomLink to="/">
            <img src={logo} className="w-[200px] hidden lg:block" alt="" />
          </CustomLink>
          <ul className="menu menu-horizontal p-0 lg:flex hidden font-bold uppercase">
            <li>
              <CustomLink to="/blogs">Blogs</CustomLink>
            </li>
            <li>
              <CustomLink to="/myPortfolio">My Portfolio</CustomLink>
            </li>
            {user && (
              <li>
                <CustomLink to="/dashboard?show=true">
                  Dashboard
                  <div className="badge badge-sm badge-secondary">new</div>
                </CustomLink>
              </li>
            )}
          </ul>
        </div>
        <div className="navbar-center  lg:hidden">
          <CustomLink to="/">
            <img src={logo} className="w-[200px]" alt="" />
          </CustomLink>
        </div>

        <div className="navbar-end">
          {/* mobile */}

          {!user ? (
            <>
              <div className="dropdown dropdown-end lg:hidden flex">
                <label tabIndex="0" className="btn btn-ghost btn-circle">
                  <BiLogIn className="text-2xl mr-2"></BiLogIn>
                </label>
                <ul
                  tabIndex="0"
                  className="mt-14  p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                >
                  <li>
                    <CustomLink to="/login">
                      <span className=" btn-sm w-full btn btn-outline btn-primary rounded flex items-center justify-center gap-2 uppercase font-bold">
                        <BiLogIn className="text-2xl"></BiLogIn>
                        Login
                      </span>
                    </CustomLink>
                  </li>
                  <hr />
                  <li>
                    <CustomLink to="/signUp">
                      <span className=" btn-sm w-full btn-primary  rounded flex items-center justify-center gap-2 uppercase font-bold">
                        <AiOutlineUserAdd className="text-2xl"></AiOutlineUserAdd>
                        Sign Up
                      </span>
                    </CustomLink>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <div className="dropdown dropdown-end lg:hidden flex">
                <label
                  tabIndex="0"
                  className="btn btn-ghost btn-circle avatar mr-2"
                >
                  <div className="w-10 rounded-full">
                    <img src={user?.photoURL || userPhoto} alt="" />
                  </div>
                </label>
                <ul
                  tabIndex="0"
                  className="mt-14 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52 font-bold uppercase"
                >
                  <li>
                    <CustomLink to={`/dashboard/myProfile`}>
                      <span className="uppercase pr-4 py-1"> My Profile</span>
                    </CustomLink>
                  </li>
                  <hr />
                  <li>
                    <CustomLink to={`/dashboard/myOrders/${user.email}`}>
                      <span className="uppercase pr-4 py-1"> My Orders</span>
                    </CustomLink>
                  </li>
                  <hr />
                  <li className="mt-2">
                    <span
                      onClick={() => {
                        signOut(auth);
                        localStorage.removeItem("accessToken");
                      }}
                      className="pr-5 flex items-center gap-2 uppercase font-bold btn btn-outline btn-primary"
                    >
                      <FiPower className="text-2xl"></FiPower>
                      Log out
                    </span>
                  </li>
                </ul>
              </div>
            </>
          )}

          {/* pc */}
          {user ? (
            <>
              <div className=" items-center gap-5 hidden lg:flex">
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex="0"
                    className="btn btn-ghost btn-circle avatar mr-2"
                  >
                    <div className=" w-10 rounded-full">
                      <img src={user?.photoURL || userPhoto} alt="" />
                    </div>
                  </label>
                  <ul
                    tabIndex="0"
                    className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52 font-bold uppercase"
                  >
                    <li>
                      <CustomLink to={`/dashboard/myProfile`}>
                        <span className="uppercase pr-4 py-1"> My Profile</span>
                      </CustomLink>
                    </li>
                    <hr />
                    <li>
                      <CustomLink to={`/dashboard/myOrders/${user.email}`}>
                        <span className="uppercase pr-4 py-1"> My Orders</span>
                      </CustomLink>
                    </li>
                    <hr />
                    <li className="mt-2">
                      <span
                        onClick={() => {
                          signOut(auth);
                          localStorage.removeItem("accessToken");
                        }}
                        className="pr-5 flex items-center gap-2 uppercase font-bold btn btn-outline btn-primary"
                      >
                        <FiPower className="text-2xl"></FiPower>
                        Log out
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="items-center gap-5 hidden lg:flex">
                <CustomLink to="/login">
                  <span className=" btn pr-5  btn-outline btn-primary text-black rounded flex items-center justify-center gap-2 uppercase font-bold">
                    <BiLogIn className="text-2xl"></BiLogIn>
                    Login
                  </span>
                </CustomLink>
                <CustomLink to="/signUp">
                  <span className=" btn pr-5 mr-3 btn-primary text-white  rounded flex items-center justify-center gap-2 uppercase font-bold">
                    <AiOutlineUserAdd className="text-2xl"></AiOutlineUserAdd>
                    Sign Up
                  </span>
                </CustomLink>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
