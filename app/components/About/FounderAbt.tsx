"use client";
import Image from "next/image";
import { zodiak } from "@/app/fonts";
import { satoshi } from "@/app/fonts";

export default function FounderAbt() {
  return (
    <section className="bg-[#eaf0eb] py-16 px-5 sm:px-8 md:px-16 lg:px-24">
      <div className="text-center mb-12">
        <h2
          className={`${zodiak.className} text-3xl sm:text-4xl md:text-5xl font-semibold mb-3 text-[#1b3233]`}
        >
          Meet the Founder
        </h2>
        <p
          className={`${satoshi.className} text-sm sm:text-base md:text-lg text-[#1b3233]`}
        >
          Driven by a passion for innovation, our founder envisions solutions
          that transform ideas into impact.
        </p>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16 mb-16">
        <div className="flex justify-center md:justify-start w-full md:w-1/2">
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/assests/header/about section images/founder/founder.jpg"
              alt="Founder"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="w-full md:w-1/2 bg-[#ceead5] rounded-xl p-6 sm:p-8 md:p-10 shadow-md">
          <p
            className={`${satoshi.className} text-sm sm:text-base text-gray-600 font-medium uppercase mb-1`}
          >
            Co-Founder & Partner
          </p>
          <h3
            className={`${zodiak.className} text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 text-[#1b3233]`}
          >
            Jatin Panchal
          </h3>
          <hr className="border-gray-400 mb-4 w-16" />
          <p
            className={`${satoshi.className} text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed`}
          >
            Jatin Panchal is a commercial transformation leader who blends
            hands-on industry experience with strong academic credentials. He
            completed his Executive Programme at INSEAD, France (2022–2023),
            holds an MBA from SIBM Pune, and a BE degree from BVCOE Pune. Beyond
            his corporate career, he also contributes to academia as a Visiting
            Faculty at leading business schools, teaching Sales and
            Omni-Channel Management.
            <br />
            <br />
            This unique mix of corporate leadership and academic contribution
            allows Jatin to combine real-world insights with structured
            frameworks, making LBC’s consulting approach both practical and
            future-ready.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16">
        <div className="flex justify-center md:justify-end w-full md:w-1/2">
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/assests/header/about section images/founder/founder.jpg"
              alt="Founder"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Left Container (Content) */}
        <div className="w-full md:w-1/2 bg-[#ceead5] rounded-xl p-6 sm:p-8 md:p-10 shadow-md">
          <p
            className={`${satoshi.className} text-sm sm:text-base text-gray-600 font-medium uppercase mb-1`}
          >
            Co-Founder & Partner
          </p>
          <h3
            className={`${zodiak.className} text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 text-[#1b3233]`}
          >
            Vinod Rao
          </h3>
          <hr className="border-gray-400 mb-4 w-16" />
          <p
            className={`${satoshi.className} text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed`}
          >
            Vinod Rao brings deep expertise in operations and strategy,
            driving innovation and process optimization. She has extensive
            experience leading transformation projects across global markets and
            ensures that every business decision aligns with long-term vision
            and client satisfaction.
            <br />
            <br />
            Her commitment to sustainable growth and excellence makes her an
            integral part of LBC’s leadership team, bridging business strategy
            with execution excellence.
          </p>
        </div>
      </div>
    </section>
  );
}
