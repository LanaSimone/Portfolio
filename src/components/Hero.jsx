import { useRef } from "react";
import DeveloperCard from "./DeveloperCard";

function Hero() {
  const heroRef = useRef(null);

  const handleMouseMove = (event) => {
    const hero = heroRef.current;
    if (!hero) return;

    const rect = hero.getBoundingClientRect();

    hero.style.setProperty("--mouse-x", `${event.clientX - rect.left}px`);
    hero.style.setProperty("--mouse-y", `${event.clientY - rect.top}px`);
  };

  return (
    <section
      className="hero"
      id="top"
      ref={heroRef}
      onMouseMove={handleMouseMove}
    >
      <div className="hero-cursor-glow" aria-hidden="true"></div>
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

      <DeveloperCard />

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
