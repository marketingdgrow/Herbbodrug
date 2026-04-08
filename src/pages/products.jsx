import { useEffect, useState } from "react";
import "./products.css";
import { useNavigate } from "react-router-dom";
import Banner from "../components/Banner/Banner";
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
    const catMatch =
      filters.category.length === 0 || filters.category.includes(p.category);

    const formMatch =
      filters.form.length === 0 ||
      (p.forms && p.forms.some((f) => filters.form.includes(f)));

    const typeMatch =
      filters.type.length === 0 || filters.type.includes(p.productType);

    return catMatch && formMatch && typeMatch;
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
          {[
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
          ].map((cat) => (
            <label key={cat}>
              <input
                type="checkbox"
                onChange={() => toggleFilter("category", cat)}
              />
              {cat}
            </label>
          ))}

          <h3>Form</h3>
          {["Tablet", "Capsule", "Syrup", "Liquid"].map((f) => (
            <label key={f}>
              <input type="checkbox" onChange={() => toggleFilter("form", f)} />
              {f}
            </label>
          ))}

          <h3>Type</h3>
          {["Chronic Disease", "General Wellness", "Acute Relief"].map((t) => (
            <label key={t}>
              <input type="checkbox" onChange={() => toggleFilter("type", t)} />
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

                    <p className="price">
                      ₹{p.price.offer}
                      <span className="mrp"> ₹{p.price.mrp}</span>
                    </p>

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
