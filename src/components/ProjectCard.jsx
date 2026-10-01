function ProjectCard({ project }) {
  return (
    <article className="project-showcase">
      <div className="project-visual">
        <div className="project-window">
          <div className="window-bar">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <img src={project.image} alt={`${project.name} application`} />
        </div>
      </div>

      <div className="project-content">
        <span className="project-number">
          {String(project.id).padStart(2, "0")}
        </span>

        <h3>{project.name}</h3>

        <p className="project-description">{project.description}</p>

        <div className="tech-stack">
          {project.tech.map((techItem) => (
            <span key={techItem}>{techItem}</span>
          ))}
        </div>

        <ul className="project-features">
          {project.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>

        <div className="project-links">
          <a
            className="project-live"
            href={project.live}
            target="_blank"
            rel="noreferrer"
          >
            Live Site ↗
          </a>

          <a
            className="project-github"
            href={project.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;