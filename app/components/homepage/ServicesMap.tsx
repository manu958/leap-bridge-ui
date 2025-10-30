import React from "react";
import Image from "next/image";

import { poppins } from "@/app/fonts";
const ServicesMap = () => {
  return (
    <section className="bg-white">
      <div id="about" className="max-w-7xl mx-auto md:px-[24px] px-[12px] py-16 mx-auto flex flex-col md:flex-row items-start md:items-center gap-10 md:gap-16">
        
        {/* === Left Column (Text) === */}
        <div className="md:w-1/2 w-full">
          <h2
            className={`${poppins.className} text-[#1B3233] text-2xl sm:text-3xl md:text-5xl font-extrabold mb-2 leading-snug`}
          >
            What do we do <span className="text-[#1B3233]">?</span>
          </h2>

          <h3
            className={`${poppins.className} text-[#4A7C59] text-base sm:text-lg md:text-xl font-medium mb-6`}
          >
            Driving Growth Through Transformation.
          </h3>

          <p
            className={`${poppins.className} text-gray-700 text-[15px] sm:text-base md:text-[17px] leading-relaxed`}
          >
            LeapBridge Consulting is a boutique growth and transformation
            advisory firm helping consumer-facing businesses unlock scale and
            performance. We specialize in Route-to-Market redesign, sales
            excellence, and execution-led transformation across FMCG,
            healthcare, and consumer retail.
          </p>

          <br className="hidden sm:block" />

          <p
            className={`${poppins.className} text-gray-700 text-[15px] sm:text-base md:text-[17px] leading-relaxed`}
          >
            With over 55 years of combined leadership experience, we bring
            strategic depth and executional rigor, powered by sales technology
            and AI-driven insights that enable smarter, faster decisions.
          </p>

          <br className="hidden sm:block" />

          <p
            className={`${poppins.className} text-gray-700 text-[15px] sm:text-base md:text-[17px] leading-relaxed`}
          >
            From digital sales enablement to channel transformation, we help
            brands bridge strategy and execution to drive measurable, lasting
            growth.
          </p>
        </div>

        {/* === Right Column (Image) === */}
        <div className="md:w-1/2 w-full flex justify-center md:justify-end">
          <div className="border-[8px] border-[#1B3233] rounded-md p-2 inline-block">
            <Image
              src="/assests/header/Homepage/transformation.jpg"
              alt="Team celebrating growth"
              width={450}
              height={450}
              className="rounded-sm object-cover w-full h-auto max-w-[400px] sm:max-w-[450px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesMap;
