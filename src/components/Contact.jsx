function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-content">
        <p className="section-label">Get In Touch</p>

        <h2>Let's connect.</h2>

        <p className="contact-description">
          I'm currently open to software development opportunities and would
          love to connect. Feel free to reach out if you'd like to discuss a
          role or learn more about my work.
        </p>

        <div className="contact-links">
          <a className="primary-button" href="mailto:Allanadecarishs@gmail.com">
            Email Me
          </a>

          <a
            className="secondary-button"
            href="https://github.com/LanaSimone"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>

      <footer className="footer">
        <p>Designed & built by Allana DeCarish.</p>
      </footer>
    </section>
  );
}

export default Contact;
