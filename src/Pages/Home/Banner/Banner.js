import React from "react";
import banner from "../../../banner.jpg";
import { BsChevronDoubleDown } from "react-icons/bs";

const Banner = () => {
  return (
    <>
      <div
        class="hero h-[calc(100vh-84.68px)]"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-xl">
            <h1 class="mb-4 text-5xl font-bold text-white font-serif font-semibold ">
              Mobile Parts provider
            </h1>
            <p class="mb-5 text-slate-100 ">
              Welcome to MOBILE PARTS. Mobile parts is the largest cellphone
              parts provider. We ensure best quality products around the world.
              Buy from us for the best experience.
            </p>
            <button class="btn btn-primary">
              <BsChevronDoubleDown className="text-lg mr-1"></BsChevronDoubleDown>{" "}
              Explore more
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
