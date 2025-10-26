import React from "react";
import Image from "next/image";
import { satoshi } from "@/app/fonts";

export default function ClientList1() {
    return (
        <section className="w-full py-16 md:py-[120px] bg-[#daebe3]">
            <div className="max-w-[1080px] mx-auto px-4">
                {/* Heading */}
                <h2
                    className={`${satoshi.className} text-gray-800 text-center text-[22px] sm:text-[26px] md:text-[50px] font-normal mb-10 leading-snug`}>
                    <strong>Combined</strong> Work Experience
                </h2>

                {/* Logos */}
                <div className="flex flex-wrap justify-center md:justify-between gap-6 sm:gap-8 md:gap-10 items-center">
                    <Image
                        src="/assests/header/Website-logos/abbot.png"
                        alt="Logo 1"
                        width={120}
                        height={60}
                        className="w-[50px] sm:w-[70px] h-auto object-contain"
                    />
                    <Image
                        src="/assests/header/Website-logos/Cipla_logo.png"
                        alt="Logo 2"
                        width={120}
                        height={60}
                        className="w-[50px] sm:w-[70px] h-auto object-contain"
                    />
                    <Image
                        src="/assests/header/Website-logos/DANONE_LOGO_HORIZONTAL.png"
                        alt="Logo 3"
                        width={120}
                        height={60}
                        className="w-[50px] sm:w-[70px] h-auto object-contain"
                    />
                    <Image
                        src="/assests/header/Website-logos/emami.png"
                        alt="Logo 4"
                        width={120}
                        height={60}
                        className="w-[50px] sm:w-[70px] h-auto object-contain"
                    />
                    <Image
                        src="/assests/header/Website-logos/godrej.png"
                        alt="Logo 5"
                        width={120}
                        height={60}
                        className="w-[50px] sm:w-[70px] h-auto object-contain"
                    />
                    <Image
                            src="/assests/header/Website-logos/hershey_company-logo_brandlogos.net_pcliv.png"
                            alt="Logo 1"
                            width={120}
                            height={60}
                     />
                </div>
            </div>
        </section>
    );
}
