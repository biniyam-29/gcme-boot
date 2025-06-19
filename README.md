# Gara Bootcamp Registration & Landing Page

A modern, visually creative registration and information site for the Gara Missional Bootcamp by Great Commission Ministries Ethiopia.

---

## 🚀 Project Overview
This project is a Next.js 15 web application designed to:
- Present information about the Gara Bootcamp and its tracks (Development, Media, Music)
- Allow users to register for the bootcamp with a beautiful, multi-step, category-specific form
- Provide a seamless, engaging, and mobile-friendly user experience

---

## ✨ Features
- **Fully Custom Registration Flow**: Users select a track, then answer tailored questions for Development, Media, or Music.
- **Basic Information Section**: All users fill out a creative, required personal info section.
- **Category-Specific Questions**: Each track has its own set of detailed, relevant questions.
- **Modern, Animated UI**: Creative use of gradients, cards, icons, and micro-interactions.
- **Component-Based Architecture**: All major sections and form parts are modular React components for easy maintenance and extension.
- **Production-Ready**: Linted, type-checked, and optimized for deployment.

---

## 🛠️ Tech Stack
- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI**: React, custom components, [react-icons](https://react-icons.github.io/react-icons/)
- **Image Optimization**: next/image

---

## 📁 Folder Structure
```
gcme-boot/
├── public/                  # Static assets (images, icons, etc.)
├── src/
│   └── app/
│       ├── components/      # All major landing page sections as components
│       │   ├── Navbar.tsx
│       │   ├── HeroSection.tsx
│       │   ├── ChipsScroller.tsx
│       │   ├── ProgramTracks.tsx
│       │   ├── JoinUsSection.tsx
│       │   ├── CTASection.tsx
│       │   ├── Footer.tsx
│       │   └── BackgroundWaves.tsx
│       ├── register/
│       │   ├── components/  # Registration form components
│       │   │   ├── BasicInfoForm.tsx
│       │   │   ├── DevelopmentForm.tsx
│       │   │   ├── MediaForm.tsx
│       │   │   ├── MusicForm.tsx
│       │   │   └── ...
│       │   ├── types.ts     # Shared types for registration forms
│       │   └── page.tsx     # Registration page (multi-step form)
│       ├── page.tsx         # Main landing page (uses all home components)
│       └── ...
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── README.md
```

---

## 🧑‍💻 Local Development

1. **Install dependencies:**
   ```bash
   npm install --legacy-peer-deps
   ```
2. **Run the development server:**
   ```bash
   npm run dev
   ```
   The app will be available at [http://localhost:3000](http://localhost:3000)

---

## 🏗️ Building for Production

1. **Build the app:**
   ```bash
   npm run build
   ```
2. **Start the production server:**
   ```bash
   npm start
   ```

---

## 📝 How to Add or Edit Registration Questions
- **Basic Info Questions:**
  - Edit the `basicInfoQuestions` array in `src/app/register/page.tsx`.
- **Category-Specific Questions:**
  - Edit the question arrays in:
    - `src/app/register/components/DevelopmentForm.tsx`
    - `src/app/register/components/MediaForm.tsx`
    - `src/app/register/components/MusicForm.tsx`
- **Question Type:**
  - Each question supports `type: 'radio' | 'checkbox' | 'textarea' | 'text'` and can have `options` for radio/checkbox.
- **Validation:**
  - All questions with `required: true` must be answered before submission.

---

## 📣 Credits & License
- Gara Bootcamp by Great Commission Ministries Ethiopia
- UI/UX and code by your development team (and AI assistant!)
- Licensed under MIT (or your preferred license)

---

## 💡 Tips
- The registration form is fully modular—add new tracks or questions easily!
- To connect to a backend or Google Form, add a submission handler in `src/app/register/page.tsx`.
- All styles are in Tailwind; customize in `globals.css` or component files.

