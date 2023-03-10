import React from "react";
import Ratings from "../../../Utilities/Ratings";

const Review = ({ review }) => {
  const { userName, picture, comment, ratings } = review;

  return (
    <>
      <div>
        <div className="card my-16 lg:mx-10 mx-6  max-w-md bg-base-100 shadow-xl">
          <figure>
            <img src={picture} alt="user" className="rounded-full h-20 w-20" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{userName}</h2>
            <p className="text-xl flex items-center gap-1">
              <Ratings>{ratings}</Ratings>
            </p>
            <p>
              {comment.length > 40 ? `${comment.slice(0, 40)}...` : comment}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
