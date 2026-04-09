import React, { useEffect, useState } from "react";
import "./HomeProduct.css";
import { Link } from "react-router-dom";

const HomeProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.slice(0, 8)); 
      })
      .catch((err) => console.log(err));
  }, []);

  const addToCart = (product) => {
    console.log("Added:", product.name, product.price.offer);
  };

  return (
    <section className="homeproduct-section">
      <div className="homeproduct-container">
        <div className="homeproduct-header">
          <h2 className="hero-product-title">
            Trending Ayurvedic <br /> Products
          </h2>
          <Link to="/products">See All Products →</Link>
        </div>

        <div className="homeproduct-grid" id="productGrid">
          {products.map((item) => {
            const discount = item.price.mrp > item.price.offer;

            return (
              <div
                key={item.id}
                className="homeproduct-card"
                data-category={item.category}
              >
                {/* ✅ Image */}
                <div className="home-product-image">
                  <img src={item.image} alt={item.name} />
                </div>

                {/* ✅ Name */}
                <h4>{item.name}</h4>

                {/* ✅ Price */}

                {/* <p className="price">
                  {discount && <span className="old">₹{item.price.mrp}</span>}₹
                  {item.price.offer}
                </p>  */}

                {/* ✅ Button */}
                <Link to={`/product/${item.slug}`}>
                  <button>View Product</button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeProduct;
