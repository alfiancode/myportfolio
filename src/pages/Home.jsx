import React from "react";
import Banner from "../components/Banner";
import FeaturedPost from "../components/FeaturedPost";

const Home = () => {
  return (
    <div className="px-8">
      <Banner />
      <FeaturedPost />
    </div>
  );
};

export default Home;
