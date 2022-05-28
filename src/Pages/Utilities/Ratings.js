import React from "react";
import { FaStar } from "react-icons/fa";

const Ratings = ({ children }) => {
  return (
    <>
      {children === 5 ? (
        <>
          <FaStar className="text-orange-400"></FaStar>
          <FaStar className="text-orange-400"></FaStar>
          <FaStar className="text-orange-400"></FaStar>
          <FaStar className="text-orange-400"></FaStar>
          <FaStar className="text-orange-400"></FaStar>
        </>
      ) : children === 4 ? (
        <>
          <FaStar className="text-orange-400"></FaStar>
          <FaStar className="text-orange-400"></FaStar>
          <FaStar className="text-orange-400"></FaStar>
          <FaStar className="text-orange-400"></FaStar>
          <FaStar className="text-gray-200"></FaStar>
        </>
      ) : children === 3 ? (
        <>
          <FaStar className="text-orange-400"></FaStar>
          <FaStar className="text-orange-400"></FaStar>
          <FaStar className="text-orange-400"></FaStar>
          <FaStar className="text-gray-200"></FaStar>
          <FaStar className="text-gray-200"></FaStar>
        </>
      ) : children === 2 ? (
        <>
          <FaStar className="text-orange-400"></FaStar>
          <FaStar className="text-orange-400"></FaStar>
          <FaStar className="text-gray-200"></FaStar>
          <FaStar className="text-gray-200"></FaStar>
          <FaStar className="text-gray-200"></FaStar>
        </>
      ) : (
        <>
          <FaStar className="text-orange-400"></FaStar>
          <FaStar className="text-gray-200"></FaStar>
          <FaStar className="text-gray-200"></FaStar>
          <FaStar className="text-gray-200"></FaStar>
          <FaStar className="text-gray-200"></FaStar>
        </>
      )}
    </>
  );
};

export default Ratings;
