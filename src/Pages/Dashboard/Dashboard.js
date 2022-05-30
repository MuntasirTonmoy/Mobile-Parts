import React, { useState } from "react";
import { Outlet, useSearchParams } from "react-router-dom";
import CustomLink from "../Utilities/CustomLink";
import { AiOutlinePlus, AiFillShopping } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
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
              <div>
                <h1 className="text-5xl font-serif text-center mt-10 mb-3 text-primary font-bold">
                  Dashboard
                </h1>
                <div className="lg:mx-10 mx-6  mt-10 mb-10 grid lg:grid-cols-3 grid-cols-1 gap-5">
                  <div class="card max-w-lg bg-base-100 shadow-xl">
                    <figure>
                      <img
                        src="https://api.lorem.space/image/shoes?w=400&h=225"
                        alt="Shoes"
                      />
                    </figure>
                    <div class="card-body">
                      <h2 class="card-title">Shoes!</h2>
                      <p>If a dog chews shoes whose shoes does he choose?</p>
                      <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                      </div>
                    </div>
                  </div>
                  <div class="card max-w-lg bg-base-100 shadow-xl">
                    <figure>
                      <img
                        src="https://api.lorem.space/image/shoes?w=400&h=225"
                        alt="Shoes"
                      />
                    </figure>
                    <div class="card-body">
                      <h2 class="card-title">Shoes!</h2>
                      <p>If a dog chews shoes whose shoes does he choose?</p>
                      <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                      </div>
                    </div>
                  </div>
                  <div class="card max-w-lg bg-base-100 shadow-xl">
                    <figure>
                      <img
                        src="https://api.lorem.space/image/shoes?w=400&h=225"
                        alt="Shoes"
                      />
                    </figure>
                    <div class="card-body">
                      <h2 class="card-title">Shoes!</h2>
                      <p>If a dog chews shoes whose shoes does he choose?</p>
                      <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                      </div>
                    </div>
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
                <FaUserCircle className="text-2xl"></FaUserCircle>Dashboard
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
