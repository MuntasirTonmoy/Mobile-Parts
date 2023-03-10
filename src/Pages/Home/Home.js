import React, { useState } from "react";
import Drawer from "../Utilities/Drawer";
import About from "./About/About";
import Banner from "./Banner/Banner";
import BusinessSummary from "./BusinessSummary/BusinessSummary";
import Parts from "./Parts/Parts";
import Reviews from "./Reviews/Reviews";
import Subscribe from "./Subscribe/Subscribe";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <h1>Hello </h1>
      </Drawer>
      <button onClick={() => setIsOpen(true)}>Open</button>
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
