import React from "react";
import { BsPeopleFill, BsFillSuitHeartFill } from "react-icons/bs";
import { BiWorld } from "react-icons/bi";
import { FaShippingFast } from "react-icons/fa";

const BusinessSummary = () => {
  return (
    <div className="" id="summary">
      <div class="stats w-full rounded-none text-center stats-vertical lg:stats-horizontal shadow">
        <div class="stat">
          <span>
            <BiWorld className="text-4xl text-accent mx-auto mb-2 mt-2"></BiWorld>
          </span>
          <div class="stat-value">50+</div>
          <div class="stat-title text-teal-700">Countries</div>
        </div>

        <div class="stat">
          <span>
            <FaShippingFast className="text-4xl text-accent mx-auto mb-2 mt-2"></FaShippingFast>
          </span>
          <div class="stat-value">7K+</div>
          <div class="stat-title text-teal-700">Order delivered</div>
        </div>

        <div class="stat">
          <span>
            <BsPeopleFill className="text-4xl text-accent mx-auto mb-2 mt-2"></BsPeopleFill>
          </span>
          <div class="stat-value">5K+</div>
          <div class="stat-title text-teal-700">Happy Clients</div>
        </div>

        <div class="stat">
          <span>
            <BsFillSuitHeartFill className="text-4xl text-accent mx-auto mb-2 mt-2"></BsFillSuitHeartFill>
          </span>
          <div class="stat-value">3K+</div>
          <div class="stat-title text-teal-700">Posetive Review</div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
