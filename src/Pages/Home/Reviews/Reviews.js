import React, { useEffect, useState } from "react";
import Slider from "react-slick/lib/slider";
import Review from "./Review/Review";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  useEffect(() => {
    fetch("/reviews.json")
      .then((response) => response.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <>
      <h1 className=" text-5xl text-center lg:mt-20 mt-14 font-serif text-primary font-bold">
        Buyer's Feedback
      </h1>
      <div className="mt-10  mx-auto">
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <Review key={index} review={review}></Review>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Reviews;
