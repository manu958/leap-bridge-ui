"use client";
import { useState } from "react";
import Image from "next/image";
import { zodiak } from "@/app/fonts";
import { satoshi } from "@/app/fonts";

const slides = [
  {
    id: 1,
    stat: "2x",
    title: "Empowering Faster Growth Journeys",
    description:
      "To be the trusted partner for businesses seeking to transform their sales and marketing capabilities, creating sustainable growth and measurable impact across industries.",
    image: "/assests/header/about section images/vison-mision/visionimg.jpg",
  },
  {
    id: 2,
    stat: "3x",
    title: "Driving Efficient and Measurable Impact",
    description:
      "To deliver innovative, practical, and scalable sales and marketing solutions that empower organisations to optimise processes, unlock efficiencies, and strengthen market presence.",
    image: "/assests/header/about section images/vison-mision/missionimg.jpg",
  },
];

export default function VisionAbout() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="bg-[#1b3233] text-white px-5 py-8 sm:py-12 sm:px-8 md:px-16 lg:px-24 overflow-hidden relative">
      {/* Top heading and arrows */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6 mb-6 sm:mb-10">
        <h2 className={`${zodiak.className} text-xl sm:text-2xl md:text-4xl font-semibold leading-snug`}>
          Empowering Businesses to <span className="text-[#cde0dc]">Scale Smarter</span>
        </h2>

        <div className="flex gap-2 sm:gap-3">
          <button
            onClick={prevSlide}
            className="bg-[#cde0dc] text-[#1b3233] rounded-full p-2 hover:bg-[#b8d1cc] transition"
            aria-label="Previous Slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="bg-[#cde0dc] text-[#1b3233] rounded-full p-2 hover:bg-[#b8d1cc] transition"
            aria-label="Next Slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Carousel slider */}
      <div className="w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="min-w-full">
              {/* Two-column layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
                {/* Left content card */}
                <div className="bg-[#ceead5] text-[#1b3233] rounded-tl-[60px] sm:rounded-tl-[90px] md:rounded-tl-[120px] rounded-br-[16px] p-4 sm:p-8 md:p-12 shadow-md">
                  <div className="flex flex-col sm:flex-row items-baseline gap-2 sm:gap-3 mb-4 pt-[60px] sm:pt-[90px]">
                    <span className={`${zodiak.className} text-[60px] sm:text-[80px] font-extrabold leading-[60px] sm:leading-[80px]`}>
                      {slide.stat}
                    </span>
                    <p className={`${satoshi.className} text-lg sm:text-[22px] leading-snug sm:leading-[80px] font-medium`}>
                      {slide.title}
                    </p>
                  </div>

                  <hr className="border-[#9cb6b1] mb-4 sm:mb-6" />

                  <p className={`${satoshi.className} text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 text-[#1b3233]/80`}>
                    {slide.description}
                  </p>

                  <div className="flex items-center gap-2">
                    <span className={`${satoshi.className} font-semibold text-sm sm:text-base`}>
                      Leap Bridge Consultancy
                    </span>
                  </div>
                </div>

                {/* Right image */}
                <div className="rounded-tr-[60px] sm:rounded-tr-[90px] md:rounded-tr-[120px] overflow-hidden">
                  <Image
                    src={slide.image}
                    alt="vision"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover transition-all duration-500"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
