const Footer = () => (
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
);

export default Footer;
