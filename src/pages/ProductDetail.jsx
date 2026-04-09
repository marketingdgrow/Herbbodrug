import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ProductDetail.css";
import Banner from "../components/Banner/Banner";

const ProductDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.slug === slug);
        setProduct(found);

        if (!found) return;

        // 🔥 RELATED PRODUCTS (same category)
        let relatedProducts = data.filter(
          (item) =>
            item.category === found.category && item.slug !== found.slug,
        );

        // 🔥 FALLBACK → RANDOM PRODUCTS
        if (relatedProducts.length === 0) {
          relatedProducts = data
            .filter((item) => item.slug !== found.slug)
            .sort(() => 0.5 - Math.random())
            .slice(0, 8);
        } else {
          relatedProducts = relatedProducts.slice(0, 8);
        }

        setRelated(relatedProducts);
      });
  }, [slug]);

  if (!product) return <h2>Loading...</h2>;

  const discount = product.price.mrp > product.price.offer;

  return (
    <>
      {/* BANNER */}
      <Banner title="Our Product" path={["Home", "Shop", "Product Details"]} />

      {/* MAIN PRODUCT */}
      <div className="product-detail">
        <div className="detail-container">
          {/* LEFT */}
          <div className="detail-left">
            <img src={product.image} alt={product.name} />
          </div>

          {/* RIGHT */}
          <div className="detail-right">
            <h2>{product.name}</h2>

            {/* <p className="price"> 
                
              {discount && <span className="old">₹{product.price.mrp}</span>}₹
              {product.price.offer}
            </p> */}

            <p className="desc">{product.description}</p>

            <p>
              <b>Dosage:</b> {product.dosage}
            </p>

            <p>
              <b>Category:</b> {product.category}
            </p>

            <p>
              <b>Composition:</b> {product.composition}
            </p>
            <p>
              <b>Indications:</b> {product.indications}
            </p>
          </div>
        </div>

        {/* 🔥 RELATED PRODUCTS */}
        <div className="related-section">
          <h3>Related Products</h3>

          <div className="related-grid">
            {related.map((item) => (
              <div className="related-card" key={item.id}>
                <div className="related-card-img">
                  <img src={item.image} alt={item.name} />
                </div>
                <h4>{item.name}</h4>
                {/* <p className="price">
                  ₹{item.price.offer}
                  <span className="mrp"> ₹{item.price.mrp}</span>
                </p> */}
                <button onClick={() => navigate(`/product/${item.slug}`)}>
                  View Product
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
