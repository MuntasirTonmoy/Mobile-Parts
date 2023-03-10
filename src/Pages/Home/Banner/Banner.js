import React from "react";
import { Link } from "react-scroll";

const Banner = () => {
  return (
    <>
      <div
        style={{
          background: `url('/images/hero-bg.jpg')`,
          backgroundSize: "cover",
        }}
        className="hero min-h-[calc(100vh-84.68px)] "
      >
        <div className="hero-content flex-col lg:flex-row-reverse gap-10 lg:gap-56 text-center lg:text-left">
          <img
            src="/images/hero.png"
            className="max-h-[500px] rounded-lg shadow-2xl  order-2 lg:order-1"
            alt="mobile"
          />
          <div className="max-w-xl my-6 lg:mb-0 order-1 lg:order-2">
            <h1 className="text-5xl lg:text-6xl font-bold">
              We sell Mobile Parts
            </h1>
            <p className="py-6 text-xl text-black">
              Welcome to Mobile parts. Mobile parts is the largest cellphone
              parts provider. We ensure best quality products around the world.{" "}
              Buy from us for the best experience.
            </p>
            <Link to="summary" smooth={true} offset={0} duration={500}>
              <button className="btn btn-primary text-white">Shop now</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
