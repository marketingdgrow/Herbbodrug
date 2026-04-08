import React, { Fragment } from "react";
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
  },
  {
    title: "Patient-Centric Approach",
    desc: "We place the well-being of individuals at the center of everything we do, ensuring every product is developed with care and responsibility.",
    icon: faUserDoctor,
  },
  {
    title: "Scientific Advancement",
    desc: "We continuously invest in research, innovation, and advanced technologies to enhance product quality and effectiveness.",
    icon: faFlask,
  },
  {
    title: "Ethical Conduct",
    desc: "We uphold transparency, integrity, and strict ethical standards across all our practices.",
    icon: faShieldHalved,
  },
  {
    title: "Social Responsibility",
    desc: "We are committed to creating a positive impact beyond business by contributing to better health and responsible practices.",
    icon: faHandshakeAngle,
  },
];

const SectionTwo = () => {
  return (
    <Fragment>
      <div className="about-section2">
        <div className="about-section2-header">
          <h2>
            Our Philosophy:
            <span> Balance is the Ultimate Healer</span>
          </h2>
          <div className="about-section2-divider"></div>
          <p>
            At Herbbodrug Pharmaceuticals, healthcare is approached with one
            clear principle — balance.
          </p>
        </div>

        <div className="about-section2-cards">
          {philosophyItems.map((item, index) => (
            <div className="phil-card" key={index}>
              <div className="phil-icon">
                <FontAwesomeIcon icon={item.icon} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default SectionTwo;