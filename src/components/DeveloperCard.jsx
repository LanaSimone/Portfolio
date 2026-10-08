function DeveloperCard() {
  return (
    <div className="developer-card" aria-hidden="true">
      <div className="developer-card-bar">
        <span></span>
        <span></span>
        <span></span>

        <p>allana.dev</p>
      </div>

      <div className="developer-card-content">
        <div className="developer-line">
          <span className="developer-prompt">›</span>
          <span className="developer-command">whoami</span>
        </div>

        <p className="developer-answer">Allana DeCarish</p>

        <div className="developer-line">
          <span className="developer-prompt">›</span>
          <span className="developer-command">current_focus</span>
        </div>

        <p className="developer-answer">Full-Stack Development</p>

        <div className="developer-line">
          <span className="developer-prompt">›</span>
          <span className="developer-command">status</span>
        </div>

        <p className="developer-status">
          <span className="developer-status-dot"></span>
          Open to opportunities
        </p>

        <div className="developer-line developer-cursor-line">
          <span className="developer-prompt">›</span>
          <span className="developer-cursor"></span>
        </div>
      </div>

      <span className="developer-sparkle developer-sparkle-one">✦</span>
      <span className="developer-sparkle developer-sparkle-two">✦</span>
    </div>
  );
}

export default DeveloperCard;
