import { useMutation } from '@apollo/client';
import React, { useState, useRef, useMemo, useCallback } from 'react'
import { Spinner } from 'react-bootstrap';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import { FM_CREATE_LOCATION, FM_UPDATE_LOCATION } from '../../utils/mutation';
import { Button } from 'semantic-ui-react';
import { ALL_LOCATION } from '../../utils/graphql';


function DraggableMarker({ center }) {
  const [draggable, setDraggable] = useState(false)
  const [position, setPosition] = useState(center)
  const markerRef = useRef(null)
  const map = useMapEvents({
    click() {
      map.locate()
    },
    locationfound(e) {
      setPosition(e.latlng)
      map.flyTo(e.latlng, map.getZoom())
    },
  }

  )


  const eventHandlers = useMemo(
    () => ({

      dragend() {
        const marker = markerRef.current
        if (marker != null) {
          setPosition(marker.getLatLng())
        }
      },
    }),
    [draggable],
  )
  const toggleDraggable = useCallback(() => {
    setDraggable((d) => !d)
  }, [])
  console.log(map.getCenter());

  return (

    <Marker
      draggable={draggable}
      eventHandlers={eventHandlers}
      position={position}
      ref={markerRef}>

      <Popup minWidth={90}>
        <span onClick={toggleDraggable}>
          {draggable
            ? 'Marker is draggable'
            : 'Click here to make marker draggable'}
        </span>
      </Popup>
    </Marker>
  )
}

function LocationPoint(props) {
  const isEdit = props.isEdit;
  const center = [10.94469, 106.82432];
  const zoom = 14;
  const locationData = props.flatmateData;
  const { location } = locationData.getUser;
  const [values, setValues] = useState(null)
  const [errors, setErrors] = useState({});
  const [map, SetMap] = useState(null);


  const onSave = async (e) => {
    e.preventDefault();
    await setValues(map.getCenter())
    createLocation();
    setValues('');
  }

  const [createLocation, { error, loading }] = useMutation(FM_CREATE_LOCATION, {
    update(_, result) {
      console.log(result + 'abc');
    },
    onError(err) {
      const errorFound = (err.graphQLErrors[0].extensions.exception.errors);
      console.log(errorFound);
      setErrors(errorFound)

    },
    variables: {
      latitude: values?.lat,
      longitude: values?.lng
    },
    refetchQueries: [{
      query: ALL_LOCATION
    }]
  });

  const onUpdate = async (e) => {
    e.preventDefault();
    await setValues(map.getCenter())
    updateLocation()
    setValues('')
  }

  const [updateLocation] = useMutation(FM_UPDATE_LOCATION, {
    variables: {
      id: location?.id,
      latitude: values?.lat,
      longitude: values?.lng
    },
    update(_, result) {
      console.log(result);
    },
    refetchQueries: [
      {
        query: ALL_LOCATION,
      }
    ]
  })

  if (error) {
    const parseError = JSON.stringify(errors);
    alert(parseError)
  }

  const position = location ? [location.latitude, location.longitude] : center

  return (
    <>
      {loading.latitude ? (<Spinner />) : (
        <>
          {isEdit && (
            <div className="container-row mb-1rem">
              {location ? (
                <Button onClick={onUpdate} primary>Update</Button>
              ) : (
                <Button primary onClick={onSave}>Save</Button>
              )}
            </div>
          )}

          <MapContainer
            className='width-50rem'
            center={position}
            zoom={zoom}
            scrollWheelZoom={false}
            whenCreated={(map => setInterval(() => { map.invalidateSize() }, 150)), map ? map : SetMap}
            style={{ width: '100%', height: '100%' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy;<a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <DraggableMarker center={position} />
          </MapContainer>
        </>
      )
      }
    </>

  )
}
export default LocationPoint