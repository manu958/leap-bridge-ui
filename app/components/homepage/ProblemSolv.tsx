import React from "react";
import { zodiak } from "@/app/fonts";
import { satoshi } from "@/app/fonts";

const ProblemSolv = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row py-[60px]">
      <div className="max-w-[1400px] mx-auto px-[24px] flex md:flex-row flex-col gap-[64px]">
        <div className="w-full md:sticky md:top-[50px] h-fit md:py-[60px] ">
          <div className="text-lg max-w-md mb-3 md:text-start text-center">
            <h2
              className={`${zodiak.className} md:text-[40px] text-[32px] text-[#1B3233] mb-3 leading-[1.3]`}
            >
              Process driven for delivering growth
            </h2>
            <p
              className={`${satoshi.className} text-[20px] text-[#1B3233] mb-[35px]`}
            >
              We implement proven sales frameworks and tech solutions to expand your market reach and boost profitability.
            </p>
            <button className={`${satoshi.className} bg-[var(--dgreen)] text-[#ECF6F2] text-[20px] flex justify-center items-center h-[52px] px-[32px] rounded-[50px] md:m-0 mto`}
            >Talk to Us</button>
          </div>
        </div>

        <div className="w-full *:bg-[#d6ebe2] *:rounded-lg right-sticky-process text-[#1B3233] *:md:p-[80px] *:p-8 md:py-[60px]">
          <div>
            <h3
              className={`${zodiak.className} text-[60px] md:text-[80px] lg:text-[100px] font-light opacity-30 mb-8 md:mb-[110px] leading-none`}
            >
              1
            </h3>
            <h4
              className={`${zodiak.className} font-normal leading-[120%] text-[20px] md:text-[22px] lg:text-[26px] mb-4 md:mb-6 lg:mb-8`}
            >
              Research & Analysis
            </h4>
            <p
              className={`${satoshi.className} text-[16px] md:text-[18px] lg:text-[20px] mt-2`}
            >
              We conduct deep market research and data analysis to uncover your key growth opportunities and strategic challenges.
            </p>
          </div>

          <div>
            <h3
              className={`${zodiak.className} text-[60px] md:text-[80px] lg:text-[100px] font-light opacity-30 mb-8 md:mb-[80px] leading-none`}
            >
              2
            </h3>
            <h4
              className={`${zodiak.className} font-normal leading-[120%] text-[20px] md:text-[22px] lg:text-[26px] mb-4 md:mb-6 lg:mb-8`}
            >
              Strategy & Planning
            </h4>
            <p
              className={`${satoshi.className} text-[16px] md:text-[18px] lg:text-[20px] mt-2`}
            >
             We build data-driven strategies for market entry and transformation, creating your clear roadmap to achieve growth.
            </p>
          </div>

          <div>
            <h3
              className={`${zodiak.className} text-[60px] md:text-[80px] lg:text-[100px] font-light opacity-30 mb-8 md:mb-[80px] leading-none`}
            >
              3
            </h3>
            <h4
              className={`${zodiak.className} font-normal leading-[120%] text-[20px] md:text-[22px] lg:text-[26px] mb-4 md:mb-6 lg:mb-8`}
            >
               Consulting & Enablement
            </h4>
            <p
              className={`${satoshi.className} text-[16px] md:text-[18px] lg:text-[20px] mt-2`}
            >
              Our experts implement new processes and technology with hands-on training for your team's success.
            </p>
          </div>

          <div>
            <h3
              className={`${zodiak.className} text-[60px] md:text-[80px] lg:text-[100px] font-light opacity-30 mb-8 md:mb-[80px] leading-none`}
            >
              4
            </h3>
            <h4
              className={`${zodiak.className} font-normal leading-[120%] text-[20px] md:text-[22px] lg:text-[26px] mb-4 md:mb-6 lg:mb-8`}
            >
              Implementation & Growth
            </h4>
            <p
              className={`${satoshi.className} text-[16px] md:text-[18px] lg:text-[20px] mt-2`}
            >
              We guide full strategy execution to drive your measurable outcomes and sustainable revenue growth.
            </p>
          </div>
        </div>

        {/* <div className="md:w-1/2 w-full p-8 space-y-6 right-sticky-process text-[#1B3233]">

                    <div className="bg-[#d6ebe2] rounded-lg p-28  ">
                        <h3 className={`${zodiak.className} text-5xl font-light opacity-30 text-[100px] mb-16`}>1</h3>
                        <h4 className={`${zodiak.className} font-normal leading-[120%] text-[26px] mb-8`}>Research</h4>
                        <p className={`${satoshi.className} text-sm text-[20px] mt-2`}>
                            Phasellus nec sem in justo pellentesque facilisis. Aliquam lorem
                            ante, dapibus in, viverra quis, feugiat a, tellus. Nam pretium
                            turpis et arcu.
                        </p>
                    </div>

                    <div className="bg-[#d6ebe2] rounded-lg p-28">
                        <h3 className={`${zodiak.className} text-5xl text-[100px] opacity-30 font-light mb-16`}>2</h3>
                        <h4 className={`${zodiak.className} font-normal leading-[120%] text-[26px] mb-8`}>Ideation</h4>
                        <p className={`${satoshi.className} text-sm text-[20px] mt-2`}>
                            Phasellus nec sem in justo pellentesque facilisis. Aliquam lorem
                            ante, dapibus in, viverra quis, feugiat a, tellus. Nam pretium
                            turpis et arcu.
                        </p>
                    </div>

                    <div className="bg-[#d6ebe2] rounded-lg p-28">
                        <h3 className={`${zodiak.className} text-5xl font-light opacity-30 text-[100px] mb-16`}>3</h3>
                        <h4 className={`${zodiak.className} font-normal leading-[120%] text-[26px] mb-8`}>Design</h4>
                        <p className={`${satoshi.className} text-sm text-[20px] mt-2`}>
                            Phasellus nec sem in justo pellentesque facilisis. Aliquam lorem
                            ante, dapibus in, viverra quis, feugiat a, tellus. Nam pretium
                            turpis et arcu.
                        </p>
                    </div>

                    <div className="bg-[#d6ebe2] rounded-lg p-28">
                        <h3 className={`${zodiak.className} text-5xl text-[100px] opacity-30 font-light mb-16`}>4</h3>
                        <h4 className={`${zodiak.className} font-normal leading-[120%] text-[26px] mb-8`}>Develop & Test</h4>
                        <p className={`${satoshi.className} text-sm text-[20px] mt-2`}>
                            Phasellus nec sem in justo pellentesque facilisis. Aliquam lorem
                            ante, dapibus in, viverra quis, feugiat a, tellus. Nam pretium
                            turpis et arcu.
                        </p>
                    </div>

                </div> */}
      </div>
    </section>
  );
};

export default ProblemSolv;
