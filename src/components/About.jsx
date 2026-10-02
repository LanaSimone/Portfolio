import Reveal from "./Reveal";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-heading">
        <p className="section-label">04 / ABOUT ✦</p>
        <h2>A little about me</h2>
      </div>

      <div className="about-content">
        <Reveal direction="left">
          <div className="about-main">
            <p className="about-lead">
              I'm a Computer Science graduate who loves turning ideas into
              thoughtful, functional digital experiences.
            </p>

            <p>
              I enjoy working across both frontend and backend development,
              from designing clean, intuitive interfaces to building the logic
              and functionality behind them.
            </p>

            <p>
              I'm currently looking for opportunities where I can continue
              growing as a software developer while contributing to products
              that solve real problems.
            </p>

            <p className="about-note" aria-hidden="true">
              code + creativity ✦
            </p>
          </div>
        </Reveal>

        <Reveal direction="right" delay={150}>
          <div className="about-card">
            <div className="about-code" aria-hidden="true">
              <span>&lt;developer&gt;</span>
              <strong>Allana DeCarish</strong>
              <span>&lt;/developer&gt;</span>
            </div>

            <div className="about-details">
              <div>
                <span>Education</span>
                <p>B.S. Computer Science</p>
              </div>

              <div>
                <span>Focus</span>
                <p>Full-Stack Development</p>
              </div>

              <div>
                <span>Currently</span>
                <p>Open to new opportunities</p>
              </div>
            </div>

            <span className="about-sparkle" aria-hidden="true">
              ✦
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default About;