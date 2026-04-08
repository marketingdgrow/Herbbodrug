import React, { Fragment } from "react";
import Hero from "../components/HeroSectionHomepage/Hero";
import HomeCategory from "../components/HomeCategory/HomeCategory";
import HomeProduct from "../components/HomeProduct/HomeProduct";
import Cta from "../components/CTA/Cta";

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <div class="section-2">
        <HomeCategory />
        <HomeProduct />
      </div>
      <Cta/>
    </Fragment>
  );
};

export default Home;
