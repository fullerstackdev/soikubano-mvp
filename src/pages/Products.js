// src/pages/Products.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Products() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [sortOption, setSortOption] = useState('');

  useEffect(() => {
    fetch('/data/products.json')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch((err) => console.error("Error loading products", err));
  }, []);

  // Handle Search
  useEffect(() => {
    let filtered = products.filter(product =>
      product.strainFlavor.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (categoryFilter) {
      filtered = filtered.filter(product => product.category === categoryFilter);
    }

    if (sortOption === 'A-Z') {
      filtered.sort((a, b) => a.strainFlavor.localeCompare(b.strainFlavor));
    } else if (sortOption === 'Z-A') {
      filtered.sort((a, b) => b.strainFlavor.localeCompare(a.strainFlavor));
    } else if (sortOption === 'Low-High') {
      filtered.sort((a, b) => a.quantity - b.quantity);
    } else if (sortOption === 'High-Low') {
      filtered.sort((a, b) => b.quantity - a.quantity);
    }

    setFilteredProducts(filtered);
  }, [searchTerm, categoryFilter, sortOption, products]);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Products</h1>

      {/* Search, Filter & Sort Controls */}
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Search by strain or flavor..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ padding: '8px', width: '250px', marginRight: '10px' }}
        />

        <select onChange={(e) => setCategoryFilter(e.target.value)} style={{ padding: '8px', marginRight: '10px' }}>
          <option value="">All Categories</option>
          <option value="Flower">Flower</option>
          <option value="510">510 Cartridge</option>
          <option value="All-in-One">All-in-One Cartridge</option>
          <option value="Black Label">Black Label</option>
          <option value="Purple Label">Purple Label</option>
        </select>

        <select onChange={(e) => setSortOption(e.target.value)} style={{ padding: '8px' }}>
          <option value="">Sort By</option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
          <option value="Low-High">Quantity (Low-High)</option>
          <option value="High-Low">Quantity (High-Low)</option>
        </select>
      </div>

      {/* Product Grid */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            style={{
              border: '1px solid #ddd',
              borderRadius: '4px',
              width: '250px',
              padding: '10px',
              background: '#fff'
            }}
          >
            <img
              src={product.image}
              alt={product.strainFlavor}
              style={{ width: '100%', borderRadius: '4px', height: '150px', objectFit: 'cover' }}
            />
            <h2 style={{ color: '#800080', fontSize: '1.2em' }}>{product.strainFlavor}</h2>
            <p>{product.productType} - {product.category} - {product.size}</p>
            <p>Quantity: {product.quantity}</p>
            <Link to={`/products/${product.id}`} style={{ color: '#008000', fontWeight: 'bold' }}>
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
