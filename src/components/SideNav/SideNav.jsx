import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./SideNav.css";
import { Tag, Users, ShoppingCart, Repeat } from "lucide-react";

const navItems = [
  { path: "/white-labeling", icon: Tag,         label: "White Labeling" },
  { path: "/wholesale",      icon: Users,        label: "Wholesale"      },
  { path: "/online-shop",    icon: ShoppingCart, label: "Online Shop"    },
  { path: "/transis",        icon: Repeat,       label: "Transis"        },
];

const SideNav = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* TRIGGER — fixed right-middle, always on top */}
      <button
        className={`sidenav-trigger${open ? " sidenav-trigger--open" : ""}`}
        onClick={() => setOpen((p) => !p)}
        aria-label="Toggle side navigation"
      >
        <span className="dot-grid">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="dot" style={{ "--i": i }} />
          ))}
        </span>
      </button>

      {/* BACKDROP */}
      <div
        className={`sidenav-backdrop${open ? " sidenav-backdrop--show" : ""}`}
        onClick={() => setOpen(false)}
      />

      {/* PANEL — slides in from right */}
      <nav className={`sidenav-panel${open ? " sidenav-panel--open" : ""}`}>

        <div className="sidenav-accent" />

        <div className="sidenav-header">
          <span className="sidenav-title">Menu</span>
          <button
            className="sidenav-close"
            onClick={() => setOpen(false)}
            aria-label="Close"
          >
            <span /><span />
          </button>
        </div>

        <ul className="sidenav-list">
          {navItems.map(({ path, icon: Icon, label }, idx) => {
            const active = location.pathname === path;
            return (
              <li
                key={path}
                className={`sidenav-item${open ? " sidenav-item--in" : ""}`}
                style={{ "--idx": idx }}
              >
                <Link
                  to={path}
                  className={`sidenav-link${active ? " sidenav-link--active" : ""}`}
                  onClick={() => setOpen(false)}
                >
                  <span className="sidenav-icon">
                    <Icon size={20} strokeWidth={1.8} />
                  </span>
                  <span className="sidenav-label">{label}</span>
                  <span className="sidenav-bar" />
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="sidenav-footer">© Herbbodrug</div>
      </nav>
    </>
  );
};

export default SideNav;