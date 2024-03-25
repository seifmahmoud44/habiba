import React, { useEffect } from "react";
import mainImg from "../images/mainpic.JPG";
import gsap from "gsap";
const Home = ({ navAnimation }) => {
  useEffect(() => {
    const tl = gsap.timeline();
    if (navAnimation) {
      tl.to(".text", {
        x: 0,
        ease: "power3.out",
        stagger: 0.2,
      }).to(".img", { x: 0, ease: "elastic.out", duration: 2 });
    }
  }, [navAnimation]);
  return (
    <div className=" h-[calc(100vh-100px)]  relative">
      <div className="w-5/6 m-auto h-full flex justify-center items-center">
        <div className="bg-[#FF8A8A] max-w-[500px] h-full py-16 px-7 flex flex-col gap-10 max-md:w-full max-md:justify-center">
          <h1 className="text-white text-5xl font-bold max-md:text-[40px] max-md:text-nowrap text -translate-x-[600px] overflow-hidden">
            Hand Skilled
          </h1>
          <h2 className="text-white text-4xl font-bold max-md:text-2xl max-md:text-nowrap text -translate-x-[600px] overflow-hidden">
            About our company
          </h2>
          <p className="text-white text-xl text -translate-x-[600px] overflow-hidden">
            Hand Skilled is one of the leading companies in the field of
            manufacturing boxes in Egypt and the Arab world <br /> Leaders in
            manufacturing gold, jewelry and alloy boxes for the largest brands
            inside and outside Egypt
          </p>
        </div>
        <div className="w-full flex justify-center items-center h-full max-md:hidden ">
          <div className="overflow-hidden">
            <img
              className="size-[700px] object-cover img -translate-x-full"
              src={mainImg}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="absolute -z-20 w-full h-5/6 top-0 left-0 bg-[#FFE6E6]" />
      <div className="absolute -z-10  size-[400px] bottom-0 right-0 bg-[#FF5C5C] max-md:size-[200px]" />
    </div>
  );
};

export default Home;
