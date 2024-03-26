import React from "react";
import Title from "./Title";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import logo1 from "../images/logo1png.png";
import logo2 from "../images/logo2.png";
import logo3 from "../images/logo3.png";
import logo4 from "../images/logo4.png";
import logo5 from "../images/logo5.png";
import "swiper/css";
const Partners = () => {
  return (
    <div className="w-5/6 m-auto max-md:w-full px-5 relative" id="partners">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-[300px] h-[50%] bg-[#FF6666] max-md:-translate-y-[35%]"></div>
      <Title title={"Our Partners"} />
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        autoplay={{
          delay: 1500,
        }}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="mySwiper w-full"
      >
        <SwiperSlide>
          <div className="bg-[#FFE6E6] scale-50">
            <img
              src={logo1}
              alt=""
              className="w-full aspect-2/1 object-contain scale-50"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#FFE6E6] scale-50">
            <img
              src={logo2}
              alt=""
              className="w-full aspect-2/1 object-contain scale-50"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#FFE6E6] scale-50">
            <img
              src={logo3}
              alt=""
              className="w-full aspect-2/1 object-contain scale-50"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#FFE6E6] scale-50">
            <img
              src={logo4}
              alt=""
              className="w-full aspect-2/1 object-contain scale-50"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#FFE6E6] scale-50">
            <img
              src={logo5}
              alt=""
              className="w-full aspect-2/1 object-contain scale-50"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Partners;
