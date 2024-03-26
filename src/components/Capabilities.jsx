import React from "react";
import Title from "./Title";
import col1 from "../images/d.png";
import col2 from "../images/d2.jpeg";
const Capabilities = () => {
  return (
    <div className="h-[80vh] relative" id="capabilities">
      <Title title={"Capabilities"} />
      <div className=" -z-10 absolute h-4/6 w-80 left-0 top-1/2 -translate-y-1/2 bg-[#FF9999]" />
      <div className=" -z-10 absolute h-1/2 w-full left-0 top-1/2 -translate-y-1/2 bg-[#FFE6E6]" />
      <div className=" h-full my-5 w-5/6 m-auto flex justify-center items-center gap-10 ">
        <img
          src={col2}
          alt=""
          className="h-[400px] max-md:w-full  w-1/2 object-cover max-md:h-1/2 max-md:hidden -translate-y-24"
        />

        <img
          src={col1}
          alt=""
          className="w-1/2 max-md:w-full  max-md:-translate-y-20 -translate-y-20"
        />
      </div>
    </div>
  );
};

export default Capabilities;
