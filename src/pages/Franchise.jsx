import React, { useState, useEffect, useRef } from "react";
import "./Franchise.css";

function useScrollReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((r) => r.classList.add("revealed"));
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}
import {
  Store, TrendingUp, Users, Award, Handshake,
  ArrowRight, CheckCircle2, Phone, Mail, MapPin, ChevronDown,
  Gift, BookOpen, BadgePercent, HeartHandshake
} from "lucide-react";

const benefits = [
  {
    icon: <BookOpen size={28} />,
    title: "Free Training",
    tag: "Sales & Product Knowledge",
    desc: "Planning to start your own business venture? Our dedicated Herbbodrug sales support staff will provide you full training — product knowledge, market strategy and more.",
    perks: [
      "Complete product knowledge sessions",
      "Sales technique workshops",
      "Regulatory & compliance guidance",
      "Ongoing refresher programmes",
    ],
  },
  {
    icon: <Gift size={28} />,
    title: "Free Samples & Promo Materials",
    tag: "Doctor Connect Tools",
    desc: "Herbbodrug offers you free samples, visual aids and promotional materials so you can build confidence with doctors and medical professionals from day one.",
    perks: [
      "Product sample kits for doctors",
      "Visual aid brochures & detailing cards",
      "Digital promotional assets",
      "Branded gift and reminder items",
    ],
  },
  {
    icon: <BadgePercent size={28} />,
    title: "Very Low Investment",
    tag: "Accessible to Everyone",
    desc: "With PCD pharma franchise, you only need a small initial investment. No sales targets. No pressure. Earn the right returns at your own pace and scale as you grow.",
    perks: [
      "Minimal startup capital required",
      "No monthly sales targets",
      "Flexible order quantities",
      "Scalable territory expansion",
    ],
  },
  {
    icon: <HeartHandshake size={28} />,
    title: "Full Sales Support",
    tag: "We're With You",
    desc: "Our dedicated team works every day to ensure quality and overall effectiveness. Herbbodrug medicines are making a difference in lives across the globe.",
    perks: [
      "Dedicated franchise manager",
      "Prompt order fulfilment",
      "Market development assistance",
      "Exclusive area rights",
    ],
  },
];

const supports = [
  { icon: <Award size={22} />, title: "Brand Training", desc: "Complete product knowledge & brand training for you and your entire team before launch." },
  { icon: <TrendingUp size={22} />, title: "Marketing Collateral", desc: "Banners, brochures, visual aids and digital assets — all supplied at no extra cost." },
  { icon: <Handshake size={22} />, title: "Operational Guidance", desc: "SOPs, compliance documentation and regulatory advisory to keep you always audit-ready." },
  { icon: <Phone size={22} />, title: "Ongoing Support", desc: "Dedicated franchise helpline and quarterly business review meetings to drive growth." },
];

const faqs = [
  {
    q: "What is the minimum investment for a Herbbodrug PCD franchise?",
    a: "Investment varies by territory and product range selected. Our team will provide a detailed investment breakdown and ROI projection during your free consultation.",
  },
  {
    q: "Do you provide exclusive territory rights?",
    a: "Yes. Every Herbbodrug franchise partner receives a protected exclusive territory to ensure zero internal competition within their zone.",
  },
  {
    q: "What training and support is provided?",
    a: "We provide comprehensive product knowledge training, sales training, promotional materials and operational SOPs before and after launch at no additional cost.",
  },
  {
    q: "Is prior pharmaceutical experience required?",
    a: "Not at all. Our training programme is designed for entrepreneurs from all backgrounds — freshers, pharmacists and experienced business owners alike.",
  },
  {
    q: "Are there any monthly sales targets?",
    a: "No. Herbbodrug PCD franchise operates on a no-target model — you grow at your own pace without pressure.",
  },
];

export default function Franchise() {
  const [openFaq, setOpenFaq] = useState(null);
  const s1 = useScrollReveal();
  const s2 = useScrollReveal();
  const s3 = useScrollReveal();
  const s4 = useScrollReveal();
  const s5 = useScrollReveal();

  return (
    <div className="fr-page">

      {/* ── HERO ── */}
      <section className="fr-hero">
        <div className="fr-hero-overlay" />
        <div className="fr-hero-content">
          <span className="fr-pill"><Handshake size={14} /> PCD Pharma Franchise</span>
          <h1>Grow With<br /><em>Herbbodrug</em></h1>
          <p>
            Join one of India's most trusted pharma franchise networks. Build a
            profitable, pressure-free business backed by our high-quality product
            range, full sales support and zero-target franchise model.
          </p>
          <div className="fr-hero-btns">
            <a href="/contact" className="fr-btn-primary">Apply for Franchise <ArrowRight size={16} /></a>
            <a href="#benefits" className="fr-btn-ghost">Explore Benefits</a>
          </div>
        </div>
        <div className="fr-hero-visual">
          <div className="fr-hero-stat-card">
            <span className="fr-hero-stat-num">PCD</span>
            <span>Pharma Franchise Model</span>
          </div>
          <div className="fr-hero-stat-card">
            <span className="fr-hero-stat-num">0</span>
            <span>Sales Targets</span>
          </div>
          <div className="fr-hero-stat-card">
            <span className="fr-hero-stat-num">Free</span>
            <span>Training & Samples</span>
          </div>
        </div>
      </section>

      {/* ── INTRO STRIP ── */}
      <section className="fr-intro">
        <div className="fr-container">
          <p>
            The PCD Pharma Franchise concept has empowered millions of entrepreneurs
            across India to build thriving businesses with minimal investment and full
            brand backing. <strong>Herbbodrug</strong> brings you this proven
            model with unmatched support — so you can focus on growth, not risk.
          </p>
        </div>
      </section>

      {/* ── BENEFITS / MODELS ── */}
      <section className="fr-models" id="benefits" ref={s1}>
        <div className="fr-container">
          <div className="fr-section-head reveal">
            <span className="fr-badge">Benefits of PCD Franchise</span>
            <h2>Why Partner with Herbbodrug?</h2>
            <p>
              Everything you need to start, grow and succeed — backed by a company
              that invests in your success as much as you do.
            </p>
          </div>
          <div className="fr-models-grid">
            {benefits.map((m, i) => (
              <div
                className="fr-model-card reveal"
                key={i}
                style={{ transitionDelay: `${i * 0.12}s` }}
              >
                <div className="fr-model-icon">{m.icon}</div>
                <span className="fr-model-tag">{m.tag}</span>
                <h3>{m.title}</h3>
                <p>{m.desc}</p>
                <ul className="fr-model-perks">
                  {m.perks.map((p, j) => (
                    <li key={j}><CheckCircle2 size={14} /> {p}</li>
                  ))}
                </ul>
                <a href="/contact" className="fr-model-cta">Enquire Now <ArrowRight size={14} /></a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SUPPORT ── */}
      <section className="fr-support" ref={s2}>
        <div className="fr-container">
          <div className="fr-support-grid">
            <div className="fr-support-text reveal">
              <span className="fr-badge">Franchise Support</span>
              <h2>We're With You<br />Every Step of The Way</h2>
              <p>
                From your very first order to scaling your territory, Herbbodrug's
                franchise support system ensures you are never on your own.
                Training, marketing, logistics — we handle it all alongside you.
              </p>
              <a href="/contact" className="fr-btn-primary">Talk to Our Team <ArrowRight size={16} /></a>
            </div>
            <div className="fr-support-cards reveal">
              {supports.map((s, i) => (
                <div
                  className="fr-support-card"
                  key={i}
                  style={{ transitionDelay: `${i * 0.08}s` }}
                >
                  <div className="fr-support-icon">{s.icon}</div>
                  <div>
                    <h4>{s.title}</h4>
                    <p>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY NALLARAM ── */}
      <section className="fr-why" ref={s3}>
        <div className="fr-container">
          <div className="fr-section-head reveal">
            <span className="fr-badge">Why Herbbodrug</span>
            <h2>The Strongest Foundation<br />for Your Franchise</h2>
          </div>
          <div className="fr-why-items">
            {[
              "GMP certified pharmaceutical manufacturing",
              "Wide product range across all therapeutic categories",
              "No sales pressure — zero monthly targets",
              "Free promotional materials & visual aids supplied",
              "Exclusive territory rights for every partner",
              "Free product samples to build doctor confidence",
              "Dedicated sales support staff for all franchisees",
              "Making a difference in millions of lives globally",
            ].map((item, i) => (
              <div
                className="fr-why-item reveal"
                key={i}
                style={{ transitionDelay: `${i * 0.06}s` }}
              >
                <CheckCircle2 size={18} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="fr-faq" ref={s4}>
        <div className="fr-container fr-faq-inner">
          <div className="fr-section-head reveal">
            <span className="fr-badge">FAQs</span>
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="fr-faq-list reveal">
            {faqs.map((f, i) => (
              <div
                className={`fr-faq-item ${openFaq === i ? "open" : ""}`}
                key={i}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <div className="fr-faq-q">
                  <span>{f.q}</span>
                  <ChevronDown
                    size={18}
                    className={`fr-faq-chevron ${openFaq === i ? "rotated" : ""}`}
                  />
                </div>
                {openFaq === i && <p className="fr-faq-a">{f.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="fr-cta" ref={s5}>
        <div className="fr-cta-inner reveal">
          <h2>Ready to Start Your Herbbodrug Franchise?</h2>
          <p>
            Fill out our franchise enquiry form and our team will connect with
            you within 24 hours — no obligation, just a conversation.
          </p>
          <div className="fr-contact-chips">
            <a href="tel:+919999999999" className="fr-chip"><Phone size={15} /> Call Us</a>
            <a href="mailto:franchise@herbbodrug.com" className="fr-chip"><Mail size={15} /> Email Us</a>
            <a href="/contact" className="fr-chip"><MapPin size={15} /> Visit Us</a>
          </div>
          <a href="/contact" className="fr-btn-primary" style={{ marginTop: "28px" }}>
            Apply Now <ArrowRight size={16} />
          </a>
        </div>
      </section>

    </div>
  );
}