"use client";
import Image from "next/image";
import { zodiak } from "@/app/fonts";
import { satoshi } from "@/app/fonts";

export default function FounderAbt() {
    return (
        <section className="bg-[#eaf0eb] py-12 px-5 sm:px-8 md:px-16 lg:px-24">
            {/* Heading */}
            <div className="text-center mb-12">
                <h2 className={`${zodiak.className} text-3xl sm:text-4xl md:text-5xl font-semibold mb-3 text-[#1b3233]`}>
                    Meet the Founder
                </h2>
                <p className={`${satoshi.className} text-sm sm:text-base md:text-lg text-[#1b3233]`}>
                    Driven by a passion for innovation, our founder envisions solutions that transform ideas into impact.
                </p>
            </div>

            <div className="max-w-4xl mx-auto bg-[#ceead5] rounded-xl flex flex-col md:flex-row items-center p-6 sm:p-10 gap-6">
                <div className="flex-shrink-0 w-40 h-40 sm:w-48 sm:h-48 relative rounded-xl overflow-hidden">
                    <Image
                        src="/assests/founder.jpg" 
                        alt="Founder"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Info */}
                <div className="flex-1">
                    <p className={`${satoshi.className} text-sm sm:text-base text-gray-600 font-medium uppercase mb-1`}>CEO</p>
                    <h3 className={`${zodiak.className} text-xl sm:text-2xl md:text-3xl font-semibold mb-3 text-[#1b3233]`}>Jatin Panchal</h3>
                    <hr className="border-gray-400 mb-4" />
                    <p className={`${satoshi.className} text-sm sm:text-base md:text-lg text-gray-700`}>
                        Jatin Panchal is a commercial transformation leader who blends hands-on industry experience with strong academic credentials. He completed his Executive Programme at INSEAD, France (2022–2023), holds an MBA from SIBM Pune, and a BE degree from BVCOE Pune. Beyond his corporate career, he also contributes to academia as a Visiting Faculty at leading business schools, teaching Sales and Omni-Channel Management.
                        This unique mix of corporate leadership and academic contribution allows Jatin to combine real-world insights with structured frameworks, making LBC’s consulting approach both practical and future-ready.
                    </p>
                </div>
            </div>  
        </section>
    );
}
