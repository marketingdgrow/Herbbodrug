import React, { Fragment, useEffect, useRef } from "react";
import "./AboutSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faFlaskVial,
  faGears,
  faWarehouse,
  faMicroscope,
  faAward,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const qualityItems = [
  {
    icon: faCircleCheck,
    title: "Quality Assurance",
    desc: "Continuous GMP and ISO compliance monitoring across every production stage — not just end-of-line checks.",
  },
  {
    icon: faMicroscope,
    title: "Quality Control",
    desc: "Rigorous batch testing covering raw materials, in-process samples, and finished products. Every batch is traceable.",
  },
  {
    icon: faFlaskVial,
    title: "Product Development",
    desc: "Advanced in-house laboratories focused on formulation innovation, ingredient standardisation, and improvement of existing products.",
  },
  {
    icon: faGears,
    title: "Production Systems",
    desc: "Modern, hygiene-controlled manufacturing lines designed for precision and scalable consistency.",
  },
  {
    icon: faWarehouse,
    title: "Warehouse & Storage",
    desc: "Temperature-monitored, structured storage that maintains product integrity from production through to delivery.",
  },
];

const SectionFour = () => {
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

    const els = sectionRef.current?.querySelectorAll(".s4-animate");
    els?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <Fragment>
      <div className="section4-wrapper" ref={sectionRef}>
        {/* Top label */}
        <div className="s4-eyebrow s4-animate">
          
        </div>

        {/* Main content split */}
        <div className="s4-body">
          {/* Left: heading + intro */}
          <div className="s4-left s4-animate">
            <h2>
              GMP-Certified Ayurvedic Manufacturing —{" "}
              <span>Precision Built Into Every Batch</span>
            </h2>
            <div className="s4-divider"></div>
            <p className="s4-intro">
              Every product leaves our Chennai facility only after passing through
              a quality system that runs from raw material intake to final dispatch
              — not as a compliance exercise, but as the operating standard we hold
              ourselves to.
            </p>

            {/* Facility badge */}
            <div className="s4-badge">
              <div className="s4-badge-icon">
                <FontAwesomeIcon icon={faAward} />
              </div>
              <div className="s4-badge-text">
                <strong>GMP &amp; ISO Certified</strong>
                <span>
                  <FontAwesomeIcon icon={faLocationDot} />
                  Chennai Facility
                </span>
              </div>
            </div>
          </div>

          {/* Right: feature list */}
          <div className="s4-right">
            {qualityItems.map((item, index) => (
              <div
                className="s4-feature-row s4-animate"
                key={index}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="s4-feature-icon">
                  <FontAwesomeIcon icon={item.icon} />
                </div>
                <div className="s4-feature-text">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SectionFour;