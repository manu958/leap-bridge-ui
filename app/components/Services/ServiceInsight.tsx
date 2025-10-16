"use client";
import { zodiak, satoshi } from "@/app/fonts";

export default function ServiceInsights() {
  return (
    <section className="bg-[#eaf0eb] py-12 px-5 sm:px-8 md:px-16 lg:px-24 flex flex-col md:flex-row justify-center items-start gap-10">
      {/* Left Card */}
      <div className="bg-white p-8 rounded-xl shadow-md flex-1 max-w-xl">

        {/* Heading */}
        <h2
          className={`${zodiak.className} text-2xl sm:text-3xl font-semibold text-[#1b3233] mb-4`}
        >
          Let’s discuss how we can help you grow
        </h2>

        <p
          className={`${satoshi.className} text-sm sm:text-base text-gray-700 mb-6`}
        >
          We’d love to understand your goals and challenges. Schedule a quick call with our team to explore tailored solutions designed just for you.
        </p>

        <hr className="border-gray-300 mb-6" />

        {/* Contact Info */}
        <div className="space-y-4 text-[#1b3233]">
          <div className="flex items-center gap-3">
            <span className="text-lg">✉️</span>
            <p className={`${satoshi.className} text-sm sm:text-base`}>
              leapbridge@gmailcom
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-lg">📞</span>
            <p className={`${satoshi.className} text-sm sm:text-base`}>
              +91 4567896364
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-lg">📍</span>
            <p className={`${satoshi.className} text-sm sm:text-base`}>
              Delhi , India
            </p>
          </div>
        </div>
      </div>

      {/* Right Form */}
      <div className="flex-1 max-w-md mx-auto text-center">
        <p
          className={`${zodiak.className} text-sm sm:text-base md:text-lg text-[#1b3233] mb-6`}
        >
          Fill in the form and we will get back to you within 24h
        </p>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Your email"
            className="w-full border border-gray-300 rounded-full py-3 px-5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1b3233]"
          />
          <input
            type="text"
            placeholder="Name"
            className="w-full border border-gray-300 rounded-full py-3 px-5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1b3233]"
          />
          <input
            type="text"
            placeholder="Company"
            className="w-full border border-gray-300 rounded-full py-3 px-5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1b3233]"
          />
          <input
            type="text"
            placeholder="Phone (optional)"
            className="w-full border border-gray-300 rounded-full py-3 px-5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1b3233]"
          />

          <button
            type="button"
            className="w-full bg-[#147e5d] text-white py-3 rounded-full font-medium hover:bg-[#2d4a4b] transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
