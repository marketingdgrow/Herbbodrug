import React, { useEffect, useRef } from "react";
import "./AboutSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFlask,
  faIndustry,
  faLightbulb,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

const chooseItems = [
  {
    icon: faFlask,
    title: "Proven Expertise",
    desc: "Over a decade of experience in both pharmaceutical science and Ayurvedic formulation.",
  },
  {
    icon: faIndustry,
    title: "Scalable Solutions",
    desc: "From a single bottle to bulk manufacturing, our infrastructure supports needs of all sizes.",
  },
  {
    icon: faLightbulb,
    title: "Research-Driven",
    desc: "Our formulations are continuously improved by a team of experts blending traditional knowledge with modern science.",
  },
  {
    icon: faGlobe,
    title: "Global Compliance",
    desc: "We manufacture to meet strict domestic and international quality expectations.",
  },
];

const SectionSix = () => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
        }
      });
    });

    const els = ref.current.querySelectorAll(".s6-animate");
    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="section6-wrapper" ref={ref}>
      <div className="section6-body">
        {/* LEFT */}
        <div className="section6-left s6-animate">
          <h2>
            Why Businesses & Consumers Choose{" "}
            <span>Herbbodrug</span>
          </h2>
          <div className="section6-line"></div>
          <p>
            Built on experience, innovation, and global standards — delivering
            trusted herbal solutions across markets.
          </p>
        </div>

        {/* RIGHT */}
        <div className="section6-timeline">
          {chooseItems.map((item, i) => (
            <div
              className="timeline-item s6-animate"
              key={i}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div className="timeline-dot"></div>

              <div className="timeline-content">
                <h3>
                  <FontAwesomeIcon icon={item.icon} /> {item.title}
                </h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="section6-cta-bar s6-animate">
        <span>Explore customized herbal solutions tailored to your needs</span>
        <button className="section6-btn">
          View Your Herbal Solutions →
        </button>
      </div>
    </div>
  );
};

export default SectionSix;