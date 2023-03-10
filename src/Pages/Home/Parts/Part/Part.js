import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Part = ({ part }) => {
  const navigate = useNavigate();
  const {
    _id,
    name,
    picture,
    description,
    price,
    minQuantity,
    availableQuantity,
  } = part;
  return (
    <>
      <div className="card max-w-lg bg-base-100 shadow-md">
        <figure className="lg:mx-0 mx-auto">
          <img src={picture} alt={name} className="rounded-xl h-[300px]" />
        </figure>
        <div className="card-body">
          <div className="text-lg ml-2">
            <h2 className="card-title text-2xl mb-3">{name}</h2>
            <p className="text-xl mb-2 font-semibold">
              Price: <span className="text-green-700">${price}</span>
            </p>
          </div>
          <div className="w-full mt-2">
            <button
              onClick={() => navigate(`purchase/${_id}`)}
              className="btn btn-primary text-white w-full "
            >
              <FaShoppingCart className="text-xl mr-2"></FaShoppingCart>Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Part;
