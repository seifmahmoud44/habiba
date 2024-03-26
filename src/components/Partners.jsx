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
    <div className="w-5/6 m-auto max-md:w-full px-5" id="partners">
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
          <img
            src={logo1}
            alt=""
            className="w-full aspect-2/1 object-contain scale-75"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={logo2}
            alt=""
            className="w-full aspect-2/1 object-contain scale-75"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={logo3}
            alt=""
            className="w-full aspect-2/1 object-contain scale-75 "
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={logo4}
            alt=""
            className="w-full aspect-2/1 object-contain scale-75"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={logo5}
            alt=""
            className="w-full aspect-2/1 object-contain md:scale-75"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Partners;
