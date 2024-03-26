import React, { useEffect } from "react";
import vid from "../images/vid.mp4";
import gsap from "gsap";
import ReactPlayer from "react-player";

const Home = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(".text", {
      x: 0,
      ease: "power3.out",
      stagger: 0.2,
    }).to(".img", { x: 0, ease: "power3.out", duration: 2 }, "<");
  }, []);
  return (
    <div className=" h-[calc(100vh-100px)]  relative" id="home">
      <div className="w-5/6 m-auto h-full flex justify-center items-center">
        <div className="bg-[#FF8A8A] max-w-[500px] h-full py-16 px-7 flex flex-col gap-10 max-md:gap-5 max-md:w-full max-md:justify-center overflow-hidden">
          <div className="hidden max-md:block">
            <div className="img-tow -translate-x-[600px]  hidden ">
              <ReactPlayer
                style={{ transform: "scale(1.2)" }}
                url={vid}
                loop
                playing
                muted
                width="900px"
                height="700px"
              />
            </div>
          </div>

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
            <div className="img -translate-x-[900px]">
              <ReactPlayer
                url={vid}
                loop
                playing
                muted
                width={"100%"}
                height={"100%"}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -z-20 w-full h-5/6 top-0 left-0 bg-[#FFE6E6]" />
      <div className="absolute -z-10  size-[400px] bottom-0 right-0 bg-[#FF5C5C] max-md:size-[200px]" />
    </div>
  );
};

export default Home;
