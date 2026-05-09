import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./CartPage.css";
import {
  Trash2, Plus, Minus, ShoppingCart,
  ArrowLeft, ShoppingBag, Tag, ChevronRight
} from "lucide-react";

export default function CartPage() {
  const { cartItems, cartCount, cartTotal, removeFromCart, updateQty, clearCart } = useCart();
  const navigate = useNavigate();

  const shipping   = cartTotal >= 500 ? 0 : 60;
  const grandTotal = cartTotal + shipping;
  const savings    = cartItems.reduce(
    (sum, item) => sum + (item.price.mrp - item.price.offer) * item.qty, 0
  );

  // ── EMPTY STATE ─────────────────────────────────────────────────────────────
  if (cartItems.length === 0) {
    return (
      <div className="cart-empty-wrap">
        <div className="cart-empty-box">
          <div className="cart-empty-icon">
            <ShoppingCart size={52} strokeWidth={1.4} />
          </div>
          <h2>Your cart is empty</h2>
          <p>Looks like you haven't added any products yet. Explore our range and add what suits you best.</p>
          <Link to="/products" className="cart-shop-btn">
            <ShoppingBag size={17} /> Browse Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">

      {/* ── HEADER ── */}
      <div className="cart-header">
        <div className="cart-header-inner">
          <button className="cart-back-btn" onClick={() => navigate(-1)}>
            <ArrowLeft size={17} /> Continue Shopping
          </button>
          <div className="cart-header-title">
            <ShoppingCart size={22} />
            <h1>My Cart <span className="cart-count-badge">{cartCount}</span></h1>
          </div>
          <button className="cart-clear-btn" onClick={clearCart}>Clear All</button>
        </div>
      </div>

      <div className="cart-body">

        {/* ── ITEMS ─────────────────────────────────────────────────────────── */}
        <div className="cart-items-col">

          {/* Free shipping progress bar */}
          {shipping > 0 && (
            <div className="cart-shipping-bar">
              <div className="cart-shipping-text">
                Add <strong>₹{500 - cartTotal}</strong> more for <strong>FREE delivery</strong> 🚚
              </div>
              <div className="cart-shipping-track">
                <div
                  className="cart-shipping-fill"
                  style={{ width: `${Math.min((cartTotal / 500) * 100, 100)}%` }}
                />
              </div>
            </div>
          )}

          {shipping === 0 && (
            <div className="cart-shipping-bar free">
              🎉 You've unlocked <strong>FREE delivery!</strong>
            </div>
          )}

          {/* Cart items list */}
          <div className="cart-items-list">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>

                {/* Image */}
                <div
                  className="cart-item-img"
                  onClick={() => navigate(`/product/${item.slug}`)}
                >
                  <img src={item.image} alt={item.name} loading="lazy" />
                </div>

                {/* Details */}
                <div className="cart-item-details">
                  <span className="cart-item-form">{item.forms?.[0]}</span>
                  <h3
                    className="cart-item-name"
                    onClick={() => navigate(`/product/${item.slug}`)}
                  >
                    {item.name}
                  </h3>
                  <p className="cart-item-category">{item.category}</p>

                  <div className="cart-item-bottom">
                    {/* Price */}
                    <div className="cart-item-price-col">
                      <span className="cart-item-offer">₹{item.price.offer}</span>
                      <span className="cart-item-mrp">₹{item.price.mrp}</span>
                      <span className="cart-item-save">
                        Save ₹{(item.price.mrp - item.price.offer) * item.qty}
                      </span>
                    </div>

                    {/* Qty controls */}
                    <div className="cart-qty-row">
                      <button
                        className="cart-qty-btn"
                        onClick={() => updateQty(item.id, item.qty - 1)}
                        aria-label="Decrease"
                      >
                        <Minus size={13} />
                      </button>
                      <span className="cart-qty-num">{item.qty}</span>
                      <button
                        className="cart-qty-btn"
                        onClick={() => updateQty(item.id, item.qty + 1)}
                        aria-label="Increase"
                      >
                        <Plus size={13} />
                      </button>
                    </div>

                    {/* Remove */}
                    <button
                      className="cart-remove-btn"
                      onClick={() => removeFromCart(item.id)}
                      title="Remove"
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                </div>

                {/* Line total */}
                <div className="cart-item-total">
                  ₹{item.price.offer * item.qty}
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* ── ORDER SUMMARY ─────────────────────────────────────────────────── */}
        <aside className="cart-summary">
          <h2 className="cart-summary-title">Order Summary</h2>

          <div className="cart-summary-rows">
            <div className="cart-summary-row">
              <span>Subtotal ({cartCount} item{cartCount > 1 ? "s" : ""})</span>
              <span>₹{cartItems.reduce((s, i) => s + i.price.mrp * i.qty, 0)}</span>
            </div>
            <div className="cart-summary-row green">
              <span>Discount</span>
              <span>− ₹{savings}</span>
            </div>
            <div className="cart-summary-row">
              <span>Delivery</span>
              <span className={shipping === 0 ? "free-tag" : ""}>
                {shipping === 0 ? "FREE" : `₹${shipping}`}
              </span>
            </div>
          </div>

          <div className="cart-summary-divider" />

          <div className="cart-summary-total">
            <span>Total</span>
            <span>₹{grandTotal}</span>
          </div>

          {savings > 0 && (
            <div className="cart-savings-pill">
              <Tag size={13} /> You save ₹{savings} on this order!
            </div>
          )}

          <button
            className="cart-checkout-btn"
            onClick={() => navigate("/checkout")}
          >
            Proceed to Checkout <ChevronRight size={18} />
          </button>

          <Link to="/products" className="cart-continue-link">
            <ArrowLeft size={14} /> Continue Shopping
          </Link>

          {/* Trust badges */}
          <div className="cart-trust-row">
            {["GMP Certified", "100% Herbal", "Secure Payment"].map((t) => (
              <span key={t} className="cart-trust-chip">{t}</span>
            ))}
          </div>
        </aside>

      </div>
    </div>
  );
}