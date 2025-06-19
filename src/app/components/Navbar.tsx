import React from "react";
import Link from "next/link";

const Navbar = ({
  headerRef,
}: {
  headerRef?: React.RefObject<HTMLElement | null>;
}) => (
  <header
    ref={headerRef}
    className="fixed w-full top-0 z-30 pt-6 px-4 md:px-16 lg:px-24 transition-opacity duration-500"
  >
    <div className="mx-auto max-w-7xl bg-[#2F0A4A]/70 backdrop-blur-md rounded-full py-3 px-8 flex items-center justify-between shadow-lg border border-white/20">
      <div className="flex items-center space-x-2 text-lg font-semibold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125h9.75a1.125 1.125 0 001.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
        <span>Gara Bootcamp</span>
      </div>
      <Link href="/register">
        <button className="bg-[#DD33FF]/30 hover:bg-[#BF29E6]/30 text-[#DD33FF] font-medium py-2 px-6 rounded-full transition-colors duration-200 shadow-md">
          Register Now
        </button>
      </Link>
    </div>
  </header>
);

export default Navbar;
