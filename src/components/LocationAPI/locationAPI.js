import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import EsriLeafletGeoSearch from "react-esri-leaflet/plugins/EsriLeafletGeoSearch";
import { ALL_LOCATION } from '../../utils/graphql';
import { Spinner } from 'react-bootstrap';
import { useQuery } from '@apollo/client';

const center = [10.94469, 106.82432];
const zoom = 12;



function Markers(props) {
    const location = props.locationData;
    const flatmateID = props.flatmateID;
    console.log(location.user.id);
    return (
        <>
            {(location.user.id === flatmateID) ? (
                <Circle center={[location.latitude, location.longitude]} radius={200} pathOptions={{ color: 'blue' }}>
                    <Marker position={[location.latitude, location.longitude]}>
                        <Popup>
                            <div className="d-flex flex-column">
                                <p style={{
                                    fontSize: '20px'
                                }}>
                                    {location.user.username}
                                </p>
                                <p style={{
                                    fontSize: '25px'
                                }}>
                                    <strong>{location.user.budget}vnd</strong>
                                </p>
                            </div>
                        </Popup>
                    </Marker>
                </Circle>
            ) : (
                <Marker position={[location.latitude, location.longitude]}>
                    <Popup>
                        <div className="d-flex flex-column">
                            <p style={{
                                fontSize: '20px'
                            }}>
                                {location.user.username}
                            </p>
                            <p style={{
                                fontSize: '25px'
                            }}>
                                <strong>{location.user.budget}vnd</strong>
                            </p>
                        </div>
                    </Popup>
                </Marker>
            )}

        </>
    )


}

function LocationAPI(props) {
    const { loading: positionLoading, data } = useQuery(ALL_LOCATION);
    const flatmateID = props.flatmateID;
    if (positionLoading) return <Spinner animation="border" />;

    console.log(data);
    const location = data?.allLocations;
    console.log(location);
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
                {location ? (
                    location.map((location, index) => {
                        return <Markers locationData={location} key={index} flatmateID={flatmateID} />
                    })) : ('')}
                <EsriLeafletGeoSearch useMapBounds={false} position="topright" />
            </MapContainer>
        </>
    )
}

export default LocationAPI;