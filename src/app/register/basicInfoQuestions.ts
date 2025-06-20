import { Question } from "./types";

export const basicInfoQuestions: Question[] = [
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
