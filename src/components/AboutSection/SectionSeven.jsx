import React, { useEffect, useRef } from "react";
import "./AboutSection.css";

const SectionSeven = () => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
        }
      });
    });

    const els = ref.current.querySelectorAll(".s7-animate");
    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="section7-wrapper" ref={ref}>
      <div className="section7-box s7-animate">
        <h2>
          Work With a GMP-Certified Ayurvedic Pharmaceutical Company{" "}
          <span>in India</span>
        </h2>

        <p>
          Join thousands of satisfied customers and partners who have made the
          switch to reliable, science-backed Ayurvedic healthcare. Whether you
          are looking to enhance your personal wellness or expand your business
          portfolio, we are here to help.
        </p>

        <div className="section7-actions">
         {/* <a href="/Hero">
    <button className="section7-primary">
      Get Started
    </button>
  </a> */}

  <a href="/contact">
    <button className="section7-secondary">
      Contact Us
    </button>
  </a>
        </div>
      </div>
    </div>
  );
};

export default SectionSeven;