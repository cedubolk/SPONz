import React from "react";
import Slider from "../../components/slider/Slider";
import Details from "./Details";
import Home from "./Home";

const Mainhome = () => {
  return (
    <div>
      <Slider />
      <Home />
      <Details />
    </div>
  );
};

export default Mainhome;
