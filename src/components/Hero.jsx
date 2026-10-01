function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-glow hero-glow-one"></div>
      <div className="hero-glow hero-glow-two"></div>

      <div className="hero-content">
        <div className="hero-eyebrow">
          <span className="hero-status-dot"></span>
          <span>Hi, I'm Allana.</span>
        </div>

        <h1>
          Full-Stack Developer building practical,
          <span className="hero-gradient"> user-focused applications.</span>
        </h1>

        <p className="hero-description">
          Computer Science graduate creating thoughtful full-stack experiences
          with React, JavaScript, Node.js, Express, and SQL.
        </p>

        <div className="hero-buttons">
          <a className="primary-button" href="#projects">
            View My Work <span>↓</span>
          </a>

          <a
            className="secondary-button"
            href="/Allana-DeCarish-Resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Resume ↗
          </a>

          <a
            className="secondary-button"
            href="https://github.com/LanaSimone"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
        </div>
      </div>

      <div className="hero-tech" aria-hidden="true">
        <span>React</span>
        <span>JavaScript</span>
        <span>Node.js</span>
        <span>SQL</span>
      </div>
    </section>
  );
}

export default Hero;