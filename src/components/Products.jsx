import React, { useState } from "react";
import Title from "./Title";
import modelM from "../images/modelm.jpg";
import modelR from "../images/modelr.jpg";
import modelN3 from "../images/modeln3.jpg";
import modelG from "../images/modelg.jpg";
import modelN1 from "../images/mainpic.JPG";
import modelC from "../images/modelc.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Controller } from "swiper/modules";

import "swiper/css";

const Products = () => {
  const [controlledSwiper, setControlledSwiper] = useState(null);

  return (
    <div className="my-10 h-[80vh]" id="products">
      <Title title={"Products"} />
      <div className="relative h-full w-5/6 m-auto max-md:-translate-y-20">
        <div className=" max-md:hidden  -z-10 absolute right-0 top-1/2 -translate-y-1/2 h-[400px] w-2/3 bg-[#FF6666]">
          <div className="h-full flex flex-col justify-center text-left w-fit m-auto items-center">
            <div className="w-fit">
              <Swiper
                className="w-80 m-auto translate-x-28"
                slidesPerView={1}
                onSwiper={setControlledSwiper}
                autoplay={{ delay: 1500, disableOnInteraction: true }}
                loop={true}
                modules={[Autoplay, Controller]}
              >
                <SwiperSlide className="">
                  <h1 className="text-white text-4xl font-bold">
                    Product: <span className="font-normal">ring</span>
                  </h1>
                  <h1 className="text-white text-4xl font-normal">
                    Length 7.5
                  </h1>
                  <h1 className="text-white text-4xl font-normal">Width 7.5</h1>
                  <h1 className="text-white text-4xl font-normal">Height 6</h1>
                </SwiperSlide>
                <SwiperSlide>
                  <h1 className="text-white text-4xl font-bold">
                    Product: <span className="font-normal">ring</span>
                  </h1>
                  <h1 className="text-white text-4xl font-normal">
                    Length 7.5
                  </h1>
                  <h1 className="text-white text-4xl font-normal">Width 7.5</h1>
                  <h1 className="text-white text-4xl font-normal">Height 6</h1>
                </SwiperSlide>
                <SwiperSlide>
                  <h1 className="text-white text-4xl font-bold">
                    Product: <span className="font-normal">ring</span>
                  </h1>
                  <h1 className="text-white text-4xl font-normal">
                    Length 7.5
                  </h1>
                  <h1 className="text-white text-4xl font-normal">Width 7.5</h1>
                  <h1 className="text-white text-4xl font-normal">Height 6</h1>
                </SwiperSlide>
                <SwiperSlide>
                  <h1 className="text-white text-4xl font-bold">
                    Product: <span className="font-normal">ring</span>
                  </h1>
                  <h1 className="text-white text-4xl font-normal">
                    Length 7.5
                  </h1>
                  <h1 className="text-white text-4xl font-normal">Width 7.5</h1>
                  <h1 className="text-white text-4xl font-normal">Height 6</h1>
                </SwiperSlide>
                <SwiperSlide>
                  <h1 className="text-white text-4xl font-bold">
                    Product: <span className="font-normal">ring</span>
                  </h1>
                  <h1 className="text-white text-4xl font-normal">
                    Length 10.5
                  </h1>
                  <h1 className="text-white text-4xl font-normal">Width 7.5</h1>
                  <h1 className="text-white text-4xl font-normal">Height 4</h1>
                </SwiperSlide>
                <SwiperSlide>
                  <h1 className="text-white text-4xl font-bold">
                    Product: <span className="font-normal">ring</span>
                  </h1>
                  <h1 className="text-white text-4xl font-normal">Length 19</h1>
                  <h1 className="text-white text-4xl font-normal">Width 14</h1>
                  <h1 className="text-white text-4xl font-normal">Height 5</h1>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
        <div className=" max-md:w-full h-full max-md:h-auto">
          <div className="max-md:w-full w-1/2 h-full max-md:h-auto flex justify-center items-center relative">
            <div className="max-md:size-40 z-50 absolute right-0 max-md:right-1/2  space-y-4 max-md:bottom-0 max-md:top-auto max-md:translate-y-0  top-1/2 -translate-y-1/2 translate-x-1/2 size-52 bg-[#FFE6E6] flex flex-col justify-center items-center">
              <Swiper
                className="w-full"
                slidesPerView={1}
                allowTouchMove={false}
                controller={{ control: controlledSwiper }}
                autoplay={{
                  delay: 1500,
                  disableOnInteraction: false,
                }}
                loop={true}
                modules={[Autoplay, Controller]}
              >
                <SwiperSlide className="">
                  <h1 className="text-[#FF0000] text-4xl max-md:text-3xl font-bold text-center ">
                    Model
                  </h1>
                  <h1 className="text-[#FF0000] text-4xl max-md:text-3xl font-bold text-center ">
                    M
                  </h1>
                </SwiperSlide>
                <SwiperSlide>
                  <h1 className="text-[#FF0000] text-4xl max-md:text-3xl font-bold text-center ">
                    Model
                  </h1>
                  <h1 className="text-[#FF0000] text-4xl max-md:text-3xl font-bold text-center ">
                    R
                  </h1>
                </SwiperSlide>
                <SwiperSlide>
                  <h1 className="text-[#FF0000] text-4xl max-md:text-3xl font-bold text-center ">
                    Model
                  </h1>
                  <h1 className="text-[#FF0000] text-4xl max-md:text-3xl font-bold text-center ">
                    G
                  </h1>
                </SwiperSlide>
                <SwiperSlide>
                  <h1 className="text-[#FF0000] text-4xl max-md:text-3xl font-bold text-center ">
                    Model
                  </h1>
                  <h1 className="text-[#FF0000] text-4xl max-md:text-3xl font-bold text-center ">
                    C
                  </h1>
                </SwiperSlide>
                <SwiperSlide>
                  <h1 className="text-[#FF0000] text-4xl max-md:text-3xl font-bold text-center ">
                    Model
                  </h1>
                  <h1 className="text-[#FF0000] text-4xl max-md:text-3xl font-bold text-center ">
                    N1
                  </h1>
                </SwiperSlide>
                <SwiperSlide>
                  <h1 className="text-[#FF0000] text-4xl max-md:text-3xl font-bold text-center ">
                    Model
                  </h1>
                  <h1 className="text-[#FF0000] text-4xl max-md:text-3xl font-bold text-center ">
                    N3
                  </h1>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="w-full h-[600px] overflow-hidden flex justify-center items-center swiper-container">
              <Swiper
                slidesPerView={1}
                allowTouchMove={false}
                onSwiper={setControlledSwiper}
                loop={true}
                modules={[Autoplay, Controller]}
              >
                <SwiperSlide className="">
                  <img src={modelM} alt="" className="object-cover" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={modelR} alt="" className="object-cover" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={modelG} alt="" className="object-cover" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={modelC} alt="" className="object-cover" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={modelN1} alt="" className="object-cover" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={modelN3} alt="" className="object-cover" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
