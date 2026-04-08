import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faArrowRight,
  faCircleCheck,
  faTruck,
  faLeaf,
  faSeedling,
  faFlask,
} from "@fortawesome/free-solid-svg-icons";
import "./Cta.css";

const Cta = () => {
  return (
    <Fragment>
      <div className="cta-section">
        {/* Floating leaf decorations */}
        <div className="cta-leaf cta-leaf--1">
          <FontAwesomeIcon icon={faLeaf} />
        </div>
        <div className="cta-leaf cta-leaf--2">
          <FontAwesomeIcon icon={faSeedling} />
        </div>
        <div className="cta-leaf cta-leaf--3">
          <FontAwesomeIcon icon={faLeaf} />
        </div>
        <div className="cta-leaf cta-leaf--4">
          <FontAwesomeIcon icon={faSeedling} />
        </div>

        <div className="cta-inner">
          <div className="cta-badge">
            <FontAwesomeIcon icon={faFlask} className="cta-badge-icon" />
            100% Herbal &amp; Ayurvedic
          </div>

          <h2 className="cta-heading">
            Heal Naturally with <br />
            <span className="cta-highlight">Ancient Herbal Wisdom</span>
          </h2>

          

          <div className="cta-actions">
            <a href="tel:+919999999999" className="cta-btn cta-btn--primary">
              <FontAwesomeIcon icon={faPhone} className="cta-btn-icon" />
              <span>Call Us Now</span>
            </a>
            <a href="#products" className="cta-btn cta-btn--secondary">
              <span>Explore Remedies</span>
              <FontAwesomeIcon icon={faArrowRight} className="cta-btn-arrow" />
            </a>
          </div>

          <div className="cta-trust">
            <div className="cta-trust-item">
              <FontAwesomeIcon icon={faCircleCheck} className="cta-trust-icon" />
              GMP Certified
            </div>
            <div className="cta-trust-divider">|</div>
            <div className="cta-trust-item">
              <FontAwesomeIcon icon={faLeaf} className="cta-trust-icon" />
              No Chemicals
            </div>
            <div className="cta-trust-divider">|</div>
            <div className="cta-trust-item">
              <FontAwesomeIcon icon={faTruck} className="cta-trust-icon" />
              Free Delivery
            </div>
          </div>
        </div>

        {/* Decorative bottom wave */}
        <div className="cta-wave">
          <svg viewBox="0 0 1200 80" preserveAspectRatio="none">
            <path
              d="M0,40 C300,80 900,0 1200,40 L1200,80 L0,80 Z"
              fill="rgba(255,255,255,0.08)"
            />
            <path
              d="M0,55 C400,95 800,15 1200,55 L1200,80 L0,80 Z"
              fill="rgba(255,255,255,0.05)"
            />
          </svg>
        </div>
      </div>
    </Fragment>
  );
};

export default Cta;