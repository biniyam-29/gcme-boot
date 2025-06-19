"use client"; // This directive marks the component as a Client Component

import { useRef } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ChipsScroller from "./components/ChipsScroller";
import ProgramTracks from "./components/ProgramTracks";
import JoinUsSection from "./components/JoinUsSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import BackgroundWaves from "./components/BackgroundWaves";

const allChips = [
  "Full Stack Development",
  "Photography",
  "Graphic Design",
  "Film making",
  "Digital Content Creation",
  "Children's Media",
  "Front End",
  "Story Telling",
];

export default function HomePage() {
  const heroContentRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-[#1C0033] to-[#0A0014] text-white font-sans overflow-hidden">
      <section
        className="bg-cover bg-center pt-10 min-h-screen relative"
        style={{ backgroundImage: "url('/images/hero-section/hero-bg.png')" }}
      >
        <Navbar headerRef={headerRef} />
        <HeroSection ref={heroContentRef} />
        <ChipsScroller allChips={allChips} />
      </section>
      <ProgramTracks />
      <JoinUsSection />
      <CTASection />
      <Footer />
      <BackgroundWaves />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700;800&display=swap');
        body, .font-sans { font-family: 'Plus Jakarta Sans', sans-serif; }
        @keyframes scrollChips {
          from { transform: translateX(0%); }
          to { transform: translateX(-50%); }
        }
        .animate-scroll-chips { animation: scrollChips linear infinite; width: max-content; }
      `}</style>
    </div>
  );
}
