import { SectionId } from "../constant";

const ProfileSection = () => {
  return (
    <section
      id={SectionId.ABOUT}
      className="relative w-full min-h-screen flex justify-center items-center py-28 px-6  bg-gray-50 overflow-hidden"
    >
      {/* subtle background glow */}
      <div className="absolute w-125 h-125 bg-blue-200/20 blur-[120px] rounded-full top-10 -z-10" />

      <div className="max-w-4xl mx-auto text-center space-y-12">
        {/* Small label */}
        <p className="uppercase tracking-[0.35em] text-xs text-gray-400">
          Profile
        </p>

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          About Me
        </h2>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed text-lg md:text-xl max-w-3xl mx-auto">
          <span className="text-blue-700 font-semibold">
            Frontend-focused Software Developer
          </span>{" "}
          with hands-on experience building production-ready web applications
          using React, Next.js, and TypeScript. Focused on creating scalable UI
          architectures, improving performance, and delivering clean,
          maintainable user interfaces.
        </p>

        {/* Highlight tags */}
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          {[
            "Production Experience",
            "Scalable UI",
            "Performance Focused",
            "Clean Architecture",
          ].map((item) => (
            <span
              key={item}
              className="px-5 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
