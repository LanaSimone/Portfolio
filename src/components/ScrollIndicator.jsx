import { useEffect, useState } from "react";

function ScrollIndicator() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", updateScrollProgress);
    updateScrollProgress();

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
    };
  }, []);

  return (
    <div className="custom-scroll-track" aria-hidden="true">
      <div
        className="custom-scroll-progress"
        style={{ height: `${scrollProgress}%` }}
      />

      <span
        className="custom-scroll-sparkle"
        style={{ top: `${scrollProgress}%` }}
      >
        ✦
      </span>
    </div>
  );
}

export default ScrollIndicator;
