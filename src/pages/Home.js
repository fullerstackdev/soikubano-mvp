// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Welcome to Soiku Bano</h1>
            <p>Experience the best Hash offerings in Colorado.</p>
            <Link to="/dispensaries" className="hero-cta">Find our Products!</Link>
          </div>
        </div>
      </section>

      {/* Dispensary Locator Section */}
      <section className="section">
        <div className="section-inner">
          <h2>Dispensary Locator</h2>
          <p>Find the nearest dispensary with our interactive map and filter by products or flavors.</p>
          <Link to="/dispensaries" className="btn">Find a Dispensary</Link>
        </div>
      </section>

      {/* Product Catalog Section */}
      <section className="section">
        <div className="section-inner">
          <h2>Product Catalog</h2>
          <p>Browse our extensive selection of premium cannabis products, each with detailed info and reviews.</p>
          <Link to="/products" className="btn">View Products</Link>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="section">
        <div className="section-inner">
          <h2>Our Cuban Roots</h2>
          <p>
            Discover the unique history and design influences behind Soiku Bano,
            inspired by vibrant Cuban culture and modern cannabis innovation.
          </p>
          <Link to="/about" className="btn">Learn More</Link>
        </div>
      </section>
    </>
  );
}

export default Home;
