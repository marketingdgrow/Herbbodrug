import React, { Fragment, useEffect, useRef } from "react";
import "./AboutSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPills,
  faSprayCan,
  faLeaf,
  faDumbbell,
  faHeartPulse,
  faBone,
  faLungs,
  faAppleWhole,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const offerItems = [
  {
    icon: faPills,
    title: "Potent Oral Care",
    desc: "Tablets, Capsules, Syrups, and Herbal Powders for internal healing.",
    tag: "Internal",
  },
  {
    icon: faSprayCan,
    title: "External Applications",
    desc: "Oils, Balms, and Ointments for targeted relief.",
    tag: "Topical",
  },
  {
    icon: faLeaf,
    title: "Natural Beauty",
    desc: "Skin, Hair, and Personal Care products free from harsh chemicals.",
    tag: "Wellness",
  },
  {
    icon: faDumbbell,
    title: "Daily Vitality",
    desc: "Nutritional and Wellness Supplements to boost immunity and energy.",
    tag: "Supplements",
  },
];

const therapeuticAreas = [
  { icon: faHeartPulse, label: "Metabolic Health" },
  { icon: faBone, label: "Joint Wellness" },
  { icon: faLungs, label: "Respiratory Support" },
  { icon: faAppleWhole, label: "Digestive Balance" },
];

const SectionThree = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    const animatedEls = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    animatedEls?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <Fragment>
      <div className="section3-wrapper" ref={sectionRef}>
        {/* Header */}
        <div className="section3-header animate-on-scroll">
          
          <h2>
            What We Offer:
            <span> A Holistic Approach to Wellness</span>
          </h2>
          <div className="section3-divider"></div>
          <p className="section3-subtext">
            With a portfolio of over{" "}
            <strong className="section3-highlight">500 proven formulations</strong>, we
            cater to the complete spectrum of health needs. Whether you are looking for
            daily wellness support or targeted therapeutic solutions, we have a product
            designed for you.
          </p>
        </div>

        {/* Offer Cards */}
        <div className="section3-cards">
          {offerItems.map((item, index) => (
            <div
              className="offer-card animate-on-scroll"
              key={index}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="offer-tag">{item.tag}</span>
              <div className="offer-icon-wrap">
                <FontAwesomeIcon icon={item.icon} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Therapeutic Areas */}
        <div className="section3-therapeutic animate-on-scroll">
          <p className="section3-thera-label">Key Therapeutic Areas</p>
          <div className="section3-thera-pills">
            {therapeuticAreas.map((area, idx) => (
              <div className="thera-pill" key={idx}>
                <FontAwesomeIcon icon={area.icon} />
                <span>{area.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="section3-cta animate-on-scroll">
          <button className="section3-cta-btn">
            Find What Fits Your Needs
            <FontAwesomeIcon icon={faArrowRight} className="cta-arrow" />
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default SectionThree;