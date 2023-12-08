import React from 'react'
import 'leaflet/dist/leaflet.css';
import { LayersControl, MapContainer, TileLayer } from 'react-leaflet';
// require('dotenv').config();
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

            <LayersControl position='topright'>
                <LayersControl.BaseLayer name='satellite'>
                <TileLayer url='https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}'/>
                </LayersControl.BaseLayer>

                <LayersControl.BaseLayer name='OSM'>
                <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'/>
                </LayersControl.BaseLayer>
            </LayersControl>
        </MapContainer>
    );

}

export default Map
