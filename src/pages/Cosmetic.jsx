import React, { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "./Cosmetic.css";
import { Sparkles, Leaf, ShieldCheck, Star, ArrowRight, Filter, Heart } from "lucide-react";

const categories = ["All", "Face Care", "Hair Care", "Body Care", "Skin Treatment", "Herbal Oils"];

const products = [
  { name: "Neem & Turmeric Face Wash", cat: "Face Care", desc: "Deep cleansing herbal face wash with anti-bacterial Neem and brightening Turmeric.", rating: 4.8, fav: true },
  { name: "Kumkumadi Radiance Cream", cat: "Face Care", desc: "Luxurious Ayurvedic night cream with Saffron & Sandalwood for glowing skin.", rating: 4.9, fav: false },
  { name: "Bhringraj Hair Oil", cat: "Hair Care", desc: "Traditional Bhringraj & Amla enriched oil for hair growth, strength and shine.", rating: 4.7, fav: true },
  { name: "Keratin Herb Shampoo", cat: "Hair Care", desc: "Protein-rich herbal shampoo with Brahmi, Shikakai & Hibiscus for lustrous hair.", rating: 4.6, fav: false },
  { name: "Ubtan Body Scrub", cat: "Body Care", desc: "Classic Ubtan blend with Besan, Haldi & Rose for natural skin brightening.", rating: 4.5, fav: false },
  { name: "Sandalwood Body Lotion", cat: "Body Care", desc: "Deeply nourishing lotion with Sandalwood & Aloe Vera for soft, radiant skin.", rating: 4.7, fav: true },
  { name: "Anti-Acne Gel", cat: "Skin Treatment", desc: "Potent Neem, Manjistha & Tulsi formulation for clear, blemish-free skin.", rating: 4.8, fav: false },
  { name: "Skin Brightening Serum", cat: "Skin Treatment", desc: "Liquorice & Vitamin C herbal serum for even skin tone and radiant complexion.", rating: 4.9, fav: true },
  { name: "Pure Jasmine Massage Oil", cat: "Herbal Oils", desc: "Cold-pressed Jasmine oil enriched with essential herbs for relaxation and skin nourishment.", rating: 4.6, fav: false },
];

export default function CosmeticProduct() {
  const [active, setActive] = useState("All");
  const [wishlist, setWishlist] = useState({});
  const s1 = useScrollReveal();
  const s2 = useScrollReveal();
  const s3 = useScrollReveal();

  const filtered = active === "All" ? products : products.filter(p => p.cat === active);

  return (
    <div className="cp-page">

      {/* ── HERO ── */}
      <section className="cp-hero">
        <div className="cp-hero-glow" />
        <div className="cp-hero-content">
          <span className="cp-pill"><Sparkles size={13} /> Cosmetic Products</span>
          <h1>Natural Beauty,<br /><em>Rooted in Ayurveda</em></h1>
          <p>Discover Herbbodrug's range of GMP-certified cosmetic and personal care products —
            crafted from the finest herbal ingredients for naturally beautiful results.</p>
          <a href="/contact" className="cp-btn-primary">Explore Range <ArrowRight size={16} /></a>
        </div>
        <div className="cp-hero-pills">
          {["100% Herbal Ingredients","No Harmful Chemicals","Dermatologically Tested","GMP Certified"].map((t,i)=>(
            <span key={i} className="cp-hero-tag">{t}</span>
          ))}
        </div>
      </section>

      {/* ── WHY NATURAL ── */}
      <section className="cp-why" ref={s1}>
        <div className="cp-container">
          <div className="cp-why-grid">
            {[
              { icon:<Leaf size={26}/>, title:"100% Herbal", desc:"Every ingredient is plant-sourced — no parabens, sulphates or harmful chemicals." },
              { icon:<ShieldCheck size={26}/>, title:"GMP & ISO Certified", desc:"Manufactured under international quality standards for safety and efficacy." },
              { icon:<Sparkles size={26}/>, title:"Proven Ayurvedic Formulas", desc:"Backed by 5000+ years of Ayurvedic wisdom and modern clinical research." },
              { icon:<Star size={26}/>, title:"Premium Quality", desc:"Sourced from trusted suppliers with rigorous QC at every production stage." },
            ].map((w,i)=>(
              <div className="cp-why-card reveal" key={i} style={{transitionDelay:`${i*.09}s`}}>
                <div className="cp-why-icon">{w.icon}</div>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCT GRID ── */}
      <section className="cp-products" ref={s2}>
        <div className="cp-container">
          <div className="cp-section-head reveal">
            <span className="cp-badge">Our Collection</span>
            <h2>Cosmetic &amp; Personal Care Range</h2>
            <p>Explore our complete range of nature-inspired beauty products.</p>
          </div>

          <div className="cp-filters reveal">
            <Filter size={15} />
            {categories.map(c => (
              <button key={c} className={`cp-filter-btn ${active===c?"active":""}`} onClick={()=>setActive(c)}>{c}</button>
            ))}
          </div>

          <div className="cp-grid">
            {filtered.map((p,i) => (
              <div className="cp-card reveal" key={i} style={{transitionDelay:`${i*.07}s`}}>
                <div className="cp-card-img">
                  <div className="cp-card-img-dummy" />
                  <button
                    className={`cp-wishlist-btn ${wishlist[i]?"active":""}`}
                    onClick={()=>setWishlist(w=>({...w,[i]:!w[i]}))}
                  >
                    <Heart size={15} fill={wishlist[i]?"#e53e3e":"none"} color={wishlist[i]?"#e53e3e":"#888"} />
                  </button>
                </div>
                <div className="cp-card-body">
                  <span className="cp-card-cat">{p.cat}</span>
                  <h3>{p.name}</h3>
                  <p>{p.desc}</p>
                  <div className="cp-card-footer">
                    <div className="cp-rating">
                      <Star size={13} fill="#c8860a" color="#c8860a" />
                      <span>{p.rating}</span>
                    </div>
                    <a href="/contact" className="cp-card-btn">Enquire <ArrowRight size={13} /></a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cp-cta" ref={s3}>
        <div className="cp-cta-inner reveal">
          <Sparkles size={36} color="#7dd894" />
          <h2>Want Cosmetics Under Your Own Brand?</h2>
          <p>We offer white labeling for our entire cosmetic range. Launch your beauty brand today.</p>
          <div style={{display:"flex",gap:"14px",justifyContent:"center",flexWrap:"wrap"}}>
            <a href="/contact" className="cp-btn-primary">Get White Label Quote <ArrowRight size={16} /></a>
            <a href="/white-labeling" className="cp-btn-ghost">Know More</a>
          </div>
        </div>
      </section>

    </div>
  );
}