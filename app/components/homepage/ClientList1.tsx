import React from "react";
// import Image from "next/image";
import { poppins } from "@/app/fonts";

export default function ClientList1() {
  return (
    <section className="w-full bg-[#ffff] py-[80px] ">
      <div className="max-w-7xl mx-auto md:px-[24px] px-[12px] py-16 mx-auto flex flex-col md:flex-row items-start justify-between gap-12">
        {/* LEFT SIDE – Logos */}
        <div className="w-full md:w-1/2 bg-white rounded-xl p-6 shadow-sm">
          <h2
            className={`${poppins.className} text-[#1B3233] text-[28px] sm:text-[32px] md:text-[36px] font-semibold mb-6`}
          >
            Exposure Across Iconic{" "}
            <span className="text-[#418B69]">Brands & Organisations</span>
          </h2>

          {/* Logo Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {[
              { src: "/assests/header/Website-logos/abbot.png", alt: "Abbott" },
              { src: "/assests/header/Website-logos/Cipla_logo.png", alt: "Cipla" },
              { src: "/assests/header/Website-logos/DANONE_LOGO_HORIZONTAL.png", alt: "Danone" },
              { src: "/assests/header/Website-logos/emami.png", alt: "Emami" },
              { src: "/assests/header/Website-logos/godrej.png", alt: "Godrej" },
              { src: "/assests/header/Website-logos/hershey_company-logo_brandlogos.net_pcliv.png", alt: "Hershey" },
              { src: "/assests/header/Website-logos/mondelez-international-logo.png", alt: "Mondelez" },
              { src: "/assests/header/Website-logos/Marico_Logo.png", alt: "Marico" },
              { src: "/assests/header/Website-logos/nobel-hygine.png", alt: "Nobel Hygiene" },
              { src: "/assests/header/Website-logos/P&G-Logo.png", alt: "P&G" },
              { src: "/assests/header/Website-logos/parle-Agro.png", alt: "Parle Agro" },
              { src: "/assests/header/Website-logos/Reckitt-Benckiser-logo.png", alt: "Reckitt Benckiser" },
            ].map((logo, index) => (
              <div key={index} className="flex justify-center items-center w-[100px] h-auto">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  width={100}
                  height={60}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE – Categories */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
  <div className="space-y-4">
    {[
      {
        title: "Large MNCs",
        desc: "Global scale, structured systems, and complex decision networks.",
      },
      {
        title: "Small & Mid MNCs",
        desc: "Agile setups balancing global best practices with local agility.",
      },
      {
        title: "Indian MNCs",
        desc: "Indian agility fused with international scale and ambition.",
      },
      {
        title: "Family run business",
        desc: "Legacy enterprises evolving toward process & governance maturity.",
      },
      {
        title: "PE-Backed Firms",
        desc: "Outcome-driven, milestone-led transformation mandates.",
      },
      {
        title: "Pharma OTC",
        desc: "Transitioning from prescription-led to consumer-centric business models.",
      },
    ].map((item, index) => {
      const colors = [
        "bg-[#418B69]",
        "bg-[#357C5C]",
        "bg-[#356E54]",
        "bg-[#2E5F49]",
        "bg-[#1D4834]",
        "bg-[#0F3423]",
      ];
      return (
        <div
          key={index}
          className={`${colors[index % colors.length]} flex items-center text-white px-6 py-4 rounded-full shadow-sm hover:scale-[1.02] transition-transform`}
        >
          <h4 className="font-semibold text-lg max-w-[150px] w-full">
            {item.title}
          </h4>
          <p className="text-sm mt-1 text-[#c7dcd3] leading-snug">
            {item.desc}
          </p>
        </div>
      );
    })}
  </div>
</div>
      </div>
    </section>
  );
}
