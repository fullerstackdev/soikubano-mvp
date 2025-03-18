// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className="navbar">
      <div className="nav-left">Soiku Bano</div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/dispensaries">Dispensaries</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/merch">Merch</Link>
        <Link to="/blog">Blog</Link>
      </div>
    </div>
  );
}

export default NavBar;
