// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AgeGate from './components/AgeGate';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Dispensaries from './pages/Dispensaries';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import Merch from './pages/Merch';
import Blog from './pages/Blog';

function App() {
  return (
    <BrowserRouter>
      <AgeGate />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dispensaries" element={<Dispensaries />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/merch" element={<Merch />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
