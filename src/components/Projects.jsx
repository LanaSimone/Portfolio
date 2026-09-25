import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <h2>Featured Projects</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;