"use client";
import Image from "next/image";
import Link from "next/link";
import { satoshi } from "../fonts";

export default function Footer() {
    return (
        <footer className={`bg-[#1b3233] text-gray-300 ${satoshi.className}`}>
            <div className="max-w-[1400px] mx-auto md:px-[24px] px-[16px] pt-[100px] pb-[40px]">

                {/* Top: Logo + Newsletter */}
                <div className="md:flex justify-between items-center bg-[#253c3d] rounded-[12px] py-[60px] px-[24px] md:px-[48px] flex-col md:flex-row gap-8 md:gap-0">
                    {/* Logo */}
                    <div className="footer-top-left flex justify-center md:justify-start md:mb-0 mb-4">
                        <Link href="/" className="flex h-[65px]">
                            <Image src="/assests/header/images/leap bridge consulting logo.svg" alt="We Consult Logo" width={300} height={100} className="h-8 w-auto" />
                        </Link>
                    </div>

                    {/* Newsletter */}
                    <div className="flex justify-center md:justify-end w-full md:w-auto">
                        <form id="wf-form-Newsletter-Form" name="wf-form-Newsletter-Form" className="flex flex-col md:flex-row items-center gap-4 md:gap-2 w-full md:w-auto">
                            <input
                                className="border border-[color:var(--lgreen2)] text-[#ecf6f2] bg-[#ecf6f21a] rounded-[64px] md:w-[260px] w-full h-[56px] pl-[24px] pr-[32px] text-[18px] placeholder-[var(--lgreen2)] outline-none"
                                maxLength={256}
                                name="email-2"
                                placeholder="Your email"
                                type="email"
                                id="email-newsletter"
                                required
                            />
                            <input
                                type="submit"
                                className="bg-[var(--lgreen2)] text-[var(--dgreen)] rounded-[60px] flex justify-center items-center md:w-[180px] w-full h-[56px] px-[22px] text-[20px]"
                                defaultValue="Subscribe"
                            />
                        </form>
                    </div>
                </div>

                {/* Middle: Left Text + Links */}
                <div className="flex flex-col md:flex-row justify-between md:items-start items-center mt-[80px] gap-[60px] md:gap-0 text-center md:text-start">
                    {/* Left Content */}
                    <div className="flex flex-col items-center md:items-start gap-[32px] max-w-[400px]">
                        <p className="text-[var(--lgreen)] text-[22px] leading-[135%]">
                            We accelerate business growth through expert sales, marketing, and digital transformation strategies.
                        </p>
                        <Link href="#" target="_blank" className="flex justify-center md:justify-start items-center h-[52px] px-[32px] rounded-[50px] bg-[var(--lgreen)] text-[var(--dgreen)] font-normal transition-colors duration-200 hover:bg-[var(--lgreen2)] text-[20px]">
                            Schedule Appointment
                        </Link>
                    </div>

                    {/* Right Links */}
                    <div className="right-bottom-footer flex flex-col md:flex-row md:gap-[122px] gap-[60px] text-center md:text-start w-full md:w-auto">
                        <div>
                            <ul className="space-y-4">
                                <li>
                                    <Link href="/" className="heading-footer-links">
                                        Home
                                    </Link>
                                </li>
                            </ul>

                        </div>
                        <div>
                            <ul className="space-y-4">
                                <li>
                                    <Link href="/pages/about" className="heading-footer-links">
                                        About us
                                    </Link>
                                </li>
                            </ul>

                        </div>
                        <div>
                            <ul className="space-y-4">
                                <li><div className="heading-footer-links">Services</div></li>
                                <li><Link href="#" className="footer-link">Sales Process Consulting</Link></li>
                                <li><Link href="#" className="footer-link">Marketing Strategy Consulting</Link></li>
                                <li><Link href="#" className="footer-link">Digital & Tech Transformation</Link></li>
                                <li><Link href="#" className="footer-link">Revenue & Efficiency Consulting</Link></li>
                            </ul>
                        </div>
                        <div>
                            <ul className="space-y-4">
                                <li><div className="heading-footer-links">Industries</div></li>
                                <li><Link href="#" className="footer-link">Resourses</Link></li>
                                <li><Link href="#" className="footer-link">Case studies</Link></li>
                                <li><Link href="#" className="footer-link">Blog</Link></li>
                                <li><Link href="#" className="footer-link">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom: Copyright / Powered By */}
                <div className="flex flex-col md:flex-row justify-between items-center mt-20 pt-10 text-base border-t border-[var(--lgreen)] gap-4 md:gap-0 text-center md:text-start">
                    <div className="text-[var(--lgreen)] text-base">
                        Leap Bridge Consulting
                    </div>
                    <div className="text-[var(--lgreen)] text-base">
                        <Link href="#" target="_blank" className="legal-footer-link underline">Powered By Leap Bridge Consulting</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
