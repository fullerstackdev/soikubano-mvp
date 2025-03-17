// src/pages/Dispensaries.js
import React from 'react';
import MapComponent from '../components/Map';

function Dispensaries() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Dispensaries</h1>
      <p>This page showcases an interactive map with dispensary locations.</p>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        border: '1px solid #ddd',
        padding: '10px',
        borderRadius: '4px'
      }}>
        <MapComponent />
      </div>
    </div>
  );
}

export default Dispensaries;
