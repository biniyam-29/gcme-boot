import React from "react";
import { Question, FormState } from "../types";

const musicQuestions: Question[] = [
  {
    label: "Which track are you applying for?",
    name: "music_track",
    type: "radio",
    options: [
      "Songwriting",
      "Vocal (singing)",
      "Music Video Production",
      "Multiple / Open to explore",
    ],
    required: true,
  },
  {
    label: "How would you rate your experience in music or performance?",
    name: "music_experience_level",
    type: "radio",
    options: [
      "Beginner – I've never done it but I'm interested",
      "Intermediate – I've sung/written/produced casually or at church",
      "Advanced – I've recorded or performed publicly / created videos",
    ],
    required: true,
  },
  {
    label: "Have you written a song or lyrics before?",
    name: "music_written_song",
    type: "radio",
    options: [
      "Yes – solo writing",
      "Yes – co-writing with others",
      "No – I want to learn",
    ],
    required: true,
  },
  {
    label: "Have you sung in any of the following settings?",
    name: "music_singing_settings",
    type: "checkbox",
    options: [
      "Church worship team",
      "School group / band",
      "Personal or studio recordings",
      "Social media performances",
      "None of the above",
    ],
    required: true,
  },
  {
    label: "Have you used any music/video production tools?",
    name: "music_production_tools",
    type: "checkbox",
    options: [
      "GarageBand / Logic Pro",
      "FL Studio / Ableton",
      "Premiere Pro / Final Cut / CapCut",
      "Smartphone video editing",
      "None, but excited to learn",
    ],
    required: true,
  },
  {
    label: "Do you play any musical instruments?",
    name: "music_instruments",
    type: "radio",
    options: ["Yes", "No"],
    required: true,
  },
  {
    label: "What do you hope to express through your music or media?",
    name: "music_expression",
    type: "textarea",
    required: true,
  },
  {
    label:
      "Why do you want to join the Gara Music Bootcamp? (What excites you about this opportunity?)",
    name: "music_motivation",
    type: "textarea",
    required: true,
  },
  {
    label:
      "What do you think is the role of media in the mission of the church?",
    name: "music_role_in_church",
    type: "textarea",
    required: true,
  },
  {
    label:
      "How do you want to use your creative gifts to serve God and others?",
    name: "music_serve_god_others",
    type: "textarea",
    required: true,
  },
  {
    label:
      "Are you willing to commit your skills to bless the church, build others, and share the Gospel?",
    name: "music_commit_skills",
    type: "radio",
    options: ["Yes", "No", "I'm not sure yet"],
    required: true,
  },
  {
    label: "What do you hope to do with your skills after the bootcamp?",
    name: "music_after_bootcamp",
    type: "textarea",
    required: true,
  },
  {
    label: "Are you fully available from July 1 – July 30, 2025?",
    name: "music_availability_july",
    type: "radio",
    options: ["Yes", "No"],
    required: true,
  },
  {
    label:
      "This bootcamp requires teamwork, discipline, and full attendance. Are you committed?",
    name: "music_commitment",
    type: "radio",
    options: ["Yes", "No"],
    required: true,
  },
];

interface MusicFormProps {
  form: FormState;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const MusicForm: React.FC<MusicFormProps> = ({ form, onChange }) => (
  <div className="flex flex-col gap-4">
    {musicQuestions.map((q) => (
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

export default MusicForm;
