"use client";
import { useState } from "react";
import StepBar from "../components/StepBar";
import BasicInfoForm from "../components/BasicInfoForm";
import MusicForm from "../components/MusicForm";
import ConfirmationScreen from "../components/ConfirmationScreen";
import { basicInfoQuestions } from "../basicInfoQuestions";
import { FormState } from "../types";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/MUSIC_DUMMY_FORM_ID/formResponse";
const ENTRY_IDS: Record<string, string> = {
  name: "entry.333311111",
  age: "entry.333311112",
  gender: "entry.333311113",
  email: "entry.333311114",
  phone: "entry.333311115",
  city: "entry.333311116",
  is_christian: "entry.333311117",
  walk_with_god: "entry.333311118",
  in_church: "entry.333311119",
  church_name: "entry.333311120",
  music_track: "entry.333311121",
  music_skill_level: "entry.333311122",
  music_instruments: "entry.333311123",
  music_experience: "entry.333311124",
  music_motivation: "entry.333311125",
  music_role_in_church: "entry.333311126",
  music_serve_god_others: "entry.333311127",
  music_commit_skills: "entry.333311128",
  music_after_bootcamp: "entry.333311129",
  music_availability_july: "entry.333311130",
  music_commitment: "entry.333311131",
};

export default function MusicRegisterPage() {
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
          Music Track Registration
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
              Music Track Questions
            </h2>
            <MusicForm form={form} onChange={handleInputChange} />
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
