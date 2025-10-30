"use client";
import React, { useEffect } from "react";

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
    <div className="relative w-full h-[100vh] flex items-center justify-center overflow-hidden">
      {/* YouTube Background Video (Full Width + Height) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <iframe
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{
            width: '100vw',
            height: '56.25vw', // 16:9 aspect ratio
            minHeight: '100vh',
            minWidth: '177.77vh', // 16:9 aspect ratio
          }}
          src="https://www.youtube.com/embed/IP3vF2jpnJk?autoplay=1&mute=1&loop=1&playlist=IP3vF2jpnJk&controls=0&showinfo=0&modestbranding=1&fs=0&rel=0&disablekb=1"
          title="Background Video"
          frameBorder="0"
          allow="autoplay; fullscreen"
        ></iframe>
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#1a3d3d]/80 z-10"></div>

      {/* Text Content */}
      <div className="relative z-20 flex flex-col items-start justify-end h-full w-full max-w-[1600px] mx-auto px-[12px] md:px-[24px] pb-[100px]">
        <div className="heading-home flex flex-col items-start text-start">
          <p className="subtitle-h mt-[23px] text-base sm:text-lg text-[#CEEAD5]">
            From Insight to Impact
          </p>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold text-[#DFFFE0] leading-tight heading-h">
            We Make it Happen
          </h1>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;