import React from "react";
import auth from "../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { BiLogIn } from "react-icons/bi";
import { AiOutlineUserAdd } from "react-icons/ai";
import { FiPower } from "react-icons/fi";
import { signOut } from "firebase/auth";
import CustomLink from "../../Utilities/CustomLink";
import { BsCart4 } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = ({ setIsOpen }) => {
  const [user] = useAuthState(auth);
  return (
    <>
      <div className="navbar sticky top-0 z-50 bg-slate-50">
        <div className="navbar-start items-center justify-center md:justify-start">
          {/* Mobile */}

          {/* pc */}
          <CustomLink to="/">
            <img src="/images/logo.png" className="w-[200px] lg:block" alt="" />
          </CustomLink>
          <ul className="menu menu-horizontal p-0 lg:flex hidden font-bold uppercase">
            {user && (
              <li>
                <CustomLink to="/dashboard">
                  <div className="indicator">
                    Dashboard
                    <span className="badge badge-sm badge-accent text-white">
                      new
                    </span>
                  </div>
                </CustomLink>
              </li>
            )}
          </ul>
        </div>

        {/* <div className="navbar-center  lg:hidden">
          <CustomLink to="/">
            <img src="/images/logo.png" className="w-[200px]" alt="" />
          </CustomLink>
        </div> */}

        <div className="navbar-end items-center  md:mr-2">
          {/* mobile */}
          {!user ? (
            <>
              <div className="dropdown lg:hidden relative">
                <label
                  tabIndex="0"
                  className="btn btn-ghost btn-circle flex justify-center items-center"
                >
                  <AiOutlineMenu className="text-2xl" />
                </label>
                <ul
                  tabIndex="0"
                  className="top-[63px] shadow dropdown-content menu px-2 py-4 bg-base-100 rounded-box w-52"
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
              <div className="dropdown lg:hidden flex">
                <label
                  tabIndex="0"
                  className="btn btn-ghost btn-circle avatar mr-2"
                >
                  <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img
                      src={user?.photoURL || `/images/user.png`}
                      alt=""
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </label>
                <ul
                  tabIndex="0"
                  className="top-[65px] p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52 font-bold uppercase"
                >
                  <li>
                    <CustomLink to={`/dashboard/myProfile`}>
                      <span className="uppercase pr-4 py-1"> Profile</span>
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
                      sign out
                    </span>
                  </li>
                </ul>
              </div>
            </>
          )}

          {/* <div>
            <button
              onClick={() => setIsOpen(true)}
              className="btn btn-ghost btn-circle lg:hidden relative"
            >
              <div className="bg-primary px-2 py-1 rounded-full text-white absolute top-0 right-0">
                9
              </div>
              <BsCart4 className="text-3xl" />
            </button>
          </div> */}

          {/* pc */}
          {user ? (
            <>
              <div className=" items-center gap-5 hidden lg:flex">
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex="0"
                    className="btn btn-ghost btn-circle avatar mr-2"
                  >
                    <div className=" w-10 rounded-full ring ring-gray-300 ring-offset-secondary ring-offset-2">
                      <img
                        src={user?.photoURL || `/images/user.png`}
                        alt=""
                        referrerPolicy="no-referrer"
                      />
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
                        sign out
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
                    sign in
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
