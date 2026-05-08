import React, { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "./General.css";
import { Wheat, Heart, Brain, Droplets, Bone, Wind, ArrowRight, Filter, Star, ShieldCheck } from "lucide-react";

const categories = ["All", "Tablets", "Capsules", "Liquid Orals", "Ointments", "Nutritional"];

const catIcons = {
  "Immunity & Wellness":    <ShieldCheck size={22} />,
  "Heart Care":             <Heart size={22} />,
  "Brain & Neuro":          <Brain size={22} />,
  "Diabetes Care":          <Droplets size={22} />,
  "Bone & Joint":           <Bone size={22} />,
  "Respiratory":            <Wind size={22} />,
};

const theraRange = [
  { name: "Immunity & Wellness", count: "45+ Products", color: "#e8f5eb" },
  { name: "Heart Care",          count: "30+ Products", color: "#fce8e8" },
  { name: "Brain & Neuro",       count: "25+ Products", color: "#e8eeff" },
  { name: "Diabetes Care",       count: "35+ Products", color: "#fff8e8" },
  { name: "Bone & Joint",        count: "20+ Products", color: "#f5ebe8" },
  { name: "Respiratory",         count: "28+ Products", color: "#e8f8f5" },
];

const products = [
  { name: "AshwaStrength Capsule", form: "Capsules",     desc: "Ashwagandha & Shilajit for strength, stamina and vitality.", rating: 4.8 },
  { name: "Triphala Tablet",       form: "Tablets",      desc: "Classic Ayurvedic digestive tonic for gut health and detox.", rating: 4.7 },
  { name: "Chyawanprash Plus",     form: "Nutritional",  desc: "Immunity-boosting Chyawanprash with 40+ herbal ingredients.", rating: 4.9 },
  { name: "Dashamoola Syrup",      form: "Liquid Orals", desc: "Traditional decoction for pain relief, inflammation & fatigue.", rating: 4.6 },
  { name: "Mahanarayan Oil",       form: "Ointments",    desc: "Classic oil for joint & muscle pain with deep tissue penetration.", rating: 4.8 },
  { name: "DiaboCare Capsule",     form: "Capsules",     desc: "Karela, Jamun & Neem for healthy blood sugar balance.", rating: 4.7 },
  { name: "CardioVeda Tablet",     form: "Tablets",      desc: "Arjuna & Brahmi for cardiac health and improved circulation.", rating: 4.9 },
  { name: "Brahmi Memory Syrup",   form: "Liquid Orals", desc: "Brahmi & Shankhpushpi for memory, focus and mental clarity.", rating: 4.6 },
  { name: "Liver Guard Tablet",    form: "Tablets",      desc: "Kutki & Bhumi Amla for comprehensive liver protection.", rating: 4.7 },
];

export default function GeneralProduct() {
  const [active, setActive] = useState("All");
  const s1 = useScrollReveal();
  const s2 = useScrollReveal();
  const s3 = useScrollReveal();
  const s4 = useScrollReveal();

  const filtered = active === "All" ? products : products.filter(p => p.form === active);

  return (
    <div className="gp-page">

      {/* ── HERO ── */}
      <section className="gp-hero">
        <div className="gp-hero-content">
          <span className="gp-pill"><Wheat size={13} /> General Products</span>
          <h1>Everyday Wellness,<br /><em>Naturally Delivered</em></h1>
          <p>A comprehensive range of Ayurvedic & herbal wellness products —
            tablets, capsules, syrups, ointments and nutritional supplements for everyday health.</p>
          <a href="/contact" className="gp-btn-primary">View Full Catalogue <ArrowRight size={16} /></a>
        </div>
        <div className="gp-hero-nums">
          {[{n:"500+",l:"Products"},{n:"15+",l:"Therapy Areas"},{n:"GMP",l:"Certified"},{n:"ISO",l:"9001:2015"}].map((s,i)=>(
            <div className="gp-hero-num" key={i}>
              <span className="gp-num">{s.n}</span>
              <span className="gp-num-label">{s.l}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── THERAPEUTIC RANGE ── */}
      <section className="gp-thera" ref={s1}>
        <div className="gp-container">
          <div className="gp-section-head reveal">
            <span className="gp-badge">Therapeutic Categories</span>
            <h2>Complete Wellness Across Every Category</h2>
            <p>Our general product range covers 15+ therapeutic areas for comprehensive healthcare.</p>
          </div>
          <div className="gp-thera-grid">
            {theraRange.map((t,i)=>(
              <div className="gp-thera-card reveal" key={i} style={{background:t.color,transitionDelay:`${i*.08}s`}}>
                <div className="gp-thera-icon">{catIcons[t.name]}</div>
                <h3>{t.name}</h3>
                <span>{t.count}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCT GRID ── */}
      <section className="gp-products" ref={s2}>
        <div className="gp-container">
          <div className="gp-section-head reveal">
            <span className="gp-badge">Our Products</span>
            <h2>General Product Range</h2>
          </div>

          <div className="gp-filters reveal">
            <Filter size={15} />
            {categories.map(c=>(
              <button key={c} className={`gp-filter-btn ${active===c?"active":""}`} onClick={()=>setActive(c)}>{c}</button>
            ))}
          </div>

          <div className="gp-grid">
            {filtered.map((p,i)=>(
              <div className="gp-card reveal" key={i} style={{transitionDelay:`${i*.07}s`}}>
                <div className="gp-card-img"><div className="gp-card-img-dummy"/></div>
                <div className="gp-card-body">
                  <span className="gp-card-form">{p.form}</span>
                  <h3>{p.name}</h3>
                  <p>{p.desc}</p>
                  <div className="gp-card-footer">
                    <div className="gp-rating"><Star size={13} fill="#c8860a" color="#c8860a"/><span>{p.rating}</span></div>
                    <a href="/contact" className="gp-card-btn">Enquire <ArrowRight size={13}/></a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUALITY PROMISE ── */}
      <section className="gp-quality" ref={s3}>
        <div className="gp-container">
          <div className="gp-quality-inner">
            <div className="gp-quality-text reveal">
              <span className="gp-badge">Quality Assurance</span>
              <h2>Every Product Carries Our Promise of Quality</h2>
              <p>
                All Herbbodrug general products are manufactured in our GMP-certified,
                ISO 9001:2015 approved facility with rigorous QA/QC at every stage —
                from raw material sourcing to final packaging.
              </p>
              <div className="gp-quality-tags">
                {["GMP Certified","ISO 9001:2015","HALAL Certified","PIC/S Compliant","Clinical Testing"].map((t,i)=>(
                  <span key={i}>{t}</span>
                ))}
              </div>
            </div>
            <div className="gp-quality-visual reveal">
              <div className="gp-quality-dummy" />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="gp-cta" ref={s4}>
        <div className="gp-cta-inner reveal">
          <h2>Need Our General Products for Your Business?</h2>
          <p>We supply to pharmacies, clinics, wellness stores and distributors across India and globally.</p>
          <div style={{display:"flex",gap:"14px",justifyContent:"center",flexWrap:"wrap"}}>
            <a href="/contact" className="gp-btn-primary">Contact Us <ArrowRight size={16}/></a>
            <a href="/wholesale" className="gp-btn-ghost-dark">Wholesale Enquiry</a>
          </div>
        </div>
      </section>

    </div>
  );
}