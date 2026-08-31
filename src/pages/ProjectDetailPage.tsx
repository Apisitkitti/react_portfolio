import { Link, useParams } from "react-router-dom";
import { ROUTES } from "../route";
import { getProjectBySlug } from "../data/projects";
import ExternalLinks from "../components/ui/ExternalLinks";
import TechBadge from "../components/ui/TechBadge";
import NotFoundPage from "./NotFoundPage";

const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = getProjectBySlug(slug);

  if (!project) return <NotFoundPage />;

  return (
    <article className="w-full py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto space-y-12">
        {/* back */}
        <Link
          to={ROUTES.PROJECTS}
          className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
        >
          ← Back to projects
        </Link>

        {/* header */}
        <header className="space-y-4">
          <p className="uppercase tracking-[0.3em] text-xs text-gray-400">
            {project.subtitle}
          </p>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            {project.title}
          </h1>
          <p className="text-gray-500">
            {project.role}
            {project.period && ` · ${project.period}`}
          </p>
          <ExternalLinks github={project.github} demo={project.demo} />
        </header>

        {/* stack */}
        <section className="space-y-3">
          <h2 className="text-sm uppercase tracking-widest text-gray-400">
            Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <TechBadge key={item} label={item} />
            ))}
          </div>
        </section>

        {/* overview */}
        <section className="space-y-3">
          <h2 className="text-sm uppercase tracking-widest text-gray-400">
            Overview
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            {project.overview}
          </p>
        </section>

        {/* responsibilities */}
        {project.responsibilities && project.responsibilities.length > 0 && (
          <section className="space-y-6">
            <h2 className="text-sm uppercase tracking-widest text-gray-400">
              What I did
            </h2>
            <ul className="space-y-6">
              {project.responsibilities.map((item) => (
                <li
                  key={item.title}
                  className="border-l-2 border-gray-200 pl-5 space-y-2"
                >
                  <h3 className="font-semibold">{item.title}</h3>
                  {item.details && (
                    <ul className="list-disc list-outside pl-4 space-y-1 text-gray-600">
                      {item.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </article>
  );
};

export default ProjectDetailPage;
