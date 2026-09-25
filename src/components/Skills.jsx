function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="section-heading">
        <p className="section-label">Technical Skills</p>
        <h2>Technologies I work with</h2>
      </div>

      <div className="skills-grid">
        <div className="skill-group">
          <h3>Frontend</h3>
          <div className="skill-list">
            <span>React</span>
            <span>JavaScript</span>
            <span>HTML</span>
            <span>CSS</span>
          </div>
        </div>

        <div className="skill-group">
          <h3>Backend & Database</h3>
          <div className="skill-list">
            <span>Node.js</span>
            <span>Express</span>
            <span>SQL</span>
            <span>SQLite</span>
          </div>
        </div>

        <div className="skill-group">
          <h3>Tools & Deployment</h3>
          <div className="skill-list">
            <span>Git</span>
            <span>GitHub</span>
            <span>Vercel</span>
            <span>Render</span>
          </div>
        </div>

        <div className="skill-group">
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