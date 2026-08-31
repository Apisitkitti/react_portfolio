import { Link } from "react-router-dom";
import HeroSection from "../components/sections/HeroSection";
import ProjectCard from "../components/ui/ProjectCard";
import { featuredProjects } from "../data/projects";
import { ROUTES, SectionId } from "../route";

const HomePage: React.FC = () => (
  <>
    <HeroSection />

    <section
      id={SectionId.PROJECTS}
      className="w-full py-24 px-6 bg-gray-50 border-t border-gray-100"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <p className="uppercase tracking-[0.3em] text-sm text-gray-400">
            Work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <div className="text-center">
          <Link
            to={ROUTES.PROJECTS}
            className="text-sm font-medium underline hover:opacity-70"
          >
            See all projects
          </Link>
        </div>
      </div>
    </section>
  </>
);

export default HomePage;
