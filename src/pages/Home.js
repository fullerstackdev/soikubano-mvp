// src/pages/Home.js
import React from 'react';

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Welcome to Soiku Bano</h1>
            <p>Experience the best Hash offerings in Colorado.</p>
            <a href="/dispensaries" className="hero-cta">Explore Our Dispensaries</a>
          </div>
        </div>
      </section>

      {/* Dispensary Locator Section */}
      <section className="section">
        <div className="section-inner">
          <h2>Dispensary Locator</h2>
          <p>Find the nearest dispensary with our interactive map and filter by products or flavors.</p>
          <a href="/dispensaries" className="btn">Find a Dispensary</a>
        </div>
      </section>

      {/* Product Catalog Section */}
      <section className="section">
        <div className="section-inner">
          <h2>Product Catalog</h2>
          <p>Browse our extensive selection of premium cannabis products, each with detailed info and reviews.</p>
          <a href="/products" className="btn">View Products</a>
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
          <a href="/about" className="btn">Learn More</a>
        </div>
      </section>
    </>
  );
}

export default Home;
