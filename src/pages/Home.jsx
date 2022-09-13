import React from "react";
import Banner from "../components/Banner";
import FeaturedPost from "../components/FeaturedPost";
import SocialMedia from "../components/SocialMedia";

const Home = () => {
  return (
    <div className="px-8">
      <Banner />
      <FeaturedPost />
      <SocialMedia />
    </div>
  );
};

export default Home;
