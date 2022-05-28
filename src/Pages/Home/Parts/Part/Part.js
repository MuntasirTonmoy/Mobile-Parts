import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const Part = ({ part }) => {
  const { name, picture, description, price, minQuantity, availableQuantity } =
    part;
  return (
    <>
      <div className="card max-w-lg bg-base-100 shadow-xl">
        <figure className="lg:mx-0 mx-auto">
          <img src={picture} alt={name} className="rounded-xl h-[300px]" />
        </figure>
        <div className="card-body">
          <div className="ml-2 text-lg">
            <h2 className="card-title text-2xl">{name}</h2>
            <p className="mt-2">{description}</p>
            <p>Price: ${price}</p>
            <p>Minimun order quantity: {minQuantity}</p>
            <p>Available: {availableQuantity}</p>
          </div>
          <div className="w-full mt-2">
            <button className="btn btn-primary text-white w-full ">
              <FaShoppingCart className="text-xl mr-2"></FaShoppingCart>Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Part;
