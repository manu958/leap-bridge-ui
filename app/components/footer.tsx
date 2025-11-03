"use client";
// import Image from "next/image";
import Link from "next/link";
 
export default function Footer() {
  return (
    <footer className="bg-[#18392B] text-white">
      {/* Top Section */}
      <div id="contact" className="max-w-7xl mx-auto px-6 md:px-12 py-10 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo */}
        <div className="flex flex-col items-start">
          <img
            src="/assests/header/images/logo.svg"
            alt="Leap Bridge Consulting Logo"
            width={180}
            height={60}
            className="mb-4"
          />
        </div>
 
        {/* Navigation Links */}
        <div className="flex flex-col space-y-2 md:border-r border-dotted border-[#356E54]">
          <Link href="/" className="hover:text-[#9BE3B3] transition">Home</Link>
          <Link href="#about" className="hover:text-[#9BE3B3] transition">About Us</Link>
          <Link href="#about" className="hover:text-[#9BE3B3] transition">Industries</Link>
          <Link href="#service" className="hover:text-[#9BE3B3] transition">Services</Link>
          <Link href="#about" className="hover:text-[#9BE3B3] transition">Case Studies</Link>
          <Link href="#contact" className="hover:text-[#9BE3B3] transition">Contact</Link>
        </div>
 
        {/* Policies */}
        <div className="flex flex-col space-y-2 md:border-r border-dotted border-[#356E54]">
          <Link href="" className="hover:text-[#9BE3B3] transition">Privacy Policy</Link>
          <Link href="" className="hover:text-[#9BE3B3] transition">Terms & Conditions</Link>
          <Link href="" className="hover:text-[#9BE3B3] transition">Cookie Policy</Link>
        </div>
 
        {/* Contact + Social */}
        <div className="space-y-3">
          <p className="text-sm">+91-91670 63112<br />+91 97691 00915</p>
          <p className="text-sm">connect@leapbridgeconsulting.com</p>
 
          <div className="flex space-x-3 mt-2">
            <Link href="https://www.linkedin.com" target="_blank">
              <img
                src="/assests/header/Homepage/linkdin.svg"
                alt="LinkedIn"
                width={28}
                height={28}
                className="hover:opacity-80 transition"
              />
            </Link>
            <Link href="https://wa.me/919769100915" target="_blank">
              <img
                src="/assests/header/Homepage/whtsapp.svg"
                alt="WhatsApp"
                width={28}
                height={28}
                className="hover:opacity-80 transition"
              />
            </Link>
          </div>
        </div>
      </div>
 
      {/* Bottom Bar */}
      <div className="bg-[#234C3A] text-center py-3 text-sm text-gray-300">
        Copyright © 2025 Leap Bridge Consulting. All rights reserved.
      </div>
    </footer>
  );
}