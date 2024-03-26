import React from "react";
import Title from "./Title";
import callImg from "../images/call.png";
import mailImg from "../images/mail.png";
import locationImg from "../images/location-pin.png";

const Footer = () => {
  return (
    <div className="w-5/6 m-auto " id="contact">
      <Title title={"Call Us"} />
      <div className="flex justify-center items-center max-md:flex-col gap-5 h-full">
        <iframe
          title="wow"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13696.80745261724!2d29.5684697!3d30.8810135!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f587da28773405%3A0x315ada2acf91f20e!2sHand%20Skilled!5e0!3m2!1sar!2seg!4v1711372355067!5m2!1sar!2seg"
          width="100%"
          height="500px"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-full bg-[#FFE6E6] p-6 max-md:mb-8"
        >
          <div className="flex justify-between gap-5 items-center max-md:flex-col">
            <div className="relative input-container w-full">
              <input
                required
                id="Name"
                type="text"
                className=" bg-white h-16 w-full py-3 px-6 focus-visible:outline-none text-[#FF0000]"
              />
              <label
                className="absolute top-1/2 left-5 -translate-y-1/2 transition-all text-[#FF0000] font-bold"
                htmlFor="Name"
              >
                Name
              </label>
            </div>
            <div className="relative input-container w-full">
              <input
                required
                id="phone"
                type="number"
                className="appearance-none bg-white h-16 w-full py-3 px-6 focus-visible:outline-none text-[#FF0000]"
              />
              <label
                className="absolute top-1/2 left-5 -translate-y-1/2 transition-all text-[#FF0000] font-bold"
                htmlFor="phone"
              >
                phone number
              </label>
            </div>
          </div>
          <div className="relative input-container w-full my-5">
            <input
              required
              id="email"
              type="text"
              className=" bg-white h-16 w-full py-3 px-6 focus-visible:outline-none text-[#FF0000]"
            />
            <label
              className="absolute top-1/2 left-5 -translate-y-1/2 transition-all text-[#FF0000] font-bold"
              htmlFor="email"
            >
              email
            </label>
          </div>
          <div className="relative input-container w-full my-5">
            <textarea
              rows={6}
              cols={30}
              required
              id="message"
              className=" bg-white  w-full py-3 px-6 focus-visible:outline-none text-[#FF0000] "
            />
            <label
              className="absolute top-6 left-5 -translate-y-1/2 transition-all text-[#FF0000] font-bold"
              htmlFor="message"
            >
              message
            </label>
          </div>
          <div className="flex justify-between items-start max-md:flex-col space-y-5">
            <div className="w-full text-left max-md:text-center">
              <button
                type="submit "
                className="px-6 py-3 text-white bg-[#FF0000] font-extrabold text-lg"
              >
                Send
              </button>
            </div>
            <div className="w-full space-y-4 ">
              <div className="flex justify-between items-start gap-5 ">
                <img src={callImg} alt="" className="w-6" />
                <a href="tel:1157416797" className="flex-grow">
                  1157416797
                </a>
              </div>
              <div className="flex justify-between items-start gap-5">
                <img src={mailImg} alt="" className="w-6" />
                <a href="mailto:“handskilled@icloud.com”" className="flex-grow">
                  Handskilled@icloud.com
                </a>
              </div>
              <div className="flex justify-between items-start gap-5">
                <img src={locationImg} alt="" className="w-6" />
                {/*eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className="flex-grow">
                  New Borg El Arab - Western Workshops Alexandria, Alexandria
                  Governorate, Egypt
                </a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Footer;
