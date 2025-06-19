export interface Question {
  label: string;
  name: string;
  type?: "radio" | "checkbox" | "textarea" | "text";
  options?: string[];
  required?: boolean;
}

export interface FormState {
  [key: string]: string | string[];
}
