// src/pages/Dispensaries.js
import React, { useEffect, useState } from 'react';
import MapComponent from '../components/Map';

function Dispensaries() {
  const [dispensaries, setDispensaries] = useState([]);

  useEffect(() => {
    // Fetch the dispensaries data from your JSON
    fetch('/data/dispensaries.json')
      .then((res) => res.json())
      .then((data) => setDispensaries(data))
      .catch((err) => console.error("Error loading dispensaries", err));
  }, []);

  return (
    <div className="dispensaries-page">
      {/* Hero / Heading Section */}
      <section className="dispensaries-hero">
        <h1 className="dispensaries-title">Where to Buy Soiku Bano</h1>
        <p className="dispensaries-subtitle">
          Find our premium products in person at these locations!
        </p>
      </section>

      {/* Map Section */}
      <section className="dispensaries-map">
        {/* Reusing your existing Map component */}
        <MapComponent />
      </section>

      {/* List of Dispensaries (Optional) */}
      <section className="dispensaries-list">
        <h2 className="dispensaries-list-title">Our Partner Dispensaries</h2>
        <div className="dispensaries-grid">
          {dispensaries.length > 0 ? (
            dispensaries.map((d) => (
              <div key={d.id} className="dispensary-card">
                <h3 className="dispensary-name">{d.name}</h3>
                <p className="dispensary-address">
                  {d.street}, {d.city}, {d.state} {d.zip}
                </p>
                {d.phone && (
                  <p className="dispensary-phone">Phone: {d.phone}</p>
                )}
                {/* Link to a potential dispensary detail page if you have one */}
                {/* <Link to={`/dispensaries/${d.id}`} className="btn">View Details</Link> */}
              </div>
            ))
          ) : (
            <p className="dispensaries-none">No dispensaries found.</p>
          )}
        </div>
      </section>
    </div>
  );
}

export default Dispensaries;
