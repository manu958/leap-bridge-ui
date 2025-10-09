"use client";
import React, { useEffect } from "react";
import { satoshi, zodiak } from "@/app/fonts";
import Image from "next/image";

const MainBanner: React.FC = () => {
  useEffect(() => {
    import("scrollreveal").then((ScrollRevealModule) => {
      const ScrollReveal = ScrollRevealModule.default;

      ScrollReveal().reveal(".heading-home h1", {
        origin: "bottom",
        distance: "100px",
        duration: 800,
        delay: 100,
        easing: "ease-out",
        reset: false,
      });

      ScrollReveal().reveal(".heading-home p", {
        origin: "bottom",
        distance: "100px",
        duration: 800,
        delay: 500,
        easing: "ease-out",
        reset: false,
      });
    });
  }, []);

  return (
    <div className="relative w-full flex flex-col items-center justify-center text-center">
      {/* Video Background */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="/assests/header/bg-vedio/videoplayback.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Overlay to preserve color */}
      <div className="absolute top-0 left-0 w-full h-full bg-[var(--dgreen)]/80 z-10"></div>

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center px-4 w-full max-w-[1180px]">
        {/* Decorative Bars */}
        <div className="flex gap-[6px] mb-6 mt-16 md:mt-[118px] justify-center">
          <span className="w-8 h-8 rounded-full bg-[#CEEAD54D]"></span>
          <span className="w-[52px] h-8 rounded-[40px] bg-[#CEEAD5]"></span>
          <span className="w-8 h-8 rounded-full bg-[#CEEAD54D]"></span>
        </div>

        {/* Heading Section */}
        <div className="heading-home mb-[80px] flex flex-col items-center text-center">
          <h1
            className={`${zodiak.className} text-3xl sm:text-5xl md:text-6xl max-w-2xl font-serif font-semibold text-[#DFFFE0] leading-tight heading-h`}
          >
            Marketing That Delivers Results
          </h1>
          <p
            className={`${satoshi.className} subtitle-h mt-[23px] max-w-2xl text-base sm:text-lg text-[#CEEAD5]`}
          >
            We combine consulting insight and execution to deliver high-impact sales outcomes.
          </p>
        </div>

        {/* Image Section */}
        <div className="mainbanner w-full flex justify-center">
          <Image
            src="/assests/header/images/mainimage.jpg"
            alt="Main Banner"
            width={1000}
            height={1000}
            className="banner-pic border-[20px] md:border-[60px] border-[var(--lgreen2)] border-b-0"
          />
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
