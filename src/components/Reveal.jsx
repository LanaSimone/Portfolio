import { cloneElement, useEffect, useRef, useState } from "react";

function Reveal({ children, delay = 0, direction = "up" }) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.15,
      },
    );

    const currentElement = elementRef.current;

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }

      observer.disconnect();
    };
  }, []);

  return cloneElement(children, {
    ref: elementRef,
    className: `${children.props.className || ""} reveal reveal-${direction} ${
      isVisible ? "reveal-visible" : ""
    }`,
    style: {
      ...children.props.style,
      transitionDelay: `${delay}ms`,
    },
  });
}

export default Reveal;
