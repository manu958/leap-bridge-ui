"use client";
import Image from "next/image";
import { zodiak } from "@/app/fonts";
import { satoshi } from "@/app/fonts";

export default function HappyCustomers() {
  return (
    <section className="bg-[#F3FBF8] py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* LEFT IMAGE SECTION */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/assests/header/about section images/2_centeredcircles.svg" 
            alt="Happy Customer"
            width={600}
            height={600}
            className="w-full h-auto max-w-[500px] object-contain"
          />
        </div>

        {/* RIGHT TEXT SECTION */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2
            className={`${zodiak.className} text-[28px] md:text-[40px] font-medium text-[#0D2B27] leading-tight`}
          >
            Happy customers in the center of us.
          </h2>

          <p
            className={`${satoshi.className} text-[#30403F] text-[16px] leading-relaxed`}
          >
            In ac felis quis tortor malesuada pretium. Morbi mattis ullamcorper
            velit. Etiam ut purus mattis mauris sodales aliquam.
          </p>

          <ul className="space-y-2">
            {[
              "something to say",
              "and something extra",
              "and finish on this point",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-2 text-[#0D2B27] text-[16px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-[#0D2B27]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </li>
            ))}
          </ul>

          <button className="bg-[#0D2B27] text-white px-6 py-3 rounded-full text-[16px]">
            Contact us
          </button>
        </div>
      </div>
    </section>
  );
}
