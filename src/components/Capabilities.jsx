import React from "react";
import Title from "./Title";
import col1 from "../images/col1.jpg";
import col2 from "../images/modelc.jpg";
const Capabilities = () => {
  return (
    <div className="h-[80vh] relative">
      <Title title={"Capabilities"} />
      <div className=" -z-10 absolute h-4/6 w-80 left-0 top-1/2 -translate-y-1/2 bg-[#FF9999]" />
      <div className=" -z-10 absolute h-1/2 w-full left-0 top-1/2 -translate-y-1/2 bg-[#FFE6E6]" />
      <div className=" h-full my-5 w-5/6 m-auto flex justify-center items-center">
        <img src={col1} alt="" className="w-1/2" />
        <img src={col2} alt="" className="w-1/2" />
      </div>
    </div>
  );
};

export default Capabilities;
