import React from 'react';

function Chip({ text }: { text: string }) {
  return (
    <div className="flex items-center space-x-2 text-white text-sm md:text-base">
      <span className="w-2 h-2 bg-[#DD33FF] rounded-full flex-shrink-0"></span>
      <span>{text}</span>
    </div>
  );
}

const ChipsScroller = ({ allChips }: { allChips: string[] }) => (
  <section className="absolute bottom-0 mt-20 w-full bg-[#8B5CF6]/80 backdrop-blur-lg py-6 shadow-2xl shadow-black">
    <div className="relative w-full overflow-hidden px-4 md:px-16 lg:px-24">
      <div
        className="flex animate-scroll-chips"
        style={{ animationDuration: "40s" }}
      >
        <div className="inline-flex items-center space-x-8 flex-shrink-0">
          {allChips.map((chip, index) => (
            <Chip key={`chip-1-${index}`} text={chip} />
          ))}
        </div>
        <div className="inline-flex items-center space-x-8 flex-shrink-0">
          {allChips.map((chip, index) => (
            <Chip key={`chip-2-${index}`} text={chip} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ChipsScroller; 