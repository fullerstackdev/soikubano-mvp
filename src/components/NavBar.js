// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav style={{ background: '#eee', padding: '10px' }}>
      <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
      <Link to="/dispensaries" style={{ marginRight: '10px' }}>Dispensaries</Link>
      <Link to="/products" style={{ marginRight: '10px' }}>Products</Link>
      <Link to="/about" style={{ marginRight: '10px' }}>About</Link>
      <Link to="/contact" style={{ marginRight: '10px' }}>Contact</Link>
      <Link to="/merch" style={{ marginRight: '10px' }}>Merch</Link>
      <Link to="/blog">Blog</Link>
    </nav>
  );
}

export default NavBar;
