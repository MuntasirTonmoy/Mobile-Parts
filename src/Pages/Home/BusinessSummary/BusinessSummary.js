import React from "react";
import { BsPeopleFill, BsFillSuitHeartFill } from "react-icons/bs";
import { BiWorld } from "react-icons/bi";
import { FaShippingFast } from "react-icons/fa";

const BusinessSummary = () => {
  return (
    <div id="summary">
      <div className="stats w-full rounded-none text-center stats-vertical lg:stats-horizontal shadow">
        <div className="stat">
          <span>
            <BiWorld className="text-4xl text-accent mx-auto mb-2 mt-2"></BiWorld>
          </span>
          <div className="stat-value">50+</div>
          <div className="stat-title text-primary">Countries</div>
        </div>

        <div className="stat">
          <span>
            <FaShippingFast className="text-4xl text-accent mx-auto mb-2 mt-2"></FaShippingFast>
          </span>
          <div className="stat-value">7K+</div>
          <div className="stat-title text-primary">Order delivered</div>
        </div>

        <div className="stat">
          <span>
            <BsPeopleFill className="text-4xl text-accent mx-auto mb-2 mt-2"></BsPeopleFill>
          </span>
          <div className="stat-value">5K+</div>
          <div className="stat-title text-primary">Happy Clients</div>
        </div>

        <div className="stat">
          <span>
            <BsFillSuitHeartFill className="text-4xl text-accent mx-auto mb-2 mt-2"></BsFillSuitHeartFill>
          </span>
          <div className="stat-value">3K+</div>
          <div className="stat-title text-primary">Posetive Review</div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
