import { Link } from "react-router-dom";
import { projectPath } from "../../route";
import type { Project } from "../../types/project";
import TechBadge from "./TechBadge";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
  <article
    className="
      group flex flex-col
      border border-gray-200
      rounded-2xl p-6
      transition-all duration-300
      hover:shadow-xl hover:-translate-y-1
    "
  >
    {/* title */}
    <h3 className="text-xl font-semibold mb-1 group-hover:text-blue-600 transition">
      <Link to={projectPath(project.slug)}>{project.title}</Link>
    </h3>
    <p className="text-sm text-gray-400 mb-3">{project.role}</p>

    {/* description */}
    <p className="text-gray-600 mb-5 grow">{project.summary}</p>

    {/* tech */}
    <div className="flex flex-wrap gap-2 mb-6">
      {project.tech.map((tech) => (
        <TechBadge key={tech} label={tech} />
      ))}
    </div>

    {/* actions */}
    <Link
      to={projectPath(project.slug)}
      className="text-sm font-medium underline hover:opacity-70"
    >
      Read case study
    </Link>
  </article>
);

export default ProjectCard;
