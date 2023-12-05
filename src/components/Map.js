import React from 'react'
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer } from 'react-leaflet';
const Map = () => {
    return (
        <MapContainer
            id="map"
            style={{ height: '100vh', width: '100%' }}
            center={[27.7172, 85.3240]}
            zoom={13}
            zoomControl={false}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='© OpenStreetMap contributors'
                maxZoom={30}
            />
        </MapContainer>
    );

}

export default Map
