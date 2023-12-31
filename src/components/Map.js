import React from 'react'
import 'leaflet/dist/leaflet.css';
import { LayersControl, MapContainer, TileLayer, WMSTileLayer } from 'react-leaflet';
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
            {/* <WMSTileLayer 
           url="https://mangomap.com/onemapnepal/maps/141796/district"
           version="2.20.1"
           opacity={1}
           transparent
           layers={"PropsureWndb:sqlrouteviews"}
           srs="EPSG:4326"
           format="image/png"
          /> */}

            <LayersControl position='topright'>
                <LayersControl.BaseLayer name='satellite'>
                <TileLayer url='https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'/>
                </LayersControl.BaseLayer>
                
                <LayersControl.BaseLayer name='OSM'>
                <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'/>
                </LayersControl.BaseLayer>
            </LayersControl>
        </MapContainer>
    );

}

export default Map
