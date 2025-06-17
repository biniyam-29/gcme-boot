"use client"; // This directive marks the component as a Client Component

import { useRef} from "react";

// Reusable Chip component for the bottom section
// This component displays a small colored dot next to text,
// mimicking the category tags in the design.
function Chip({ text }: { text: string }) {
  return (
    <div className="flex items-center space-x-2 text-white text-sm md:text-base">
      {/* Small purple dot */}
      {/* Adjusted dot color to match button color. */}
      <span className="w-2 h-2 bg-[#DD33FF] rounded-full flex-shrink-0"></span>
      {/* Chip text */}
      <span>{text}</span>
    </div>
  );
}

export default function HomePage() {
  // Removed headerOpacity state as it's no longer needed for fading
  // const [headerOpacity, setHeaderOpacity] = useState(1);
  // Ref for the content *below* the sticky header to determine fade point
  const heroContentRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null); // Ref for the header itself to get its height

  // Removed useEffect that handled scroll for header opacity

  return (
    // Main container with background gradient and font styling
    <div className="min-h-screen relative bg-gradient-to-br from-[#1C0033] to-[#0A0014] text-white font-sans overflow-hidden">
      <section
        className="bg-cover bg-center pt-10 min-h-screen relative" // Add h-screen
        style={{ backgroundImage: "url('/images/hero-section/hero-bg.png')" }}
      >
        {/* Navbar - now outside the hero section to control its stickiness independently */}
        <header
          ref={headerRef} // Attach ref to header to get its height
          className="fixed w-full top-0 z-30 pt-6 px-4 md:px-16 lg:px-24 transition-opacity duration-500"
          // Removed style={{ opacity: headerOpacity }} as header should always be visible
        >
          {/* Pill-shaped container for the nav elements */}
          <div className="mx-auto max-w-[800px] bg-[#2F0A4A]/70 backdrop-blur-md rounded-full py-3 px-8 flex items-center justify-between shadow-lg">
            {/* Logo and text */}
            <div className="flex items-center space-x-2 text-lg font-semibold">
              {/* House icon (representing the 'Gara Bootcamp' logo) */}
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
            {/* Register Now button */}
            <a href="https://docs.google.com/forms/d/1lQ5D9oRMk9yPO732pAsr2xnRJY20tFq7aytjp4KOnO4/viewform?ts=684dc925&edit_requested=true&pli=1">
              <button className="bg-[#DD33FF]/30 hover:bg-[#BF29E6]/30 text-[#DD33FF] font-medium py-2 px-6 rounded-full transition-colors duration-200 shadow-md">
                Register Now
              </button>
            </a>
          </div>
        </header>

        {/* Hero Section - now only contains the content that should trigger the fade */}

        {/* This main content holds the hero text, countdown, etc. */}
        <div ref={heroContentRef}>
          {" "}
          {/* Attach ref here to measure the hero content */}
          {/* Countdown Banner */}
          <section className="relative z-10 mt-20 md:mt-16 flex justify-center">
            <div className="bg-[#B43CFB]/40 text-white text-sm px-4 py-2 rounded-full backdrop-blur-sm">
              Limited spots available! Apply now to secure your future.
            </div>
          </section>
          {/* Hero Main Content */}
          <main className="relative z-10 flex flex-col items-center text-center mt-16 md:mt-24 px-4 md:px-16 lg:px-24">
            {/* Large Heading */}
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-wide max-w-4xl">
              Gara Missional Bootcamp by Great Commission Ministries Ethiopia
            </h1>
            {/* Subtext */}
            <p className="mt-6 text-base md:text-lg text-gray-200 max-w-2xl">
              Unlock your potential in digital media and technology. Our
              intensive bootcamp offers hands-on training, collaborative
              projects, and mentorship to equip you for impactful ministry and
              professional success.
            </p>
            {/* Date and Arrow Icon */}
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
            {/* Call-to-action Button */}
            <a href="https://docs.google.com/forms/d/1lQ5D9oRMk9yPO732pAsr2xnRJY20tFq7aytjp4KOnO4/viewform?ts=684dc925&edit_requested=true&pli=1">
              <button className="mt-10 bg-[#DD33FF] hover:bg-[#BF29E6] text-white font-semibold py-3 px-8 rounded-full text-lg shadow-lg transition-colors duration-200">
                Register Now
              </button>
            </a>
          </main>
        </div>

        {/* Bottom Scrollable Category Chips/Tags - Moved after Hero Main Content */}
        <section className="absolute bottom-0 mt-20 w-full bg-[#8B5CF6]/80 backdrop-blur-lg py-6 overflow-hidden">
          <div className="relative w-full overflow-hidden">
            <div
              className="flex animate-scroll-chips"
              style={{ animationDuration: "40s" }}
            >
              {" "}
              {/* Adjusted duration for smoother scroll */}
              {/* First set of chips */}
              <div className="inline-flex items-center px-6 md:px-16 lg:px-24 space-x-8 flex-shrink-0">
                <Chip text="Full Stack Development" />
                <Chip text="Photography" />
                <Chip text="Graphic Design" />
                <Chip text="Film making" />
                <Chip text="Digital Content Creation" />
                <Chip text="Children's Media" />
                <Chip text="Front End" />
                <Chip text="Story Telling" />
              </div>
              {/* Duplicate set of chips to enable continuous loop */}
              <div className="inline-flex items-center px-6 md:px-16 lg:px-24 space-x-8 flex-shrink-0">
                <Chip text="Full Stack Development" />
                <Chip text="Photography" />
                <Chip text="Graphic Design" />
                <Chip text="Film making" />
                <Chip text="Digital Content Creation" />
                <Chip text="Children's Media" />
                <Chip text="Front End" />
                <Chip text="Story Telling" />
              </div>
              {/* A third set to ensure a smooth transition and avoid empty space during the loop */}
              <div className="inline-flex items-center px-6 md:px-16 lg:px-24 space-x-8 flex-shrink-0">
                <Chip text="Full Stack Development" />
                <Chip text="Photography" />
                <Chip text="Graphic Design" />
                <Chip text="Film making" />
                <Chip text="Digital Content Creation" />
                <Chip text="Children's Media" />
                <Chip text="Front End" />
                <Chip text="Story Telling" />
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* Program Tracks Section */}
      <section className="relative z-10 py-20 px-4 md:px-16 lg:px-24 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white text-left mb-12">
            Program Tracks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1: Media */}
            <div className="bg-[#1A002C] rounded-xl p-0 shadow-2xl flex flex-col overflow-hidden">
              <div className="relative h-56 w-full rounded-t-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#8A2BE2] to-[#FF00FF] opacity-80 rounded-t-xl"></div>
                <img
                  src="/program-section(card-images)/media.png"
                  alt="Digital Media Track Illustration"
                  className="relative z-10 h-full w-full object-cover"
                />
              </div>
              <div className="p-6 pt-4">
                <h3 className="text-2xl font-bold uppercase text-white mb-2 text-left">
                  Digital Media & Storytelling
                </h3>
                <p className="text-lg font-semibold text-gray-200 mb-4 text-left">
                  Crafting impactful narratives for a digital world.
                </p>
                <p className="text-sm text-gray-300 leading-relaxed mb-6 text-left">
                  Dive into the art and science of visual and audio
                  communication. This track covers fundamental principles and
                  practical skills for creating compelling media content that
                  resonates with audiences.
                </p>
                <h4 className="text-md font-semibold text-gray-200 mb-2 text-left">
                  Categories
                </h4>
                <ul className="text-sm text-gray-300 list-none p-0 space-y-1 text-left">
                  <li>
                    <Chip text="Photography & Visual Design" />
                  </li>
                  <li>
                    <Chip text="Filmmaking & Video Production" />
                  </li>
                  <li>
                    <Chip text="Digital Content Creation & Marketing" />
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 2: Full Stack Development */}
            <div className="bg-[#1A002C] rounded-xl p-0 shadow-2xl flex flex-col overflow-hidden">
              <div className="relative h-56 w-full rounded-t-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#8A2BE2] to-[#FF00FF] opacity-80 rounded-t-xl"></div>
                <img
                  src="/program-section(card-images)/development.png"
                  alt="Full Stack Development Track Illustration"
                  className="relative z-10 h-full w-full object-cover"
                />
              </div>
              <div className="p-6 pt-4">
                <h3 className="text-2xl font-bold uppercase text-white mb-2 text-left">
                  Full Stack Web Development
                </h3>
                <p className="text-lg font-semibold text-gray-200 mb-4 text-left">
                  Building dynamic web solutions from front to back.
                </p>
                <p className="text-sm text-gray-300 leading-relaxed mb-6 text-left">
                  Master the essential technologies for modern web development.
                  From user interface design to server-side logic and databases,
                  you&apos;ll gain comprehensive skills to build robust
                  applications.
                </p>
                <h4 className="text-md font-semibold text-gray-200 mb-2 text-left">
                  Categories of Full Stack Development
                </h4>
                <ul className="text-sm text-gray-300 list-none p-0 space-y-1 text-left">
                  <li>
                    <Chip text="Front-end Development (React, Next.js)" />
                  </li>
                  <li>
                    <Chip text="Back-end Development (Node.js, Firebase)" />
                  </li>
                  <li>
                    <Chip text="UI/UX Design & Prototyping" />
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 3: Music */}
            <div className="bg-[#1A002C] rounded-xl p-0 shadow-2xl flex flex-col overflow-hidden">
              <div className="relative h-56 w-full rounded-t-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#8A2BE2] to-[#FF00FF] opacity-80 rounded-t-xl"></div>
                <img
                  src="/program-section(card-images)/music.png"
                  alt="Worship Music Track Illustration"
                  className="relative z-10 h-full w-full object-cover"
                />
              </div>
              <div className="p-6 pt-4">
                <h3 className="text-2xl font-bold uppercase text-white mb-2 text-left">
                  Worship Music & Production
                </h3>
                <p className="text-lg font-semibold text-gray-200 mb-4 text-left">
                  Developing musical talent for ministry and beyond.
                </p>
                <p className="text-sm text-gray-300 leading-relaxed mb-6 text-left">
                  Explore the creative and technical aspects of contemporary
                  worship music. This track focuses on songwriting, music
                  production, sound engineering, and leading worship in diverse
                  settings.
                </p>
                <h4 className="text-md font-semibold text-gray-200 mb-2 text-left">
                  Categories in Worship Music
                </h4>
                <ul className="text-sm text-gray-300 list-none p-0 space-y-1 text-left">
                  <li>
                    <Chip text="Songwriting & Composition" />
                  </li>
                  <li>
                    <Chip text="Music Production & Audio Engineering" />
                  </li>
                  <li>
                    <Chip text="Worship Leading & Performance" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action - Join Us */}
      <section className="relative z-10 py-20 bg-[#EBE7F3] text-gray-800 overflow-hidden min-h-screen">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Content */}
          <div className="text-left px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#4F2578] mb-6">
              How to Join Our Bootcamp?
            </h2>
            <p className="text-lg text-[#6B4F8B] leading-relaxed mb-12">
              Ready to transform your skills and engage with a vibrant
              community? Here are the key requirements to embark on your journey
              with Great Commission Ministries Ethiopia&apos;s Gara Bootcamp.
            </p>

            {/* Criteria List */}
            <div className="space-y-8">
              {/* Criterion 1: Church Endorsement */}
              <div className="flex items-start space-x-4">
                {/* Icon Circle */}
                <div className="flex-shrink-0 w-12 h-12 bg-[#7C3AED] rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6.042A8.967 8.967 0 006 3.75c-1.079 0-2.157.17-3.204.51C1.972 4.472 1.9 4.597 1.9 4.722V21.75a.75.75 0 00.75.75 2.25 2.25 0 001.97-.988L8.7 18.337A6.972 6.972 0 0112 18h3.124c1.025 0 1.979.427 2.673 1.125l.492.492.001.002z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-[#4F2578] mb-1">
                    Church Endorsement
                  </h4>
                  <p className="text-gray-600">
                    Applicants must submit a letter or confirmation from their
                    local church (pastor or youth leader).
                  </p>
                </div>
              </div>

              {/* Criterion 2: Age Limit */}
              <div className="flex items-start space-x-4">
                {/* Icon Circle */}
                <div className="flex-shrink-0 w-12 h-12 bg-[#7C3AED] rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-[#4F2578] mb-1">
                    Age Limit
                  </h4>
                  <p className="text-gray-600">
                    14-30 years old (adjustable based on target audience)
                  </p>
                </div>
              </div>

              {/* Criterion 3: Skill Level */}
              <div className="flex items-start space-x-4">
                {/* Icon Circle */}
                <div className="flex-shrink-0 w-12 h-12 bg-[#7C3AED] rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-[#4F2578] mb-1">
                    Skill Level
                  </h4>
                  <p className="text-gray-600">
                    Beginners to intermediate level - passion is more important
                    than experience.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Image with Curved Background and Stripes */}
          <div className="relative h-[500px] lg:h-[600px] w-full">
            <div
              className="absolute top-0 right-0 w-full h-full border-4 border-[#7C3AED] rounded-tr-[150px] transform translate-x-9 -translate-y-9 z-0"
              style={{ opacity: 1 }}
            ></div>

            <div className="relative h-full w-full bg-[#7C3AED] rounded-tr-[150px] overflow-hidden flex items-center justify-start z-10">
              <div
                className="absolute inset-0 z-0"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(45deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 1px, transparent 1px 10px)",
                }}
              ></div>

              <img
                src="/images/join-us.png"
                alt="Smiling person"
                className="relative z-10 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* New CTA Section */}
      <section
        className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: "url('/images/cta/cta-bg.png')" }}
      >
        <div className="relative z-10 bg-white/5 backdrop-blur-lg rounded-[40px] p-8 md:p-12 shadow-xl border border-white/20 max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-12">
          <div className="flex-1 text-center md:text-left">
            <p className="text-xl md:text-2xl text-white font-medium leading-relaxed">
              Don&apos;t miss this opportunity to grow, learn, and make a
              tangible impact. Join the Gara Bootcamp and become part of a
              movement equipping digital leaders for God&apos;s Kingdom.
            </p>
          </div>
          <a href="https://docs.google.com/forms/d/1lQ5D9oRMk9yPO732pAsr2xnRJY20tFq7aytjp4KOnO4/viewform?ts=684dc925&edit_requested=true&pli=1">
            <button className="bg-[#7C3AED] hover:bg-[#6A2DD6] text-white font-semibold py-3 px-8 rounded-full text-lg shadow-lg transition-colors duration-200 flex-shrink-0">
              Register Now
            </button>
          </a>
        </div>
      </section>
      {/* Footer */}
      <footer className="relative z-10 py-6 bg-[#0A0014] text-gray-400 text-sm flex flex-col md:flex-row items-center justify-between px-4 md:px-16 lg:px-24">
        <div className="mb-2 md:mb-0">GARA BOOTCAMP</div>
        <div className="mb-2 md:mb-0">Copyright 2025© Gara Bootcamp</div>
        <a
          href="#top"
          className="flex items-center space-x-1 hover:text-white transition-colors duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
            />
          </svg>
          <span>Top</span>
        </a>
      </footer>

      {/* Visual Background Treatment (Abstract Wave Simulation) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Main background fade from bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#B43CFB]/30 to-transparent"></div>
        {/* Deeper background fade to maintain dark bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#0A0014] to-transparent"></div>
        {/* First wave-like element: blurred, rotated, scaled purple gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-r from-[#B43CFB]/20 via-[#B43CFB]/10 to-transparent transform -translate-y-1/4 rotate-3 scale-x-125 opacity-70 blur-3xl"></div>
        {/* Second wave-like element: slightly different blur, rotation, scale for depth */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-r from-[#B43CFB]/10 via-[#B43CFB]/5 to-transparent transform -translate-y-1/2 rotate-1 scale-x-150 opacity-50 blur-2xl"></div>
        {/* Subtle top fade to match the dark top of the background */}
        <div className="absolute top-0 left-0 right-0 h-[100px] bg-gradient-to-b from-[#1C0033]/80 to-transparent"></div>
      </div>

      {/* Custom CSS for the scrolling animation */}
      <style>{`
        @keyframes scrollChips {
          from {
            transform: translateX(0%);
          }
          to {
            /* Translate by 2/3 of the duplicated content width to create a seamless loop */
            transform: translateX(-66.66%);
          }
        }
        .animate-scroll-chips {
          animation: scrollChips linear infinite;
          width: max-content; /* Ensures the div is wide enough for all content */
        }
      `}</style>
    </div>
  );
}
