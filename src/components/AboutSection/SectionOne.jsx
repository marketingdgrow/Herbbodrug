import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAward,
  faFlask,
  faLeaf,
  faStar,
  faArrowRight,
  faShieldHalved,
  faCertificate,
} from "@fortawesome/free-solid-svg-icons";
import "./AboutSection.css";

/* ── animated counter hook ── */
const useCounter = (target, duration = 1800, start = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (ts) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
};

const STATS = [
  { icon: faAward,        value: 15,  suffix: "+", label: "Years of Heritage"    },
  { icon: faFlask,        value: 500, suffix: "+", label: "Ayurvedic Products"   },
  { icon: faLeaf,         value: 100, suffix: "%", label: "Natural Ingredients"  },
  { icon: faStar,         value: 50,  suffix: "K+",label: "Happy Customers"      },
];

const SectionOne = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const c0 = useCounter(STATS[0].value, 1600, visible);
  const c1 = useCounter(STATS[1].value, 2000, visible);
  const c2 = useCounter(STATS[2].value, 1400, visible);
  const c3 = useCounter(STATS[3].value, 2200, visible);
  const counts = [c0, c1, c2, c3];

  return (
    <section className={`as1-wrap${visible ? " as1-visible" : ""}`} ref={sectionRef}>

      {/* ── decorative bg elements ── */}
      <div className="as1-bg-ring as1-bg-ring--1" aria-hidden />
      <div className="as1-bg-ring as1-bg-ring--2" aria-hidden />
      <div className="as1-bg-dot-grid" aria-hidden />

      <div className="as1-inner">

        {/* ══════════ LEFT — IMAGE ══════════ */}
        <div className="as1-img-col">

          {/* corner brackets */}
          <div className="as1-bracket as1-bracket--tl" aria-hidden />
          <div className="as1-bracket as1-bracket--br" aria-hidden />

          {/* main image */}
          <div className="as1-img-frame">
            <div className="as1-img-shine" aria-hidden />
            <img src="/imgs/hero.png" alt="Herbbodrug Ayurvedic Pharma" />
          </div>

          {/* floating badge — top left */}
          <div className="as1-badge as1-badge--gmp">
            <div className="as1-badge-icon">
              <FontAwesomeIcon icon={faCertificate} />
            </div>
            <div>
              <strong>GMP Certified</strong>
              <span>WHO · ISO 9001:2015</span>
            </div>
          </div>

          {/* year tag — bottom right */}
          {/* <div className="as1-badge as1-badge--year">
            <strong>2007</strong>
            <span>Est. Chennai</span>
          </div> */}

          {/* trust strip */}
          <div className="as1-trust-strip">
            <FontAwesomeIcon icon={faShieldHalved} />
            <span>Trusted by 50,000+ patients across India</span>
          </div>
        </div>

        {/* ══════════ RIGHT — CONTENT ══════════ */}
        <div className="as1-content-col">

          {/* eyebrow */}
          {/* <div className="as1-eyebrow">
            <span className="as1-eyebrow-line" />
            Our Story
          </div> */}

          {/* heading */}
          <h2 className="as1-heading">
            Where{" "}
            <span className="as1-heading-accent">15+ Years</span>
            {" "}of Ayurvedic Heritage
            <em className="as1-heading-italic"> Meets Modern Science</em>
          </h2>

          {/* animated divider */}
          <div className="as1-divider" aria-hidden />

          <h3 className="as1-sub">
            Ayurvedic Pharmaceutical Company in India — Built on Trust &amp; Science
          </h3>

          <p className="as1-para">
            At <strong>Herbbodrug Pharmaceuticals</strong>, every product begins
            with a purpose. Since 2007, we have been formulating Ayurvedic
            medicines from our GMP-certified facility in Chennai — not to fill a
            catalogue, but to answer real health needs with real solutions.
          </p>
          <p className="as1-para">
            From chronic joint pain to daily skin care, from cardiac support to
            respiratory relief — our range covers the full spectrum of wellness,
            built on traditional Ayurvedic science and manufactured to
            international quality standards.
          </p>

          {/* stat grid */}
          <div className="as1-stats">
            {STATS.map((s, i) => (
              <div className="as1-stat" key={i} style={{ "--i": i }}>
                <div className="as1-stat-icon">
                  <FontAwesomeIcon icon={s.icon} />
                </div>
                <div className="as1-stat-body">
                  <strong>
                    {counts[i]}{s.suffix}
                  </strong>
                  <span>{s.label}</span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="as1-cta-row">
            <Link to="/products" className="as1-cta-btn">
              Explore Products
              <span className="as1-cta-circle">
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </Link>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;