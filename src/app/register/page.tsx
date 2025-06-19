"use client";
import { useState } from "react";
import { FaLaptopCode, FaCameraRetro, FaMusic } from "react-icons/fa";
import StepBar from "./components/StepBar";
import BasicInfoForm from "./components/BasicInfoForm";
import DevelopmentForm from "./components/DevelopmentForm";
import MediaForm from "./components/MediaForm";
import MusicForm from "./components/MusicForm";
import ConfirmationScreen from "./components/ConfirmationScreen";
import { FormState } from "./types";

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

// Define a type for each question
interface Question {
  label: string;
  name: string;
  type?: "radio" | "checkbox" | "textarea" | "text";
  options?: string[];
  required?: boolean;
}

// Add a type for the basic info questions
const basicInfoQuestions: Question[] = [
  { label: "Name", name: "name", type: "text", required: true },
  { label: "Age", name: "age", type: "text", required: true },
  {
    label: "Gender",
    name: "gender",
    type: "radio",
    options: ["Male", "Female"],
    required: true,
  },
  { label: "Email Address", name: "email", type: "text", required: true },
  { label: "Phone Number", name: "phone", type: "text", required: true },
  { label: "City", name: "city", type: "text", required: true },
  {
    label: "Are you a Christian?",
    name: "is_christian",
    type: "radio",
    options: ["Yes", "No"],
    required: true,
  },
  {
    label: "Tell us briefly about your walk with God.",
    name: "walk_with_god",
    type: "textarea",
    required: true,
  },
  {
    label: "Are you part of a local church or Christian community?",
    name: "in_church",
    type: "radio",
    options: ["Yes", "No"],
    required: true,
  },
  {
    label: "If yes, name the church or group",
    name: "church_name",
    type: "text",
    required: false,
  },
];

export default function RegisterPage() {
  const [step, setStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [form, setForm] = useState<FormState>({});
  const [submitted, setSubmitted] = useState(false);

  const handleCategorySelect = (key: string) => {
    setSelectedCategory(key);
    setStep(2);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setForm((prev: FormState) => {
        const arr = Array.isArray(prev[name]) ? (prev[name] as string[]) : [];
        if (checked) {
          return { ...prev, [name]: [...arr, value] };
        } else {
          return { ...prev, [name]: arr.filter((v: string) => v !== value) };
        }
      });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleBack = () => {
    setStep(1);
    setSelectedCategory(null);
    setForm({});
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setStep(3);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#1C0033] via-[#B43CFB]/30 to-[#0A0014] text-white px-4 py-12 overflow-hidden">
      {/* Decorative SVGs */}
      <svg
        className="absolute top-0 left-0 w-64 h-64 opacity-30 blur-2xl -z-10"
        viewBox="0 0 200 200"
      >
        <circle cx="100" cy="100" r="100" fill="#DD33FF" />
      </svg>
      <svg
        className="absolute bottom-0 right-0 w-80 h-80 opacity-20 blur-3xl -z-10"
        viewBox="0 0 200 200"
      >
        <circle cx="100" cy="100" r="100" fill="#7C3AED" />
      </svg>
      <div className="bg-white/10 backdrop-blur-2xl p-8 rounded-3xl shadow-2xl max-w-xl w-full border border-white/20 relative animate-fade-in">
        <h1 className="text-4xl font-extrabold mb-2 text-center bg-gradient-to-r from-[#DD33FF] to-[#7C3AED] bg-clip-text text-transparent drop-shadow-lg">
          Register for Gara Bootcamp
        </h1>
        <StepBar step={step} />
        {step === 1 && (
          <>
            <h2 className="text-2xl font-semibold mb-6 text-center">
              Choose Your Track
            </h2>
            <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
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
          </>
        )}
        {step === 2 && selectedCategory && !submitted && (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 mt-2 animate-fade-in"
          >
            <h2 className="text-2xl font-semibold mb-2 text-center bg-gradient-to-r from-[#DD33FF] to-[#7C3AED] bg-clip-text text-transparent">
              Basic Information
            </h2>
            <BasicInfoForm
              form={form}
              onChange={handleInputChange}
              questions={basicInfoQuestions}
            />
            <h2 className="text-2xl font-semibold mb-2 text-center bg-gradient-to-r from-[#DD33FF] to-[#7C3AED] bg-clip-text text-transparent">
              {categories.find((c) => c.key === selectedCategory)?.label}{" "}
              Questions
            </h2>
            {selectedCategory === "development" && (
              <DevelopmentForm form={form} onChange={handleInputChange} />
            )}
            {selectedCategory === "media" && (
              <MediaForm form={form} onChange={handleInputChange} />
            )}
            {selectedCategory === "music" && (
              <MusicForm form={form} onChange={handleInputChange} />
            )}
            <div className="flex justify-between mt-4">
              <button
                type="button"
                onClick={handleBack}
                className="text-sm text-[#B43CFB] hover:underline font-semibold"
              >
                Back
              </button>
              <button
                type="submit"
                className="bg-gradient-to-r from-[#DD33FF] to-[#7C3AED] hover:from-[#B43CFB] hover:to-[#DD33FF] text-white font-bold py-2 px-8 rounded-full shadow-lg transition-all text-lg"
              >
                Submit
              </button>
            </div>
          </form>
        )}
        {step === 3 && submitted && <ConfirmationScreen />}
      </div>
      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s cubic-bezier(0.4, 0, 0.2, 1) both;
        }
        .animate-bounce-slow {
          animation: bounce 2.5s infinite;
        }
        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
}
