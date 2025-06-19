import Image from "next/image";

function Chip({ text }: { text: string }) {
  return (
    <div className="flex items-center space-x-2 text-white text-sm md:text-base">
      <span className="w-2 h-2 bg-[#DD33FF] rounded-full flex-shrink-0"></span>
      <span>{text}</span>
    </div>
  );
}

const ProgramTracks = () => (
  <section className="relative z-10 py-20 px-4 md:px-16 lg:px-24 min-h-screen">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-extrabold text-white text-left mb-12">
        Program Tracks
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1: Media */}
        <div className="bg-[#1A002C] rounded-xl p-0 shadow-2xl flex flex-col overflow-hidden">
          <div className="relative h-56 w-full rounded-t-xl overflow-hidden">
            <Image
              src="/program-section(card-images)/media.png"
              alt="Digital Media Track Illustration"
              className="relative z-10 h-full w-full object-cover"
              width={400}
              height={300}
            />
          </div>
          <div className="p-6 pt-4">
            <h3 className="text-2xl font-bold uppercase text-white mb-2 text-left">
              Digital Media & Storytelling
            </h3>
            <p className="text-lg font-semibold text-gray-200 mb-4 text-left">
              Crafting impactful narratives for a digital world.
            </p>
            <p className="text-sm text-gray-300 leading-relaxed mb-6 text-left">
              Dive into the art and science of visual and audio communication.
              This track covers fundamental principles and practical skills for
              creating compelling media content that resonates with audiences.
            </p>
            <h4 className="text-md font-semibold text-gray-200 mb-2 text-left">
              Categories
            </h4>
            <ul className="text-sm text-gray-300 list-none p-0 space-y-1 text-left">
              <li>
                <Chip text="Photography & Visual Design" />
              </li>
              <li>
                <Chip text="Filmmaking & Video Production" />
              </li>
              <li>
                <Chip text="Digital Content Creation & Marketing" />
              </li>
            </ul>
          </div>
        </div>
        {/* Card 2: Full Stack Development */}
        <div className="bg-[#1A002C] rounded-xl p-0 shadow-2xl flex flex-col overflow-hidden">
          <div className="relative h-56 w-full rounded-t-xl overflow-hidden">
            <Image
              src="/program-section(card-images)/development.png"
              alt="Full Stack Development Track Illustration"
              className="relative z-10 h-full w-full object-cover"
              width={400}
              height={300}
            />
          </div>
          <div className="p-6 pt-4">
            <h3 className="text-2xl font-bold uppercase text-white mb-2 text-left">
              Full Stack Web Development
            </h3>
            <p className="text-lg font-semibold text-gray-200 mb-4 text-left">
              Building dynamic web solutions from front to back.
            </p>
            <p className="text-sm text-gray-300 leading-relaxed mb-6 text-left">
              Master the essential technologies for modern web development. From
              user interface design to server-side logic and databases,
              you&apos;ll gain comprehensive skills to build robust
              applications.
            </p>
            <h4 className="text-md font-semibold text-gray-200 mb-2 text-left">
              Categories of Full Stack Development
            </h4>
            <ul className="text-sm text-gray-300 list-none p-0 space-y-1 text-left">
              <li>
                <Chip text="Front-end Development (React, Next.js)" />
              </li>
              <li>
                <Chip text="Back-end Development (Node.js, Firebase)" />
              </li>
              <li>
                <Chip text="UI/UX Design & Prototyping" />
              </li>
            </ul>
          </div>
        </div>
        {/* Card 3: Music */}
        <div className="bg-[#1A002C] rounded-xl p-0 shadow-2xl flex flex-col overflow-hidden">
          <div className="relative h-56 w-full rounded-t-xl overflow-hidden">
            <Image
              src="/program-section(card-images)/music.png"
              alt="Worship Music Track Illustration"
              className="relative z-10 h-full w-full object-cover"
              width={400}
              height={300}
            />
          </div>
          <div className="p-6 pt-4">
            <h3 className="text-2xl font-bold uppercase text-white mb-2 text-left">
              Worship Music & Production
            </h3>
            <p className="text-lg font-semibold text-gray-200 mb-4 text-left">
              Developing musical talent for ministry and beyond.
            </p>
            <p className="text-sm text-gray-300 leading-relaxed mb-6 text-left">
              Explore the creative and technical aspects of contemporary worship
              music. This track focuses on songwriting, music production, sound
              engineering, and leading worship in diverse settings.
            </p>
            <h4 className="text-md font-semibold text-gray-200 mb-2 text-left">
              Categories in Worship Music
            </h4>
            <ul className="text-sm text-gray-300 list-none p-0 space-y-1 text-left">
              <li>
                <Chip text="Songwriting & Composition" />
              </li>
              <li>
                <Chip text="Music Production & Audio Engineering" />
              </li>
              <li>
                <Chip text="Worship Leading & Performance" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ProgramTracks;
