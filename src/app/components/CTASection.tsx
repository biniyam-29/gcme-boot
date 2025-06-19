import Link from "next/link";

const CTASection = () => (
  <section
    className="relative w-full py-20 min-h-screen flex items-center justify-center bg-cover bg-center overflow-hidden"
    style={{
      backgroundImage: "url('/images/cta/cta-bg.png')",
      backgroundSize: "110% auto",
      backgroundPosition: "center",
    }}
  >
    <div className="relative z-10 bg-white/5 backdrop-blur-lg rounded-[40px] p-8 md:p-12 shadow-xl border border-white/20 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-12">
      <div className="flex-1 text-center md:text-left">
        <p className="text-xl md:text-2xl text-white font-medium leading-relaxed">
          Don&apos;t miss this opportunity to grow, learn, and make a tangible
          impact. Join the Gara Bootcamp and become part of a movement equipping
          digital leaders for God&apos;s Kingdom.
        </p>
      </div>
      <Link href="/register">
        <button className="bg-[#7C3AED] hover:bg-[#6A2DD6] text-white font-semibold py-3 px-8 rounded-full text-lg shadow-lg transition-colors duration-200 flex-shrink-0">
          Register Now
        </button>
      </Link>
    </div>
  </section>
);

export default CTASection;
