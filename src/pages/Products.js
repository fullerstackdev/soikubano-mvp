// src/pages/Products.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Products() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/products.json')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading products", err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    // Filter by search term
    let filtered = products.filter(product =>
      product.strainFlavor.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Filter by category
    if (categoryFilter) {
      filtered = filtered.filter(product => product.category === categoryFilter);
    }

    // Sorting
    switch (sortOption) {
      case 'A-Z':
        filtered.sort((a, b) => a.strainFlavor.localeCompare(b.strainFlavor));
        break;
      case 'Z-A':
        filtered.sort((a, b) => b.strainFlavor.localeCompare(a.strainFlavor));
        break;
      default:
        // no sort or other sorts as needed
        break;
    }

    setFilteredProducts(filtered);
  }, [searchTerm, categoryFilter, sortOption, products]);

  return (
    <div className="products-page">
      <h1 className="products-title">Products</h1>

      {/* Search, Category Filter, Sort Controls */}
      <div className="product-controls">
        <input
          type="text"
          placeholder="Search by strain or flavor..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="product-search"
        />

        <select
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="product-filter"
        >
          <option value="">All Categories</option>
          <option value="510">510 Cartridge</option>
          <option value="All-in-One">All-in-One Cartridge</option>
          <option value="Purple Label">Purple Label Rosin</option>
          <option value="Black Label">Black Label Rosin</option>
          <option value="Flower">Infused Joint</option>
          <option value="Black Label">Soi Sauce</option>
        </select>

        <select
          onChange={(e) => setSortOption(e.target.value)}
          className="product-sort"
        >
          <option value="">Sort By</option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
          {/* Add more sort options if needed */}
        </select>
      </div>

      {loading && (
        <p className="products-loading">Loading products...</p>
      )}

      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <div key={product.id} className="product-card">
              <img
                src={product.image}
                alt={product.strainFlavor}
                className="product-image"
              />
              <h3 className="product-name">{product.strainFlavor}</h3>
              <p className="product-desc">
                {product.productType} - {product.category} - {product.size}
              </p>
              {/* No more quantity displayed here */}

              {/* Link to product detail */}
              <Link
                to={`/products/${product.id}`}
                className="btn product-detail-btn"
              >
                View Details
              </Link>
            </div>
          ))
        ) : (
          !loading && <p className="products-none">No products found.</p>
        )}
      </div>
    </div>
  );
}

export default Products;
