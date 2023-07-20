import React from 'react';
import GoogleMapReact from 'google-map-react';
import LocationPin from './LocationPin';
import SearchBar from '../uiReusables/SearchBar';
import './map.css';

export default function Map({ location, zoomLevel }) {
    return (
        <div className="google-map">
            <SearchBar/>
            <GoogleMapReact
                bootstrapURLKeys={{ key: '' }}
                defaultCenter={location}
                defaultZoom={zoomLevel}
            >
                <LocationPin
                    lat={location.lat}
                    lng={location.lng}
                    text={location.address}
                />
            </GoogleMapReact>
        </div>
    );
}