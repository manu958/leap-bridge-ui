import React from "react";
// import img from "next/img";
import { poppins } from "@/app/fonts";

const WhoWeAre = () => {
  return (
    <section className="bg-[#DAEBE3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-[24px] py-12 md:py-16 relative md:text-start text-center">

        {/* === OUTER FLEX === */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-20">

          {/* === LEFT SECTION === */}
          <div className="relative md:w-[40%]  md:border-r-[1.5px] border-[#707070]/40 md:pr-12 brdr_topbtm">
            <h2
              className={`${poppins.className} text-[#1B3233] text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-tight`}
            >
              Who we are<span className="text-[#1B3233]">?</span>
            </h2>

            <div className="space-y-4">
              <p className={`${poppins.className} text-[#1B3233]/80 text-[15px] sm:text-[16px] leading-relaxed`}>
                Founded by <strong>Jatin Panchal</strong> and <strong>Vinod Rao</strong>, LeapBridge Consulting brings together over five decades of leadership across FMCG, healthcare, and consumer retail.
              </p>

              <p className={`${poppins.className} text-[#1B3233]/80 text-[15px] sm:text-[16px] leading-relaxed`}>
                Jatin is a commercial transformation expert who has led large-scale growth and channel acceleration, while Vinod is a seasoned P&amp;L leader known for driving sales excellence and executional discipline.
              </p>

              <p className={`${poppins.className} text-[#1B3233]/80 text-[15px] sm:text-[16px] leading-relaxed`}>
                Together, they combine strategic depth with field-tested insight to help organisations transform sales performance and unlock scalable growth.
              </p>
            </div>

            {/* === Arrow img (Desktop only) === */}
            <div className="hidden md:flex absolute top-1/2 -right-[50px] items-center">
              <img
                src="/assests/header/Group 6.png"
                alt="Arrow"
                width={200}
                height={200}
                className="object-contain max-w-[50px] h-auto w-full"
              />
            </div>
          </div>

          {/* === RIGHT SECTION === */}
          <div className="md:w-[60%] flex flex-col gap-10">

            {/* === Jatin Panchal === */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="w-full sm:w-[160px] flex-shrink-0 flex flex-col items-center sm:items-start text-center sm:text-left">
                <img
                  src="/assests/header/Homepage/Jatin-White-Ls-.jpg"
                  alt="Jatin Panchal"
                  width={140}
                  height={140}
                  className="rounded-md object-cover w-[120px] h-[120px] sm:w-[140px] sm:h-[140px]"
                />
                <h3 className={`${poppins.className} text-[#1B3233] text-lg sm:text-xl font-semibold mt-3 mb-1`}>
                  Jatin Panchal
                </h3>
                <p className={`${poppins.className} text-sm text-gray-600 leading-snug`}>
                  Founder &amp; Partner <br />
                  MBA: SIMSR <br />
                  Exec MBA: INSEAD — France
                </p>
              </div>

              <div>
                <p className={`${poppins.className} text-[#1B3233]/80 text-[15px] sm:text-[16px] leading-relaxed`}>
                  A commercial transformation leader with over 25 years of experience in FMCG &amp; consumer healthcare, driving growth, reach, and sales excellence across channels. Jatin has successfully led healthcare &amp; pharma transitions into consumer-facing FMCG businesses. He excels in go-to-market strategies, team building, and unlocking business momentum through insight-led execution.
                </p>
              </div>
            </div>

            {/* === Vinod Rao === */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="w-full sm:w-[160px] flex-shrink-0 flex flex-col items-center sm:items-start text-center sm:text-left">
                <img
                  src="/assests/header/Homepage/vinod.jpg"
                  alt="Vinod Rao"
                  width={140}
                  height={140}
                  className="rounded-md object-cover w-[120px] h-[120px] sm:w-[140px] sm:h-[140px]"
                />
                <h3 className={`${poppins.className} text-[#1B3233] text-lg sm:text-xl font-semibold mt-3 mb-1`}>
                  Vinod Rao
                </h3>
                <p className={`${poppins.className} text-sm text-gray-600 leading-snug`}>
                  Founder &amp; Partner <br />
                  MBA: JBIMS
                </p>
              </div>

              <div>
                <p className={`${poppins.className} text-[#1B3233]/80 text-[15px] sm:text-[16px] leading-relaxed`}>
                  A seasoned P&amp;L leader with over 30 years of experience across FMCG, healthcare, and retail banking. Vinod has led business turnarounds and large-scale distribution expansions, earning a reputation for seamless strategy execution. His deep expertise spans sales transformation, channel management, trade excellence, and hands-on experience in PE-backed environments.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
