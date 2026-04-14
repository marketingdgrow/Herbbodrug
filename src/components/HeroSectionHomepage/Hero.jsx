import React, { useState, useEffect, useRef, useCallback } from "react";
import "./Hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLeaf, faShieldHalved, faStar, faUsers,
  faBoxOpen, faTruck, faArrowRight, faChevronLeft, faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

// ── Import your images (adjust path to match your project structure) ──
const heroImg = "/imgs/hero.png";
const slide2Img = "/imgs/hero.png";
const slide3Img = "/imgs/hero.png";

const slides = [
  {
    id: 0,
    badge: "Since 1944 · GMP Certified",
    h1: "Herbal & Ayurvedic",
    heading: "Pharma Solutions",
    description: "Our certified team reviews your prescription and recommends safe Ayurvedic solutions tailored to your condition — rooted in tradition, trusted by thousands.",
    btnLabel: "Shop Now",
    pills: [
      { icon: faLeaf,         label: "100% Herbal & Ayurvedic" },
      { icon: faShieldHalved, label: "100% Trusted Solutions"  },
    ],
    imgSrc: heroImg,
    imgAlt: "Ayurvedic Pharma Solutions",
  },
  {
    id: 1,
    badge: "Authentic Ayurveda · Since 1944",
    h1: "Heritage of Healing,",
    heading: "Future of Wellness",
    description: "Experience the essence of authentic Ayurveda — time-tested formulations crafted from the finest herbs, designed for modern wellness needs.",
    btnLabel: "Learn More",
    pills: [
      { icon: faStar,  label: "80+ Years of Legacy" },
      { icon: faUsers, label: "Trusted by Millions"  },
    ],
    imgSrc: slide2Img,
    imgAlt: "Heritage of Wellness",
  },
  {
    id: 2,
    badge: "Official Online Store · 500+ Products",
    h1: "Shop Authentic Ayurvedic",
    heading: "Medicines Online",
    description: "Introducing the official online store. Discover 500+ Ayurvedic medicines and exclusive products — with flat 10% off on your first order.",
    btnLabel: "Shop Now",
    pills: [
      { icon: faBoxOpen, label: "500+ Ayurvedic Products"  },
      { icon: faTruck,   label: "Free Delivery above ₹499" },
    ],
    imgSrc: slide3Img,
    imgAlt: "Shop Ayurvedic Medicines Online",
  },
];

const DURATION = 5000;
const ANIM_MS  = 800;

const Hero = () => {
  const [current,   setCurrent]   = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState("next");
  const timerRef    = useRef(null);
  const touchStartX = useRef(0);

  const startTimer = useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setDirection("next");
      setAnimating(true);
      setCurrent((p) => (p + 1) % slides.length);
      setTimeout(() => setAnimating(false), ANIM_MS);
    }, DURATION);
  }, []);

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, [startTimer]);

  const goTo = useCallback((index, dir = "next") => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    setCurrent((index + slides.length) % slides.length);
    setTimeout(() => setAnimating(false), ANIM_MS);
  }, [animating]);

  const handlePrev = () => { goTo(current - 1, "prev"); startTimer(); };
  const handleNext = () => { goTo(current + 1, "next"); startTimer(); };
  const handleDot  = (i) => { if (i !== current) { goTo(i, i > current ? "next" : "prev"); startTimer(); } };
  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd   = (e) => {
    const dx = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(dx) > 40) dx > 0 ? handleNext() : handlePrev();
  };

  const slide = slides[current];

  return (
    <div className="hs-wrap" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>

      <div className={`hs-slide ${animating ? `exit-${direction}` : "active"}`} key={current}>
        {/* LEFT */}
        <div className="hs-left">
          <div className="hs-badge anim-fade-down">
            <span className="hs-badge-dot" />
            {slide.badge}
          </div>
          <div className="hs-text-block anim-fade-left">
            <p className="hs-h1">{slide.h1}</p>
            <h2 className="hs-heading">
              <span className="underline-wrap">{slide.heading}</span>
            </h2>
            <p className="hs-des">{slide.description}</p>
          </div>
          <div className="hs-pills anim-fade-up">
            {slide.pills.map((p, i) => (
              <div className="hs-pill" key={i}>
                <div className="hs-pill-icon">
                  <FontAwesomeIcon icon={p.icon} size="xs" />
                </div>
                {p.label}
              </div>
            ))}
          </div>
          <button className="hs-btn anim-fade-up">
            {slide.btnLabel}
            <span className="hs-btn-circle">
              <FontAwesomeIcon icon={faArrowRight} size="xs" />
            </span>
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hs-right anim-img-rise">
          <img src={slide.imgSrc} alt={slide.imgAlt} />
        </div>
      </div>

      {/* ARROWS */}
      <button className="hs-arr hs-arr-l" onClick={handlePrev} aria-label="Previous">
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button className="hs-arr hs-arr-r" onClick={handleNext} aria-label="Next">
        <FontAwesomeIcon icon={faChevronRight} />
      </button>

      {/* DOTS */}
      <div className="hs-nav">
        {slides.map((_, i) => (
          <button key={i} className={`hs-dot ${i === current ? "active" : ""}`}
            onClick={() => handleDot(i)} aria-label={`Slide ${i + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default Hero;
