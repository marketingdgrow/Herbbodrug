import React, { Fragment } from "react";
import Hero from "../components/HeroSectionHomepage/Hero";
import HomeCategory from "../components/HomeCategory/HomeCategory";
import HomeProduct from "../components/HomeProduct/HomeProduct";
import ProductCategories from "../components/ProductCategories/ProductCategories";
import Cta from "../components/CTA/Cta";
import BusinessOpportunities from "../components/BusinessOpportunities/BusinessOpportunities";

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <div className="section-2">
        <HomeCategory />
        <HomeProduct />
      </div>
       <ProductCategories />
      <BusinessOpportunities />
      <Cta />
    </Fragment>
  );
};

export default Home;