function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.name} />

      <h3>{project.name}</h3>
      <p>{project.description}</p>

      <div className="tech-stack">
        {project.tech.map((techItem) => (
          <span key={techItem}>{techItem}</span>
        ))}
      </div>

      <ul>
        {project.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>

      <div className="project-links">
        <a href={project.live} target="_blank" rel="noreferrer">
          Live Demo
        </a>

        <a href={project.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
