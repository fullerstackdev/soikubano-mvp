// src/components/Map.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import dispensaries from '../data/dispensaries.json';

// Configure Leaflet default marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const MapComponent = () => {
  return (
    <MapContainer 
      center={[39.5501, -105.7821]} // Center of Colorado
      zoom={8}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {dispensaries.map((d, index) => (
        <Marker key={index} position={[d.lat, d.lng]}>
          <Popup>
            <strong>{d.name}</strong>
            <br />
            {d.street}, {d.city}, {d.state} {d.zip}
            {d.phone && (
              <>
                <br />
                Phone: {d.phone}
              </>
            )}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
