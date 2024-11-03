import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Slide from "../../components/Slide/Slide";
import HomeFeaturesTable from "./HomeFeatures";
import HomeBenifit from "./HomeBenifits";
import HomeShowCases from "./ShowCases/HomeShowCase";


const Homepage = () => {
  return (
    <div className="homepage-container">
      <Navbar />
      <Slide />
      <HomeFeaturesTable />
      <HomeBenifit />
      <HomeShowCases />
    </div>
  );
};

export default Homepage;

