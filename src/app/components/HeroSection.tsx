import React from "react";
import Link from "next/link";

const HeroSection = React.forwardRef<HTMLDivElement>((props, ref) => (
  <div ref={ref} className="max-w-7xl mx-auto">
    <section className="relative z-10 mt-20 md:mt-16 flex justify-center">
      <div className="bg-[#B43CFB]/40 text-white text-sm px-4 py-2 rounded-full backdrop-blur-sm">
        Limited spots available! Apply now to secure your future.
      </div>
    </section>
    <main className="relative z-10 flex flex-col items-center text-center mt-16 md:mt-24 px-4 md:px-16 lg:px-24">
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-wide">
        Gara Missional Bootcamp by Great Commission Ministries Ethiopia
      </h1>
      <p className="mt-9 text-base md:text-lg text-gray-200">
        Unlock your potential in digital media and technology. Our intensive
        bootcamp offers hands-on training, collaborative projects, and
        mentorship to equip you for impactful ministry and professional success.
      </p>
      <div className="mt-8 flex items-center space-x-2 text-lg text-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          />
        </svg>
        <span>Jul 11 - Aug 22</span>
      </div>
      <Link href="/register">
        <button className="mt-10 bg-[#DD33FF] hover:bg-[#BF29E6] text-white font-semibold py-3 px-8 rounded-full text-lg shadow-lg transition-colors duration-200">
          Register Now
        </button>
      </Link>
    </main>
  </div>
));

HeroSection.displayName = "HeroSection";
export default HeroSection;
