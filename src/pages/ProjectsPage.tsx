import PageHeader from "../components/ui/PageHeader";
import ProjectCard from "../components/ui/ProjectCard";
import { projects } from "../data/projects";
import { SectionId } from "../route";

const ProjectsPage: React.FC = () => (
  <section
    id={SectionId.PROJECTS}
    className="w-full min-h-screen py-24 px-6 bg-white"
  >
    <div className="max-w-6xl mx-auto space-y-16">
      <PageHeader
        eyebrow="Work"
        title="Selected Projects"
        description="Production work and personal projects, all built with TypeScript."
      />

      <div className="grid md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsPage;
