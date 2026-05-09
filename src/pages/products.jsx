import { useEffect, useState } from "react";
import "./products.css";
import { useNavigate } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import { ShoppingCart, Check } from "lucide-react";
import { useCart } from "../context/CartContext";

const normalizeFilterValue = (value) => {
  if (!value) return "";
  const normalized = value.toString().trim().toLowerCase();
  return normalized.endsWith("s") ? normalized.slice(0, -1) : normalized;
};

const CATEGORY_OPTIONS = [
  "Pain & Orthopedic Care",
  "Neurological Care",
  "Cardiac & Blood Circulation",
  "Diabetes Care",
  "Kidney & Urinary Care",
  "Liver Care",
  "Respiratory Care",
  "Digestive & Gastro Care",
  "Skin Care",
  "Hair Care",
];

const FORM_OPTIONS = ["Tablet", "Capsules", "Syrup", "Liquid"];
const TYPE_OPTIONS = ["Chronic Disease", "General Wellness", "Acute Relief"];

const CATEGORY_ALIAS_MAP = {
  "Cardiac & Blood Circulation": ["Cardiac Care", "Blood Care"],
  "Diabetes Care": ["Diabetic Care"],
  "Kidney & Urinary Care": ["Renal Care"],
  "Digestive & Gastro Care": ["Digestive Care"],
};

const TYPE_ALIAS_MAP = {
  "Chronic Disease": { productTypes: ["Chronic Disease"] },
  "General Wellness": {
    productTypes: ["General Wellness"],
    categories: ["General Wellness"],
  },
  "Acute Relief": {
    productTypes: ["Acute Relief"],
    categories: ["First Aid Care"],
  },
};

const Products = () => {
  const [products, setProducts]     = useState([]);
  const [filters, setFilters]       = useState({ category: [], form: [], type: [] });
  const [loading, setLoading]       = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [showSidebar, setShowSidebar] = useState(false);
  const [addedMap, setAddedMap]     = useState({});   // tracks "just added" animation
  const navigate = useNavigate();
  const { addToCart, isInCart } = useCart();
  const perPage = 12;

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => { setProducts(data); setLoading(false); });
  }, []);

  // ── FILTER ──────────────────────────────────────────────────────────────────
  const filtered = products.filter((p) => {
    const selectedCategories = filters.category
      .flatMap((cat) => CATEGORY_ALIAS_MAP[cat] || [cat])
      .map(normalizeFilterValue);
    const selectedForms = filters.form.map(normalizeFilterValue);
    const selectedTypeProductTypes = filters.type
      .flatMap((type) => TYPE_ALIAS_MAP[type]?.productTypes || [type])
      .map(normalizeFilterValue);
    const selectedTypeCategories = filters.type
      .flatMap((type) => TYPE_ALIAS_MAP[type]?.categories || [])
      .map(normalizeFilterValue);

    const productForms = Array.isArray(p.forms) ? p.forms : [p.forms];
    const normalizedCategory = normalizeFilterValue(p.category);
    const normalizedType     = normalizeFilterValue(p.productType);
    const normalizedForms    = productForms.map(normalizeFilterValue);

    const categoryMatch =
      selectedCategories.length === 0 ||
      selectedCategories.includes(normalizedCategory);

    const formMatch =
      selectedForms.length === 0 ||
      normalizedForms.some((f) => selectedForms.includes(f));

    const typeMatch =
      filters.type.length === 0 ||
      selectedTypeProductTypes.includes(normalizedType) ||
      selectedTypeCategories.includes(normalizedCategory);

    return categoryMatch && formMatch && typeMatch;
  });

  // ── PAGINATION ───────────────────────────────────────────────────────────────
  const totalPages = Math.ceil(filtered.length / perPage);
  const start      = (currentPage - 1) * perPage;
  const paginated  = filtered.slice(start, start + perPage);

  const toggleFilter = (type, value) => {
    setFilters((prev) => {
      const exists = prev[type].includes(value);
      return {
        ...prev,
        [type]: exists
          ? prev[type].filter((v) => v !== value)
          : [...prev[type], value],
      };
    });
    setCurrentPage(1);
  };

  // ── ADD TO CART with brief animation ────────────────────────────────────────
  const handleAddToCart = (product, e) => {
    e.stopPropagation();
    addToCart(product);
    setAddedMap((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedMap((prev) => ({ ...prev, [product.id]: false }));
    }, 1500);
  };

  // ── DISCOUNT % ───────────────────────────────────────────────────────────────
  const discountPct = (mrp, offer) =>
    Math.round(((mrp - offer) / mrp) * 100);

  return (
    <>
      <Banner title="Our Products" path={["Home", "Shop"]} />

      {/* MOBILE FILTER BUTTON */}
      <button className="filter-btn" onClick={() => setShowSidebar(true)}>
        ☰ Filters
      </button>

      {showSidebar && (
        <div className="overlay" onClick={() => setShowSidebar(false)} />
      )}

      <div className="page">
        {/* ── SIDEBAR ─────────────────────────────────────────────────────── */}
        <aside className={`sidebar-cat ${showSidebar ? "open" : ""}`}>
          <button className="close-btn" onClick={() => setShowSidebar(false)}>✕</button>

          <h3>Category</h3>
          {CATEGORY_OPTIONS.map((cat) => (
            <label key={cat}>
              <input
                type="checkbox"
                checked={filters.category.includes(cat)}
                onChange={() => toggleFilter("category", cat)}
              />
              {cat}
            </label>
          ))}

          <h3>Form</h3>
          {FORM_OPTIONS.map((f) => (
            <label key={f}>
              <input
                type="checkbox"
                checked={filters.form.includes(f)}
                onChange={() => toggleFilter("form", f)}
              />
              {f}
            </label>
          ))}

          <h3>Type</h3>
          {TYPE_OPTIONS.map((t) => (
            <label key={t}>
              <input
                type="checkbox"
                checked={filters.type.includes(t)}
                onChange={() => toggleFilter("type", t)}
              />
              {t}
            </label>
          ))}
        </aside>

        {/* ── PRODUCT GRID ─────────────────────────────────────────────────── */}
        <div className="content">
          <div className="grid">
            {loading
              ? [...Array(8)].map((_, i) => <Skeleton key={i} />)
              : paginated.map((p) => {
                  const justAdded  = addedMap[p.id];
                  const alreadyIn  = isInCart(p.id);
                  const hasMrp     = p.price?.mrp && p.price?.offer;
                  const pct        = hasMrp ? discountPct(p.price.mrp, p.price.offer) : 0;

                  return (
                    <div className="card" key={p.id}>

                      {/* Form tag */}
                      <span className="tag">{p.forms?.[0]}</span>

                      {/* Discount badge */}
                      {hasMrp && pct > 0 && (
                        <span className="discount-badge">{pct}% OFF</span>
                      )}

                      {/* Image */}
                      <div
                        className="product-card-img"
                        onClick={() => navigate(`/product/${p.slug}`)}
                        style={{ cursor: "pointer" }}
                      >
                        <img src={p.image} alt={p.name} loading="lazy" />
                      </div>

                      {/* Name */}
                      <h4
                        onClick={() => navigate(`/product/${p.slug}`)}
                        className="card-name"
                      >
                        {p.name}
                      </h4>

                      {/* Price row */}
                      {hasMrp && (
                        <div className="price-row">
                          <span className="offer-price">₹{p.price.offer}</span>
                          <span className="mrp-price">₹{p.price.mrp}</span>
                        </div>
                      )}

                      {/* Action row */}
                      <div className="card-actions">
                        <button
                          className="view-btn"
                          onClick={() => navigate(`/product/${p.slug}`)}
                        >
                          View Product
                        </button>

                        <button
                          className={`cart-icon-btn ${justAdded ? "added" : ""} ${alreadyIn ? "in-cart" : ""}`}
                          onClick={(e) => handleAddToCart(p, e)}
                          title={alreadyIn ? "In cart" : "Add to cart"}
                        >
                          {justAdded
                            ? <Check size={16} strokeWidth={2.5} />
                            : <ShoppingCart size={16} strokeWidth={2} />
                          }
                        </button>
                      </div>

                    </div>
                  );
                })
            }
          </div>

          {/* PAGINATION */}
          <div className="pagination">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
            >
              Prev
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                className={i + 1 === currentPage ? "active" : ""}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;

// ── SKELETON ──────────────────────────────────────────────────────────────────
const Skeleton = () => (
  <div className="card skeleton">
    <div className="img" />
    <div className="text" />
    <div className="text small" />
    <div className="text small" style={{ width: "60%", margin: "8px auto 0" }} />
  </div>
);