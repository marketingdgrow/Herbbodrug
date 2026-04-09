import { useEffect, useState } from "react";
import "./products.css";
import { useNavigate } from "react-router-dom";
import Banner from "../components/Banner/Banner";

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
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: [],
    form: [],
    type: [],
  });
  // const { slug } = useParams();
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [showSidebar, setShowSidebar] = useState(false);
  const navigate = useNavigate();
  const perPage = 12;

  // FETCH DATA
  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  // FILTER
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
    const normalizedType = normalizeFilterValue(p.productType);
    const normalizedForms = productForms.map(normalizeFilterValue);

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

  // PAGINATION
  const totalPages = Math.ceil(filtered.length / perPage);
  const start = (currentPage - 1) * perPage;
  const paginated = filtered.slice(start, start + perPage);

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

  return (
    <>
      <Banner title="Our Product " path={["Home", "Shop"]} />
      {/* MOBILE FILTER BUTTON */}
      <button className="filter-btn" onClick={() => setShowSidebar(true)}>
        ☰ Filters
      </button>

      {/* OVERLAY */}
      {showSidebar && (
        <div className="overlay" onClick={() => setShowSidebar(false)}></div>
      )}

      <div className="page">
        {/* SIDEBAR */}
        <aside className={`sidebar-cat ${showSidebar ? "open" : ""}`}>
          <button className="close-btn" onClick={() => setShowSidebar(false)}>
            ✕
          </button>

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

        {/* CONTENT */}
        <div className="content">
          {/* <div className="product-titles">
            <h2 className="homecategory-title"></h2>
            <p className="homecategory-subtitle">
              Explore targeted Ayurvedic solutions for every health need
            </p>
          </div> */}
          <div className="grid">
            {loading
              ? [...Array(6)].map((_, i) => <Skeleton key={i} />)
              : paginated.map((p) => (
                  <div className="card" key={p.id}>
                    <span className="tag">{p.forms?.[0]}</span>

                    <div className="product-card-img">
                      <img src={p.image} alt={p.name} />
                    </div>

                    <h4>{p.name}</h4>

                    {/* <p className="price">
                      ₹{p.price.offer}
                      <span className="mrp"> ₹{p.price.mrp}</span>
                    </p> */}

                    <button
                      className="filled"
                      onClick={() => navigate(`/product/${p.slug}`)}
                    >
                      View Product
                    </button>
                  </div>
                ))}
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

// SKELETON
const Skeleton = () => {
  return (
    <div className="card skeleton">
      <div className="img"></div>
      <div className="text"></div>
      <div className="text small"></div>
    </div>
  );
};
