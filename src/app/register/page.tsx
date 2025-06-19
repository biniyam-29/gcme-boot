"use client";
import { useState } from "react";
import { FaLaptopCode, FaCameraRetro, FaMusic } from "react-icons/fa";
import Link from "next/link";

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

const questions: Record<string, Question[]> = {
  development: [
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
      label:
        "If yes, share a short description or link to your favorite project",
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
  ],
  media: [
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
  ],
  music: [
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
  ],
};

function StepBar({ step }: { step: number }) {
  const steps = ["Choose Track", "Questions", "Done!"];
  return (
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
}

// Define a type for the form state
interface FormState {
  [key: string]: string | string[];
}

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
              {categories.find((c) => c.key === selectedCategory)?.label}{" "}
              Questions
            </h2>
            <div className="flex flex-col gap-4">
              {questions[selectedCategory].map((q) => (
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
                      {q.options.map((opt: string) => (
                        <label
                          key={opt}
                          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B43CFB]/20 hover:bg-[#DD33FF]/20 cursor-pointer transition-all border border-transparent focus-within:border-[#DD33FF]"
                        >
                          <input
                            type="radio"
                            name={q.name}
                            value={opt}
                            checked={form[q.name] === opt}
                            onChange={handleInputChange}
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
                      {q.options.map((opt: string) => (
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
                            onChange={handleInputChange}
                            className="accent-[#DD33FF] w-4 h-4"
                            required={
                              q.required &&
                              (!form[q.name] || form[q.name].length === 0)
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
                      onChange={handleInputChange}
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
                      onChange={handleInputChange}
                      className="rounded-lg p-2 text-black border-2 border-[#DD33FF]/30 focus:border-[#DD33FF] focus:ring-2 focus:ring-[#DD33FF]/30"
                      required={q.required}
                    />
                  )}
                </div>
              ))}
            </div>
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
        {step === 3 && submitted && (
          <div className="flex flex-col items-center justify-center gap-6 animate-fade-in">
            <svg
              width="120"
              height="120"
              viewBox="0 0 120 120"
              fill="none"
              className="mb-2"
            >
              <circle cx="60" cy="60" r="60" fill="#DD33FF" opacity="0.2" />
              <path
                d="M40 65l15 15 25-35"
                stroke="#DD33FF"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
            <h2 className="text-3xl font-extrabold bg-gradient-to-r from-[#DD33FF] to-[#7C3AED] bg-clip-text text-transparent text-center">
              Thank you for registering!
            </h2>
            <p className="text-lg text-white/80 text-center max-w-md">
              We&apos;re excited to have you on board. Check your email for next
              steps and get ready for an amazing journey at Gara Bootcamp!
            </p>
            <Link
              href="/"
              className="mt-2 bg-gradient-to-r from-[#DD33FF] to-[#7C3AED] text-white font-bold py-2 px-8 rounded-full shadow-lg hover:from-[#B43CFB] hover:to-[#DD33FF] transition-all text-center"
            >
              Back to Home
            </Link>
          </div>
        )}
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
