function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-heading">
        <div>
          <p className="section-label">03 / SKILLS ✦</p>
          <h2>My toolkit</h2>
        </div>

        <p className="skills-intro">
          The technologies and tools I use to turn ideas into functional,
          user-focused applications.
        </p>
      </div>

      <div className="skills-grid">
        <div className="skill-group">
          <span className="skill-icon" aria-hidden="true">
            {"</>"}
          </span>

          <h3>Frontend</h3>

          <div className="skill-list">
            <span>React</span>
            <span>JavaScript</span>
            <span>HTML</span>
            <span>CSS</span>
          </div>
        </div>

        <div className="skill-group">
          <span className="skill-icon" aria-hidden="true">
            {"{ }"}
          </span>

          <h3>Backend & Database</h3>

          <div className="skill-list">
            <span>Node.js</span>
            <span>Express</span>
            <span>SQL</span>
            <span>SQLite</span>
          </div>
        </div>

        <div className="skill-group">
          <span className="skill-icon" aria-hidden="true">
            ✦
          </span>

          <h3>Tools & Deployment</h3>

          <div className="skill-list">
            <span>Git</span>
            <span>GitHub</span>
            <span>Vercel</span>
            <span>Render</span>
          </div>
        </div>

        <div className="skill-group">
          <span className="skill-icon" aria-hidden="true">
            {"//"}
          </span>

          <h3>Additional</h3>

          <div className="skill-list">
            <span>Python</span>
            <span>REST APIs</span>
            <span>Responsive Design</span>
            <span>Authentication</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;