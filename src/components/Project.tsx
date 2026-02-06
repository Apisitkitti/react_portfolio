import { SectionId } from "../constant";

const projects = [
  {
    title: "ERP System (TNR Factory)",
    description:
      "Developed and deployed ERP system under evolving requirements, focusing on scalable UI architecture, performance optimization, and real-world production workflows.",
    tech: ["React", "Next.js", "TypeScript"],
    demo: "#",
  },
  {
    title: "Wongnai UI Clone",
    description:
      "Recreated Wongnai frontend architecture and interaction patterns to study real-world UI structure, layout systems, and user experience design.",
    tech: ["React", "CSS"],
    github: "https://github.com/Apisitkitti/PracticeWebWong",
    demo: "https://clonereactforpractice.netlify.app/",
  },
  {
    title: "CP Brandsite Member Platform",
    description:
      "Implemented production-ready frontend features for a large-scale membership platform including profile management, tracking flows, and campaign UI with responsive design and performance focus.",
    tech: ["Next.js", "Firebase"],
    demo: "https://member.cpbrandsite.com/",
  },
];

const ProjectSection = () => {
  return (
    <section
      id={SectionId.PROJECTS}
      className="w-full min-h-screen flex justify-center items-center py-28 px-6  bg-white "
    >
      <div className="max-w-6xl mx-auto space-y-16">
        {/* title */}
        <div className="text-center space-y-3">
          <p className="uppercase tracking-[0.3em] text-sm text-gray-400">
            Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">Selected Projects</h2>
        </div>

        {/* grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((project) => (
            <article
              key={project.title}
              className="
                group flex flex-col
                border border-gray-200
                rounded-2xl p-6
                transition-all duration-300
                hover:shadow-xl hover:-translate-y-1
              "
            >
              {/* title */}
              <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition">
                {project.title}
              </h3>

              {/* description */}
              <p className="text-gray-600 mb-5 grow">{project.description}</p>

              {/* tech */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 bg-gray-100 rounded-full cursor-pointer hover:bg-gray-200"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* actions */}
              <div className="flex gap-4 text-sm font-medium">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:opacity-70"
                  >
                    Github
                  </a>
                )}

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:opacity-70"
                  >
                    Live
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
