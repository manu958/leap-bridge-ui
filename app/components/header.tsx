"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { satoshi } from "../fonts";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Close mobile menu on link click
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`sticky top-0 z-50 ${satoshi.className}`}>
      <nav className="bg-[var(--dgreen)] border-b border-gray-700 relative">
        <div className="max-w-[1600px] mx-auto md:px-[24px] px-[12px]">
          <div className="flex justify-between items-center h-[82px]">
            {/* Logo */}
            <Link href="/" className="text-xl font-bold text-gray-800">
              <Image
                src="/assests/header/images/leap bridge consulting logo.svg"
                alt="Logo"
                width={500}
                height={100}
                className="h-[50px] w-auto"
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center">
              <div className="relative group">
                <Link href="/">
                  <button className="text-[var(--lgreen)] text-lg px-6 py-4 flex items-center">
                    Home
                  </button>
                </Link>
              </div>


              <div className="relative group">
                <Link href="/pages/about">
                  <button className="text-[var(--lgreen)] text-lg px-6 py-4 flex items-center">About Us</button>
                </Link>
              </div>

              <div className="relative group">
                <button className="text-[var(--lgreen)] text-lg px-6 py-4 flex items-center">Industries</button>
              </div>

              <div className="relative group">
                <Link href="/pages/services">
                  <button className="text-[var(--lgreen)] text-lg px-6 py-4 flex items-center">
                    Services
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </Link>
                <div className="absolute left-0 mt-0 w-[260px] bg-[var(--lgreen2)] shadow-lg border border-[#1b323333] rounded-[12px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 overflow-hidden">
                  <Link href="/services/web" className="block px-4 py-2 text-gray-700 hover:bg-[#1b323314]">Sales Process Consulting</Link>
                  <Link href="/services/mobile" className="block px-4 py-2 text-gray-700 hover:bg-[#1b323314]">Marketing Strategy Consulting</Link>
                  <Link href="/services/seo" className="block px-4 py-2 text-gray-700 hover:bg-[#1b323314]">Digital & Tech Transformation</Link>
                  <Link href="/services/seo" className="block px-4 py-2 text-gray-700 hover:bg-[#1b323314]">Revenue & Efficiency Consulting</Link>
                </div>
              </div>

              <div className="relative group">
                <button className="text-[var(--lgreen)] text-lg px-6 py-4 flex items-center">
                  Resources
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute left-0 mt-0 w-[220px] bg-[var(--lgreen2)] shadow-lg border border-[#1b323333] rounded-[12px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 overflow-hidden">
                  <Link href="/services/web" className="block px-4 py-2 text-gray-700 hover:bg-[#1b323314]">Blogs</Link>
                  <Link href="/services/mobile" className="block px-4 py-2 text-gray-700 hover:bg-[#1b323314]">Downloadable Playbooks</Link>
                  <Link href="/services/seo" className="block px-4 py-2 text-gray-700 hover:bg-[#1b323314]">Whitepapers & Research Reports</Link>
                  <Link href="/services/seo" className="block px-4 py-2 text-gray-700 hover:bg-[#1b323314]">Videos & Webinars (recorded or upcoming)</Link>
                </div>
              </div>

              <div className="relative group">
                <button className="text-[var(--lgreen)] text-lg px-6 py-4 flex items-center">Contact Us</button>
              </div>

              <Link href="#" target="_blank" className="flex justify-center items-center h-11 px-5 text-lg font-normal rounded-[50px] bg-[var(--lgreen)] text-[var(--dgreen)] transition-colors duration-200 hover:bg-[var(--lgreen2)]">
                Schedule Appointment
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className={`flex flex-col justify-center items-center gap-[6px] h-[47px] w-[47px] rounded-full transition-colors duration-300 ${menuOpen ? "bg-[var(--lgreen)]" : "bg-[#ceead51a]"
                  }`}
              >
                <div className={`h-[2px] transition-all duration-300 ${menuOpen ? "w-[20px] bg-[#000]" : "w-[30px] bg-[#ceead5]"}`}></div>
                <div className={`h-[2px] transition-all duration-300 ${menuOpen ? "w-[30px] bg-[#000]" : "w-[20px] bg-[#ceead5]"}`}></div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`md:hidden py-[25px] px-[45px] space-y-2 absolute bg-[var(--dgreen)] w-full top-[82px] max-h-[calc(100vh-82px)] overflow-y-auto transition-all duration-300 ${menuOpen ? "block" : "hidden"
            }`}
        >
          {/* Home */}
          <details className="group py-[16px] px-[20px] mb-0 relative">
            <summary className="flex justify-center gap-5 items-center cursor-pointer text-[var(--lgreen)] text-lg">
              <Link href="/" onClick={closeMenu}>Home</Link>
            </summary>
          </details>

          {/* About */}
          <details className="group py-[16px] px-[20px] mb-0 relative">
            <summary className="flex justify-center gap-5 items-center cursor-pointer text-[var(--lgreen)] text-lg">
              <Link href="/pages/about" onClick={closeMenu}>About</Link>
            </summary>
          </details>

          {/* Industries */}
          <details className="group py-[16px] px-[20px] mb-0 relative">
            <summary className="flex justify-center gap-5 items-center cursor-pointer text-[var(--lgreen)] text-lg" onClick={closeMenu}>
              Industries
            </summary>
          </details>

          {/* Services */}
          <details className="group py-[16px] px-[20px] mb-0 relative">
            <summary className="flex justify-center gap-5 items-center cursor-pointer text-[var(--lgreen)] text-lg">
              Services
              <svg className="w-4 h-4 transition-transform duration-200 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="mt-2 space-y-1 bg-[var(--lgreen2)] border border-[#1b323333] rounded-[12px] absolute text-center w-[90%] left-1/2 -translate-x-1/2">
              <Link href="/services/web" className="block py-1 text-[#222]" onClick={closeMenu}>Sales Process Consulting</Link>
              <Link href="/services/mobile" className="block py-1 text-[#222]" onClick={closeMenu}>Marketing Strategy Consulting</Link>
              <Link href="/services/seo" className="block py-1 text-[#222]" onClick={closeMenu}>Digital & Tech Transformation</Link>
              <Link href="/services/seo" className="block py-1 text-[#222]" onClick={closeMenu}>Revenue & Efficiency Consulting</Link>
            </div>
          </details>

          {/* Resources */}
          <details className="group py-[16px] px-[20px] mb-0 relative">
            <summary className="flex justify-center gap-5 items-center cursor-pointer text-[var(--lgreen)] text-lg">
              Resources
              <svg className="w-4 h-4 transition-transform duration-200 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="mt-2 space-y-1 bg-[var(--lgreen2)] border border-[#1b323333] rounded-[12px] absolute text-center w-[90%] left-1/2 -translate-x-1/2">
              <Link href="/services/web" className="block py-1 text-[#222]" onClick={closeMenu}>Blogs</Link>
              <Link href="/services/mobile" className="block py-1 text-[#222]" onClick={closeMenu}>Downloadable Playbooks</Link>
              <Link href="/services/seo" className="block py-1 text-[#222]" onClick={closeMenu}>Whitepapers & Research Reports</Link>
              <Link href="/services/seo" className="block py-1 text-[#222]" onClick={closeMenu}>Videos & Webinars (recorded or upcoming)</Link>
            </div>
          </details>

          {/* Contact Us */}
          <details className="group py-[16px] px-[20px] mb-0 relative">
            <summary className="flex justify-center gap-5 items-center cursor-pointer text-[var(--lgreen)] text-lg" onClick={closeMenu}>
              Contact Us
            </summary>
          </details>

          {/* Schedule Appointment */}
          <Link
            href="#"
            target="_blank"
            className="mt-4 flex justify-center items-center h-11 sm:h-12 px-4 sm:px-5 text-base sm:text-lg font-normal rounded-[50px] bg-[var(--lgreen)] text-[var(--dgreen)] transition-colors duration-200 hover:bg-[var(--lgreen2)]"
            onClick={closeMenu}
          >
            Schedule Appointment
          </Link>
        </div>
      </nav>
    </header>
  );
}
