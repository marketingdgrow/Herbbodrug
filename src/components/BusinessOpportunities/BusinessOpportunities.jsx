import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./BusinessOpportunities.css";
import { ArrowRight, Tag, ShoppingBag, Users, Store } from "lucide-react";

const opportunities = [
  {
    id: 1,
    icon: <Tag size={28} />,
    tag: "For Brands",
    title: "White Labeling",
    desc: "Launch your own herbal brand. Choose from 500+ GMP-certified products and sell under your label.",
    highlights: ["Custom Branding", "MOQ Flexible", "500+ SKUs"],
    link: "/white-labeling",
    linkText: "Start White Label",
    accent: "#2d7a3a",
    gradient: "linear-gradient(145deg, #0a2210, #1a5028)",
  },
  {
    id: 2,
    icon: <Users size={28} />,
    tag: "For Individuals",
    title: "Direct Selling",
    desc: "Build your own wellness business. Earn flexible income by selling authentic Ayurvedic products.",
    highlights: ["Unlimited Earnings", "Work From Home", "Training Support"],
    link: "/direct-selling",
    linkText: "Become a Seller",
    accent: "#4aaa5a",
    gradient: "linear-gradient(145deg, #0f2d14, #2d7a3a)",
  },
  {
    id: 3,
    icon: <ShoppingBag size={28} />,
    tag: "For Customers",
    title: "Online Shop",
    desc: "Order genuine Herbbodrug products online. Delivered pan-India with fast dispatch and easy returns.",
    highlights: ["Pan-India Delivery", "Genuine Products", "Easy Returns"],
    link: "/products",
    linkText: "Shop Now",
    accent: "#7dd894",
    gradient: "linear-gradient(145deg, #174024, #3a8a48)",
  },
  {
    id: 4,
    icon: <Store size={28} />,
    tag: "For Entrepreneurs",
    title: "Franchise",
    desc: "Open a Herbbodrug franchise outlet. Be part of India's growing Ayurvedic wellness industry.",
    highlights: ["Low Investment", "Brand Support", "High ROI"],
    link: "/franchise",
    linkText: "Apply for Franchise",
    accent: "#2d7a3a",
    gradient: "linear-gradient(145deg, #071a0b, #174024)",
  },
];

export default function BusinessOpportunities() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".bo-card").forEach((card, i) => {
              setTimeout(() => card.classList.add("revealed"), i * 120);
            });
            entry.target.querySelector(".bo-header")?.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bo-section" ref={sectionRef}>
      {/* Background texture */}
      <div className="bo-bg-dots" />

      <div className="bo-container">
        {/* Header */}
        <div className="bo-header">
          <h2>
            Grow With<br />
            <em>Herbbodrug</em>
          </h2>
          <p>
            Whether you're a brand, entrepreneur, seller or customer —
            we have the right opportunity for you.
          </p>
        </div>

        {/* Cards */}
        <div className="bo-grid">
          {opportunities.map((opp) => (
            <div className="bo-card" key={opp.id}>
              {/* Card inner */}
              <div className="bo-card-top" style={{ background: opp.gradient }}>
                <span className="bo-card-tag">{opp.tag}</span>
                <div className="bo-icon-wrap" style={{ background: `${opp.accent}33` }}>
                  <span style={{ color: "#7dd894" }}>{opp.icon}</span>
                </div>
                <h3>{opp.title}</h3>
                <p>{opp.desc}</p>
              </div>

              <div className="bo-card-bottom">
                <div className="bo-highlights">
                  {opp.highlights.map((h, i) => (
                    <span className="bo-highlight-chip" key={i}>✦ {h}</span>
                  ))}
                </div>
                <Link to={opp.link} className="bo-link-btn">
                  {opp.linkText} <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}