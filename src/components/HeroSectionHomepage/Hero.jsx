import React from "react";
import "./Hero.css";
import img1 from "../../assets/hero.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf, faShieldHalved } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-container">

        {/* ---- LEFT ---- */}
        <div className="hero-left">

          {/* eyebrow */}
          {/* <div className="hero-eyebrow">
            <span className="hero-eyebrow-dot"></span>
            GMP Certified · Since 2007 · Chennai
          </div> */}

          {/* main heading */}
          <div className="hero-center-content">
            <h1>Herbal &amp; Ayurvedic</h1>
            <h2 className="hero-heading">Pharma Solutions</h2>
            <p className="hero-des">
              Our certified team reviews your prescription and recommends safe
              Ayurvedic solutions tailored to your condition.
            </p>
          </div>

          {/* icon pills */}
          <div className="left-hero-icons">
            <div className="hero-icon-con">
              <div className="hero-icon">
                <FontAwesomeIcon icon={faLeaf} size="sm" />
              </div>
              <p>100% Herbal &amp; Ayurvedic</p>
            </div>

            <div className="hero-icon-con">
              <div className="hero-icon">
                <FontAwesomeIcon icon={faShieldHalved} size="sm" />
              </div>
              <p>100% Trusted Solutions</p>
            </div>
          </div>
        </div>

        {/* ---- CENTER IMAGE ---- */}
        <img className="hero-img" src={img1} alt="Herbbodrug Hero" />

        {/* ---- RIGHT ---- */}
        <div className="hero-right">
          <div className="rigth-hero-top">
            <p>
              Our Product Department develops safe, effective, and high-quality
              Ayurvedic medicines using advanced manufacturing processes and
              traditional herbal science.
            </p>
          </div>

          <div className="rigth-hero-bottom">
            <div className="right-img">
              <img src="/src/assets/home-page/img-hero.jpg" alt="Herbal Products" />
            </div>
            <p>
              Our Product Department focuses on developing high-quality Ayurvedic
              formulations using advanced technology and traditional herbal knowledge.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;