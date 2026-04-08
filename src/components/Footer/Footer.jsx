import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footersection">
      <div className="footersection-container">

        {/* TOP LINKS */}
        <div className="footersection-top">
          <div className="footersection-column">
            <h4>Company</h4>
            <a href="#">About</a>
            <a href="#">Product</a>
            <a href="#">Contact</a>
          </div>

          <div className="footersection-column">
            <h4>Social Media</h4>
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">Youtube</a>
          </div>

          <div className="footersection-column">
            <h4>Trust & Legal</h4>
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Notice</a>
          </div>

          <div className="footersection-column">
            <h4>About Us</h4>
            <p>
              At Herbbodrug Pharmaceuticals, every product begins with a purpose.
              Since 2007, we have been formulating Ayurvedic medicines from our
              GMP-certified facility in Chennai — not to fill a catalogue, but to
              answer real health needs with real solutions.
            </p>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="footersection-divider"></div>

        {/* BRAND + SOCIAL ROW */}
        <div className="footersection-middle">
          <div className="footersection-brand">
            <img src="/src/assets/Logo_jpg-01.png" alt="Herbbodrug Logo" />
          </div>

          <div className="footersection-social">
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="footersection-bottom">
          <p>©2026 HERBBODRUG</p>
          <p>
            Design & Developed by <a href="#">D-Grow Marketing Agency</a>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;