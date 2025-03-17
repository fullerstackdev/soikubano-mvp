// src/pages/Dispensaries.js
import React from 'react';
import MapComponent from '../components/Map';

function Dispensaries() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Dispensaries</h1>
      <p>This page showcases an interactive map with dispensary locations.</p>
      <MapComponent />
    </div>
  );
}

export default Dispensaries;
