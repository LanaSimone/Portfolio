function Hero() {
  return (
    <section className="hero" id="top">
      <p className="hero-intro">Hi, I'm Allana.</p>

      <h1>
        Full-Stack Developer building practical,
        <span> user-focused applications.</span>
      </h1>

      <p className="hero-description">
        Computer Science graduate building full-stack web applications
        with React, JavaScript, Node.js, Express, and SQL.
      </p>

      <div className="hero-buttons">
        <a className="primary-button" href="#projects">
          View My Work
        </a>

        <a
          className="secondary-button"
          href="YOUR_GITHUB_URL"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}

export default Hero;