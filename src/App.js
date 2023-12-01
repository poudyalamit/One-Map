import './App.css';
import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

function App() {
    const mapRef = useRef(null);

    useEffect(() => {
      // Create a Leaflet map instance if it doesn't exist
      if (!mapRef.current) {
        mapRef.current = L.map('map').setView([51.505, -0.09], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap contributors',
        }).addTo(mapRef.current);
      }
    }, []); 
  return (
    <div id="map" style={{ height: '100vh', width: '100%' }}></div>
  );
}

export default App;
