import React from "react";

interface StepBarProps {
  step: number;
}

const steps = ["Choose Track", "Questions", "Done!"];

const StepBar: React.FC<StepBarProps> = ({ step }) => (
  <div className="flex items-center justify-center gap-4 mb-8">
    {steps.map((label, idx) => (
      <div key={label} className="flex items-center">
        <div
          className={`w-8 h-8 flex items-center justify-center rounded-full font-bold text-lg border-2 transition-all duration-300
            ${
              step === idx + 1
                ? "bg-[#DD33FF] text-white border-[#DD33FF] scale-110 shadow-lg"
                : "bg-white/20 text-[#DD33FF] border-[#DD33FF]/40"
            }
          `}
        >
          {idx + 1}
        </div>
        {idx < steps.length - 1 && (
          <div className="w-10 h-1 bg-gradient-to-r from-[#DD33FF] to-[#B43CFB] mx-2 rounded-full"></div>
        )}
      </div>
    ))}
  </div>
);

export default StepBar;
