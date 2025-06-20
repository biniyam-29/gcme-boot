"use client";
import { useState } from "react";
import StepBar from "../components/StepBar";
import BasicInfoForm from "../components/BasicInfoForm";
import DevelopmentForm from "../components/DevelopmentForm";
import ConfirmationScreen from "../components/ConfirmationScreen";
import { basicInfoQuestions } from "../basicInfoQuestions";
import { FormState } from "../types";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/DEV_DUMMY_FORM_ID/formResponse";
const ENTRY_IDS: Record<string, string> = {
  name: "entry.111111111",
  age: "entry.111111112",
  gender: "entry.111111113",
  email: "entry.111111114",
  phone: "entry.111111115",
  city: "entry.111111116",
  is_christian: "entry.111111117",
  walk_with_god: "entry.111111118",
  in_church: "entry.111111119",
  church_name: "entry.111111120",
  track_interest: "entry.111111121",
  coding_experience: "entry.111111122",
  languages_tools: "entry.111111123",
  completed_courses: "entry.111111124",
  courses_names: "entry.111111125",
  built_project: "entry.111111126",
  project_description: "entry.111111127",
  tech_excites: "entry.111111128",
  role_in_church: "entry.111111129",
  serve_god_others: "entry.111111130",
  commit_skills: "entry.111111131",
  after_bootcamp: "entry.111111132",
  availability_july: "entry.111111133",
  commitment: "entry.111111134",
};

export default function DevelopmentRegisterPage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormState>({});
  const [submitted, setSubmitted] = useState(false);

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
    setForm({});
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Map form data to Google Form entry IDs
    const formData = new URLSearchParams();
    Object.entries(ENTRY_IDS).forEach(([key, entryId]) => {
      const value = form[key];
      if (Array.isArray(value)) {
        value.forEach((v) => formData.append(entryId, v));
      } else if (value) {
        formData.append(entryId, value);
      }
    });
    fetch(GOOGLE_FORM_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: formData.toString(),
    });
    setSubmitted(true);
    setStep(3);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#1C0033] to-[#0A0014] text-white px-4 py-12">
      <div className="bg-[#2F0A4A]/80 p-8 rounded-2xl shadow-2xl max-w-lg w-full">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Development Track Registration
        </h1>
        <StepBar step={step} />
        {step === 1 && !submitted && (
          <form
            onSubmit={() => setStep(2)}
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
            <div className="flex justify-end mt-4">
              <button
                type="submit"
                className="bg-gradient-to-r from-[#DD33FF] to-[#7C3AED] text-white font-bold py-2 px-8 rounded-full shadow-lg transition-all text-lg"
              >
                Continue
              </button>
            </div>
          </form>
        )}
        {step === 2 && !submitted && (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 mt-2 animate-fade-in"
          >
            <h2 className="text-2xl font-semibold mb-2 text-center bg-gradient-to-r from-[#DD33FF] to-[#7C3AED] bg-clip-text text-transparent">
              Development Track Questions
            </h2>
            <DevelopmentForm form={form} onChange={handleInputChange} />
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
                className="bg-gradient-to-r from-[#DD33FF] to-[#7C3AED] text-white font-bold py-2 px-8 rounded-full shadow-lg transition-all text-lg"
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
      `}</style>
    </div>
  );
}
