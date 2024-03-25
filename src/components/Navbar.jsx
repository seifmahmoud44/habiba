import React, { useEffect, useState } from "react";
import fb from "../images/facebook-app-symbol.png";
import whatsApp from "../images/whatsapp.png";
import logo from "../images/logo.png";
import menu from "../images/menu.png";
import close from "../images/close.png";
import gsap from "gsap";

const Navbar = ({ setNavAnimation }) => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    const screenWidth = window.innerWidth;
    const tl = gsap.timeline({ onComplete: () => setNavAnimation(true) });
    if (screenWidth < 500) {
      tl.from(".logo", {
        y: -500,
        opacity: 0,
        ease: "power4.out",
        duration: 0.5,
        delay: 0.5,
      });
    } else {
      tl.from(".logo", {
        y: -500,
        opacity: 0,
        ease: "power4.out",
        duration: 0.5,
        delay: 0.5,
      })
        .to(".link", {
          y: 0,
          opacity: 1,
          ease: "power4.out",
          stagger: 0.2,
        })
        .to(".social", {
          x: 0,
          opacity: 1,
          ease: "circ.inOut",
          stagger: 0.2,
        });
    }
  }, [open, setNavAnimation]);
  return (
    <div className="px-5">
      <div className="w-5/6 max-md:w-full m-auto h-24 flex justify-between items-center ">
        <img src={logo} alt="" className="w-52 logo translate-y-0 opacity-1 " />
        <div className="flex items-center gap-5 max-md:hidden">
          <div className="flex justify-start items-center gap-5">
            <a href="" className="link opacity-0 -translate-y-8">
              Home
            </a>
            <a href="" className="link opacity-0 -translate-y-8">
              About Us
            </a>
            <a href="" className="link opacity-0 -translate-y-8">
              Products
            </a>
            <a href="" className="link opacity-0 -translate-y-8">
              Capabilities
            </a>
            <a href="" className="link opacity-0 -translate-y-8">
              Our Partners
            </a>
            <a href="" className="link opacity-0 -translate-y-8">
              Call Us
            </a>
            <a
              href=""
              className="link opacity-0"
              style={{ fontFamily: "cairo" }}
            >
              العربية
            </a>
          </div>
          <div className="flex justify-center items-center gap-3">
            <a
              href="https://www.facebook.com/handskilled.eg"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 transition-all social opacity-0 -translate-x-3"
            >
              <img src={fb} alt="" className="w-4 cursor-pointer" />
            </a>
            <a
              href="https://wa.me/1157416797"
              className="hover:scale-110 transition-all social opacity-0 -translate-x-3"
              target="_blank"
              rel="noreferrer"
            >
              <img src={whatsApp} alt="" className="w-4 cursor-pointer" />
            </a>
          </div>
        </div>
        <img
          onClick={() => setOpen(!open)}
          src={menu}
          alt=""
          className="w-10 md:hidden cursor-pointer hover:scale-110 transition-all"
        />
      </div>
      <div
        className={`absolute top-0 z-50 ${
          open ? "left-0" : "-left-full"
        }  w-full h-screen bg-black transition-all bg-opacity-60`}
      >
        <img
          onClick={() => setOpen(false)}
          src={close}
          alt=""
          className="absolute top-8 right-8"
        />
        <div className="flex flex-col justify-center items-start gap-5 h-full ">
          <a
            href=""
            className=" text-4xl hover:pl-4 transition-all text-[#e52421] "
          >
            Home
          </a>
          <a
            href=""
            className=" text-4xl hover:pl-4 transition-all text-[#e52421] "
          >
            About Us
          </a>
          <a
            href=""
            className=" text-4xl hover:pl-4 transition-all text-[#e52421] "
          >
            Products
          </a>
          <a
            href=""
            className=" text-4xl hover:pl-4 transition-all text-[#e52421] "
          >
            Capabilities
          </a>
          <a
            href=""
            className=" text-4xl hover:pl-4 transition-all text-[#e52421] "
          >
            Our Partners
          </a>
          <a
            href=""
            className=" text-4xl hover:pl-4 transition-all text-[#e52421] "
          >
            Call Us
          </a>
          <a
            href=""
            className=" text-4xl hover:pl-4 transition-all text-[#e52421] "
            style={{ fontFamily: "cairo" }}
          >
            العربية
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
