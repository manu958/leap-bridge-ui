"use client";

import React from "react";
import Image from "next/image";


const AboutHero: React.FC = () => {
  return (
    <>

      <main className="w-full">
        {/* Hero Section */}
        <section className="relative h-screen min-h-[560px]">
          {/* Background Image */}
          <Image
            src="/assests/header/about section images/aboutbimage1.jpg"
            alt="Team collaborating"
            fill
            className="object-cover"
            priority
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#062623]/85 via-[#062623]/60 to-transparent pointer-events-none" />

          {/* Content */}
          <div className="relative z-10 container mx-auto h-full flex items-center">
            <div className="px-6 md:px-10 lg:px-16 xl:px-24 max-w-4xl">
              {/* Heading */}
              <h1 className="font-serif text-[44px] md:text-[64px] lg:text-[72px] leading-[0.98] md:leading-[0.95] text-[#d7efe6]">
                Serious about growth. Strategic in action.  
              </h1>

              {/* Subheading */}
              <p className="mt-6 text-lg md:text-xl text-[#bfe6d8]">
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
