function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-heading">
        <p className="section-label">About Me</p>
        <h2>A little about my background</h2>
      </div>

      <div className="about-content">
        <div className="about-main">
          <p>
            I'm a Computer Science graduate focused on building practical,
            user-friendly web applications. I enjoy taking an idea from
            concept to a working product, from designing the interface to
            building the backend and deploying the finished application.
          </p>

          <p>
            I enjoy working across both frontend and backend development, with a
            particular focus on creating clean interfaces, thoughtful user experiences,
            and reliable application functionality.
          </p>

          <p>
            I'm currently looking for opportunities where I can continue
            growing as a software developer while contributing to products
            that solve real problems.
          </p>
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
      </div>
    </section>
  );
}

export default About;