import React, { useState, useEffect, useRef, useCallback } from "react";
import "./Hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLeaf, faShieldHalved, faStar, faUsers,
  faBoxOpen, faTruck, faArrowRight, faChevronLeft, faChevronRight, faFlask,
} from "@fortawesome/free-solid-svg-icons";

// Public folder images — no import needed, use string paths directly
const slide1Bg = "/imgs/Artboard1.jpeg";
const slide2Bg = "/imgs/Artboard2.jpeg";
const slide3Bg = "/imgs/Artboard3.jpeg";
const slide4Bg = "/imgs/Artboard4.jpeg";

const slides = [
  {
    id: 0,
    bgImg: slide1Bg,
    contentSide: "left",
    badge: "Since 1944 · GMP Certified",
    h1: "Herbal & Ayurvedic",
    heading: "Pharma Solutions",
    description:
      "Our certified team reviews your prescription and recommends safe Ayurvedic solutions tailored to your condition — rooted in tradition, trusted by thousands.",
    btnLabel: "Shop Now",
    pills: [
      { icon: faLeaf,         label: "100% Herbal & Ayurvedic" },
      { icon: faShieldHalved, label: "100% Trusted Solutions"  },
    ],
  },
  {
    id: 1,
    bgImg: slide2Bg,
    contentSide: "left",
    badge: "Authentic Ayurveda · Since 1944",
    h1: "Heritage of Healing,",
    heading: "Future of Wellness",
    description:
      "Experience the essence of authentic Ayurveda — time-tested formulations crafted from the finest herbs, designed for modern wellness needs.",
    btnLabel: "Learn More",
    pills: [
      { icon: faStar,  label: "80+ Years of Legacy" },
      { icon: faUsers, label: "Trusted by Millions"  },
    ],
  },
  {
    id: 2,
    bgImg: slide3Bg,
    contentSide: "right",
    badge: "Traditional Roots · Modern Science",
    h1: "Rooted in Nature,",
    heading: "Crafted for You",
    description:
      "Blending ancient Ayurvedic wisdom with modern pharmaceutical standards — every product is crafted with precision, purity, and purpose.",
    btnLabel: "Explore Products",
    pills: [
      { icon: faFlask, label: "GMP Certified Facility" },
      { icon: faLeaf,  label: "Natural Ingredients"    },
    ],
  },
  {
    id: 3,
    bgImg: slide4Bg,
    contentSide: "left",
    badge: "Official Online Store · 500+ Products",
    h1: "Shop Authentic Ayurvedic",
    heading: "Medicines Online",
    description:
      "Introducing our official online store. Discover 500+ Ayurvedic medicines and exclusive products — with flat 10% off on your first order.",
    btnLabel: "Shop Now",
    pills: [
      { icon: faBoxOpen, label: "500+ Ayurvedic Products" },
      { icon: faTruck,   label: "70+ Treatments"          },
    ],
  },
];

const DURATION = 5000;
const ANIM_MS  = 700;

const Hero = () => {
  const [current,   setCurrent]   = useState(0);
  const [prev,      setPrev]      = useState(null);
  const [direction, setDirection] = useState("next");
  const [animating, setAnimating] = useState(false);
  const [progress,  setProgress]  = useState(0);
  const timerRef    = useRef(null);
  const progressRef = useRef(null);
  const startTime   = useRef(null);
  const touchStartX = useRef(0);

  const startProgress = useCallback(() => {
    cancelAnimationFrame(progressRef.current);
    startTime.current = performance.now();
    const tick = (now) => {
      const elapsed = now - startTime.current;
      const pct = Math.min((elapsed / DURATION) * 100, 100);
      setProgress(pct);
      if (pct < 100) progressRef.current = requestAnimationFrame(tick);
    };
    progressRef.current = requestAnimationFrame(tick);
  }, []);

  const startTimer = useCallback(() => {
    clearInterval(timerRef.current);
    startProgress();
    timerRef.current = setInterval(() => {
      transition((c) => (c + 1) % slides.length, "next");
    }, DURATION);
  }, []); // eslint-disable-line

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(timerRef.current);
      cancelAnimationFrame(progressRef.current);
    };
  }, [startTimer]);

  const transition = useCallback(
    (getNext, dir) => {
      if (animating) return;
      setAnimating(true);
      setDirection(dir);
      setCurrent((c) => {
        const next = typeof getNext === "function" ? getNext(c) : getNext;
        setPrev(c);
        return next;
      });
      setTimeout(() => {
        setAnimating(false);
        setPrev(null);
      }, ANIM_MS);
    },
    [animating]
  );

  const handlePrev = () => {
    transition((c) => (c - 1 + slides.length) % slides.length, "prev");
    startTimer();
  };
  const handleNext = () => {
    transition((c) => (c + 1) % slides.length, "next");
    startTimer();
  };
  const handleDot = (i) => {
    if (i === current || animating) return;
    transition(i, i > current ? "next" : "prev");
    startTimer();
  };

  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd   = (e) => {
    const dx = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(dx) > 40) dx > 0 ? handleNext() : handlePrev();
  };

  const stateOf = (i) => {
    if (i === current)  return animating ? `enter-${direction}` : "active";
    if (i === prev)     return animating ? `exit-${direction}`  : "hidden";
    return "hidden";
  };

  return (
    <section
      className="hs-wrap"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      aria-label="Hero Slider"
    >
      {slides.map((slide, i) => {
        const state = stateOf(i);
        const overlayClass = slide.contentSide === "left"
          ? "hs-slide-overlay--left"
          : "hs-slide-overlay--right";
        const contentClass = slide.contentSide === "left"
          ? "hs-content--left"
          : "hs-content--right";

        return (
          <div
            key={slide.id}
            className={`hs-slide hs-slide--${state}`}
            aria-hidden={i !== current}
          >
            {/* Full background image */}
            <div
              className="hs-slide-bg"
              style={{ backgroundImage: `url(${slide.bgImg})` }}
            />

            {/* Directional gradient overlay */}
            <div className={`hs-slide-overlay ${overlayClass}`} />

            {/* Content panel */}
            <div className={`hs-content ${contentClass}`}>
              <div className="hs-badge">
                <span className="hs-badge-dot" />
                {slide.badge}
              </div>

              <div className="hs-text-block">
                <p className="hs-h1">{slide.h1}</p>
                <h2 className="hs-heading">
                  <span className="underline-wrap">{slide.heading}</span>
                </h2>
                <p className="hs-des">{slide.description}</p>
              </div>

              <div className="hs-pills">
                {slide.pills.map((p, pi) => (
                  <div className="hs-pill" key={pi}>
                    <div className="hs-pill-icon">
                      <FontAwesomeIcon icon={p.icon} size="xs" />
                    </div>
                    {p.label}
                  </div>
                ))}
              </div>

              <button className="hs-btn">
                {slide.btnLabel}
                <span className="hs-btn-circle">
                  <FontAwesomeIcon icon={faArrowRight} size="xs" />
                </span>
              </button>
            </div>
          </div>
        );
      })}

      {/* Arrows */}
      <button className="hs-arr hs-arr-l" onClick={handlePrev} aria-label="Previous slide">
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button className="hs-arr hs-arr-r" onClick={handleNext} aria-label="Next slide">
        <FontAwesomeIcon icon={faChevronRight} />
      </button>

      {/* Dots */}
      <div className="hs-nav" role="tablist" aria-label="Slide navigation">
        {slides.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === current}
            className={`hs-dot${i === current ? " active" : ""}`}
            onClick={() => handleDot(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="hs-progress">
        <div className="hs-progress-bar" style={{ width: `${progress}%` }} />
      </div>
    </section>
  );
};

export default Hero;