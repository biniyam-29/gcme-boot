"use client";
import { useRouter } from "next/navigation";
import { FaLaptopCode, FaCameraRetro, FaMusic } from "react-icons/fa";

const categories = [
  {
    key: "development",
    label: "Full Stack Development",
    icon: <FaLaptopCode size={32} />,
  },
  {
    key: "media",
    label: "Digital Media & Storytelling",
    icon: <FaCameraRetro size={32} />,
  },
  {
    key: "music",
    label: "Worship Music & Production",
    icon: <FaMusic size={32} />,
  },
];

export default function RegisterLanding() {
  const router = useRouter();

  const handleCategorySelect = (key: string) => {
    router.push(`/register/${key}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#1C0033] to-[#0A0014] text-white px-4 py-12">
      <div className="bg-[#2F0A4A]/80 p-8 rounded-2xl shadow-2xl max-w-lg w-full">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Register for Gara Bootcamp
        </h1>
        <h2 className="text-xl font-semibold mb-4 text-center">
          Choose Your Track
        </h2>
        <div className="flex flex-col gap-4">
          {categories.map((cat) => (
            <button
              key={cat.key}
              className="group relative flex flex-col items-center justify-center bg-gradient-to-br from-[#DD33FF]/80 to-[#7C3AED]/80 hover:from-[#B43CFB] hover:to-[#DD33FF] text-white font-bold py-8 px-6 rounded-2xl shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none border-2 border-transparent hover:border-[#fff]/40 min-w-[180px]"
              onClick={() => handleCategorySelect(cat.key)}
            >
              <span className="mb-2 text-3xl drop-shadow-lg animate-bounce-slow">
                {cat.icon}
              </span>
              <span className="text-lg text-center leading-tight drop-shadow">
                {cat.label}
              </span>
              <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-16 h-2 bg-gradient-to-r from-[#DD33FF] to-[#B43CFB] rounded-full opacity-60 group-hover:opacity-100 transition" />
            </button>
          ))}
        </div>
      </div>
      <style jsx global>{`
        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-bounce-slow {
          animation: bounce 2.5s infinite;
        }
      `}</style>
    </div>
  );
}
