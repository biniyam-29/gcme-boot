import React from "react";
import Link from "next/link";

const ConfirmationScreen: React.FC = () => (
  <div className="flex flex-col items-center justify-center gap-6 animate-fade-in">
    <svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      className="mb-2"
    >
      <circle cx="60" cy="60" r="60" fill="#DD33FF" opacity="0.2" />
      <path
        d="M40 65l15 15 25-35"
        stroke="#DD33FF"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
    <h2 className="text-3xl font-extrabold bg-gradient-to-r from-[#DD33FF] to-[#7C3AED] bg-clip-text text-transparent text-center">
      Thank you for registering!
    </h2>
    <p className="text-lg text-white/80 text-center max-w-md">
      We&apos;re excited to have you on board. Check your email for next steps
      and get ready for an amazing journey at Gara Bootcamp!
    </p>
    <Link
      href="/"
      className="mt-2 bg-gradient-to-r from-[#DD33FF] to-[#7C3AED] text-white font-bold py-2 px-8 rounded-full shadow-lg hover:from-[#B43CFB] hover:to-[#DD33FF] transition-all text-center"
    >
      Back to Home
    </Link>
  </div>
);

export default ConfirmationScreen;
