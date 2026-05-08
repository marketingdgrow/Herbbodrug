import React, { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "./Pattern.css";
import { Tag, ShieldCheck, FlaskConical, Leaf, ArrowRight, Star, Filter } from "lucide-react";

const categories = ["All", "Immunity", "Digestive", "Cardiac Care", "Diabetes Care", "Skin & Beauty", "Women's Wellness"];

const products = [
  { name: "HerboImmune Plus", cat: "Immunity", desc: "Potent blend of Tulsi, Ashwagandha & Giloy for comprehensive immune defence.", rating: 4.8, tag: "Bestseller" },
  { name: "GastroHerb Syrup", cat: "Digestive", desc: "Soothing herbal formulation for acidity, bloating and digestive discomfort.", rating: 4.6, tag: "New" },
  { name: "CardioVeda Tablets", cat: "Cardiac Care", desc: "Arjuna & Brahmi based formulation supporting heart function and circulation.", rating: 4.9, tag: "Premium" },
  { name: "DiaboCare Capsules", cat: "Diabetes Care", desc: "Karela, Jamun & Neem extract combination for healthy blood sugar management.", rating: 4.7, tag: "Bestseller" },
  { name: "DermaHerb Cream", cat: "Skin & Beauty", desc: "Neem, Turmeric & Aloe Vera enriched cream for radiant, healthy skin.", rating: 4.5, tag: "" },
  { name: "FemCare Tablet", cat: "Women's Wellness", desc: "Shatavari & Ashoka blend supporting hormonal balance and menstrual health.", rating: 4.8, tag: "New" },
  { name: "RespiroHerb Syrup", cat: "Immunity", desc: "Vasaka & Pippali formulation for respiratory health and lung support.", rating: 4.6, tag: "" },
  { name: "LiverTonic Capsule", cat: "Digestive", desc: "Bhumi Amla & Kutki extract for liver detox and optimal liver function.", rating: 4.7, tag: "Premium" },
  { name: "JointEase Oil", cat: "Cardiac Care", desc: "Mahanarayan oil blend for joint pain relief and improved mobility.", rating: 4.5, tag: "" },
];

function StarRating({ rating }) {
  return (
    <div className="pp-rating">
      <Star size={13} fill="#c8860a" color="#c8860a" />
      <span>{rating}</span>
    </div>
  );
}

export default function PatternProduct() {
  const [active, setActive] = useState("All");
  const s1 = useScrollReveal();
  const s2 = useScrollReveal();
  const s3 = useScrollReveal();

  const filtered = active === "All" ? products : products.filter(p => p.cat === active);
  

  return (
   
    <div className="pp-page">

      {/* ── HERO ── */}
      <section className="pp-hero">
        <div className="pp-hero-content">
          <span className="pp-pill"><Tag size={13} /> Pattern Products</span>
          <h1>Herbal Pattern<br /><em>Formulations</em></h1>
          <p>Scientifically developed herbal pattern products — crafted using
            traditional Ayurvedic wisdom and modern pharmaceutical standards.</p>
          <a href="/contact" className="pp-btn-primary">Enquire Now <ArrowRight size={16} /></a>
        </div>
        <div className="pp-hero-badges">
          {[{l:"GMP",s:"Certified"},{l:"ISO",s:"9001:2015"},{l:"HALAL",s:"Certified"},{l:"500+",s:"Products"}].map((b,i)=>(
            <div className="pp-hero-badge" key={i}>
              <span className="pp-hero-badge-label">{b.l}</span>
              <span className="pp-hero-badge-sub">{b.s}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHAT IS PATTERN ── */}
      <section className="pp-about" ref={s1}>
        <div className="pp-container">
          <div className="pp-about-grid">
            <div className="pp-about-text reveal">
              <span className="pp-badge">About Pattern Products</span>
              <h2>What Are Pattern Products?</h2>
              <p>
                Pattern products are proprietary herbal formulations developed by
                Herbbodrug's expert R&amp;D team — combining time-tested Ayurvedic
                ingredients with modern clinical research for maximum therapeutic efficacy.
              </p>
              <p>
                Each pattern product targets specific health conditions and is
                formulated to deliver consistent, measurable results. Available
                as tablets, capsules, syrups, oils and creams.
              </p>
              <div className="pp-feature-row">
                {[{icon:<FlaskConical size={20}/>,t:"R&D Backed"},{icon:<ShieldCheck size={20}/>,t:"GMP Certified"},{icon:<Leaf size={20}/>,t:"100% Herbal"}].map((f,i)=>(
                  <div className="pp-feature-chip" key={i}>{f.icon}<span>{f.t}</span></div>
                ))}
              </div>
            </div>
            <div className="pp-about-visual reveal">
              <div className="pp-visual-dummy" />
              <div className="pp-visual-float">10+ Years of Formulation Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCT GRID ── */}
      <section className="pp-products" ref={s2}>
        <div className="pp-container">
          <div className="pp-section-head reveal">
            <span className="pp-badge">Our Range</span>
            <h2>Pattern Product Catalogue</h2>
            <p>Browse our range of scientifically formulated herbal pattern products.</p>
          </div>

          {/* Filter tabs */}
          <div className="pp-filters reveal">
            <Filter size={15} />
            {categories.map(c => (
              <button
                key={c}
                className={`pp-filter-btn ${active === c ? "active" : ""}`}
                onClick={() => setActive(c)}
              >{c}</button>
            ))}
          </div>

          <div className="pp-grid">
            {filtered.map((p, i) => (
              <div className="pp-card reveal" key={i} style={{ transitionDelay: `${i * 0.07}s` }}>
                <div className="pp-card-img">
                  <div className="pp-card-img-dummy" />
                  {p.tag && <span className={`pp-card-tag ${p.tag.toLowerCase()}`}>{p.tag}</span>}
                </div>
                <div className="pp-card-body">
                  <span className="pp-card-cat">{p.cat}</span>
                  <h3>{p.name}</h3>
                  <p>{p.desc}</p>
                  <div className="pp-card-footer">
                    <StarRating rating={p.rating} />
                    <a href="/contact" className="pp-card-btn">Enquire <ArrowRight size={13} /></a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="pp-cta" ref={s3}>
        <div className="pp-cta-inner reveal">
          <h2>Looking for a Specific Formulation?</h2>
          <p>Our R&D team can develop custom pattern products tailored to your brand's therapeutic focus.</p>
          <a href="/contact" className="pp-btn-primary">Talk to Our R&D Team <ArrowRight size={16} /></a>
        </div>
      </section>

    </div>
  
  );
}