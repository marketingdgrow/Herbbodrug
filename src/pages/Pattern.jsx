import React, { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "./Pattern.css";
import {
  Tag, ShieldCheck, FlaskConical, Leaf, ArrowRight,
  Star, Filter, ShoppingCart, X, Plus, Minus, Package, Check
} from "lucide-react";

const categories = ["All", "Immunity", "Digestive", "Cardiac Care", "Diabetes Care", "Skin & Beauty", "Women's Wellness"];

const products = [
  { id: "PAT001", name: "HerboImmune Plus", cat: "Immunity", image: "/imgs/HeroDrug 1-01.jpg", desc: "Potent blend of Tulsi, Ashwagandha & Giloy for comprehensive immune defence.", rating: 4.8, tag: "Bestseller", price: { mrp: 499, offer: 399 }, indications: "Low immunity, frequent infections, fatigue, seasonal illness, respiratory weakness.", dosage: "1 tablet, 2-3 times a day after food or as directed by the physician.", form: "Tablet" },
  { id: "PAT002", name: "GastroHerb Syrup", cat: "Digestive", image: "/imgs/HeroDrug 2-01.jpg", desc: "Soothing herbal formulation for acidity, bloating and digestive discomfort.", rating: 4.6, tag: "New", price: { mrp: 499, offer: 399 }, indications: "Acidity, bloating, indigestion, gastritis, irritable bowel, poor appetite.", dosage: "5-10 ml, 2-3 times per day after food or as directed by the physician.", form: "Syrup" },
  { id: "PAT003", name: "CardioVeda Tablets", cat: "Cardiac Care", image: "/imgs/HeroDrug 3-01.jpg", desc: "Arjuna & Brahmi based formulation supporting heart function and circulation.", rating: 4.9, tag: "Premium", price: { mrp: 499, offer: 399 }, indications: "Palpitation, hypertension, poor circulation, chest discomfort, cholesterol imbalance.", dosage: "1 tablet, 2-3 times a day after food or as directed by the physician.", form: "Tablet" },
  { id: "PAT004", name: "DiaboCare Capsules", cat: "Diabetes Care", image: "/imgs/HeroDrug 4-01.jpg", desc: "Karela, Jamun & Neem extract combination for healthy blood sugar management.", rating: 4.7, tag: "Bestseller", price: { mrp: 499, offer: 399 }, indications: "Diabetes, frequent urination, excess thirst, blurry vision, slow wound healing.", dosage: "1 capsule, 2-3 times a day after food or as directed by the physician.", form: "Capsules" },
  { id: "PAT005", name: "DermaHerb Cream", cat: "Skin & Beauty", image: "/imgs/HeroDrug 5-01.jpg", desc: "Neem, Turmeric & Aloe Vera enriched cream for radiant, healthy skin.", rating: 4.5, tag: "", price: { mrp: 499, offer: 399 }, indications: "Acne, pimples, dark spots, skin irritation, uneven tone, dryness.", dosage: "Apply gently on affected area twice a day or as directed by the physician.", form: "Cream" },
  { id: "PAT006", name: "FemCare Tablet", cat: "Women's Wellness", image: "/imgs/HeroDrug 6-01-01.jpg", desc: "Shatavari & Ashoka blend supporting hormonal balance and menstrual health.", rating: 4.8, tag: "New", price: { mrp: 499, offer: 399 }, indications: "Irregular periods, PCOS, hormonal imbalance, menstrual cramps, mood swings.", dosage: "1 tablet, 2-3 times a day after food or as directed by the physician.", form: "Tablet" },
  { id: "PAT007", name: "RespiroHerb Syrup", cat: "Immunity", image: "/imgs/HeroDrug 7-01.jpg", desc: "Vasaka & Pippali formulation for respiratory health and lung support.", rating: 4.6, tag: "", price: { mrp: 499, offer: 399 }, indications: "Asthma, bronchitis, wheezing, cough, dust allergy, sinusitis, whooping cough.", dosage: "5-10 ml, 2-3 times per day after food or as directed by the physician.", form: "Syrup" },
  { id: "PAT008", name: "LiverTonic Capsule", cat: "Digestive", image: "/imgs/HeroDrug 8-01.jpg", desc: "Bhumi Amla & Kutki extract for liver detox and optimal liver function.", rating: 4.7, tag: "Premium", price: { mrp: 499, offer: 399 }, indications: "Hepatitis, fatty liver, liver enlargement, jaundice, poor liver function.", dosage: "1 capsule, 2-3 times a day after food or as directed by the physician.", form: "Capsules" },
  { id: "PAT009", name: "JointEase Oil", cat: "Cardiac Care", image: "/imgs/HeroDrug 9-01.jpg", desc: "Mahanarayan oil blend for joint pain relief and improved mobility.", rating: 4.5, tag: "", price: { mrp: 499, offer: 399 }, indications: "Joint pain, muscle stiffness, arthritis, lower back pain, sprain, inflammation.", dosage: "5-10 ml, gently massage twice a day externally or as directed by the physician.", form: "Oil" },
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
  const [wishlist, setWishlist] = useState({});
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [addedId, setAddedId] = useState(null);

  const s1 = useScrollReveal();
  const s2 = useScrollReveal();
  const s3 = useScrollReveal();

  const filtered = active === "All" ? products : products.filter(p => p.cat === active);

  const addToCart = (product, e) => {
    if (e) e.stopPropagation();
    setCart(prev => {
      const exists = prev.find(i => i.id === product.id);
      if (exists) return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...product, qty: 1 }];
    });
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1500);
  };

  const updateQty = (id, delta) => {
    setCart(prev =>
      prev.map(i => i.id === id ? { ...i, qty: i.qty + delta } : i).filter(i => i.qty > 0)
    );
  };

  const cartTotal = cart.reduce((sum, i) => sum + i.price.offer * i.qty, 0);
  const cartCount = cart.reduce((sum, i) => sum + i.qty, 0);

  return (
    <div className="pp-page">

      {/* ── CART DRAWER ── */}
      {cartOpen && (
        <div className="cp-cart-overlay" onClick={() => setCartOpen(false)}>
          <div className="cp-cart-drawer" onClick={e => e.stopPropagation()}>
            <div className="cp-cart-header">
              <h3><ShoppingCart size={18} /> Your Cart ({cartCount})</h3>
              <button className="cp-cart-close" onClick={() => setCartOpen(false)}><X size={20} /></button>
            </div>
            <div className="cp-cart-items">
              {cart.length === 0 ? (
                <div className="cp-cart-empty">
                   <span size={40}>📦</span>
                  <p>Your cart is empty</p>
                </div>
              ) : cart.map(item => (
                <div className="cp-cart-item" key={item.id}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cp-cart-item-img"
                    onError={e => { e.target.style.display = "none"; }}
                  />
                  <div className="cp-cart-item-info">
                    <span className="cp-cart-item-name">{item.name}</span>
                    <span className="cp-cart-item-form">{item.form}</span>
                    <span className="cp-cart-item-price">₹{item.price.offer}</span>
                  </div>
                  <div className="cp-cart-qty">
                    <button onClick={() => updateQty(item.id, -1)}><Minus size={13} /></button>
                    <span>{item.qty}</span>
                    <button onClick={() => updateQty(item.id, 1)}><Plus size={13} /></button>
                  </div>
                </div>
              ))}
            </div>
            {cart.length > 0 && (
              <div className="cp-cart-footer">
                <div className="cp-cart-total">
                  <span>Total</span>
                  <span>₹{cartTotal.toLocaleString()}</span>
                </div>
                <a href="/checkout" className="pp-btn-primary" style={{ justifyContent: "center" }}>
                  Proceed to Checkout <ArrowRight size={16} />
                </a>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ── PRODUCT DETAIL MODAL ── */}
      {selectedProduct && (
        <div className="cp-modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="cp-modal" onClick={e => e.stopPropagation()}>
            <button className="cp-modal-close" onClick={() => setSelectedProduct(null)}><X size={20} /></button>
            <div className="cp-modal-grid">
              <div className="cp-modal-img-wrap">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  onError={e => { e.target.style.display = "none"; }}
                />
                <div className="cp-modal-img-bg" />
              </div>
              <div className="cp-modal-info">
                <span className="cp-card-cat">{selectedProduct.cat} · {selectedProduct.form}</span>
                <h2>{selectedProduct.name}</h2>
                <p className="cp-modal-desc">{selectedProduct.desc}</p>
                <div className="cp-modal-price">
                  <span className="cp-price-offer">₹{selectedProduct.price.offer}</span>
                  <span className="cp-price-mrp">₹{selectedProduct.price.mrp}</span>
                  <span className="cp-price-save">
                    {Math.round((1 - selectedProduct.price.offer / selectedProduct.price.mrp) * 100)}% OFF
                  </span>
                </div>
                <div className="cp-modal-section">
                  <h4>Indications</h4>
                  <p>{selectedProduct.indications}</p>
                </div>
                <div className="cp-modal-section">
                  <h4>Dosage</h4>
                  <p>{selectedProduct.dosage}</p>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "6px" }}>
                  <button
                    className="cp-btn-primary cp-modal-cart-btn"
                    onClick={() => { addToCart(selectedProduct); setSelectedProduct(null); setCartOpen(true); }}
                  >
                    <ShoppingCart size={16} /> Add to Cart
                  </button>
                  <StarRating rating={selectedProduct.rating} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── STICKY CART FAB ── */}
      <div className="cp-sticky-cart">
        <button className="cp-cart-fab" onClick={() => setCartOpen(true)}>
          <ShoppingCart size={20} />
          {cartCount > 0 && <span className="cp-cart-badge">{cartCount}</span>}
        </button>
      </div>

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
          {[{ l: "GMP", s: "Certified" }, { l: "ISO", s: "9001:2015" }, { l: "HALAL", s: "Certified" }, { l: "500+", s: "Products" }].map((b, i) => (
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
                {[
                  { icon: <FlaskConical size={20} />, t: "R&D Backed" },
                  { icon: <ShieldCheck size={20} />, t: "GMP Certified" },
                  { icon: <Leaf size={20} />, t: "100% Herbal" }
                ].map((f, i) => (
                  <div className="pp-feature-chip" key={i}>{f.icon}<span>{f.t}</span></div>
                ))}
              </div>
            </div>
            <div className="pp-about-visual reveal">
              <img
                src="/imgs/hero.png"
                alt="Herbbodrug Pattern Products"
                className="pp-about-img"
                onError={e => { e.target.style.display = "none"; }}
              />
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
              <div
                className="pp-card reveal"
                key={p.id}
                style={{ transitionDelay: `${i * 0.07}s`, cursor: "pointer" }}
                onClick={() => setSelectedProduct(p)}
              >
                {/* ── CARD IMAGE (real img) ── */}
                <div className="pp-card-img">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="pp-card-real-img"
                    onError={e => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  {/* fallback */}
                  <div className="pp-card-img-fallback">
                    <span>{p.form[0]}</span>
                  </div>
                  {p.tag && (
                    <span className={`pp-card-tag ${p.tag.toLowerCase()}`}>{p.tag}</span>
                  )}
                  {/* wishlist */}
                  <button
                    className={`pp-wish-btn ${wishlist[p.id] ? "active" : ""}`}
                    onClick={e => { e.stopPropagation(); setWishlist(w => ({ ...w, [p.id]: !w[p.id] })); }}
                  >
                    {wishlist[p.id] ? "❤️" : "🤍"}
                  </button>
                </div>

                <div className="pp-card-body">
                  <span className="pp-card-cat">{p.cat}</span>
                  <h3>{p.name}</h3>
                  <p>{p.desc}</p>
                  <div className="pp-card-footer">
                    <div className="pp-price-wrap">
                      <span className="pp-price-offer">₹{p.price.offer}</span>
                      <span className="pp-price-mrp">₹{p.price.mrp}</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <StarRating rating={p.rating} />
                      <button
                        className={`pp-cart-btn ${addedId === p.id ? "added" : ""}`}
                        onClick={e => addToCart(p, e)}
                      >
                        {addedId === p.id
                          ? <><Check size={13} /> Added</>
                          : <><ShoppingCart size={13} /> Add</>
                        }
                      </button>
                    </div>
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