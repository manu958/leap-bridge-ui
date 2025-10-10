
import Image from "next/image";
import { zodiak, satoshi } from "@/app/fonts";
export default function ScrumPage() {
    return (
        <section className="w-full bg-[#ecf6f2] md:py-[120px] py-[80px]">
            <div className="max-w-[712px] mx-auto md:px-[24px] px-[16px] text-[#1B3233]">

                <h2 className={`text-[32px] md:text-[40px] font-normal max-w-[410px] leading-[125%] mb-[64px] ${zodiak.className}`}>
                    Things we can do for you and more.
                </h2>

                {/* Item 1 */}
                <div className="border-t border-[#1B3233] py-6 flex gap-4">
                    <div className="w-full max-w-[100px] flex">
                        <Image
                            src="/assests/header/scrumpage-logos/1c_group.svg"
                            alt="Management Icon"
                            width={64}
                            height={64}
                        />
                    </div>
                    <div>
                        <h3 className={`text-lg text-[26px] font-normal leading-[120%] mb-2 ${zodiak.className}`}>
                            Sales Process
                        </h3>
                        <p className={`text-sm text-[20px] leading-relaxed ${satoshi.className}`}>
                            We expand your general trade distribution and redesign route-to-market to enhance sales force performance  </p>
                    </div>
                </div>

                <div className="border-t border-[#1B3233] py-6 flex gap-4">
                    <div className="w-full max-w-[100px] flex">
                        <Image
                            src="/assests/header/scrumpage-logos/2132ea_energy-usage-window.svg"
                            alt="Digital Icon"
                            width={64}
                            height={64}
                        />
                    </div>
                    <div>
                        <h3 className={`text-lg text-[26px] font-normal leading-[120%] mb-2 ${zodiak.className}`}>
                            Marketing Strategy
                        </h3>
                        <p className={`text-sm text-[20px]  leading-relaxed ${satoshi.className}`}>
                            We guide your pharma-to-consumer transition and build data-driven go-to-market strategies for sustained brand growth.
                        </p>
                    </div>
                </div>

                <div className="border-t border-[#1B3233] py-6 flex gap-4">
                    <div className="w-full max-w-[100px] flex">
                        <Image
                            src="/assests/header/scrumpage-logos/13305_design-nib.svg"
                            alt="Design Icon"
                            width={64}
                            height={64}
                        />
                    </div>
                    <div>
                        <h3 className={`text-lg text-[26px] font-normal leading-[120%] mb-2 ${zodiak.className}`}>
                            Digital & Tech
                        </h3>
                        <p className={`text-sm text-[20px] leading-relaxed ${satoshi.className}`}>
                          We deploy sales automation and e-commerce platforms to boost customer engagement and accelerate digital revenue.
                        </p>
                    </div>
                </div>

                <div className="border-t  py-6 flex gap-4">
                    <div className="w-full max-w-[100px] flex">
                        <Image
                            src="/assests/header/scrumpage-logos/4agile.svg"
                            alt="SCRUM Icon"
                            width={64}
                            height={64}
                        />
                    </div>
                    <div>
                        <h3 className={`text-lg text-[26px] font-normal leading-[120%] mb-2 ${zodiak.className}`}>
                            Revenue & Efficiency
                        </h3>
                        <p className={`text-sm text-[20px]  leading-relaxed ${satoshi.className}`}>
                            We analyze trade investment and streamline processes to increase profitability while scaling revenue operations.
                        </p>
                    </div>
                </div>

                <div className={`text-center h-13 px-8 mt-10 ${satoshi.className}`}>
                    <button className="bg-[#147e5d] hover:bg-[#1E4741] text-[var(--lgreen2)] py-2 rounded-full transition h-[52px] px-[32px] flex items-center justify-center m-auto text-[20px]">
                        Contact us
                    </button>
                </div>


            </div>
        </section>

    );
}

