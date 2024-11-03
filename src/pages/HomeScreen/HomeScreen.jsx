import React from "react";
import Navbar from "../../components/Home/Navbar/Navbar";
import Slide from "../../components/Home/Slide/Slide";

const Homepage = () => {
  return (
    <div className="flex-1 w-full h-full">
      <Navbar />
      <Slide />
    </div>
  );
};

export default Homepage;
