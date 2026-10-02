import Reveal from "./Reveal";

function ProjectCard({ project }) {
  const isEven = project.id % 2 === 0;

  return (
    <article className="project-showcase">
      <Reveal direction={isEven ? "right" : "left"}>
        <div className="project-visual">
          <span className="project-sparkle" aria-hidden="true">
            ✦
          </span>

          <div className="project-window">
            <div className="window-bar">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <img src={project.image} alt={`${project.name} application`} />
          </div>
        </div>
      </Reveal>

      <Reveal direction={isEven ? "left" : "right"} delay={150}>
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

          <p className="project-note" aria-hidden="true">
            {project.id === 1
              ? "built to stay organized ✦"
              : "music for every mood ♡"}
          </p>
        </div>
      </Reveal>
    </article>
  );
}

export default ProjectCard;
