import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./AboutSection.css";
import img1 from "../../assets/hero.png";

const SectionOne = () => {
  return (
    <Fragment>
      <div className="about-section1">
        <div className="about-section-left">
          <img src={img1} alt="" />
        </div>
        <div className="about-section-right">
          <h2>
            Where 15+ Years of Ayurvedic Heritage
            <span> Meets Modern Pharmaceutical Science</span>
          </h2>
          <h3>
            Ayurvedic Pharmaceutical Company in India Built on Trust & Science
          </h3>
          <p>
            At Herbbodrug Pharmaceuticals, every product begins with a purpose.
            Since 2007, we have been formulating Ayurvedic medicines from our
            GMP-certified facility in Chennai — not to fill a catalogue, but to
            answer real health needs with real solutions.
          </p>
          <p>
            From chronic joint pain to daily skin care, from cardiac support to
            respiratory relief — our range covers the full spectrum of wellness,
            built on traditional Ayurvedic science and manufactured to
            international quality standards.
          </p>

          <Link to={"/products"}></Link>
        </div>
      </div>
    </Fragment>
  );
};

export default SectionOne;
