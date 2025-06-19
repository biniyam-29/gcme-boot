import React from "react";
import { Question, FormState } from "../types";

const mediaQuestions: Question[] = [
  {
    label: "Which track are you applying for?",
    name: "media_track",
    type: "radio",
    options: ["Photography", "Filmmaking"],
    required: true,
  },
  {
    label: "What best describes your current skill level?",
    name: "media_skill_level",
    type: "radio",
    options: [
      "Beginner – I'm just starting out",
      "Intermediate – I've done some projects or personal work",
      "Advanced – I've done media work for others or professionally",
    ],
    required: true,
  },
  {
    label: "What tools do you currently have access to?",
    name: "media_tools",
    type: "checkbox",
    options: [
      "Smartphone",
      "DSLR/Mirrorless Camera",
      "Editing Software (e.g. Premiere, Lightroom)",
      "Laptop",
      "Lighting Equipment",
      "Other (write in)",
      "None, but willing to learn with what's available",
    ],
    required: true,
  },
  {
    label: "Have you ever done any of the following?",
    name: "media_experience",
    type: "checkbox",
    options: [
      "Taken a photography or film class",
      "Made a short film or video",
      "Worked on church or ministry media",
      "Posted photography/film work on social media",
      "Won or submitted to a media competition",
      "I've never done any of these but I'm excited to learn!",
    ],
    required: true,
  },
  {
    label:
      "Why do you want to join the Gara Media Bootcamp? (What excites you about this opportunity?)",
    name: "media_motivation",
    type: "textarea",
    required: true,
  },
  {
    label:
      "What do you think is the role of media in the mission of the church?",
    name: "media_role_in_church",
    type: "textarea",
    required: true,
  },
  {
    label:
      "How do you want to use your creative gifts to serve God and others?",
    name: "media_serve_god_others",
    type: "textarea",
    required: true,
  },
  {
    label:
      "Are you willing to commit your skills to bless the church, build others, and share the Gospel?",
    name: "media_commit_skills",
    type: "radio",
    options: ["Yes", "No", "I'm not sure yet"],
    required: true,
  },
  {
    label: "What do you hope to do with your skills after the bootcamp?",
    name: "media_after_bootcamp",
    type: "textarea",
    required: true,
  },
  {
    label: "Are you fully available from July 1 – August 5, 2025?",
    name: "media_availability_july",
    type: "radio",
    options: ["Yes", "No"],
    required: true,
  },
  {
    label:
      "This bootcamp requires teamwork, discipline, and full attendance. Are you committed?",
    name: "media_commitment",
    type: "radio",
    options: ["Yes", "No"],
    required: true,
  },
];

interface MediaFormProps {
  form: FormState;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const MediaForm: React.FC<MediaFormProps> = ({ form, onChange }) => (
  <div className="flex flex-col gap-4">
    {mediaQuestions.map((q) => (
      <div
        key={q.name}
        className="flex flex-col gap-1 bg-white/10 rounded-xl p-4 shadow-md border border-white/10"
      >
        <label
          htmlFor={q.name}
          className="text-base font-semibold mb-1 text-[#DD33FF]"
        >
          {q.label}
        </label>
        {q.type === "radio" && q.options && (
          <div className="flex flex-wrap gap-3 mt-1">
            {q.options.map((opt) => (
              <label
                key={opt}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B43CFB]/20 hover:bg-[#DD33FF]/20 cursor-pointer transition-all border border-transparent focus-within:border-[#DD33FF]"
              >
                <input
                  type="radio"
                  name={q.name}
                  value={opt}
                  checked={form[q.name] === opt}
                  onChange={onChange}
                  className="accent-[#DD33FF] w-4 h-4"
                  required={q.required}
                />
                <span className="text-sm text-white">{opt}</span>
              </label>
            ))}
          </div>
        )}
        {q.type === "checkbox" && q.options && (
          <div className="flex flex-wrap gap-3 mt-1">
            {q.options.map((opt) => (
              <label
                key={opt}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7C3AED]/20 hover:bg-[#DD33FF]/20 cursor-pointer transition-all border border-transparent focus-within:border-[#DD33FF]"
              >
                <input
                  type="checkbox"
                  name={q.name}
                  value={opt}
                  checked={
                    Array.isArray(form[q.name])
                      ? form[q.name].includes(opt)
                      : false
                  }
                  onChange={onChange}
                  className="accent-[#DD33FF] w-4 h-4"
                  required={
                    q.required && (!form[q.name] || form[q.name].length === 0)
                  }
                />
                <span className="text-sm text-white">{opt}</span>
              </label>
            ))}
          </div>
        )}
        {q.type === "textarea" && (
          <textarea
            id={q.name}
            name={q.name}
            value={form[q.name] || ""}
            onChange={onChange}
            className="rounded-lg p-2 text-black min-h-[60px] border-2 border-[#DD33FF]/30 focus:border-[#DD33FF] focus:ring-2 focus:ring-[#DD33FF]/30"
            required={q.required}
          />
        )}
        {(!q.type || q.type === "text") && (
          <input
            id={q.name}
            name={q.name}
            type="text"
            value={form[q.name] || ""}
            onChange={onChange}
            className="rounded-lg p-2 text-black border-2 border-[#DD33FF]/30 focus:border-[#DD33FF] focus:ring-2 focus:ring-[#DD33FF]/30"
            required={q.required}
          />
        )}
      </div>
    ))}
  </div>
);

export default MediaForm;
