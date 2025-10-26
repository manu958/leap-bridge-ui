import React from "react";
import Image from "next/image";
import { zodiak } from "@/app/fonts";

export default function ClientList1() {
    return (
        <section className="w-full pt-[60px] md:pt-[60px] pb-0 bg-[#daebe3]">
            <div className="max-w-[1080px] mx-auto px-4 space-y-10 text-center">
                {/* Heading */}
                <h2
                    className={`${zodiak.className} text-gray-800 text-center text-[32px] text-[#1B3233] sm:text-[26px] md:text-[40px] mb-6 sm:mb-8 md:mb-10 leading-snug`}> <strong>Combined</strong> Work Experience
                </h2>
                {/* Row 1 */}
                <div className="flex flex-wrap justify-center sm:justify-center md:justify-between gap-4 sm:gap-6 md:gap-8 w-full">
                    <Image
                        src="/assests/header/Website-logos/abbot.png"
                        alt="Abbot Logo"
                        width={120}
                        height={60}
                        className="w-[70px] sm:w-[90px] md:w-[112px] h-auto object-contain abbot-logo"
                    />
                    <Image
                        src="/assests/header/Website-logos/Cipla_logo.png"
                        alt="Cipla Logo"
                        width={120}
                        height={60}
                        className="w-[70px] sm:w-[90px] md:w-[100px] h-auto object-contain cipla-logo"
                    />
                    <Image
                        src="/assests/header/Website-logos/DANONE_LOGO_HORIZONTAL.png"
                        alt="Danone Logo"
                        width={120}
                        height={60}
                        className="w-[70px] sm:w-[90px] md:w-[100px] h-auto object-contain danone-logo"
                    />
                    <Image
                        src="/assests/header/Website-logos/emami.png"
                        alt="Emami Logo"
                        width={120}
                        height={60}
                        className="w-[70px] sm:w-[90px] md:w-[100px] h-auto object-contain emami-logo"
                    />
                    <Image
                        src="/assests/header/Website-logos/godrej.png"
                        alt="Godrej Logo"
                        width={120}
                        height={60}
                        className="w-[70px] sm:w-[90px] md:w-[100px] h-auto object-contain godrej-logo"
                    />
                    <Image
                        src="/assests/header/Website-logos/hershey_company-logo_brandlogos.net_pcliv.png"
                        alt="Hershey Logo"
                        width={120}
                        height={60}
                        className="w-[70px] sm:w-[90px] md:w-[100px] h-auto object-contain hershey-logo"
                    />
                </div>

                {/* Row 2 */}
                <div className="flex flex-wrap justify-center sm:justify-center md:justify-between gap-4 sm:gap-6 md:gap-8 w-full">
                    <Image
                        src="/assests/header/Website-logos/Marico_Logo.png"
                        alt="Marico Logo"
                        width={120}
                        height={60}
                        className="w-[70px] sm:w-[90px] md:w-[80px] h-auto object-contain marico-logo"
                    />
                    <Image
                        src="/assests/header/Website-logos/mondelez-international-logo.png"
                        alt="Mondelez Logo"
                        width={120}
                        height={60}
                        className="w-[70px] sm:w-[90px] md:w-[110px] h-auto object-contain mondelez-logo"
                    />
                    <Image
                        src="/assests/header/Website-logos/nobel-hygine.png"
                        alt="Nobel Hygine Logo"
                        width={120}
                        height={60}
                        className="w-[70px] sm:w-[90px] md:w-[80px] h-auto object-contain nobel-logo"
                    />
                    <Image
                        src="/assests/header/Website-logos/P&G-Logo.png"
                        alt="P&G Logo"
                        width={120}
                        height={60}
                        className="w-[70px] sm:w-[90px] md:w-[80px] h-auto object-contain pg-logo"
                    />
                    <Image
                        src="/assests/header/Website-logos/parle-Agro.png"
                        alt="Parle Agro Logo"
                        width={120}
                        height={60}
                        className="w-[70px] sm:w-[90px] md:w-[80px] h-auto object-contain parle-logo"
                    />
                    <Image
                        src="/assests/header/Website-logos/Reckitt-Benckiser-logo.png"
                        alt="Reckitt Benckiser Logo"
                        width={120}
                        height={60}
                        className="w-[70px] sm:w-[90px] md:w-[110px] h-auto object-contain reckitt-logo"
                    />
                </div>
            </div>
        </section>
    );
}
