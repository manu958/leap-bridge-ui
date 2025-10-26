import React from "react";
import Image from "next/image";

export default function ClientList() {
  return (
    <section className="w-full pt-[60px] md:pt-[60px] pb-0 bg-[#daebe3]">
      <div className="max-w-[1080px] mx-auto px-4 space-y-10 text-center">
        {/* Heading */}
        <h2
          className={`text-gray-800 text-center text-[22px] sm:text-[26px] md:text-[50px] font-normal mb-6 sm:mb-8 md:mb-10 leading-snug`}
        >
          <strong>Combined</strong> Work Experience
        </h2>

        {/* Row 1 */}
        <div
          className="
            flex flex-wrap
            justify-center sm:justify-center md:justify-between
            gap-4 sm:gap-6 md:gap-8
            w-full
          "
        >
          {[
            "abbot.png",
            "Cipla_logo.png",
            "DANONE_LOGO_HORIZONTAL.png",
            "emami.png",
            "godrej.png",
            "hershey_company-logo_brandlogos.net_pcliv.png",
          ].map((logo, index) => (
            <Image
              key={index}
              src={`/assests/header/Website-logos/${logo}`}
              alt={`${logo.split(".")[0]} Logo`}
              width={120}
              height={60}
              className="w-[70px] sm:w-[90px] md:w-[100px] h-auto object-contain"
            />
          ))}
        </div>

        {/* Row 2 */}
        <div
          className="
            flex flex-wrap
            justify-center sm:justify-center md:justify-between
            gap-4 sm:gap-6 md:gap-8
            w-full
          "
        >
          {[
            "Marico_Logo.png",
            "mondelez-international-logo.png",
            "nobel-hygine.png",
            "P&G-Logo.png",
            "parle-Agro.png",
            "procter-and-gamble-pg-new9499.jpg",
            "Reckitt-Benckiser-logo.png",
          ].map((logo, index) => (
            <Image
              key={index}
              src={`/assests/header/Website-logos/${logo}`}
              alt={`${logo.split(".")[0]} Logo`}
              width={120}
              height={60}
              className="w-[70px] sm:w-[90px] md:w-[80px] h-auto object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
