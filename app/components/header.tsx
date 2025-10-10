"use client";
// import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { satoshi } from "../fonts";

export default function Header() {
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // const [productMenuOpen, setProductMenuOpen] = useState(false);
  // const [caseStudiesOpen, setCaseStudiesOpen] = useState(false);

  return (
    <header className={`sticky top-0 z-50 ${satoshi.className}`}>
      <nav className="bg-[var(--dgreen)] border-b border-gray-700">
        {/* mx-auto flex max-w-[1600px] items-center justify-between min-h-[82px] */}
        <div className="max-w-[1600px] mx-auto  md:px-[24px] px-[12px]">
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
              {/* <Link href="/" className="text-[var(--lgreen)] text-lg px-5 py-4">
                Homepages
              </Link>
              <Link href="/about" className="text-[var(--lgreen)] text-lg px-5 py-4">
                About
              </Link> */}

              {/* Dropdown */}
              <div className="relative group">
                <button className="text-[var(--lgreen)] text-lg px-6 py-4 flex items-center">     
                  Home
                </button>
              </div>

              {/* Dropdown */}
              <div className="relative group">
                 <Link href="/pages/about">
                <button className="text-[var(--lgreen)] text-lg px-6 py-4 flex items-center">
                  About Us
                </button>
                </Link>
{/* 
                 <div className="absolute left-0 mt-0 w-40 bg-[var(--lgreen2)] shadow-lg border border-[#1b323333] rounded-[12px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 overflow-hidden">
                  <Link
                    href="/services/web"
                    className="block px-4 py-2 text-gray-700 hover:bg-[#1b323314]"
                  >
                    About LBC &Founder’s 
                  </Link>
                  <Link
                    href="/services/mobile"
                    className="block px-4 py-2 text-gray-700 hover:bg-[#1b323314]"
                  >
                    About B
                  </Link>
                  <Link
                    href="/services/seo"
                    className="block px-4 py-2 text-gray-700 hover:bg-[#1b323314]"
                  >
                    About C
                  </Link>
                </div> */}
              </div>

              <div className="relative group">
                <button className="text-[var(--lgreen)] text-lg px-6 py-4 flex items-center">
                  Industries
                </button>
              </div>

              {/* Dropdown */}
              <div className="relative group ">
                <button className="text-[var(--lgreen)] text-lg px-6 py-4 flex items-center">
                  Services
                  <svg
                    className="ml-1 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                 <div className="absolute left-0 mt-0 w-[260px] bg-[var(--lgreen2)] shadow-lg border border-[#1b323333] rounded-[12px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 overflow-hidden">
                  <Link
                    href="/services/web"
                    className="block px-4 py-2 text-gray-700 hover:bg-[#1b323314]"
                  >
                    Sales Process Consulting
                  </Link>
                  <Link
                    href="/services/mobile"
                    className="block px-4 py-2 text-gray-700 hover:bg-[#1b323314]"
                  >
                    Marketing Strategy Consulting
                  </Link>
                  <Link
                    href="/services/seo"
                    className="block px-4 py-2 text-gray-700 hover:bg-[#1b323314]"
                  >
                    Digital & Tech Transformation
                  </Link>
                    <Link
                    href="/services/seo"
                    className="block px-4 py-2 text-gray-700 hover:bg-[#1b323314]"
                  >
                    Revenue & Efficiency Consulting
                  </Link>
                </div>
              </div>

               <div className="relative group">
                <button className="text-[var(--lgreen)] text-lg px-6 py-4 flex items-center">
                  Resources
                  <svg
                    className="ml-1 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                 <div className="absolute left-0 mt-0 w-[220px] bg-[var(--lgreen2)] shadow-lg border border-[#1b323333] rounded-[12px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 overflow-hidden">
                  <Link
                    href="/services/web"
                    className="block px-4 py-2 text-gray-700 hover:bg-[#1b323314]"
                  >
                    Blogs 
                  </Link>
                  <Link
                    href="/services/mobile"
                    className="block px-4 py-2 text-gray-700 hover:bg-[#1b323314]"
                  >
                    Downloadable Playbooks
                  </Link>
                  <Link
                    href="/services/seo"
                    className="block px-4 py-2 text-gray-700 hover:bg-[#1b323314]"
                  >
                    Whitepapers & Research Reports
                  </Link>
                  <Link
                    href="/services/seo"
                    className="block px-4 py-2 text-gray-700 hover:bg-[#1b323314]"
                  >
                    Videos & Webinars (recorded or upcoming)
                  </Link>
                </div> 
              </div>

                 <div className="relative group">
                <button className="text-[var(--lgreen)] text-lg px-6 py-4 flex items-center">
                  Contact Us
                  {/* <svg
                    className="ml-1 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg> */}
                </button>
              </div>

              <Link href="#" target="_blank" className="flex justify-center items-center h-11 px-5 text-lg font-normal rounded-[50px] bg-[var(--lgreen)] text-[var(--dgreen)] transition-colors duration-200 hover:bg-[var(--lgreen2)]">Schedule Appointment</Link>
              
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                id="menu-btn"
                className="flex flex-col justify-center items-center gap-[6px] bg-[#ceead51a] h-[47px] w-[47px] rounded-full"
                onClick={(e) => {
                  const menu = document.getElementById("mobile-menu");
                  menu?.classList.toggle("hidden");

                  // toggle button background
                  e.currentTarget.classList.toggle("bg-[var(--lgreen)]");

                  // get the two inner divs
                  const [line1, line2] = e.currentTarget.children;

                  // toggle first line
                  line1.classList.toggle("bg-[#000]");
                  line1.classList.toggle("bg-[#ceead5]");
                  line1.classList.toggle("w-[20px]");
                  line1.classList.toggle("w-[30px]");

                  // toggle second line
                  line2.classList.toggle("bg-[#000]");
                  line2.classList.toggle("bg-[#ceead5]");
                  line2.classList.toggle("w-[30px]");
                  line2.classList.toggle("w-[20px]");
                }}
              >
                <div className="bg-[#ceead5] w-[30px] h-[2px]"></div>
                <div className="bg-[#ceead5] w-[20px] h-[2px]"></div>
              </button>

            </div>
          </div>
        </div>

          {/* Mobile Menu */}
          <div id="mobile-menu" className="hidden md:hidden py-[25px] px-[45px] space-y-2 absolute bg-[var(--dgreen)] w-full">
            {/* Dropdown - Homepages */}
            <details className="group py-[16px] px-[20px] mb-0  relative">
              <summary className="flex justify-center gap-5 items-center cursor-pointer text-[var(--lgreen)] text-lg">
                Home
                {/* <svg
                  className="w-4 h-4 transition-transform duration-200 group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg> */}
              </summary>
            </details>

            {/* Dropdown - About */}
            <details className="group py-[16px] px-[20px] mb-0  relative">
              <summary className="flex justify-center gap-5 items-center cursor-pointer text-[var(--lgreen)] text-lg">
                About
              </summary>
              {/* <div className="mt-2 space-y-1 bg-[var(--lgreen2)] border border-[#1b323333] rounded-[12px] absolute text-center w-[90%] left-1/2 -translate-x-1/2">
                <Link href="/services/web" className="block py-1 text-[#222)]">About A</Link>
                <Link href="/services/mobile" className="block py-1 text-[#222)]">About B</Link>
                <Link href="/services/seo" className="block py-1 text-[#222)]">About C</Link>
              </div> */}
            </details>

            {/* Dropdown - Other */}
            <details className="group py-[16px] px-[20px] mb-0  relative">
              <summary className="flex justify-center gap-5 items-center cursor-pointer text-[var(--lgreen)] text-lg">
                Industries
              </summary>
            </details>

            {/* Dropdown - Template */}
            <details className="group py-[16px] px-[20px] mb-0  relative">
              <summary className="flex justify-center gap-5 items-center cursor-pointer text-[var(--lgreen)] text-lg">
                Services
                <svg
                  className="w-4 h-4 transition-transform duration-200 group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-2 space-y-1 bg-[var(--lgreen2)] border border-[#1b323333] rounded-[12px] absolute text-center w-[90%] left-1/2 -translate-x-1/2">
                <Link href="/services/web" className="block py-1 text-[#222)]">Sales Process Consulting</Link>
                <Link href="/services/mobile" className="block py-1 text-[#222)]">Marketing Strategy Consulting</Link>
                <Link href="/services/seo" className="block py-1 text-[#222)]">Digital & Tech Transformation</Link>
                <Link href="/services/seo" className="block py-1 text-[#222)]">Revenue & Efficiency Consulting</Link>
              </div>
            </details>

            <details className="group py-[16px] px-[20px] mb-0  relative">
              <summary className="flex justify-center gap-5 items-center cursor-pointer text-[var(--lgreen)] text-lg">
                Resources
                <svg
                  className="w-4 h-4 transition-transform duration-200 group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-2 space-y-1 bg-[var(--lgreen2)] border border-[#1b323333] rounded-[12px] absolute text-center w-[90%] left-1/2 -translate-x-1/2">
                <Link href="/services/web" className="block py-1 text-[#222)]">Blogs</Link>
                <Link href="/services/mobile" className="block py-1 text-[#222)]">Downloadable Playbooks</Link>
                <Link href="/services/seo" className="block py-1 text-[#222)]">Whitepapers & Research Reports</Link>
                <Link href="/services/seo" className="block py-1 text-[#222)]">Whitepapers & Research Reports</Link>
              </div>
            </details>

              <details className="group py-[16px] px-[20px] mb-0  relative">
              <summary className="flex justify-center gap-5 items-center cursor-pointer text-[var(--lgreen)] text-lg">
                Contact Us
              </summary>
            </details>

            {/* Button at the bottom */}
            <Link
              href="#"
              target="_blank"
              className="mt-[16px] flex justify-center items-center h-11 px-5 text-lg font-normal rounded-[50px] bg-[var(--lgreen)] text-[var(--dgreen)] transition-colors duration-200 hover:bg-[var(--lgreen2)]"
            >
              Schedule Appointment
            </Link>
          </div>


      </nav>
    </header>
    
  );
}
