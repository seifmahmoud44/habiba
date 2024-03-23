import React from "react";
import mainPic from "../images/";
const Home = () => {
  return (
    <div className=" h-[calc(100vh-100px)]  relative">
      <div className="w-5/6 m-auto h-full flex justify-center items-center">
        <div className="bg-[#FF8A8A] max-w-[500px] h-full py-16 px-7 flex flex-col gap-10">
          <h1 className="text-white text-5xl font-bold">Hand Skilled</h1>
          <h2 className="text-white text-4xl font-bold">About our company</h2>
          <p className="text-white text-xl">
            Hand Skilled is one of the leading companies in the field of
            manufacturing boxes in Egypt and the Arab world <br /> Leaders in
            manufacturing gold, jewelry and alloy boxes for the largest brands
            inside and outside Egypt
          </p>
        </div>
        <div className="w-full">
          <img src={mainPic} alt="" />
        </div>
      </div>
      <div className="absolute -z-20 w-full h-5/6 top-0 left-0 bg-[#FFE6E6]" />
      <div className="absolute -z-10 w-[400px] h-[400px] bottom-0 right-0 bg-[#FF5C5C]" />
    </div>
  );
};

export default Home;
