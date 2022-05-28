import React from "react";
import banner from "../../../banner.jpg";
import { BsChevronDoubleDown } from "react-icons/bs";
import { Link, animateScroll as scroll } from "react-scroll";

const Banner = () => {
  return (
    <>
      <div
        className="hero h-[calc(100vh-84.68px)]"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-xl">
            <h1 className="mb-4 text-5xl font-bold text-white font-serif font-semibold ">
              Mobile Parts provider
            </h1>
            <p className="mb-5 text-slate-100 max-w-lg mx-auto">
              Welcome to MOBILE PARTS. Mobile parts is the largest cellphone
              parts provider. We ensure best quality products around the world.{" "}
              <br className="lg:block hidden" />
              Buy from us for the best experience.
            </p>
            <Link to="summary" smooth={true} offset={-85} duration={500}>
              <button className="btn btn-accent text-white">
                <BsChevronDoubleDown className="text-lg mr-1"></BsChevronDoubleDown>{" "}
                Explore more
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
