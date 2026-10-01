import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-heading">
        <div>
          <p className="section-label">02 / FEATURED WORK ✦</p>
          <h2>Projects</h2>
        </div>

        <p className="projects-intro">
          A few projects that showcase my skills in full-stack development,
          problem solving, and creating user-focused applications.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
