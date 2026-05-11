import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ProductCategories.css";
import { ArrowRight, Leaf, FlaskConical, Sparkles, Wheat } from "lucide-react";

const categories = [
  {
    id: 1,
    icon: <Leaf size={32} />,
    label: "Classical Products",
    title: "Classical\nFormulations",
    desc: "Time-honoured Siddha & Ayurvedic classical formulations — Kashayam, Chooranam, Lehyam, Thylam and more.",
    subLinks: [
      { name: "Siddha", path: "/siddha" },
      { name: "Ayurveda", path: "/ayurveda" },
    ],
    mainLink: "/classical-products",
    mainLinkText: "Explore Classical",
    color: "#2d7a3a",
    lightColor: "#e8f5eb",
    num: "01",
  },
  {
    id: 2,
    icon: <FlaskConical size={32} />,
    label: "Pattern Products",
    title: "Pattern\nFormulations",
    desc: "Proprietary R&D-backed herbal pattern products — scientifically developed for chronic conditions and daily wellness.",
    subLinks: [],
    mainLink: "/pattern-products",
    mainLinkText: "Explore Pattern",
    color: "#1a4a22",
    lightColor: "#d4eeda",
    num: "02",
  },
  {
    id: 3,
    icon: <Sparkles size={32} />,
    label: "Cosmetic Products",
    title: "Cosmetic &\nSkin Care",
    desc: "GMP-certified herbal cosmetics — face creams, hair care, soaps, oils and personal care range rooted in Ayurveda.",
    subLinks: [],
    mainLink: "/cosmetic-products",
    mainLinkText: "Explore Cosmetics",
    color: "#3a8a48",
    lightColor: "#dcf0e0",
    num: "03",
  },
  {
    id: 4,
    icon: <Wheat size={32} />,
    label: "General Products",
    title: "General\nHealth Range",
    desc: "Our flagship 80+ product range covering tablets, syrups, capsules, oils and more for every health condition.",
    subLinks: [],
    mainLink: "/general-products",
    mainLinkText: "Explore General",
    color: "#0f2d14",
    lightColor: "#c8eacf",
    num: "04",
  },
];

export default function ProductCategories() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelector(".pc-header")?.classList.add("revealed");
            entry.target.querySelectorAll(".pc-card").forEach((card, i) => {
              setTimeout(() => card.classList.add("revealed"), i * 130);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="pc-section" ref={sectionRef}>
      <div className="pc-container">

        {/* Header */}
        <div className="pc-header">
          
          <h2>Explore Our <em>Product Categories</em></h2>
          <p>From classical Ayurvedic formulations to modern herbal cosmetics — discover the full Herbbodrug range.</p>
        </div>

        {/* Grid */}
        <div className="pc-grid">
          {categories.map((cat) => (
            <div className="pc-card" key={cat.id}>

              {/* Top strip */}
              <div className="pc-card-strip" style={{ background: cat.color }}>
                <span className="pc-card-num">{cat.num}</span>
                <div className="pc-card-icon" style={{ background: `${cat.lightColor}22` }}>
                  <span style={{ color: cat.lightColor }}>{cat.icon}</span>
                </div>
              </div>

              {/* Body */}
              <div className="pc-card-body">
                <span className="pc-card-label" style={{ color: cat.color, background: cat.lightColor }}>
                  {cat.label}
                </span>
                <h3>{cat.title.split("\n").map((line, i) => (
                  <span key={i}>{line}{i === 0 && <br />}</span>
                ))}</h3>
                <p>{cat.desc}</p>

                {/* Sub links (for Classical) */}
                {cat.subLinks.length > 0 && (
                  <div className="pc-sub-links">
                    {cat.subLinks.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.path}
                        className="pc-sub-link"
                        style={{ borderColor: `${cat.color}30`, color: cat.color }}
                      >
                        {sub.name} <ArrowRight size={12} />
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="pc-card-footer">
                <Link
                  to={cat.mainLink}
                  className="pc-main-link"
                  style={{ background: cat.color }}
                >
                  {cat.mainLinkText} <ArrowRight size={14} />
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}