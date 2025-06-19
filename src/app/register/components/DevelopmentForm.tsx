import React from "react";
import { Question, FormState } from "../types";

const developmentQuestions: Question[] = [
  {
    label: "Which track are you most interested in?",
    name: "track_interest",
    type: "radio",
    options: [
      "Mobile Development",
      "Web Development",
      "Artificial intelligence",
      "Not sure yet, but open to learn",
    ],
    required: true,
  },
  {
    label: "How would you describe your coding experience?",
    name: "coding_experience",
    type: "radio",
    options: [
      "Beginner – I'm just getting started",
      "Intermediate – I've built simple projects",
      "Advanced – I've built or contributed to real-world apps",
      "Other",
    ],
    required: true,
  },
  {
    label: "Which programming languages or tools have you worked with?",
    name: "languages_tools",
    type: "checkbox",
    options: [
      "HTML / CSS / JavaScript",
      "React / Angular / Vue",
      "Python",
      "Flutter / Dart",
      "Java / Kotlin",
      "Node.js",
      "TensorFlow / PyTorch",
      "Git & GitHub",
      "I haven't used any yet",
    ],
    required: true,
  },
  {
    label: "Have you completed any online coding courses or bootcamps?",
    name: "completed_courses",
    type: "radio",
    options: ["Yes", "No, but I'm self-taught", "Not yet"],
    required: true,
  },
  {
    label: "If Yes please name them",
    name: "courses_names",
    type: "text",
    required: false,
  },
  {
    label: "Have you ever built a personal or team project before?",
    name: "built_project",
    type: "radio",
    options: [
      "Yes – solo project",
      "Yes – team or class project",
      "No – this would be my first time",
    ],
    required: true,
  },
  {
    label: "If yes, share a short description or link to your favorite project",
    name: "project_description",
    type: "text",
    required: false,
  },
  {
    label: "What area in tech excites you most and why?",
    name: "tech_excites",
    type: "textarea",
    required: true,
  },
  {
    label:
      "What do you think is the role of your skill in the mission of the church?",
    name: "role_in_church",
    type: "textarea",
    required: true,
  },
  {
    label:
      "How do you want to use your creative gifts to serve God and others?",
    name: "serve_god_others",
    type: "textarea",
    required: true,
  },
  {
    label:
      "Are you willing to commit your skills to bless the church, build others, and share the Gospel?",
    name: "commit_skills",
    type: "radio",
    options: ["Yes", "No", "I'm not sure yet"],
    required: true,
  },
  {
    label: "What do you hope to do with your skills after the bootcamp?",
    name: "after_bootcamp",
    type: "textarea",
    required: true,
  },
  {
    label: "Are you fully available from July 1 – July 30, 2025?",
    name: "availability_july",
    type: "radio",
    options: ["Yes", "No"],
    required: true,
  },
  {
    label:
      "This bootcamp requires teamwork, discipline, and full attendance. Are you committed?",
    name: "commitment",
    type: "radio",
    options: ["Yes", "No"],
    required: true,
  },
];

interface DevelopmentFormProps {
  form: FormState;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const DevelopmentForm: React.FC<DevelopmentFormProps> = ({
  form,
  onChange,
}) => (
  <div className="flex flex-col gap-4">
    {developmentQuestions.map((q) => (
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

export default DevelopmentForm;
