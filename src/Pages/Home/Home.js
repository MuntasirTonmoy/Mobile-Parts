import React from "react";
import About from "./About/About";
import Banner from "./Banner/Banner";
import BusinessSummary from "./BusinessSummary/BusinessSummary";
import Parts from "./Parts/Parts";
import Reviews from "./Reviews/Reviews";
import Subscribe from "./Subscribe/Subscribe";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <BusinessSummary></BusinessSummary>
      <Parts></Parts>
      <Subscribe></Subscribe>
      <Reviews></Reviews>
      <About></About>
    </div>
  );
};

export default Home;
