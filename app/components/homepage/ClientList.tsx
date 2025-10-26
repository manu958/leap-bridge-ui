import React from "react";
import Image from "next/image";

export default function ClientList() {
  return (
    <section className="w-full py-[60px] md:py-[120px] bg-[#daebe3]">
      <div className="max-w-[1080px] mx-auto px-4">
        <div
          className="
            flex flex-wrap
            justify-center md:justify-between
            gap-6 md:gap-8
            w-full
          "
        >
          <Image
            src="/assests/header/Website-logos/Marico_Logo.png"
            alt="Marico Logo"
            width={120}
            height={60}
            className="w-[50px] sm:w-[100px] md:w-[70px] h-auto object-contain"
          />
          <Image
            src="/assests/header/Website-logos/mondelez-international-logo.png"
            alt="Mondelez Logo"
            width={120}
            height={60}
            className="w-[50px] sm:w-[100px] md:w-[70px] h-auto object-contain"
          />
          <Image
            src="/assests/header/Website-logos/nobel-hygine.png"
            alt="Nobel Hygine Logo"
            width={120}
            height={60}
            className="w-[50px] sm:w-[100px] md:w-[70px] h-auto object-contain"
          />
          <Image
            src="/assests/header/Website-logos/P&G-Logo.png"
            alt="P&G Logo"
            width={120}
            height={60}
            className="w-[50px] sm:w-[100px] md:w-[70px] h-auto object-contain"
          />
          <Image
            src="/assests/header/Website-logos/parle-Agro.png"
            alt="Parle Agro Logo"
            width={120}
            height={60}
            className="w-[50px] sm:w-[100px] md:w-[70px] h-auto object-contain"
          />
          <Image
            src="/assests/header/Website-logos/procter-and-gamble-pg-new9499.jpg"
            alt="Procter & Gamble Logo"
            width={120}
            height={60}
            className="w-[50px] sm:w-[100px] md:w-[70px] h-auto object-contain"
          />
          <Image
            src="/assests/header/Website-logos/Reckitt-Benckiser-logo.png"
            alt="Reckitt Benckiser Logo"
            width={120}
            height={60}
            className="w-[50px] sm:w-[100px] md:w-[70px] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
