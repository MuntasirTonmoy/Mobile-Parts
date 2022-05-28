import React from "react";
import Banner from "./Banner/Banner";
import BusinessSummary from "./BusinessSummary/BusinessSummary";
import Parts from "./Parts/Parts";
import Reviews from "./Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <BusinessSummary></BusinessSummary>
      <Parts></Parts>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
