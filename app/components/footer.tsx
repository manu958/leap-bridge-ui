"use client";
import Image from "next/image";
import Link from "next/link";
import { satoshi } from "../fonts";

export default function Footer() {
    return (
        <footer className={`bg-[#1b3233] text-gray-300 ${satoshi.className}`}>
            <div className="max-w-[1400px] mx-auto md:px-[24px] px-[16px] pt-[100px] pb-[40px]">


                <div className="md:flex justify-between items-center bg-[#253c3d] rounded-[12px] py-[60px] px-[48px]">
                    {/* Logo */}
                    <div className="footer-top-left md:mb-0 mb-4">
                        <Link href="/" className="flex h-[21px]">
                            <Image src="/assests/header/images/leap bridge consulting logo.svg" alt="We Consult Logo" width={300} height={100} className="h-8" />
                        </Link>
                    </div>
                    {/* Newsletter */}
                    <div>
                        <form
                            id="wf-form-Newsletter-Form"
                            name="wf-form-Newsletter-Form"
                            className="md:flex justify-end items-center"
                        >
                            {/* Input */}
                            <input
                            className="border border-[color:var(--lgreen2)] text-[#ecf6f2] bg-[#ecf6f21a] rounded-[64px] md:w-[260px] w-full h-[56px] md:mb-0 mb-4 mr-[-50px] pl-[24px] pr-[32px] text-[18px] placeholder-[var(--lgreen2)] outline-none"
                            maxLength={256}
                            name="email-2"
                            placeholder="Your email"
                            type="email"
                            id="email-newsletter"
                            required
                            />

                            {/* Submit Button */}
                            <input
                            type="submit"
                            className="bg-[var(--lgreen2)] text-[var(--dgreen)] rounded-[60px] flex justify-center items-center md:w-[180px] w-full h-[56px] px-[22px] text-[20px]"
                            defaultValue="Subscribe"
                            />
                        </form>
                    </div>
                </div>
                   

                {/* Middle: Left Text + Links */}
                <div className="flex md:flex-row flex-col justify-between md:items-start items:center md:gap-0 gap-[80px] mt-[80px]  md:text-start text-center">
                    {/* Left Content */}
                    <div className="flex flex-col md:items-start items:center gap-[32px] max-w-[400px]">
                        <p className="text-[var(--lgreen)] text-[22px] leading-[135%]">
                           We accelerate business growth through expert sales, marketing, and digital transformation strategies.
                        </p>
                        {/* <button className="bg-[#cde8d9] text-[#1b3233]  px-6 py-3 rounded-full shadow-md hover:opacity-90 transition duration-300">
                            Buy this template – $129
                        </button> */}
                        <Link href="#" target="_blank" className="flex justify-center items-center h-[52px] px-[32px] rounded-[50px] bg-[var(--lgreen)] text-[var(--dgreen)] font-normal transition-colors duration-200 hover:bg-[var(--lgreen2)] text-[20px]">Schedule Appointment</Link>
                    </div>

                    <div className="right-bottom-footer">
                        <div className="flex flex-col md:flex-row md:gap-[122px] gap-[80px] md:text-start text-center">
                            <div className="">
                                <ul className="space-y-4">
                                    <li><div className="heading-footer-links">Home</div></li>
                                    {/* <li><Link href="#" className="footer-link">Home A</Link></li>
                                    <li><Link href="#" className="footer-link">Home B</Link></li>
                                    <li><Link href="#" className="footer-link">Home C</Link></li> */}
                                </ul>
                            </div>
                            <div className="">
                                <ul className="space-y-4">
                                    <li><div className="heading-footer-links">About us</div></li>
                                    {/* <li><Link href="#" className="footer-link">About A</Link></li>
                                    <li><Link href="#" className="footer-link">About B</Link></li>
                                    <li><Link href="#" className="footer-link">About C</Link></li> */}
                                </ul>                                
                            </div>
                            <div className="block">
                                <ul className="space-y-4">
                                    <li><div className="heading-footer-links">Services</div></li>
                                    <li><Link href="#" className="footer-link">Sales Process Consulting</Link></li>
                                    <li><Link href="#" className="footer-link">Marketing Strategy Consulting</Link></li>
                                    <li><Link href="#" className="footer-link">Digital & Tech Transformation</Link></li>
                                    <li><Link href="#" className="footer-link">Revenue & Efficiency Consulting</Link></li>
                                </ul>
                            </div>                      
                            <div className="block">
                                <ul className="space-y-4">
                                    <li><div className="heading-footer-links">Industries</div></li>
                                    <li><Link href="#" className="footer-link">Resourses</Link></li>
                                    <li><Link href="#" className="footer-link">Case studies</Link></li>
                                    <li><Link href="#" className="footer-link">Blog</Link></li>
                                    <li><Link href="#" className="footer-link">Contact</Link></li>
                                    {/* <li><Link href="#" className="footer-link">Legal</Link></li> */}
                                </ul>

                                {/* <hr className="my-[42px]  border-t border-[#ceead54d]" /> */}
{/* 
                                <ul className="space-y-4">
                                    <li><Link href="#" className="footer-link">Style guide</Link></li>
                                    <li><Link href="#" className="footer-link">Licenses</Link></li>
                                    <li><Link href="#" className="footer-link">Start here</Link></li>
                                    <li><Link href="#" className="footer-link">Changelog</Link></li>
                                    <li><Link href="#" className="footer-link">See all pages</Link></li>
                                </ul> */}
                            </div>
                        </div>
                    </div>

                </div>


                <div className="flex md:flex-row flex-col justify-between items-center mt-20 pt-10 text-base border-t border-[var(--lgreen)]">
                    <div className="text-[var(--lgreen)] text-base md:text-start text-center md:mb-0 mb-7">
                        Leap Bridge Consulting
                        {/* <Link href="#" target="_blank" className="legal-footer-link underline" > Wave</Link>, powered by <Link href="#" target="_blank" className="legal-footer-link underline" > Webflow </Link> */}
                    </div>
                    <div className="text-[var(--lgreen)] text-base">
                        <Link href="#" target="_blank" className="legal-footer-link underline" > Powered By Leap Bridge Consulting </Link>
                    </div>
                </div>


                
            </div>
        </footer>
    );
}
