"use client";

import React from "react";
import Image from "next/image";

const AboutHero: React.FC = () => {
  return (
    <>
      <main className="w-full">
        {/* Hero Section */}
        <section className="relative h-[90vh] min-h-[560px] sm:h-screen">
          {/* Background Image */}
          <Image
            src="/assests/header/about section images/aboutbimg.jpg"
            alt="Team collaborating"
            fill
            className="object-cover"
            priority
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#062623]/90 via-[#062623]/70 to-transparent pointer-events-none" />

          {/* Content */}
          <div className="relative z-10 container mx-auto h-full flex items-center">
            <div className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 max-w-4xl">
              {/* Heading */}
              <h1 className="font-serif text-[32px] sm:text-[44px] md:text-[64px] lg:text-[72px] leading-[1.05] sm:leading-[0.98] md:leading-[0.95] text-[#d7efe6]">
                Serious about growth.<br className="hidden sm:block" />
                Strategic in action.
              </h1>

              {/* Subheading */}
              <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-[#bfe6d8]">
                Leading the 2025 digital revolution.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AboutHero;
