import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import SideNav from "./components/SideNav/SideNav";
import CartPage from './pages/CartPage';

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProductDetail from "./pages/ProductDetail";
import Footer from "./components/Footer/Footer";
import Products from "./pages/products";
import Whitelabel from "./pages/Whitelabel";
import Directsale from "./pages/Directsale";
import Franchise from "./pages/Franchise";
import Cosmetic from "./pages/Cosmetic";
import General from "./pages/General";
import Pattern from "./pages/Pattern";
import Siddha from "./pages/Siddha";



const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
       <SideNav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:slug" element={<ProductDetail />} />
        <Route path="/whitelabel" element={<Whitelabel />} />
        <Route path="/directsale" element={<Directsale />} />
        <Route path="/franchise" element={<Franchise />} />
        <Route path="/pattern" element={<Pattern />} />
        <Route path="/cosmetic" element={<Cosmetic />} />
        <Route path="/general" element={<General />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/siddha" element={<Siddha />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
