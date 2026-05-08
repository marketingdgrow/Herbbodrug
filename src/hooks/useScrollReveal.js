import { useEffect, useRef } from "react";

export function useScrollReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const section = ref.current;
    if (!section) return;

    // Reveal the section's children that have .reveal class
    const revealEls = section.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            if (!options.repeat) {
              observer.unobserve(entry.target);
            }
          } else if (options.repeat) {
            entry.target.classList.remove("revealed");
          }
        });
      },
      {
        threshold: options.threshold ?? 0.1,
        rootMargin: options.rootMargin ?? "0px 0px -60px 0px",
      }
    );

    revealEls.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return ref;
}