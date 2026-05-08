import React from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "./Whitelabel.css";
import {
  FlaskConical, ShieldCheck, Truck, PackageCheck,
  FileText, Microscope, Leaf, Globe, ArrowRight, CheckCircle2
} from "lucide-react";

const steps = [
  { icon: <FileText size={28} />, title: "Consultation", desc: "Share your brand vision, target market & product requirements with our experts." },
  { icon: <Microscope size={28} />, title: "Formulation", desc: "Our R&D team formulates or selects the ideal product from our 500+ catalogue." },
  { icon: <PackageCheck size={28} />, title: "Custom Branding", desc: "Label design, packaging and branding tailored 100% to your identity." },
  { icon: <FlaskConical size={28} />, title: "Quality Testing", desc: "Rigorous QA/QC testing as per GMP, ISO 9001:2015 & international standards." },
  { icon: <Truck size={28} />, title: "Delivery", desc: "Timely dispatch with pan-India & global logistics support to 9+ countries." },
];

const why = [
  { title: "GMP Certified Plant", desc: "Fully compliant manufacturing with international quality standards." },
  { title: "ISO & HALAL Certified", desc: "Trusted certifications that build global consumer confidence." },
  { title: "500+ SKUs Available", desc: "Tablets, capsules, liquids, ointments, creams & herbal oils." },
  { title: "10+ Years Experience", desc: "Decade of expertise in Ayurvedic & herbal formulation development." },
  { title: "Custom Packaging", desc: "Complete brand identity — labels, boxes, inserts, all yours." },
  { title: "Fast Turnaround", desc: "Efficient production cycles with 50 million USD annual capacity." },
];

const certs = [
  { label: "GMP", sub: "Good Manufacturing Practices" },
  { label: "ISO", sub: "9001:2015 Certified" },
  { label: "HALAL", sub: "Certified Unit" },
  { label: "GMP", sub: "PIC/S Compliant" },
];

export default function Labeling() {
  const s1 = useScrollReveal();
  const s2 = useScrollReveal();
  const s3 = useScrollReveal();
  const s4 = useScrollReveal();

  return (
    <div className="wl-page">

      {/* ── HERO BANNER ── */}
      <section className="wl-hero">
        <div className="wl-hero-overlay" />
        <div className="wl-hero-content">
          <span className="wl-badge reveal" ref={(el) => el}>
            <Leaf size={14} /> White Label Solutions
          </span>
          <h1 className="wl-hero-title">
            Your Brand. <br />
            <em>Our Expertise.</em>
          </h1>
          <p className="wl-hero-sub">
            Launch your own premium Ayurvedic & herbal product line — powered
            by Herbbodrug's GMP-certified, ISO-approved manufacturing.
          </p>
          <a href="/contact" className="wl-cta-btn">
            Start Your Brand <ArrowRight size={17} />
          </a>
        </div>
        <div className="wl-hero-badge-row">
          {certs.map((c, i) => (
            <div className="wl-cert-chip" key={i}>
              <span className="wl-cert-label">{c.label}</span>
              <span className="wl-cert-sub">{c.sub}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHAT IS WHITE LABELING ── */}
      <section className="wl-about" ref={s1}>
        <div className="wl-container">
          <div className="wl-about-grid">
            <div className="wl-about-visual reveal">
              <div className="wl-about-img-box">
                <div className="wl-img-dummy" />
                <div className="wl-about-tag">
                  <ShieldCheck size={18} /> GMP Certified
                </div>
              </div>
            </div>
            <div className="wl-about-text reveal">
              <span className="wl-section-badge">What We Offer</span>
              <h2 className="wl-section-title">
                Private Label &amp; White Labeling
              </h2>
              <p>
                Herbbodrug Pharmaceuticals offers end-to-end white labeling
                services for businesses looking to launch their own branded
                Ayurvedic, herbal, and nutraceutical products — without the
                investment of setting up a manufacturing unit.
              </p>
              <p>
                With over <strong>10 years of expertise</strong>, GMP-certified
                facilities and a portfolio of <strong>500+ products</strong>,
                we handle everything from formulation to final packaged goods
                under your brand name.
              </p>
              <ul className="wl-check-list">
                {["No minimum factory setup required","Flexible MOQ options","Brand-ready packaging","Regulatory documentation support"].map((t, i) => (
                  <li key={i}><CheckCircle2 size={16} /> {t}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS STEPS ── */}
      <section className="wl-process" ref={s2}>
        <div className="wl-container">
          <div className="wl-section-header reveal">
            <span className="wl-section-badge">Our Process</span>
            <h2 className="wl-section-title">Simple 5-Step Journey</h2>
            <p className="wl-section-desc">From idea to shelf — we handle every step seamlessly.</p>
          </div>
          <div className="wl-steps">
            {steps.map((s, i) => (
              <div className="wl-step reveal" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="wl-step-num">{String(i + 1).padStart(2, "0")}</div>
                <div className="wl-step-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                {i < steps.length - 1 && <div className="wl-step-arrow"><ArrowRight size={20} /></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="wl-why" ref={s3}>
        <div className="wl-container">
          <div className="wl-section-header reveal">
            <span className="wl-section-badge">Why Us</span>
            <h2 className="wl-section-title">The Herbbodrug Advantage</h2>
          </div>
          <div className="wl-why-grid">
            {why.map((w, i) => (
              <div className="wl-why-card reveal" key={i} style={{ animationDelay: `${i * 0.08}s` }}>
                <div className="wl-why-icon"><Globe size={22} /></div>
                <h4>{w.title}</h4>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="wl-cta-section" ref={s4}>
        <div className="wl-cta-inner reveal">
          <h2>Ready to Launch Your Own Brand?</h2>
          <p>Connect with our white labeling team and get a free product consultation today.</p>
          <div className="wl-cta-btns">
            <a href="/contact" className="wl-cta-btn">Get in Touch <ArrowRight size={17} /></a>
            <a href="/products" className="wl-cta-btn-outline">View Products</a>
          </div>
        </div>
      </section>

    </div>
  );
}