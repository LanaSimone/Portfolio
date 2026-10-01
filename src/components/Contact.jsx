function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-content">
        <p className="section-label">05 / LET'S CONNECT ✦</p>

        <h2>
          Have an idea?
          <span> Let's build something.</span>
        </h2>

        <p className="contact-description">
          I'm currently open to software development opportunities and would
          love to connect. Whether you'd like to discuss a role, a project, or
          just learn more about my work, feel free to reach out.
        </p>

        <div className="contact-links">
          <a
            className="primary-button"
            href="mailto:Allanadecarishs@gmail.com"
          >
            Email Me ↗
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

        <p className="contact-note" aria-hidden="true">
          let's make something cool ♡
        </p>

        <span className="contact-sparkle contact-sparkle-one" aria-hidden="true">
          ✦
        </span>

        <span className="contact-sparkle contact-sparkle-two" aria-hidden="true">
          ✦
        </span>
      </div>

      <footer className="footer">
        <p>Designed &amp; built by Allana DeCarish.</p>
        <p>React · JavaScript · lots of coffee ✦</p>
      </footer>
    </section>
  );
}

export default Contact;