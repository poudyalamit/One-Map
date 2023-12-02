import React, { useEffect, useRef } from 'react'
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
    const mapRef = useRef(null);
    useEffect(() => {
        if (!mapRef.current) {
            mapRef.current = L.map('map').setView([27.7172, 85.3240], 13);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© OpenStreetMap contributors',
                maxZoom:30
            }).addTo(mapRef.current);
        }
    }, []);
    return (
        <div id="map" style={{ height: '100vh', width: '100%' }}></div>
    );
}

export default Map
