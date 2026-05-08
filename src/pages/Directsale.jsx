import React from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "./Directsale.css";
import {
  Users, TrendingUp, Clock, Award, Heart, BookOpen,
  ArrowRight, CheckCircle2, IndianRupee, Globe, Star, Handshake
} from "lucide-react";

const stats = [
  { num: "500+", label: "Products to Sell" },
  { num: "10+", label: "Years of Excellence" },
  { num: "Pan-India", label: "Network Reach" },
  { num: "∞", label: "Earning Potential" },
];

const benefits = [
  { icon: <IndianRupee size={24} />, title: "Higher Income", desc: "Earn based on your time and effort — the more you sell, the more you grow with unlimited income potential." },
  { icon: <Clock size={24} />, title: "Flexible Work Schedule", desc: "Work full-time or part-time at your own pace, balancing personal life and business seamlessly." },
  { icon: <TrendingUp size={24} />, title: "Independence", desc: "Run your own business, control your growth, and set your own schedule with full autonomy." },
  { icon: <Award size={24} />, title: "Recognition & Rewards", desc: "Achievements are regularly celebrated, motivating ongoing personal and professional development." },
  { icon: <Users size={24} />, title: "Relationship Building", desc: "Build a powerful network of like-minded wellness advocates who support each other's growth." },
  { icon: <BookOpen size={24} />, title: "Personal Development", desc: "Sharpen your communication, public speaking, and networking skills through real-world selling." },
];

const howItWorks = [
  { step: "01", title: "Register as a Direct Seller", desc: "Sign up with Herbbodrug and get access to our complete product portfolio and training resources." },
  { step: "02", title: "Learn the Products", desc: "Understand our Ayurvedic & herbal range — we provide full product training and marketing materials." },
  { step: "03", title: "Connect with Customers", desc: "Reach customers at home, online, or at the workplace — wherever trust is built naturally." },
  { step: "04", title: "Earn & Grow", desc: "Earn commissions on every sale and grow your network for recurring income." },
];

const channels = [
  "Home Demonstrations & Consultations",
  "Online Social Media Selling",
  "Workplace & Community Outreach",
  "WhatsApp & Referral Networks",
  "Local Health & Wellness Events",
  "Door-to-Door Personal Visits",
  "Pharmacy & Clinic Tie-ups",
  "Corporate Wellness Programmes",
];

export default function DirectSelling() {
  const s1 = useScrollReveal();
  const s2 = useScrollReveal();
  const s3 = useScrollReveal();
  const s4 = useScrollReveal();
  const s5 = useScrollReveal();

  return (
    <div className="ws-page">

      {/* ── HERO ── */}
      <section className="ws-hero">
        <div className="ws-hero-bg" />
        <div className="ws-hero-content">
          <span className="ws-pill">Direct Selling Programme</span>
          <h1>
            Build Your Business<br />
            <em>Connect. Sell. Thrive.</em>
          </h1>
          <p>
            Join Herbbodrug Pharmaceuticals as a Direct Seller and bring premium
            Ayurvedic &amp; herbal wellness directly to customers — no retail, no middlemen,
            just real connections and real earnings.
          </p>
          <div className="ws-hero-btns">
            <a href="/contact" className="ws-btn-primary">Become a Direct Seller <ArrowRight size={16} /></a>
            <a href="/products" className="ws-btn-ghost">Browse Products</a>
          </div>
        </div>

        {/* Stats bar */}
        <div className="ws-stats-bar">
          {stats.map((s, i) => (
            <div className="ws-stat" key={i}>
              <span className="ws-stat-num">{s.num}</span>
              <span className="ws-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section className="ws-benefits" ref={s1}>
        <div className="ws-container">
          <div className="ws-section-head reveal">
            <span className="ws-badge">Why Direct Selling</span>
            <h2>Ayurvedic Direct Selling Advantages</h2>
            <p>A unique way to build income, relationships, and wellness — all at once.</p>
          </div>
          <div className="ws-benefits-grid">
            {benefits.map((b, i) => (
              <div className="ws-benefit-card reveal" key={i} style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="ws-benefit-icon">{b.icon}</div>
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SELLING CHANNELS ── */}
      <section className="ws-categories" ref={s2}>
        <div className="ws-container">
          <div className="ws-cat-grid">
            <div className="ws-cat-text reveal">
              <span className="ws-badge">Where You Can Sell</span>
              <h2>Sell Anywhere,<br />Reach Everyone</h2>
              <p>
                Direct selling gives you the freedom to connect with customers wherever
                trust is built — at home, online, at work, or in your community. No fixed
                location, no fixed hours.
              </p>
              <a href="/contact" className="ws-btn-primary">Join the Network <ArrowRight size={16} /></a>
            </div>
            <div className="ws-cat-list reveal">
              {channels.map((c, i) => (
                <div className="ws-cat-item" key={i} style={{ transitionDelay: `${i * 0.06}s` }}>
                  <CheckCircle2 size={17} />
                  <span>{c}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="ws-process" ref={s3}>
        <div className="ws-container">
          <div className="ws-section-head reveal">
            <span className="ws-badge">How It Works</span>
            <h2>Start Selling in 4 Simple Steps</h2>
          </div>
          <div className="ws-process-track">
            {howItWorks.map((p, i) => (
              <div className="ws-process-step reveal" key={i} style={{ transitionDelay: `${i * 0.12}s` }}>
                <div className="ws-process-step-num">{p.step}</div>
                <div className="ws-process-step-body">
                  <h4>{p.title}</h4>
                  <p>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST SECTION ── */}
      <section className="ws-global" ref={s4}>
        <div className="ws-container">
          <div className="ws-global-inner reveal">
            <div className="ws-global-icon"><Handshake size={40} /></div>
            <h2>Wellness That Travels Through Trust</h2>
            <p>
              At <strong>Herbbodrug Pharmaceuticals</strong>, we believe direct selling is more
              than a business model — it is a movement. By empowering sellers across India
              to carry Ayurvedic wellness into every home, we are making traditional herbal
              care accessible to every community it touches.
            </p>
            <div className="ws-global-tags">
              {["GMP Certified Products", "Training & Support", "Marketing Materials Provided", "Pan-India Seller Network"].map((t, i) => (
                <span key={i}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="ws-cta" ref={s5}>
        <div className="ws-cta-box reveal">
          <h2>Ready to Start Your Direct Selling Journey?</h2>
          <p>Talk to our team today and begin earning with Herbbodrug's trusted Ayurvedic portfolio.</p>
          <a href="/contact" className="ws-btn-primary">Contact Us Today <ArrowRight size={16} /></a>
        </div>
      </section>

    </div>
  );
}