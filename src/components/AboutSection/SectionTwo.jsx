import React, { Fragment, useEffect, useRef, useState } from "react";
import "./AboutSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faUserDoctor,
  faFlask,
  faShieldHalved,
  faHandshakeAngle,
} from "@fortawesome/free-solid-svg-icons";

const philosophyItems = [
  {
    title: "Commitment to Excellence",
    desc: "We strive for excellence in every aspect of our operations — from formulation to final delivery.",
    icon: faStar,
    accent: "#FF8C00",
  },
  {
    title: "Patient-Centric Approach",
    desc: "We place the well-being of individuals at the center of everything we do, ensuring every product is developed with care and responsibility.",
    icon: faUserDoctor,
    accent: "#FF6B35",
  },
  {
    title: "Scientific Advancement",
    desc: "We continuously invest in research, innovation, and advanced technologies to enhance product quality and effectiveness.",
    icon: faFlask,
    accent: "#F7931E",
  },
  {
    title: "Ethical Conduct",
    desc: "We uphold transparency, integrity, and strict ethical standards across all our practices.",
    icon: faShieldHalved,
    accent: "#FF8C00",
  },
  {
    title: "Social Responsibility",
    desc: "We are committed to creating a positive impact beyond business by contributing to better health and responsible practices.",
    icon: faHandshakeAngle,
    accent: "#FF6B35",
  },
];

const PhilCard = ({ item, index }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), index * 120);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      className={`phil-card ${visible ? "phil-card--visible" : ""}`}
      style={{ "--accent": item.accent }}
    >
      <div className="phil-card-inner">
        <div className="phil-icon-wrap">
          <div className="phil-icon-ring" />
          <div className="phil-icon">
            <FontAwesomeIcon icon={item.icon} />
          </div>
        </div>
        <div className="phil-card-number">0{index + 1}</div>
        <h3 className="phil-card-title">{item.title}</h3>
        <div className="phil-card-line" />
        <p className="phil-card-desc">{item.desc}</p>
        <div className="phil-card-glow" />
      </div>
    </div>
  );
};

const SectionTwo = () => {
  const [headerVisible, setHeaderVisible] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Fragment>
      <section className="about-section2">
        <div
          ref={headerRef}
          className={`about-section2-header ${headerVisible ? "header--visible" : ""}`}
        >
         
          <h2 className="section2-heading">
            Balance is the
            <span className="section2-heading-accent"> Ultimate Healer</span>
          </h2>
          <div className="section2-divider">
            <span className="divider-dot" />
            <span className="divider-line" />
            <span className="divider-dot" />
          </div>
          <p className="section2-subtext">
            At Herbbodrug Pharmaceuticals, healthcare is approached with one
            clear principle — balance.
          </p>
        </div>

        <div className="about-section2-cards">
          {philosophyItems.map((item, index) => (
            <PhilCard key={index} item={item} index={index} />
          ))}
        </div>
      </section>
    </Fragment>
  );
};

export default SectionTwo;