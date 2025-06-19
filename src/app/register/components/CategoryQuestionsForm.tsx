import React from "react";
import { Question } from "../types";

interface FormState {
  [key: string]: string | string[];
}

interface CategoryQuestionsFormProps {
  form: FormState;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  questions: Question[];
}

const CategoryQuestionsForm: React.FC<CategoryQuestionsFormProps> = ({
  form,
  onChange,
  questions,
}) => (
  <div className="flex flex-col gap-4">
    {questions.map((q) => (
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

export default CategoryQuestionsForm;
