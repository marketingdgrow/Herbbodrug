import React, { useState, useEffect } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "./Ayurveda.css";
import {
  Leaf, ShieldCheck, FlaskConical, Star, ArrowRight,
  ShoppingCart, X, Plus, Minus, Package, Check, Filter
} from "lucide-react";

const types = ["All", "Kashayam", "Chooranam", "Lehyam", "Gulika", "Ghritham", "Asuvam"];

const products = [
  // KASHAYAM
  { id: "AYU001", name: "Dasamoola Kashayam", type: "Kashayam", image: "/imgs/HeroDrug 1-01.jpg", desc: "Classical Ayurvedic decoction of ten roots for respiratory health, joint pain and fever.", rating: 4.8, tag: "Bestseller", price: { mrp: 499, offer: 399 }, indications: "Cough, asthma, fever, joint pain, lower back pain, general weakness.", dosage: "15-20 ml mixed with equal quantity of warm water, twice a day before food." },
  { id: "AYU002", name: "Amrithotharam Kashayam", type: "Kashayam", image: "/imgs/HeroDrug 2-01.jpg", desc: "Potent herbal decoction for fever, skin diseases and digestive disorders.", rating: 4.7, tag: "", price: { mrp: 499, offer: 399 }, indications: "Chronic fever, skin diseases, gout, digestive problems, rheumatism.", dosage: "15-20 ml mixed with equal quantity of warm water, twice a day before food." },
  { id: "AYU003", name: "Punarnavadi Kashayam", type: "Kashayam", image: "/imgs/HeroDrug 3-01.jpg", desc: "Classical Kashayam for kidney disorders, oedema and urinary conditions.", rating: 4.6, tag: "New", price: { mrp: 499, offer: 399 }, indications: "Oedema, kidney disorders, urinary infections, anaemia, jaundice.", dosage: "15-20 ml mixed with equal quantity of warm water, twice a day before food." },
  { id: "AYU004", name: "Thikthakam Kashayam", type: "Kashayam", image: "/imgs/HeroDrug 4-01.jpg", desc: "Bitter herbal decoction for skin diseases, diabetes and liver disorders.", rating: 4.5, tag: "", price: { mrp: 499, offer: 399 }, indications: "Skin diseases, diabetes, liver disorders, eczema, psoriasis.", dosage: "15-20 ml mixed with equal quantity of warm water, twice a day before food." },

  // CHOORANAM
  { id: "AYU005", name: "Triphala Chooranam", type: "Chooranam", image: "/imgs/HeroDrug 5-01.jpg", desc: "The classic three-fruit powder — the cornerstone of Ayurvedic wellness.", rating: 4.9, tag: "Bestseller", price: { mrp: 499, offer: 399 }, indications: "Constipation, digestive disorders, eye health, immunity, detoxification.", dosage: "5-10 g with warm water or honey at bedtime or as directed by physician." },
  { id: "AYU006", name: "Ashwagandha Chooranam", type: "Chooranam", image: "/imgs/HeroDrug 6-01-01.jpg", desc: "Premium Ashwagandha root powder for strength, vitality and stress relief.", rating: 4.8, tag: "Premium", price: { mrp: 499, offer: 399 }, indications: "Stress, weakness, low energy, low immunity, male infertility, insomnia.", dosage: "5-10 g with warm milk and honey, twice a day after food." },
  { id: "AYU007", name: "Shatavari Chooranam", type: "Chooranam", image: "/imgs/HeroDrug 7-01.jpg", desc: "Ayurvedic women's health powder from Asparagus racemosus root.", rating: 4.7, tag: "New", price: { mrp: 499, offer: 399 }, indications: "Women's health, hormonal balance, PCOS, menstrual disorders, lactation support.", dosage: "5-10 g with warm milk or water, twice a day after food." },
  { id: "AYU008", name: "Trikatu Chooranam", type: "Chooranam", image: "/imgs/HeroDrug 8-01.jpg", desc: "Three-pepper combination for digestive fire, metabolism and respiratory health.", rating: 4.6, tag: "", price: { mrp: 499, offer: 399 }, indications: "Indigestion, low appetite, obesity, cough, cold, respiratory issues.", dosage: "3-5 g with honey or warm water, twice a day before food." },

  // LEHYAM
  { id: "AYU009", name: "Chyavanaprasham", type: "Lehyam", image: "/imgs/HeroDrug 9-01.jpg", desc: "The legendary Ayurvedic rasayana for immunity, energy and longevity.", rating: 4.9, tag: "Bestseller", price: { mrp: 499, offer: 399 }, indications: "Low immunity, weakness, respiratory problems, premature ageing, low energy.", dosage: "1-2 teaspoons with warm milk or water, twice a day." },
  { id: "AYU010", name: "Dasamoola Rasayana", type: "Lehyam", image: "/imgs/HeroDrug 10-01.jpg", desc: "Rejuvenating herbal jam based on ten roots for overall vitality.", rating: 4.7, tag: "", price: { mrp: 499, offer: 399 }, indications: "General debility, respiratory conditions, neurological issues, post-illness recovery.", dosage: "1-2 teaspoons with warm milk or water, twice a day." },
  { id: "AYU011", name: "Agasthya Rasayana", type: "Lehyam", image: "/imgs/HeroDrug 11-01.jpg", desc: "Classical Agasthya Rasayana Lehyam for respiratory and digestive health.", rating: 4.6, tag: "New", price: { mrp: 499, offer: 399 }, indications: "Chronic cough, asthma, bronchitis, constipation, abdominal disorders.", dosage: "1-2 teaspoons with warm milk or water, twice a day." },

  // GULIKA
  { id: "AYU012", name: "Agnikumara Gulika", type: "Gulika", image: "/imgs/HeroDrug 12-01.jpg", desc: "Classical Ayurvedic tablet for fever, digestive disorders and infections.", rating: 4.7, tag: "Premium", price: { mrp: 499, offer: 399 }, indications: "Fever, indigestion, anorexia, vomiting, abdominal pain, infections.", dosage: "1-2 tablets with warm water, 2-3 times a day or as directed." },
  { id: "AYU013", name: "Chandraprabha Gulika", type: "Gulika", image: "/imgs/HeroDrug 13-01.jpg", desc: "Classical formulation for urinary disorders, diabetes and general wellness.", rating: 4.8, tag: "Bestseller", price: { mrp: 499, offer: 399 }, indications: "Urinary disorders, diabetes, kidney stones, obesity, weakness.", dosage: "2 tablets with warm water, twice a day after food." },
  { id: "AYU014", name: "Kanchanar Gulika", type: "Gulika", image: "/imgs/HeroDrug 14-01.jpg", desc: "Ayurvedic tablet for thyroid disorders, lymph node swelling and skin conditions.", rating: 4.6, tag: "", price: { mrp: 499, offer: 399 }, indications: "Thyroid disorders, goiter, lymph node swelling, skin diseases, cysts.", dosage: "2 tablets with warm water, twice a day before food." },
  { id: "AYU015", name: "Triphala Gulika", type: "Gulika", image: "/imgs/HeroDrug 15-01.jpg", desc: "Triphala-based tablet for digestion, detoxification and eye health.", rating: 4.7, tag: "New", price: { mrp: 499, offer: 399 }, indications: "Constipation, eye disorders, skin problems, digestive weakness, detox.", dosage: "2 tablets with warm water at bedtime." },

  // GHRITHAM
  { id: "AYU016", name: "Brahmi Ghritham", type: "Ghritham", image: "/imgs/HeroDrug 16-01.jpg", desc: "Medicated ghee with Brahmi for brain health, memory and neurological conditions.", rating: 4.8, tag: "Premium", price: { mrp: 499, offer: 399 }, indications: "Memory loss, epilepsy, mental disorders, anxiety, poor concentration.", dosage: "5-10 ml with warm milk, once or twice a day before food." },
  { id: "AYU017", name: "Kalyanaka Ghritham", type: "Ghritham", image: "/imgs/HeroDrug 17-01.jpg", desc: "Classical medicated ghee for mental health, skin diseases and general rejuvenation.", rating: 4.7, tag: "Bestseller", price: { mrp: 499, offer: 399 }, indications: "Mental disorders, skin diseases, epilepsy, general debility, anaemia.", dosage: "5-10 ml with warm milk or water, twice a day before food." },
  { id: "AYU018", name: "Shatavari Ghritham", type: "Ghritham", image: "/imgs/HeroDrug 18-01.jpg", desc: "Shatavari medicated ghee for women's health, lactation and reproductive wellness.", rating: 4.6, tag: "New", price: { mrp: 499, offer: 399 }, indications: "Women's reproductive health, lactation, menstrual disorders, infertility.", dosage: "5-10 ml with warm milk, once or twice a day before food." },

  // ASUVAM
  { id: "AYU019", name: "Ashokarishta", type: "Asuvam", image: "/imgs/HeroDrug 19-01.jpg", desc: "Classical fermented Ayurvedic liquid for women's reproductive and uterine health.", rating: 4.8, tag: "Bestseller", price: { mrp: 499, offer: 399 }, indications: "Menorrhagia, dysmenorrhea, leucorrhoea, uterine disorders, anaemia.", dosage: "15-20 ml with equal water, twice a day after food." },
  { id: "AYU020", name: "Abhayarishta", type: "Asuvam", image: "/imgs/HeroDrug 20-01.jpg", desc: "Fermented herbal liquid for digestive health, piles and constipation.", rating: 4.7, tag: "", price: { mrp: 499, offer: 399 }, indications: "Constipation, piles, digestive disorders, abdominal pain, worm infestation.", dosage: "15-20 ml with equal water, twice a day after food." },
  { id: "AYU021", name: "Dashamularishta", type: "Asuvam", image: "/imgs/HeroDrug 21-01.jpg", desc: "Classical fermented liquid of ten roots for postpartum care and general debility.", rating: 4.6, tag: "New", price: { mrp: 499, offer: 399 }, indications: "Postpartum weakness, anaemia, vata disorders, respiratory problems, low immunity.", dosage: "15-20 ml with equal water, twice a day after food." },
  { id: "AYU022", name: "Saraswatarishta", type: "Asuvam", image: "/imgs/HeroDrug 22-01.jpg", desc: "Brahmi-based fermented Ayurvedic liquid for brain health and nervous disorders.", rating: 4.7, tag: "Premium", price: { mrp: 499, offer: 399 }, indications: "Memory weakness, epilepsy, speech disorders, anxiety, neurological conditions.", dosage: "15-20 ml with equal water, twice a day after food." },
];

function StarRating({ rating }) {
  return (
    <div className="ay-rating">
      <Star size={13} fill="#c8860a" color="#c8860a" />
      <span>{rating}</span>
    </div>
  );
}

export default function Ayurveda() {
  const [activeType, setActiveType] = useState("All");
  const [wishlist, setWishlist] = useState({});
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [addedId, setAddedId] = useState(null);

  const s1 = useScrollReveal();
  const s2 = useScrollReveal();
  const s3 = useScrollReveal();
  const s4 = useScrollReveal();

  const filtered = activeType === "All"
    ? products
    : products.filter(p => p.type === activeType);
  useEffect(() => {
    const timer = setTimeout(() => {
      const els = document.querySelectorAll("#ay-products .reveal");
      els.forEach(el => el.classList.add("revealed"));
    }, 50);
    return () => clearTimeout(timer);
  }, [activeType]);

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

  const cartTotal = cart.reduce((s, i) => s + i.price.offer * i.qty, 0);
  const cartCount = cart.reduce((s, i) => s + i.qty, 0);

  const typeInfo = {
    Kashayam: { desc: "Herbal decoctions prepared by boiling herbs in water. Highly bioavailable and fast-acting.", emoji: "🫙" },
    Chooranam: { desc: "Fine herbal powders from dried herbs and minerals. Taken with honey, ghee or warm water.", emoji: "🌿" },
    Lehyam: { desc: "Semi-solid herbal preparations with jaggery or honey base. Rasayanas for rejuvenation.", emoji: "🍯" },
    Gulika: { desc: "Classical Ayurvedic tablets made from herbs and minerals. Precise dosage for specific conditions.", emoji: "💊" },
    Ghritham: { desc: "Medicated ghee preparations. The ghee base carries herbal actives deep into tissues.", emoji: "✨" },
    Asuvam: { desc: "Fermented herbal liquids (Arishta & Asava). Self-generated alcohol aids bioavailability.", emoji: "🍵" },
  };

  return (
    <div className="ay-page">

      {/* ── CART DRAWER ── */}
      {cartOpen && (
        <div className="ay-cart-overlay" onClick={() => setCartOpen(false)}>
          <div className="ay-cart-drawer" onClick={e => e.stopPropagation()}>
            <div className="ay-cart-header">
              <h3><ShoppingCart size={18} /> Your Cart ({cartCount})</h3>
              <button className="ay-cart-close" onClick={() => setCartOpen(false)}><X size={20} /></button>
            </div>
            <div className="ay-cart-items">
              {cart.length === 0 ? (
                <div className="ay-cart-empty">
                  <Package size={40} color="#6b7c6a" />
                  <p>Your cart is empty</p>
                </div>
              ) : cart.map(item => (
                <div className="ay-cart-item" key={item.id}>
                  <img src={item.image} alt={item.name} className="ay-cart-item-img"
                    onError={e => { e.target.style.display = "none"; }} />
                  <div className="ay-cart-item-info">
                    <span className="ay-cart-item-name">{item.name}</span>
                    <span className="ay-cart-item-type">{item.type}</span>
                    <span className="ay-cart-item-price">₹{item.price.offer}</span>
                  </div>
                  <div className="ay-cart-qty">
                    <button onClick={() => updateQty(item.id, -1)}><Minus size={13} /></button>
                    <span>{item.qty}</span>
                    <button onClick={() => updateQty(item.id, 1)}><Plus size={13} /></button>
                  </div>
                </div>
              ))}
            </div>
            {cart.length > 0 && (
              <div className="ay-cart-footer">
                <div className="ay-cart-total">
                  <span>Total</span>
                  <span>₹{cartTotal.toLocaleString()}</span>
                </div>
                <a href="/checkout" className="ay-btn-primary" style={{ justifyContent: "center" }}>
                  Proceed to Checkout <ArrowRight size={16} />
                </a>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ── MODAL ── */}
      {selected && (
        <div className="ay-modal-overlay" onClick={() => setSelected(null)}>
          <div className="ay-modal" onClick={e => e.stopPropagation()}>
            <button className="ay-modal-close" onClick={() => setSelected(null)}><X size={20} /></button>
            <div className="ay-modal-grid">
              <div className="ay-modal-img-wrap">
                <img src={selected.image} alt={selected.name}
                  onError={e => { e.target.style.display = "none"; }} />
                <div className="ay-modal-img-bg" />
              </div>
              <div className="ay-modal-info">
                <span className="ay-card-cat">{selected.type}</span>
                <h2>{selected.name}</h2>
                <p className="ay-modal-desc">{selected.desc}</p>
                <div className="ay-modal-price">
                  <span className="ay-price-offer">₹{selected.price.offer}</span>
                  <span className="ay-price-mrp">₹{selected.price.mrp}</span>
                  <span className="ay-price-save">
                    {Math.round((1 - selected.price.offer / selected.price.mrp) * 100)}% OFF
                  </span>
                </div>
                <div className="ay-modal-section">
                  <h4>Indications</h4>
                  <p>{selected.indications}</p>
                </div>
                <div className="ay-modal-section">
                  <h4>Dosage</h4>
                  <p>{selected.dosage}</p>
                </div>
                <button className="ay-btn-primary ay-modal-cart-btn"
                  onClick={() => { addToCart(selected); setSelected(null); setCartOpen(true); }}>
                  <ShoppingCart size={16} /> Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="ay-sticky-cart">
        <button className="ay-cart-fab" onClick={() => setCartOpen(true)}>
          <ShoppingCart size={20} />
          {cartCount > 0 && <span className="ay-cart-badge">{cartCount}</span>}
        </button>
      </div>


      <section className="ay-hero">
        <div className="ay-hero-glow" />
        <div className="ay-hero-content">
          <span className="ay-pill"><Leaf size={13} /> Ayurveda</span>
          <h1>Science of Life,<br /><em>Ancient & Eternal</em></h1>
          <p>
            Ayurveda — the 5000-year-old Indian system of medicine — treats the
            root cause of disease through herbs, minerals, diet and lifestyle.
            Herbbodrug brings you authentic GMP-certified classical Ayurvedic
            formulations.
          </p>
          <a href="/contact" className="ay-btn-primary">
            Consult Our Experts <ArrowRight size={16} />
          </a>
        </div>
        <div className="ay-stats-bar">
          {[
            { num: "5000+", label: "Years of History" },
            { num: "6", label: "Classical Forms" },
            { num: "GMP", label: "Certified" },
            { num: "22+", label: "Products" },
          ].map((s, i) => (
            <div className="ay-stat" key={i}>
              <span className="ay-stat-num">{s.num}</span>
              <span className="ay-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="ay-types-intro" ref={s1}>
        <div className="ay-container">
          <div className="ay-section-head reveal">
            <span className="ay-badge">Classical Forms</span>
            <h2>6 Types of Ayurvedic Formulations</h2>
            <p>Click any type below to filter and explore that category of products.</p>
          </div>
          <div className="ay-type-cards">
            {Object.entries(typeInfo).map(([type, info]) => (
              <button
                key={type}
                className={`ay-type-card reveal ${activeType === type ? "active" : ""}`}
                onClick={() => {
                  setActiveType(type);
                  document.getElementById("ay-products")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <span className="ay-type-emoji">{info.emoji}</span>
                <h4>{type}</h4>
                <p>{info.desc}</p>
                <span className="ay-type-count">
                  {products.filter(p => p.type === type).length} Products
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="ay-products" id="ay-products" ref={s2}>
        <div className="ay-container">
          <div className="ay-section-head reveal">
            <span className="ay-badge">Products</span>
            <h2>
              {activeType === "All" ? "All Ayurvedic Products" : `${activeType} Products`}
            </h2>
            <p>{filtered.length} products found</p>
          </div>

          <div className="ay-filter-bar reveal">
            <Filter size={15} />
            {types.map(t => (
              <button
                key={t}
                className={`ay-filter-btn ${activeType === t ? "active" : ""}`}
                onClick={() => setActiveType(t)}
              >{t}</button>
            ))}
          </div>

          {activeType !== "All" && typeInfo[activeType] && (
            <div className="ay-type-info-bar reveal">
              <span className="ay-type-info-emoji">{typeInfo[activeType].emoji}</span>
              <div>
                <strong>{activeType}</strong>
                <p>{typeInfo[activeType].desc}</p>
              </div>
            </div>
          )}

          <div className="ay-grid" key={activeType}>
            {filtered.map((p, i) => (
              <div
                className="ay-card reveal"
                key={p.id}
                style={{ transitionDelay: `${i * 0.07}s`, cursor: "pointer" }}
                onClick={() => setSelected(p)}
              >
                <div className="ay-card-img">
                  <img src={p.image} alt={p.name} className="ay-card-real-img"
                    onError={e => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }} />
                  <div className="ay-card-img-fallback"><span>{p.type[0]}</span></div>
                  {p.tag && (
                    <span className={`ay-card-tag ${p.tag.toLowerCase().replace(" ", "")}`}>
                      {p.tag}
                    </span>
                  )}
                  <button
                    className={`ay-wish-btn ${wishlist[p.id] ? "active" : ""}`}
                    onClick={e => {
                      e.stopPropagation();
                      setWishlist(w => ({ ...w, [p.id]: !w[p.id] }));
                    }}
                  >{wishlist[p.id] ? "❤️" : "🤍"}</button>
                  <span className="ay-type-badge">{p.type}</span>
                </div>
                <div className="ay-card-body">
                  <span className="ay-card-cat">{p.type}</span>
                  <h3>{p.name}</h3>
                  <p>{p.desc}</p>
                  <div className="ay-card-footer">
                    <div className="ay-price-wrap">
                      <span className="ay-price-offer-sm">₹{p.price.offer}</span>
                      <span className="ay-price-mrp-sm">₹{p.price.mrp}</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <StarRating rating={p.rating} />
                      <button
                        className={`ay-cart-btn ${addedId === p.id ? "added" : ""}`}
                        onClick={e => addToCart(p, e)}
                      >
                        {addedId === p.id
                          ? <><Check size={13} /> Added</>
                          : <><ShoppingCart size={13} /> Add</>}
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
      <section className="ay-cta" ref={s3}>
        <div className="ay-cta-inner reveal">
          <Leaf size={36} color="#7dd894" />
          <h2>Experience Authentic Ayurvedic Healing</h2>
          <p>GMP-certified classical formulations rooted in 5000 years of Ayurvedic tradition.</p>
          <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/contact" className="ay-btn-primary">Consult Our Experts <ArrowRight size={16} /></a>
            <a href="/franchise" className="ay-btn-ghost">Apply for Franchise</a>
          </div>
        </div>
      </section>

    </div>
  );
}