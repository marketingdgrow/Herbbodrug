import React, { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "./Siddha.css";
import {
  Leaf, ShieldCheck, FlaskConical, Star, ArrowRight,
  BookOpen, Heart, Users, Globe, Award, Clock, Sparkles
} from "lucide-react";

const principles = [
  {
    icon: <Leaf size={26} />,
    title: "Pancha Bootham",
    desc: "Siddha medicine is based on the five elements — Earth (Mann), Water (Neer), Fire (Thee), Air (Vayu) and Sky (Aagayam) — that make up the human body and the universe."
  },
  {
    icon: <Heart size={26} />,
    title: "Mukkutram",
    desc: "The three humours — Vatham, Pitham and Kapham — govern body functions. Balance among these is key to health; imbalance leads to disease."
  },
  {
    icon: <FlaskConical size={26} />,
    title: "Ezhu Udal Thathukkal",
    desc: "The seven bodily constituents — Saaram, Senneer, Oon, Kozhuppu, Enbu, Moolai and Sukkilam/Artavam — are the building blocks that Siddha treatments aim to nourish and balance."
  },
  {
    icon: <BookOpen size={26} />,
    title: "Naadi Parisothanai",
    desc: "Pulse diagnosis (Naadi) is a unique Siddha diagnostic tool. By feeling the pulse at the wrist, a Siddha physician can identify the root cause of any illness."
  },
  {
    icon: <Sparkles size={26} />,
    title: "Muppu",
    desc: "Muppu is a secret catalyst used in Siddha formulations that enhances the potency of medicines and aids in rejuvenation and longevity."
  },
  {
    icon: <Star size={26} />,
    title: "Kayakalpa",
    desc: "Kayakalpa is the Siddha science of rejuvenation — a set of practices using special herbs and minerals to maintain youth, vitality and extend healthy lifespan."
  },
];

const formulations = [
  { name: "Chooranam", desc: "Fine herbal powders prepared from dried herbs, minerals and animal products. Taken with honey, ghee or warm water.", icon: "🌿" },
  { name: "Kudineer", desc: "Herbal decoctions prepared by boiling fresh or dried herbs in water. Used for acute and chronic conditions.", icon: "🫙" },
  { name: "Kashayam", desc: "Concentrated herbal extracts made by reducing decoctions. Highly potent formulations for specific conditions.", icon: "🍵" },
  { name: "Legiyam", desc: "Herbal semi-solid preparations made with jaggery or honey base. Often used for respiratory and digestive issues.", icon: "🍯" },
  { name: "Mezhugu", desc: "Waxy preparations using herbs and minerals. Applied externally for skin and joint conditions.", icon: "🌸" },
  { name: "Parpam", desc: "Calcinated preparations made from metals, minerals and shells. Highly potent micro-doses used in chronic diseases.", icon: "⚗️" },
  { name: "Chunnam", desc: "Alkaline preparations made from metals, minerals and shells used in skin diseases and digestive disorders.", icon: "🔬" },
  { name: "Thylam", desc: "Medicated herbal oils used for external application in pain management, skin and neurological conditions.", icon: "💧" },
];

const conditions = [
  { area: "Skin Diseases", conditions: "Psoriasis, Eczema, Vitiligo, Leprosy, Urticaria, Fungal infections" },
  { area: "Joint & Bone", conditions: "Arthritis, Gout, Osteoporosis, Joint pain, Cervical spondylosis, Sciatica" },
  { area: "Digestive", conditions: "Peptic ulcer, Piles, Constipation, Liver disorders, IBS, Malabsorption" },
  { area: "Neurological", conditions: "Paralysis, Epilepsy, Migraine, Parkinson's, Neuropathy, Memory disorders" },
  { area: "Respiratory", conditions: "Asthma, Bronchitis, Sinusitis, Tuberculosis, Allergic rhinitis" },
  { area: "Women's Health", conditions: "PCOS, Menstrual disorders, Infertility, Menopausal symptoms, Leucorrhoea" },
  { area: "Metabolic", conditions: "Diabetes, Obesity, Thyroid disorders, Anaemia, Jaundice" },
  { area: "Urinary", conditions: "Kidney stones, UTI, Prostate disorders, Urinary retention" },
];

const siddhars = [
  { name: "Agasthiyar", contribution: "Father of Siddha medicine. Authored over 96 books on medicine, yoga and alchemy. Pioneer of Muppu and Kayakalpa." },
  { name: "Thirumoolar", contribution: "Author of Thirumandiram — 3000 verses on philosophy, yoga and medicine. Pioneered the concept of body as temple." },
  { name: "Korakkar", contribution: "Specialist in alchemy and mineral medicine. His works on Parpam and Chunnam formulations are foundational texts." },
  { name: "Theraiyar", contribution: "Pioneer of pulse diagnosis (Naadi Shastra). His text Theraiyar Vagadam is the primary reference for Siddha diagnosis." },
];

const stats = [
  { num: "5000+", label: "Years of History" },
  { num: "18", label: "Siddhars (Founders)" },
  { num: "64", label: "Arts of Siddha" },
  { num: "32", label: "Types of Internal Medicine" },
];

export default function Siddha() {
  const s1 = useScrollReveal();
  const s2 = useScrollReveal();
  const s3 = useScrollReveal();
  const s4 = useScrollReveal();
  const s5 = useScrollReveal();
  const s6 = useScrollReveal();

  return (
    <div className="sd-page">

      {/* ── HERO ── */}
      <section className="sd-hero">
        <div className="sd-hero-glow" />
        <div className="sd-hero-content">
          <span className="sd-pill"><Leaf size={13} /> Siddha Medicine</span>
          <h1>Ancient Wisdom of<br /><em>Tamil Healing</em></h1>
          <p>
            Siddha is one of the world's oldest traditional medicine systems —
            originating in Tamil Nadu over 5000 years ago. Developed by the 18
            Siddhars, it combines herbal, mineral and spiritual healing for
            holistic wellbeing.
          </p>
          <div className="sd-hero-btns">
            <a href="/contact" className="sd-btn-primary">Consult a Specialist <ArrowRight size={16} /></a>
            <a href="/products" className="sd-btn-ghost">View Products</a>
          </div>
        </div>
        <div className="sd-stats-bar">
          {stats.map((s, i) => (
            <div className="sd-stat" key={i}>
              <span className="sd-stat-num">{s.num}</span>
              <span className="sd-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHAT IS SIDDHA ── */}
      <section className="sd-intro" ref={s1}>
        <div className="sd-container">
          <div className="sd-intro-grid">
            <div className="sd-intro-text reveal">
              <span className="sd-badge">About Siddha</span>
              <h2>What is Siddha Medicine?</h2>
              <p>
                Siddha is a traditional system of medicine that originated in South India,
                particularly in Tamil Nadu. The word <strong>"Siddha"</strong> comes from
                <strong> "Siddhi"</strong> — meaning achievement or perfection.
              </p>
              <p>
                Unlike other systems, Siddha considers the human body as a microcosm of
                the universe. It uses herbs, metals, minerals and spiritual practices to
                achieve physical, mental and spiritual health simultaneously.
              </p>
              <p>
                Siddha medicine is officially recognized by the Government of India under
                the AYUSH ministry alongside Ayurveda, Yoga, Unani, and Homeopathy.
              </p>
              <div className="sd-intro-chips">
                {["Recognized by AYUSH", "Tamil Origin", "Holistic Healing", "5000+ Years Old"].map((c, i) => (
                  <span className="sd-chip" key={i}>{c}</span>
                ))}
              </div>
            </div>
            <div className="sd-intro-visual reveal">
              <div className="sd-visual-box">
                <div className="sd-visual-inner">
                  <div className="sd-visual-icon">🌿</div>
                  <h3>Siddha — The Perfect Science</h3>
                  <p>
                    "Unave Marunthu, Marunthu Unave" — Food is medicine,
                    Medicine is food. This is the core philosophy of Siddha.
                  </p>
                  <div className="sd-visual-divider" />
                  <ul className="sd-visual-list">
                    <li>✦ Treats root cause, not symptoms</li>
                    <li>✦ Focuses on prevention & longevity</li>
                    <li>✦ Uses food as primary medicine</li>
                    <li>✦ Integrates yoga & meditation</li>
                  </ul>
                </div>
              </div>
              <div className="sd-visual-float">
                <Globe size={16} /> Practised in 15+ countries worldwide
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRINCIPLES ── */}
      <section className="sd-principles" ref={s2}>
        <div className="sd-container">
          <div className="sd-section-head reveal">
            <span className="sd-badge">Core Concepts</span>
            <h2>Fundamental Principles of Siddha</h2>
            <p>The six pillars that form the scientific foundation of Siddha medicine.</p>
          </div>
          <div className="sd-principles-grid">
            {principles.map((p, i) => (
              <div className="sd-principle-card reveal" key={i} style={{ transitionDelay: `${i * 0.09}s` }}>
                <div className="sd-principle-icon">{p.icon}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORMULATIONS ── */}
      <section className="sd-formulations" ref={s3}>
        <div className="sd-container">
          <div className="sd-section-head reveal">
            <span className="sd-badge">Medicine Types</span>
            <h2>Types of Siddha Formulations</h2>
            <p>Siddha uses a wide variety of preparation methods for different conditions.</p>
          </div>
          <div className="sd-form-grid">
            {formulations.map((f, i) => (
              <div className="sd-form-card reveal" key={i} style={{ transitionDelay: `${i * 0.08}s` }}>
                <span className="sd-form-icon">{f.icon}</span>
                <h3>{f.name}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONDITIONS ── */}
      <section className="sd-conditions" ref={s4}>
        <div className="sd-container">
          <div className="sd-section-head reveal">
            <span className="sd-badge">Therapeutic Areas</span>
            <h2>Conditions Treated by Siddha</h2>
            <p>Siddha medicine effectively addresses a wide spectrum of acute and chronic conditions.</p>
          </div>
          <div className="sd-conditions-grid">
            {conditions.map((c, i) => (
              <div className="sd-condition-card reveal" key={i} style={{ transitionDelay: `${i * 0.07}s` }}>
                <h4>{c.area}</h4>
                <p>{c.conditions}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     

      {/* ── SIDDHA VS OTHERS ── */}
      <section className="sd-compare" ref={s5}>
        <div className="sd-container">
          <div className="sd-section-head reveal">
            <span className="sd-badge">Why Siddha</span>
            <h2>Siddha vs Other Systems</h2>
            <p>What makes Siddha unique among traditional medicine systems.</p>
          </div>
          <div className="sd-compare-grid reveal">
            <div className="sd-compare-card highlight">
              <h3>⚕️ Siddha</h3>
              <ul>
                <li>✦ Treats root cause of disease</li>
                <li>✦ Uses metals & minerals (Parpam)</li>
                <li>✦ Pulse diagnosis (Naadi)</li>
                <li>✦ Integrates spirituality & yoga</li>
                <li>✦ Strong in chronic skin diseases</li>
                <li>✦ Unique Tamil origin & literature</li>
                <li>✦ Focuses on longevity (Kayakalpa)</li>
              </ul>
            </div>
            <div className="sd-compare-card">
              <h3>🌿 Ayurveda</h3>
              <ul>
                <li>◦ Treats root cause of disease</li>
                <li>◦ Primarily herbal formulations</li>
                <li>◦ Nadi, Mutra, Mala diagnosis</li>
                <li>◦ Sanskrit origin & literature</li>
                <li>◦ Strong in Panchakarma therapy</li>
                <li>◦ Widely practiced across India</li>
                <li>◦ Focuses on balance (Tridosha)</li>
              </ul>
            </div>
            <div className="sd-compare-card">
              <h3>💊 Modern Medicine</h3>
              <ul>
                <li>◦ Treats symptoms primarily</li>
                <li>◦ Synthetic chemical compounds</li>
                <li>◦ Lab tests & imaging diagnosis</li>
                <li>◦ Fast acting for acute conditions</li>
                <li>◦ Side effects common</li>
                <li>◦ Expensive long-term treatment</li>
                <li>◦ Limited chronic disease cure</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="sd-cta" ref={s6}>
        <div className="sd-cta-inner reveal">
          <Leaf size={36} color="#7dd894" />
          <h2>Experience the Power of Siddha Healing</h2>
          <p>
            Herbbodrug brings you authentic GMP-certified Siddha formulations
            rooted in 5000 years of Tamil healing wisdom.
          </p>
          <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/contact" className="sd-btn-primary">Consult Our Experts <ArrowRight size={16} /></a>
            <a href="/products" className="sd-btn-ghost">View All Products</a>
          </div>
        </div>
      </section>

    </div>
  );
}