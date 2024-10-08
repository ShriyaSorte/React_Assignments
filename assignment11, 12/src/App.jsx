import React from "react";
import {  Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Blog from './components/Blog';
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import About from "./components/About";
import ProductCatalog from "./components/ProductCatalog";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <>
      
        <Navbar />
        <Routes>
          <Route path="/home"  element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/blog/*" element={<Blog/>} />
          <Route path="/products" element={<ProductCatalog/>} />
          <Route path="/product/:id" element={<ProductDetail/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      
    </>
  );
}

export default App;
