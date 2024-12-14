import React from "react";
import Navbar from "../../components/Home/Navbar/Navbar";
import Slide from "../../components/Home/Slide/Slide";
import HomeFeaturesTable from "./HomeFeatures";
import HomeBenifit from "./HomeBenifits";
import HomeShowCases from "./ShowCases/HomeShowCase";
import Footer from "../../components/footer/Footer";


const Homepage = () => {

  
  return (
    <div className="flex-1 w-full h-full">
      <Navbar />
      <Slide />
      <HomeFeaturesTable />
      <HomeBenifit />
      <HomeShowCases />
      <Footer />
    </div>
  );
};

export default Homepage;

