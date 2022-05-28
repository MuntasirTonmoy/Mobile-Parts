import React from "react";
import Ratings from "../../../Utilities/Ratings";

const Review = ({ review }) => {
  const { name, picture, comment, ratings } = review;

  return (
    <>
      <div>
        <div className="card my-8 lg:mx-10 mx-8  max-w-md bg-base-100 shadow-xl">
          <figure>
            <img src={picture} alt="user" className="rounded-full" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{name}</h2>
            <p className="text-xl flex items-center gap-1">
              <Ratings>{ratings}</Ratings>
            </p>
            <p>
              {comment.length > 80 ? `${comment.slice(0, 80)}...` : comment}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
