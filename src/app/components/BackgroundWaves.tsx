const BackgroundWaves = () => (
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
);

export default BackgroundWaves;
