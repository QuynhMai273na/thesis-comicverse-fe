import React from "react";
import Navbar from "../../components/Home/Navbar/Navbar";
import Slide from "../../components/Home/Slide/Slide";
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

