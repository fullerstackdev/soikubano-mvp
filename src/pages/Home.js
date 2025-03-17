// src/pages/Home.js
import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <header className="hero">
        <h1 className="hero-title">Welcome to Soiku Bano</h1>
        <p className="hero-tagline">
          Experience the Cuban flair and quality cannabis in Colorado.
        </p>
        <button className="hero-button">Explore Our Dispensaries</button>
      </header>
      <section className="features">
        <div className="feature">
          <h2>Dispensary Locator</h2>
          <p>Find the nearest dispensary with our interactive map.</p>
        </div>
        <div className="feature">
          <h2>Product Catalog</h2>
          <p>Browse our extensive selection of premium cannabis products.</p>
        </div>
        <div className="feature">
          <h2>Brand Experience</h2>
          <p>Discover the rich history and Cuban-inspired design of Soiku Bano.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
