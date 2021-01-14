import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import EsriLeafletGeoSearch from "react-esri-leaflet/plugins/EsriLeafletGeoSearch";


const center = [10.94469, 106.82432];
const zoom = 12;



function Markers(props) {
    const locations = props.locationData;
    const location = locations.location;
    console.log(location);
    return (
        <>
            {location === null ?
                ('') : (<Marker position={[location.latitude, location.longitude]}>
                    <Popup> {location.user.username}</Popup>
                </Marker>)
            }

        </>
    )

}

function LocationAPI(props) {
    return (
        <>
            <MapContainer
                className='width-50rem'
                center={center}
                zoom={zoom}
                scrollWheelZoom={false}
                whenCreated={(map => setInterval(() => { map.invalidateSize() }, 100))}
                style={{ maxWidth: '100%', height: '100%' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy;<a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                {props.userData?.users.map((location, index) => {
                    return <Markers locationData={location} key={index} />
                })}
                <EsriLeafletGeoSearch useMapBounds={false} position="topright" />
            </MapContainer>
        </>
    )
}

export default LocationAPI;