import React, { useRef, useState, useEffect } from "react";
import "./Navbar.css";
import {
  Menu,
  X,
  ShoppingBag,
  LogIn,
  LogOut,
  UserCircle2,
  ChevronDown,
  Leaf,
  FlaskConical,
  Sparkles,
  Wheat,
  Tag,
} from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const sidebarRef = useRef(null);
  const overlayRef = useRef(null);
  const productRef = useRef(null);

  const [productOpen, setProductOpen]   = useState(false);
  const [ayurvedaOpen, setAyurvedaOpen] = useState(false);
  const [scrolled, setScrolled]         = useState(false);

  const [sidebarProductOpen,  setSidebarProductOpen]  = useState(false);
  const [sidebarClassicalOpen,setSidebarClassicalOpen] = useState(false);
  const [sidebarAyurvedaOpen, setSidebarAyurvedaOpen]  = useState(false);

  // ── AUTH STATE ──────────────────────────────────────────────────────────────
  // Replace with your real auth: useAuth() / Redux / localStorage token check
  // e.g. const { user } = useAuth();  →  const isLoggedIn = !!user;
  // e.g. const isLoggedIn = !!localStorage.getItem("token");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // ────────────────────────────────────────────────────────────────────────────

  // Scroll shadow effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Sidebar open / close
  const openSidebar = () => {
    sidebarRef.current.classList.add("active");
    overlayRef.current.classList.add("active");
    document.body.style.overflow = "hidden";
  };

  const closeSidebar = () => {
    sidebarRef.current.classList.remove("active");
    overlayRef.current.classList.remove("active");
    document.body.style.overflow = "";
    setSidebarProductOpen(false);
    setSidebarClassicalOpen(false);
    setSidebarAyurvedaOpen(false);
  };

  // Close mega menu on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (productRef.current && !productRef.current.contains(e.target)) {
        setProductOpen(false);
        setAyurvedaOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeMega = () => {
    setProductOpen(false);
    setAyurvedaOpen(false);
  };

  // ── AUTH HANDLERS ────────────────────────────────────────────────────────────
  // Replace with your real logout logic:
  // e.g. await signOut(auth);           ← Firebase
  // e.g. localStorage.removeItem("token"); dispatch(logout());  ← JWT
  const handleLogout = () => {
    setIsLoggedIn(false); // ← swap this line with real logout
  };
  // ────────────────────────────────────────────────────────────────────────────

  const ayurvedaTypes = [
    { label: "Kashayam", path: "/products/classical/ayurveda/kashayam" },
    { label: "Choornam", path: "/products/classical/ayurveda/choornam" },
    { label: "Lehyam",   path: "/products/classical/ayurveda/lehyam"   },
    { label: "Gulika",   path: "/products/classical/ayurveda/gulika"   },
    { label: "Ghritham", path: "/products/classical/ayurveda/ghritham" },
    { label: "Asavam",   path: "/products/classical/ayurveda/asavam"   },
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        {/* ── LOGO ── */}
        <div className="nav-left">
          <img src="/imgs/Logo Jpg-01.jpg" alt="logo" className="logo" />
        </div>

        {/* ── DESKTOP MENU ── */}
        <ul className="nav-menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>

          {/* PRODUCT — Mega Menu */}
          <li ref={productRef} className="nav-product-item">
            <span
              className={`nav-drop-link ${productOpen ? "open" : ""}`}
              onClick={() => { setProductOpen((p) => !p); setAyurvedaOpen(false); }}
            >
              Products
              <ChevronDown size={14} className={`nav-chevron ${productOpen ? "rotated" : ""}`} />
            </span>

            {productOpen && (
              <div className="mega-menu">
                <div className="mega-inner">

                  {/* Classical Products */}
                  <div className="mega-col">
                    <div className="mega-col-header">
                      <span className="mega-col-icon"><Leaf size={16} /></span>
                      <p className="mega-col-heading">Classical Products</p>
                    </div>
                    <ul className="mega-sub-list">

                      {/* Siddha — direct link */}
                      <li>
                        <Link to="/products/classical/siddha" onClick={closeMega}>
                          <span className="sub-dot" />
                          <span>Siddha</span>
                        </Link>
                      </li>

                      {/* Ayurveda — expandable only */}
                      <li className="classical-sub-item">
                        <div
                          className={`sub-toggle ${ayurvedaOpen ? "open" : ""}`}
                          onClick={(e) => { e.stopPropagation(); setAyurvedaOpen((p) => !p); }}
                        >
                          <span className="sub-dot" />
                          <span className="sub-label">Ayurveda</span>
                          <ChevronDown size={12} className={`mini-chevron ${ayurvedaOpen ? "rotated" : ""}`} />
                        </div>
                        {ayurvedaOpen && (
                          <ul className="classical-sub-list">
                            {ayurvedaTypes.map((type) => (
                              <li key={type.path}>
                                <Link to={type.path} onClick={closeMega}>{type.label}</Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>

                    </ul>
                  </div>

                  <div className="mega-divider" />

                  {/* Pattern Product */}
                  <div className="mega-col single-link">
                    <Link to="/products/pattern" onClick={closeMega}>
                      <div className="mega-col-header">
                        <span className="mega-col-icon"><Tag size={16} /></span>
                        <p className="mega-col-heading">Pattern Product</p>
                      </div>
                      <p className="mega-col-desc">Herbal pattern formulations</p>
                    </Link>
                  </div>

                  <div className="mega-divider" />

                  {/* Cosmetic Product */}
                  <div className="mega-col single-link">
                    <Link to="/products/cosmetic" onClick={closeMega}>
                      <div className="mega-col-header">
                        <span className="mega-col-icon"><Sparkles size={16} /></span>
                        <p className="mega-col-heading">Cosmetic Product</p>
                      </div>
                      <p className="mega-col-desc">Natural beauty &amp; skin care</p>
                    </Link>
                  </div>

                  <div className="mega-divider" />

                  {/* General Product */}
                  <div className="mega-col single-link">
                    <Link to="/products" onClick={closeMega}>
                      <div className="mega-col-header">
                        <span className="mega-col-icon"><Wheat size={16} /></span>
                        <p className="mega-col-heading">General Product</p>
                      </div>
                      <p className="mega-col-desc">Everyday herbal wellness</p>
                    </Link>
                  </div>

                </div>
              </div>
            )}
          </li>

          <li><Link to="/contact">Contact</Link></li>
        </ul>

        {/* ── RIGHT SIDE ── */}
        <div className="nav-right">
          {/* Order Now */}
          <Link to="/products" className="order-btn">
            <ShoppingBag size={16} />
            <span>Order Now</span>
          </Link>

          {/* ── AUTH ──
              Logged IN  → [UserCircle2] + [LogOut] icons side by side
              Logged OUT → [LogIn] icon only
          ── */}
          {isLoggedIn ? (
            <div className="auth-logged-row">
              <Link to="/profile" className="auth-icon-btn profile" title="My Profile">
                <UserCircle2 size={26} />
              </Link>
              <button
                className="auth-icon-btn logout"
                title="Logout"
                onClick={handleLogout}
              >
                <LogOut size={21} />
              </button>
            </div>
          ) : (
            <Link to="/login" className="auth-icon-btn login" title="Login">
              <LogIn size={22} />
            </Link>
          )}

          {/* Hamburger (mobile) */}
          <div className="hamburger" onClick={openSidebar}>
            <Menu size={22} />
          </div>
        </div>
      </nav>

      {/* ── OVERLAY ── */}
      <div className="sidebar-overlay" ref={overlayRef} onClick={closeSidebar} />

      {/* ── SIDEBAR (mobile) ── */}
      <div className="sidebar" ref={sidebarRef}>
        <div className="close-btn" onClick={closeSidebar}>
          <X size={22} />
        </div>

        <img src="/imgs/Logo Jpg-01.jpg" alt="logo" className="sidebar-logo" />

        <ul>
          <li><Link to="/" onClick={closeSidebar}>Home</Link></li>
          <li><Link to="/about" onClick={closeSidebar}>About</Link></li>

          {/* Product accordion */}
          <li className="sidebar-product-li">
            <div
              className="sidebar-product-toggle"
              onClick={() => setSidebarProductOpen((p) => !p)}
            >
              <span>Products</span>
              <ChevronDown size={15} className={`sidebar-chevron ${sidebarProductOpen ? "rotated" : ""}`} />
            </div>

            {sidebarProductOpen && (
              <ul className="sidebar-product-list">
                {/* Classical */}
                <li>
                  <div
                    className="sidebar-classical-toggle"
                    onClick={() => setSidebarClassicalOpen((p) => !p)}
                  >
                    <span>Classical Products</span>
                    <ChevronDown size={13} className={`sidebar-chevron ${sidebarClassicalOpen ? "rotated" : ""}`} />
                  </div>
                  {sidebarClassicalOpen && (
                    <ul className="sidebar-classical-sub">
                      <li>
                        <Link to="/products/classical/siddha" onClick={closeSidebar}>Siddha</Link>
                      </li>
                      <li>
                        <div
                          className="sidebar-ayurveda-toggle"
                          onClick={() => setSidebarAyurvedaOpen((p) => !p)}
                        >
                          <span>Ayurveda</span>
                          <ChevronDown size={12} className={`sidebar-chevron ${sidebarAyurvedaOpen ? "rotated" : ""}`} />
                        </div>
                        {sidebarAyurvedaOpen && (
                          <ul className="sidebar-ayurveda-sub">
                            {ayurvedaTypes.map((type) => (
                              <li key={type.path}>
                                <Link to={type.path} onClick={closeSidebar}>{type.label}</Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    </ul>
                  )}
                </li>

                <li><Link to="/products/pattern"  onClick={closeSidebar}>Pattern Product</Link></li>
                <li><Link to="/products/cosmetic" onClick={closeSidebar}>Cosmetic Product</Link></li>
                <li><Link to="/products"          onClick={closeSidebar}>General Product</Link></li>
              </ul>
            )}
          </li>

          <li><Link to="/contact" onClick={closeSidebar}>Contact</Link></li>
        </ul>

        {/* Sidebar Auth */}
        <div className="sidebar-auth-row">
          {isLoggedIn ? (
            <div className="sidebar-auth-logged">
              <Link to="/profile" className="sidebar-auth-btn profile" onClick={closeSidebar}>
                <UserCircle2 size={17} /> My Profile
              </Link>
              <button
                className="sidebar-auth-btn logout"
                onClick={() => { handleLogout(); closeSidebar(); }}
              >
                <LogOut size={16} /> Logout
              </button>
            </div>
          ) : (
            <Link to="/login" className="sidebar-auth-btn" onClick={closeSidebar}>
              <LogIn size={16} /> Login
            </Link>
          )}
        </div>

        <Link to="/products" className="sidebar-order-btn" onClick={closeSidebar}>
          <ShoppingBag size={18} /> Order Now
        </Link>
      </div>
    </>
  );
};

export default Navbar;