import React, { useRef } from "react";
import "./Navbar.css";
import { Menu, X, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const sidebarRef = useRef(null);

  // ✅ FUNCTIONS (clean, no addEventListener nonsense)
  const openSidebar = () => {
    sidebarRef.current.classList.add("active");
  };

  const closeSidebar = () => {
    sidebarRef.current.classList.remove("active");
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-left">
          <img src="/src/assets/Logo Jpg-01.jpg" alt="logo" className="logo" />
        </div>

        <ul className="nav-menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/products">Product</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

       <div className="nav-right">
  <Link to="/products">
    <button className="login-btn">
      <ShoppingBag size={18} /> Order Now
    </button>
  </Link>

  <div className="hamburger" onClick={openSidebar}>
    <Menu size={22} />
  </div>
</div>
      </nav>

      {/* Sidebar */}
      <div className="sidebar" ref={sidebarRef}>
        <div className="close-btn" onClick={closeSidebar}>
          <X size={22} />
        </div>

        <ul>
          <li>
            <Link to="/" onClick={closeSidebar}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={closeSidebar}>
              About
            </Link>
          </li>
          <li>
            <Link to="/products" onClick={closeSidebar}>
              Product
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeSidebar}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
