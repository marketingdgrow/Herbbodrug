import React, { useEffect, useRef } from "react";
import "./AboutSection.css";

const SectionSeven = () => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.15 }
    );

    const els = ref.current.querySelectorAll(".s7-animate");
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="section7-wrapper" ref={ref}>
      <div className="section7-box s7-animate">

        {/* Eyebrow */}
        <div className="section7-eyebrow">
          <span className="section7-eyebrow-dot" />
          GMP Certified · Since 1944
        </div>

        {/* Heading */}
        <h2>
          Work With a GMP-Certified Ayurvedic Pharmaceutical Company{" "}
          <span>in India</span>
        </h2>

        {/* Description */}
        <p>
          Join thousands of satisfied customers and partners who have made the
          switch to reliable, science-backed Ayurvedic healthcare. Whether you
          are looking to enhance your personal wellness or expand your business
          portfolio, we are here to help.
        </p>

        {/* Actions */}
        <div className="section7-actions">
          {/* Highlighted Contact CTA */}
          <a href="/contact" style={{ textDecoration: "none" }}>
            <button className="section7-contact">
              <span>
                Contact Us
                <span className="s7-arrow">→</span>
              </span>
            </button>
          </a>
        </div>

        {/* Trust row */}
        <div className="section7-trust">
          <div className="section7-trust-item">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L9.19 8.62L2 9.24l5.45 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24l-7.19-.62L12 2z"/>
            </svg>
            Trusted by 10,000+
          </div>
          <div className="section7-trust-divider" />
          <div className="section7-trust-item">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" fill="none"/>
            </svg>
            WHO-GMP Certified
          </div>
          <div className="section7-trust-divider" />
          <div className="section7-trust-item">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
            </svg>
            500+ Products
          </div>
        </div>

      </div>
    </div>
  );
};

export default SectionSeven;