import React from "react";
import Image from "next/image";
import { zodiak } from "@/app/fonts";
import { satoshi } from "@/app/fonts";

const ServicesMap = () => {
  return (
    <section className="bg-[#daebe3] py-[120px] px-4 md:px-8">
      <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Left Column: Text */}
        <div className="md:w-1/2">
          <h2 className="{`${zodiak.className} text-3xl text-[#1B3233] md:text-4xl mb-6">
            <span className="font-bold">Driving Growth</span> Through Transformation
          </h2>
          <p className={`${satoshi.className} text-base md:text-lg text-gray-800 leading-relaxed`}>
            LeapBridge Consulting is a boutique growth and transformation advisory firm helping consumer-facing businesses unlock scale and performance. We specialize in Route-to-Market redesign, sales excellence, and execution-led transformation across FMCG, healthcare, and consumer retail.
            <br /><br />
            With over 55 years of combined leadership experience, we bring strategic depth and executional rigor—powered by sales technology and AI-driven insights that enable smarter, faster decisions.
            <br /><br />
            From digital sales enablement to channel transformation, we help brands bridge strategy and execution to drive measurable, lasting growth.
          </p>
        </div>

        {/* Right Column: Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Image
            src="/assests/header/about section images/vison-mision/missionimg.jpg"
            alt="Transformation Illustration"
            width={500}
            height={500}
            className="w-full max-w-[500px] h-auto rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesMap;
