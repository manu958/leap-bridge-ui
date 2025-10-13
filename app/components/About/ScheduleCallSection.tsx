"use client";

import React from "react";
import Image from "next/image";

const ScheduleCallSection = () => {
    return (
        <section className="bg-[#f2fbf7] py-12 px-6 md:px-12 flex flex-col md:flex-row items-center justify-center gap-8">
            {/* Left Image */}
            <div className="w-full md:w-1/2 flex justify-center">
                <div className="rounded-2xl overflow-hidden shadow-sm">
                    <Image
                        src="/assests/header/about section images/contatabt/contactsalesabt.jpg"
                        alt="Team working together"
                        width={350}
                        height={150}
                        className="w-full h-auto object-cover"
                    />
                </div>
            </div>

            {/* Right Content Box */}
            <div className="w-full md:w-1/2 bg-[#ceead5] rounded-2xl p-8 shadow-sm">
                {/* Decorative dots */}
                {/* <div className="flex items-center space-x-2 mb-4">
                    <span className="w-4 h-4 bg-[#0d2b27] rounded-full"></span>
                    <span className="w-4 h-4 bg-[#30403f] rounded-full"></span>
                </div> */}

                <h2 className="text-2xl md:text-3xl font-semibold text-[#1b3233] mb-3">
                    Schedule a call with us to see if we can help
                </h2>

                <p className="text-[#1b3233] text-sm md:text-base mb-6">
                    Book a call with us to explore how we can support your goals. Our team is ready to provide tailored solutions that make a difference.
                </p>

            <hr className="border-[#cfd8d6] mb-6" />

            <ul className="space-y-4 text-[#1b3233]">
                <li className="flex items-center gap-3">
                    {/* Mail Icon */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0L12 12.75 2.25 6.75"
                        />
                    </svg>
                    leapbridge@gmail.com
                </li>

                <li className="flex items-center gap-3">
                    {/* Phone Icon */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 6.75a.75.75 0 01.75-.75h2.708a.75.75 0 01.74.627l.83 4.986a.75.75 0 01-.21.643l-1.542 1.542a11.048 11.048 0 005.208 5.208l1.542-1.542a.75.75 0 01.643-.21l4.986.83a.75.75 0 01.627.74v2.708a.75.75 0 01-.75.75H6.75A4.5 4.5 0 012.25 18V6.75z"
                        />
                    </svg>
                    +91 456585357   
                </li>

                <li className="flex items-center gap-3">
                    {/* Location Icon */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                        />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 10.5c0 7.125-7.5 11.25-7.5 11.25S4.5 17.625 4.5 10.5a7.5 7.5 0 1115 0z"
                        />
                    </svg>
                    Delhi, India
                </li>
            </ul>
        </div>
    </section >
  );
};

export default ScheduleCallSection;
