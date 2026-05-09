import React, { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "./General.css";
import {
  Wheat, Heart, Brain, Droplets, Bone, Wind,
  ArrowRight, Filter, Star, ShieldCheck,
  ShoppingCart, X, Plus, Minus, Package, Check, Leaf, FlaskConical
} from "lucide-react";

const categories = [
  "All", "Pain & Orthopedic Care", "Digestive Care", "Diabetic Care",
  "Neurological Care", "Cardiac Care", "Skin Care", "Hair Care",
  "Women Care", "Liver Care", "Respiratory Care", "General Wellness"
];

const products = [
  { id: "GEN001", name: "Artho Relief Tablet", cat: "Pain & Orthopedic Care", image: "/imgs/HeroDrug 1-01.jpg", desc: "Helps reduce joint pain, stiffness and inflammation with powerful Ayurvedic herbs.", rating: 4.8, tag: "Bestseller", price: { mrp: 499, offer: 399 }, indications: "Relieves joint pain, lower back pain, swollen joints, inflamed joints, sprain, strain, over stretched muscles.", dosage: "1 tablet, 2-3 times a day after food or as directed by the physician.", form: "Tablet" },
  { id: "GEN002", name: "Vericose Vein Tablet", cat: "Digestive Care", image: "/imgs/HeroDrug 2-01.jpg", desc: "Helps improve blood circulation and reduce vein swelling naturally.", rating: 4.6, tag: "New", price: { mrp: 499, offer: 399 }, indications: "Varicose vein, dark purple or blue veins, muscle cramping, burning, throbbing and swelling in lower legs.", dosage: "1-2 tablets, 2-3 times a day after food or as directed by the physician.", form: "Tablet" },
  { id: "GEN003", name: "Gallstone Tablet", cat: "Digestive Care", image: "/imgs/HeroDrug 3-01.jpg", desc: "Supports gallbladder function and helps reduce gallstones effectively.", rating: 4.7, tag: "Premium", price: { mrp: 499, offer: 399 }, indications: "Gallbladder stone, gallstone pain, indigestion, nausea, vomiting, poor bowel movement.", dosage: "1 tablet, 2-3 times a day after food or as directed by the physician.", form: "Tablet" },
  { id: "GEN004", name: "Neuro Tablet", cat: "Neurological Care", image: "/imgs/HeroDrug 4-01.jpg", desc: "Supports brain and nerve function with classical Ayurvedic herbs.", rating: 4.8, tag: "Bestseller", price: { mrp: 499, offer: 399 }, indications: "Pain, sensitivity, numbness, tingling, burning problems, diabetic neuropathy, nerve rejuvenation.", dosage: "1 tablet, 2-3 times a day after food or as directed by the physician.", form: "Tablet" },
  { id: "GEN005", name: "Diabetes Tablet", cat: "Diabetic Care", image: "/imgs/HeroDrug 5-01.jpg", desc: "Helps manage blood sugar levels with proven herbal formulation.", rating: 4.9, tag: "Premium", price: { mrp: 499, offer: 399 }, indications: "Diabetes, frequent urination, excess thirst, blurry vision, wounds that won't heal.", dosage: "1 tablet, 2-3 times a day after food or as directed by the physician.", form: "Tablet" },
  { id: "GEN006", name: "Psoriasis Tablet", cat: "Skin Care", image: "/imgs/HeroDrug 6-01-01.jpg", desc: "Supports skin health and reduces psoriasis symptoms from within.", rating: 4.6, tag: "", price: { mrp: 499, offer: 399 }, indications: "Plaque psoriasis, scalp psoriasis, nail psoriasis, guttate psoriasis.", dosage: "1 tablet, 2-3 times a day after food or as directed by the physician.", form: "Tablet" },
  { id: "GEN007", name: "Cardiac Tablet", cat: "Cardiac Care", image: "/imgs/HeroDrug 8-01.jpg", desc: "Supports heart health and improves circulation with Arjuna & herbs.", rating: 4.7, tag: "New", price: { mrp: 499, offer: 399 }, indications: "Insomnia, palpitation, irregular heartbeat, hypertension, angina, cholesterol imbalance.", dosage: "1 tablet, 2-3 times a day after food or as directed by the physician.", form: "Tablet" },
  { id: "GEN008", name: "Stomach Tablet", cat: "Digestive Care", image: "/imgs/HeroDrug 9-01.jpg", desc: "Supports digestive health and relieves acidity, GERD and gastritis.", rating: 4.5, tag: "", price: { mrp: 499, offer: 399 }, indications: "GERD, duodenal and peptic ulcer, acidity reflux, indigestion and gastritis.", dosage: "1 tablet, 2-3 times a day after food or as directed by the physician.", form: "Tablet" },
  { id: "GEN009", name: "Liver Tablet", cat: "Liver Care", image: "/imgs/HeroDrug 15-01.jpg", desc: "Supports liver detoxification and optimal liver function.", rating: 4.8, tag: "Bestseller", price: { mrp: 499, offer: 399 }, indications: "Hepatitis, enlargement of liver, liver and spleen disorders, poor liver function.", dosage: "1 tablet, 2-3 times a day after food or as directed by the physician.", form: "Tablet" },
  { id: "GEN010", name: "Cough Syrup", cat: "Respiratory Care", image: "/imgs/HeroDrug 32-01.jpg", desc: "Relieves cough and respiratory issues with Vasaka & classical herbs.", rating: 4.6, tag: "", price: { mrp: 499, offer: 399 }, indications: "Asthma, sinusitis, bronchitis, wheezing, whooping cough, dust allergy, common cold.", dosage: "5-10 ml, 2-3 times per day after food or as directed by the physician.", form: "Syrup" },
  { id: "GEN011", name: "Hair Capsules", cat: "Hair Care", image: "/imgs/HeroDrug 48-01.jpg", desc: "Supports hair growth and scalp health with Bhringraj & Amla.", rating: 4.7, tag: "New", price: { mrp: 499, offer: 399 }, indications: "Hair loss, thinning, bald spots, dandruff, promotes healthy hair growth.", dosage: "1 capsule, 2-3 times a day after food or as directed by the physician.", form: "Capsules" },
  { id: "GEN012", name: "Gynec Tablet", cat: "Women Care", image: "/imgs/HeroDrug 13-01.jpg", desc: "Supports women reproductive health with Shatavari & Ashoka.", rating: 4.8, tag: "Premium", price: { mrp: 499, offer: 399 }, indications: "Ovarian cysts, fibroids, irregular periods, PCOS, pelvic inflammatory disease.", dosage: "1 tablet, 2-3 times a day after food or as directed by the physician.", form: "Tablet" },
  { id: "GEN013", name: "Detox Capsules", cat: "General Wellness", image: "/imgs/HeroDrug 50-01.jpg", desc: "Supports full body detoxification, metabolism and overall wellness.", rating: 4.5, tag: "", price: { mrp: 499, offer: 399 }, indications: "Full body detox, improves metabolism, reduces cholesterol and body fat.", dosage: "1 capsule, 2-3 times a day after food or as directed by the physician.", form: "Capsules" },
  { id: "GEN014", name: "Hemoglobin Syrup", cat: "General Wellness", image: "/imgs/HeroDrug 33-01.jpg", desc: "Improves hemoglobin levels and overall blood health naturally.", rating: 4.6, tag: "Bestseller", price: { mrp: 499, offer: 399 }, indications: "Anemia, iron deficiency, improves digestion, skin health, hair fall control.", dosage: "5-10 ml, 2-3 times per day after food or as directed by the physician.", form: "Syrup" },
  { id: "GEN015", name: "Artho Oil", cat: "Pain & Orthopedic Care", image: "/imgs/HeroDrug 62-01.jpg", desc: "Provides external relief from joint and muscle pain with herbal oils.", rating: 4.7, tag: "", price: { mrp: 499, offer: 399 }, indications: "Joint pain, lower back pain, swollen joints, neck strain, arthritis.", dosage: "5-10 ml, gently massage twice a day externally or as directed by the physician.", form: "Oil" },
  { id: "GEN016", name: "Kidney Syrup", cat: "General Wellness", image: "/imgs/HeroDrug 27-01.jpg", desc: "Supports kidney function and urinary health with Gokshura & Punarnava.", rating: 4.6, tag: "New", price: { mrp: 499, offer: 399 }, indications: "UTI, renal calculi, burning urination, benign prostate hyperplasia.", dosage: "5-10 ml, 2-3 times per day after food or as directed by the physician.", form: "Syrup" },
];

function StarRating({ rating }) {
  return (
    <div className="gp-rating">
      <Star size={13} fill="#c8860a" color="#c8860a" />
      <span>{rating}</span>
    </div>
  );
}

export default function GeneralProduct() {
  const [active, setActive] = useState("All");
  const [wishlist, setWishlist] = useState({});
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [addedId, setAddedId] = useState(null);

 const s1 = useScrollReveal();
const s2 = useScrollReveal();
const s3 = useScrollReveal();
const s4 = useScrollReveal(); 

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
    <div className="gp-page">

      {/* ── CART DRAWER ── */}
      {cartOpen && (
        <div className="gp-cart-overlay" onClick={() => setCartOpen(false)}>
          <div className="gp-cart-drawer" onClick={e => e.stopPropagation()}>
            <div className="gp-cart-header">
              <h3><ShoppingCart size={18} /> Your Cart ({cartCount})</h3>
              <button className="gp-cart-close" onClick={() => setCartOpen(false)}><X size={20} /></button>
            </div>
            <div className="gp-cart-items">
              {cart.length === 0 ? (
                <div className="gp-cart-empty">
                  <Package size={40} color="#6b7c6a" />
                  <p>Your cart is empty</p>
                </div>
              ) : cart.map(item => (
                <div className="gp-cart-item" key={item.id}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="gp-cart-item-img"
                    onError={e => { e.target.style.display = "none"; }}
                  />
                  <div className="gp-cart-item-info">
                    <span className="gp-cart-item-name">{item.name}</span>
                    <span className="gp-cart-item-form">{item.form}</span>
                    <span className="gp-cart-item-price">₹{item.price.offer}</span>
                  </div>
                  <div className="gp-cart-qty">
                    <button onClick={() => updateQty(item.id, -1)}><Minus size={13} /></button>
                    <span>{item.qty}</span>
                    <button onClick={() => updateQty(item.id, 1)}><Plus size={13} /></button>
                  </div>
                </div>
              ))}
            </div>
            {cart.length > 0 && (
              <div className="gp-cart-footer">
                <div className="gp-cart-total">
                  <span>Total</span>
                  <span>₹{cartTotal.toLocaleString()}</span>
                </div>
                <a href="/checkout" className="gp-btn-primary" style={{ justifyContent: "center" }}>
                  Proceed to Checkout <ArrowRight size={16} />
                </a>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ── PRODUCT DETAIL MODAL ── */}
      {selectedProduct && (
        <div className="gp-modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="gp-modal" onClick={e => e.stopPropagation()}>
            <button className="gp-modal-close" onClick={() => setSelectedProduct(null)}><X size={20} /></button>
            <div className="gp-modal-grid">
              <div className="gp-modal-img-wrap">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  onError={e => { e.target.style.display = "none"; }}
                />
                <div className="gp-modal-img-bg" />
              </div>
              <div className="gp-modal-info">
                <span className="gp-card-cat">{selectedProduct.cat} · {selectedProduct.form}</span>
                <h2>{selectedProduct.name}</h2>
                <p className="gp-modal-desc">{selectedProduct.desc}</p>
                <div className="gp-modal-price">
                  <span className="gp-price-offer">₹{selectedProduct.price.offer}</span>
                  <span className="gp-price-mrp">₹{selectedProduct.price.mrp}</span>
                  <span className="gp-price-save">
                    {Math.round((1 - selectedProduct.price.offer / selectedProduct.price.mrp) * 100)}% OFF
                  </span>
                </div>
                <div className="gp-modal-section">
                  <h4>Indications</h4>
                  <p>{selectedProduct.indications}</p>
                </div>
                <div className="gp-modal-section">
                  <h4>Dosage</h4>
                  <p>{selectedProduct.dosage}</p>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "6px" }}>
                  <button
                    className="gp-btn-primary gp-modal-cart-btn"
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
      <div className="gp-sticky-cart">
        <button className="gp-cart-fab" onClick={() => setCartOpen(true)}>
          <ShoppingCart size={20} />
          {cartCount > 0 && <span className="gp-cart-badge">{cartCount}</span>}
        </button>
      </div>

      {/* ── HERO ── */}
      <section className="gp-hero">
        <div className="gp-hero-glow" />
        <div className="gp-hero-content">
          <span className="gp-pill"><Wheat size={13} /> General Products</span>
          <h1>Complete Herbal Care<br /><em>For Every Condition</em></h1>
          <p>
            Herbbodrug's General Product range covers 80+ GMP-certified Ayurvedic
            formulations — tablets, capsules, syrups, oils and more for every
            health need.
          </p>
          <a href="/contact" className="gp-btn-primary">Explore Range <ArrowRight size={16} /></a>
        </div>
        <div className="gp-hero-pills">
          {["80+ Products", "GMP Certified", "Tablets · Syrups · Oils", "Pan-India Delivery"].map((t, i) => (
            <span key={i} className="gp-hero-tag">{t}</span>
          ))}
        </div>
      </section>

      {/* ── WHY ── */}
      <section className="gp-why" ref={s1}>
        <div className="gp-container">
          <div className="gp-why-grid">
            {[
              { icon: <Leaf size={26} />, title: "100% Herbal", desc: "Every ingredient is plant-sourced — no parabens, sulphates or harmful chemicals." },
              { icon: <ShieldCheck size={26} />, title: "GMP & ISO Certified", desc: "Manufactured under international quality standards for safety and efficacy." },
              { icon: <FlaskConical size={26} />, title: "Proven Formulas", desc: "Backed by 5000+ years of Ayurvedic wisdom and modern clinical research." },
              { icon: <Heart size={26} />, title: "For Every Condition", desc: "From joint pain to diabetes — our range covers 20+ health categories." },
            ].map((w, i) => (
              <div className="gp-why-card reveal" key={i} style={{ transitionDelay: `${i * 0.09}s` }}>
                <div className="gp-why-icon">{w.icon}</div>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="gp-about" ref={s2}>
        <div className="gp-container">
          <div className="gp-about-grid">
            <div className="gp-about-text reveal">
              <span className="gp-badge">About General Products</span>
              <h2>What Are General Products?</h2>
              <p>
                Herbbodrug's General Product line is our flagship range of Ayurvedic
                formulations — covering chronic disease care, daily wellness, pain
                management, skin care and more.
              </p>
              <p>
                Available in Tablets, Capsules, Syrups, Liquids, Oils, Lotions,
                Creams, Soaps and Shampoos — manufactured at our GMP-certified
                facility in Chennai with ISO 9001:2015 compliance.
              </p>
              <div className="gp-feature-row">
                {[
                  { icon: <FlaskConical size={20} />, t: "R&D Backed" },
                  { icon: <ShieldCheck size={20} />, t: "GMP Certified" },
                  { icon: <Leaf size={20} />, t: "100% Herbal" },
                ].map((f, i) => (
                  <div className="gp-feature-chip" key={i}>{f.icon}<span>{f.t}</span></div>
                ))}
              </div>
            </div>
            <div className="gp-about-visual reveal">
              <img
  src="/imgs/hero.png"
  alt="Herbbodrug Pattern Products"
  className="pp-about-img"
  onError={e => { e.target.style.display="none"; }}
/>
              <div className="gp-visual-float">80+ Herbal Formulations Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCT GRID ── */}
      <section className="gp-products" ref={s3}>
        <div className="gp-container">
          <div className="gp-section-head reveal">
            <span className="gp-badge">Our Range</span>
            <h2>General Product Catalogue</h2>
            <p>Browse our complete range of Ayurvedic general health products.</p>
          </div>

          {/* Filter tabs */}
          <div className="gp-filters reveal">
            <Filter size={15} />
            {categories.map(c => (
              <button
                key={c}
                className={`gp-filter-btn ${active === c ? "active" : ""}`}
                onClick={() => setActive(c)}
              >{c}</button>
            ))}
          </div>

          <div className="gp-grid">
            {filtered.map((p, i) => (
              <div
                className="gp-card reveal"
                key={p.id}
                style={{ transitionDelay: `${i * 0.07}s`, cursor: "pointer" }}
                onClick={() => setSelectedProduct(p)}
              >
                {/* Card Image */}
                <div className="gp-card-img">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="gp-card-real-img"
                    onError={e => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  <div className="gp-card-img-fallback">
                    <span>{p.form[0]}</span>
                  </div>
                  {p.tag && (
                    <span className={`gp-card-tag ${p.tag.toLowerCase()}`}>{p.tag}</span>
                  )}
                  <button
                    className={`gp-wish-btn ${wishlist[p.id] ? "active" : ""}`}
                    onClick={e => { e.stopPropagation(); setWishlist(w => ({ ...w, [p.id]: !w[p.id] })); }}
                  >
                    {wishlist[p.id] ? "❤️" : "🤍"}
                  </button>
                </div>

                <div className="gp-card-body">
                  <span className="gp-card-cat">{p.cat}</span>
                  <h3>{p.name}</h3>
                  <p>{p.desc}</p>
                  <div className="gp-card-footer">
                    <div className="gp-price-wrap">
                      <span className="gp-price-offer">₹{p.price.offer}</span>
                      <span className="gp-price-mrp">₹{p.price.mrp}</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <StarRating rating={p.rating} />
                      <button
                        className={`gp-cart-btn ${addedId === p.id ? "added" : ""}`}
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
      <section className="gp-cta" ref={s4}>
        <div className="gp-cta-inner reveal">
          <Wheat size={36} color="#7dd894" />
          <h2>Want General Products Under Your Brand?</h2>
          <p>We offer franchise and white labeling for our entire general product range. Start today.</p>
          <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/franchise" className="gp-btn-primary">Apply for Franchise <ArrowRight size={16} /></a>
            <a href="/contact" className="gp-btn-ghost">Contact Us</a>
          </div>
        </div>
      </section>

    </div>
  );
}