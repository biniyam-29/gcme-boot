import Image from "next/image";

const JoinUsSection = () => (
  <section className="relative z-10 py-20 bg-[#EBE7F3] text-gray-800 overflow-hidden min-h-screen">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Left Column: Text Content */}
      <div className="text-left px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#4F2578] mb-6">
          How to Join Our Bootcamp?
        </h2>
        <p className="text-lg text-[#6B4F8B] leading-relaxed mb-12">
          Ready to transform your skills and engage with a vibrant community?
          Here are the key requirements to embark on your journey with Great
          Commission Ministries Ethiopia&apos;s Gara Bootcamp.
        </p>
        <div className="space-y-8">
          {/* Criterion 1: Church Endorsement */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-[#7C3AED] rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.042A8.967 8.967 0 006 3.75c-1.079 0-2.157.17-3.204.51C1.972 4.472 1.9 4.597 1.9 4.722V21.75a.75.75 0 00.75.75 2.25 2.25 0 001.97-.988L8.7 18.337A6.972 6.972 0 0112 18h3.124c1.025 0 1.979.427 2.673 1.125l.492.492.001.002z"
                />
              </svg>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-[#4F2578] mb-1">
                Church Endorsement
              </h4>
              <p className="text-gray-600">
                Applicants must submit a letter or confirmation from their local
                church (pastor or youth leader).
              </p>
            </div>
          </div>
          {/* Criterion 2: Age Limit */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-[#7C3AED] rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-[#4F2578] mb-1">
                Age Limit
              </h4>
              <p className="text-gray-600">
                14-30 years old (adjustable based on target audience)
              </p>
            </div>
          </div>
          {/* Criterion 3: Skill Level */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-[#7C3AED] rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/24"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                />
              </svg>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-[#4F2578] mb-1">
                Skill Level
              </h4>
              <p className="text-gray-600">
                Beginners to intermediate level - passion is more important than
                experience.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Right Column: Image with Curved Background and Stripes */}
      <div className="relative h-[500px] lg:h-[600px] w-full">
        <div
          className="absolute top-0 right-0 w-full h-full border-4 border-[#7C3AED] rounded-tr-[150px] transform translate-x-9 -translate-y-9 z-0"
          style={{ opacity: 1 }}
        ></div>
        <div className="relative h-full w-full bg-[#7C3AED] rounded-tr-[150px] overflow-hidden flex items-center justify-start z-10">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 1px, transparent 1px 10px)",
            }}
          ></div>
          <Image
            src="/images/join-us.png"
            alt="Smiling person"
            className="relative z-10 w-full h-full object-cover"
            width={400}
            height={300}
          />
        </div>
      </div>
    </div>
  </section>
);

export default JoinUsSection;
