
import Image from "next/image";
import { zodiak } from "@/app/fonts";
import { satoshi } from "@/app/fonts";

export default function ConsultationSection() {
    return (
        <section className="bg-[#DAEBE3] py-16 px-4 relative overflow-hidden">
            {/* <div className="z-[1] bg-[var(--dark)] rounded-full w-[80vw] h-[80vw] absolute top-[-40vw] left-[-40vw]"></div> */}
            <div className="absolute top-[-20%] left-[-10%] -translate-x-1/2 -translate-y-1/2 xl:w-[1400px] xl:h-[1400px] lg:w-[1100px] lg:h-[1100px]  md:w-[800px] md:h-[800px] w-[800px] h-[800px] rounded-full bg-[#1b3233]"></div>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-[28px] md:gap-[32px]">

                <div className="relative flex justify-center md:justify-end">
                        <Image
                            src="/assests/header/scrumpage-logos/cta1.jpg"
                            alt="Consultation"
                            width={500}
                            height={600}
                            className="rounded-lg shadow-lg w-full h-full"
                        />
                </div>

                <div className="bookbox text-center md:text-left">
                    <h2 className={`text-[40px] md:text-4xl font-thin text-[#1B3233] mb-4 ${zodiak.className}`}>
                        Accelerate your business growth today!
                    </h2>
                    <p className={`text-[20px] text-[#1B3233] mb-6 ${satoshi.className}`}>
                        Let our experts analyze your challenges and craft a tailored strategy for market entry, distribution, or digital transformation.
                    </p>
                    <button className={`px-6 py-2 bg-[#147e5d] hover:bg-[#1E4741] text-[20px] text-[#ECF6F2] rounded-full hover:bg-[#1e4741] transition ${satoshi.className}`}>
                        Book a Consultation
                    </button>
                </div>
            </div>
        </section>



    );
}
