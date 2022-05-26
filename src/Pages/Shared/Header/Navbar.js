import React from "react";
import { Link } from "react-router-dom";
import { FcPhoneAndroid } from "react-icons/fc";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-slate-50">
        <div className="navbar-start">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/blogs">Blogs</Link>
              </li>
              <li>
                <Link to="/myPortfolio">My Portfolio</Link>
              </li>
            </ul>
          </div>
          <Link to="/">
            <span className="font-serif btn lg:flex hidden btn-ghost text-center normal-case text-xl">
              <FcPhoneAndroid className="text-2xl mr-px"></FcPhoneAndroid>{" "}
              Mobile Parts
            </span>
          </Link>
          <ul className="menu menu-horizontal p-0 lg:flex hidden">
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/myPortfolio">My Portfolio</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-center  lg:hidden">
          <Link to="/">
            <span className=" font-serif btn btn-ghost   text-center normal-case text-xl">
              Mobile Parts
            </span>
          </Link>
        </div>

        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://api.lorem.space/image/face?hash=33791" />
              </div>
            </label>
            <ul
              tabIndex="0"
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="signUp">
                  signup
                  <span className="badge">New</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
