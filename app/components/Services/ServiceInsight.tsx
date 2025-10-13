"use client";
import Image from "next/image";
import { zodiak } from "@/app/fonts";
import { satoshi } from "@/app/fonts";

export default function ServiceInsight() {
  return (
    <section className="bg-[#eaf0eb] py-12 px-5 sm:px-8 md:px-16 lg:px-24">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className={`${zodiak.className} text-3xl sm:text-4xl md:text-5xl font-semibold mb-3`}>
          Meet the Founder
        </h2>
        <p className={`${satoshi.className} text-sm sm:text-base md:text-lg text-gray-700`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* Founder card */}
      <div className="max-w-4xl mx-auto bg-[#dbe9e1] rounded-xl flex flex-col md:flex-row items-center p-6 sm:p-10 gap-6">
        {/* Image */}
        <div className="flex-shrink-0 w-40 h-40 sm:w-48 sm:h-48 relative rounded-xl overflow-hidden">
          <Image
            src="/assests/founder.jpg" // replace with your founder image
            alt="Founder"
            fill
            className="object-cover"
          />
        </div>

        {/* Info */}
        <div className="flex-1">
          <p className={`${satoshi.className} text-sm sm:text-base text-gray-600 font-medium uppercase mb-1`}>CEO</p>
          <h3 className={`${satoshi.className} text-xl sm:text-2xl md:text-3xl font-semibold mb-3`}>Jack Hemsworth</h3>
          <hr className="border-gray-400 mb-4" />
          <p className={`${satoshi.className} text-sm sm:text-base md:text-lg text-gray-700`}>
            “Fusce vel dui. In turpis. Maecenas nec odio et ante tincidunt tempus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia.”
          </p>
        </div>
      </div>
    </section>
  );
}
