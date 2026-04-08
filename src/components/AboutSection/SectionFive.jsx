import React, { Fragment, useEffect, useRef } from "react";
import "./AboutSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCertificate,
  faShieldHalved,
  faLeaf,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

const certItems = [
  {
    icon: faCertificate,
    title: "GMP Certified",
    desc: "Good Manufacturing Practices ensuring strict production and hygiene standards.",
  },
  {
    icon: faCheckCircle,
    title: "ISO Certified",
    desc: "Standardised processes ensuring consistency, safety, and global compliance.",
  },
  {
    icon: faShieldHalved,
    title: "HALAL Certified",
    desc: "Ethically compliant manufacturing aligned with HALAL standards.",
  },
];

const SectionFive = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const els = sectionRef.current?.querySelectorAll(".s5-animate");
    els?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <Fragment>
      <div className="section5-wrapper" ref={sectionRef}>
        {/* Header */}
        <div className="section5-header s5-animate">
          <h2>
            Certifications — <span>Built on Verified Quality Standards</span>
          </h2>
          <div className="section5-divider"></div>
          <p>
            Every ingredient is responsibly sourced and undergoes multiple
            levels of quality checks to guarantee safety, purity, and
            therapeutic efficacy.
          </p>
        </div>

        {/* Cards */}
        <div className="section5-cards">
          {certItems.map((item, index) => (
            <div
              className="cert-card s5-animate"
              key={index}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className="cert-icon">
                <FontAwesomeIcon icon={item.icon} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom highlight strip */}
        <div className="section5-highlight s5-animate">
          <FontAwesomeIcon icon={faLeaf} />
          <span>
            Trusted manufacturing backed by certified systems and ethical
            sourcing
          </span>
        </div>
      </div>
    </Fragment>
  );
};

export default SectionFive;