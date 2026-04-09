import React, { useEffect, useRef } from "react";
import "./HomeCategory.css";

const HomeCategory = () => {
  const sliderRef = useRef(null);
  const nextRef = useRef(null);
  const prevRef = useRef(null);

  let scrollAmount = 0;
  let autoSlide;
  const itemWidth = 170;

  const updateSlider = () => {
    sliderRef.current.style.transform = `translateX(-${scrollAmount}px)`;
  };

  const startAutoSlide = () => {
    autoSlide = setInterval(() => {
      const maxScroll =
        sliderRef.current.scrollWidth - sliderRef.current.clientWidth;

      if (scrollAmount + itemWidth >= maxScroll) {
        scrollAmount = 0;
      } else {
        scrollAmount += itemWidth;
      }

      updateSlider();
    }, 2500);
  };

  const stopAutoSlide = () => {
    clearInterval(autoSlide);
  };

  useEffect(() => {
    const slider = sliderRef.current;
    const nextBtn = nextRef.current;
    const prevBtn = prevRef.current;

    /* NEXT */
    const nextClick = () => {
      const maxScroll = slider.scrollWidth - slider.clientWidth;

      if (scrollAmount + itemWidth <= maxScroll) {
        scrollAmount += itemWidth;
      } else {
        scrollAmount = maxScroll;
      }

      updateSlider();
    };

    /* PREV */
    const prevClick = () => {
      if (scrollAmount - itemWidth >= 0) {
        scrollAmount -= itemWidth;
      } else {
        scrollAmount = 0;
      }

      updateSlider();
    };

    nextBtn.addEventListener("click", nextClick);
    prevBtn.addEventListener("click", prevClick);

    /* HOVER */
    slider.addEventListener("mouseenter", stopAutoSlide);
    slider.addEventListener("mouseleave", startAutoSlide);

    nextBtn.addEventListener("mouseenter", stopAutoSlide);
    prevBtn.addEventListener("mouseenter", stopAutoSlide);

    nextBtn.addEventListener("mouseleave", startAutoSlide);
    prevBtn.addEventListener("mouseleave", startAutoSlide);

    /* INIT */
    startAutoSlide();

    /* RESIZE */
    const handleResize = () => {
      const maxScroll = slider.scrollWidth - slider.clientWidth;

      if (scrollAmount > maxScroll) {
        scrollAmount = maxScroll;
        updateSlider();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(autoSlide);
      window.removeEventListener("resize", handleResize);

      nextBtn.removeEventListener("click", nextClick);
      prevBtn.removeEventListener("click", prevClick);
    };
  }, []);

  return (
    <section className="homecategory-section">
      <div className="homecategory-container">
        <h2 className="homecategory-title">Our Product Categories</h2>
        <p className="homecategory-subtitle">
          Explore targeted Ayurvedic solutions for every health need
        </p>

        <div className="homecategory-slider-wrapper">
          <button className="homecategory-btn prev" ref={prevRef}>
            &#10094;
          </button>

          <div
            className="homecategory-slider"
            id="homecategorySlider"
            ref={sliderRef}
          >
            <div className="homecategory-item">
              <img src="/imgs/home-page/joint pain.jpg" alt="" />
              <h4>Pain & Arthritis</h4>
            </div>

            <div className="homecategory-item">
              <img src="/imgs/home-page/Neuro Surge.jpg" alt="" />
              <h4>Neurological</h4>
            </div>

            <div className="homecategory-item">
              <img src="/imgs/home-page/Chest Infections.jpg" alt="" />
              <h4>Cardiac & Blood</h4>
            </div>

            <div className="homecategory-item">
              <img src="/imgs/home-page/Diabetes.jpg" alt="" />
              <h4>Diabetes</h4>
            </div>

            <div className="homecategory-item">
              <img src="/imgs/home-page/Kidney.jpg" alt="" />
              <h4>Kidney Care</h4>
            </div>

            <div className="homecategory-item">
              <img src="/imgs/home-page/Liver.jpg" alt="" />
              <h4>Liver Care</h4>
            </div>

            <div className="homecategory-item">
              <img src="/imgs/home-page/heart attack.jpg" alt="" />
              <h4>Respiratory</h4>
            </div>

            <div className="homecategory-item">
              <img src="/imgs/home-page/digestive system.jpg" alt="" />
              <h4>Digestive</h4>
            </div>

            <div className="homecategory-item">
              <img src="/imgs/home-page/family.jpg" alt="" />
              <h4>Lifestyle</h4>
            </div>

            <div className="homecategory-item">
              <img src="/imgs/home-page/Pigmentation.jpg" alt="" />
              <h4>Skin Care</h4>
            </div>

            <div className="homecategory-item">
              <img src="/imgs/home-page/PCOD.jpg" alt="" />
              <h4>Women’s Health</h4>
            </div>

            <div className="homecategory-item">
              <img src="/imgs/home-page/Hair.jpg" alt="" />
              <h4>Hair Care</h4>
            </div>

            <div className="homecategory-item">
              <img src="/imgs/home-page/Piles.jpg" alt="" />
              <h4>Piles Care</h4>
            </div>
          </div>

          <button className="homecategory-btn next" ref={nextRef}>
            &#10095;
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeCategory;
