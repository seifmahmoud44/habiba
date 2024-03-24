import React from "react";
import Title from "./Title";
import modelM from "../images/modelm.jpg";
const Products = () => {
  return (
    <div className="my-10 h-[80vh]">
      <Title title={"Products"} />
      <div className="relative h-full">
        <div className=" -z-10 absolute right-0 top-1/2 -translate-y-1/2 h-[400px] w-[700px] bg-[#FF6666]"></div>
        <div className="w-5/6 m-auto max-md:w-full h-full">
          <div className="w-1/2 h-full flex justify-center items-center">
            <img src={modelM} alt="" className="object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
