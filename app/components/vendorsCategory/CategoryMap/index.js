/**
*
* CategoryMap
*
*/

import React from 'react';
import { GoogleMap, GoogleMapLoader, Marker } from 'react-google-maps';

const MAP_OPTIONS = {
  scrollwheel: false,
}

export default function CategoryMap(props) {
  return (
    <section style={{height: "100%"}}>
      <GoogleMapLoader
        containerElement={
          <div
            style={{
              height: "100%",
            }}
          />
        }
        googleMapElement={
          <GoogleMap
            ref={(map) => console.log(map)}
            defaultZoom={3}
            defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
            onClick={props.onMapClick}
            options={MAP_OPTIONS}
          >
            {props.markers.map((marker, index) => {
              return (
                <Marker
                  {...marker}
                />
              );
            })}
          </GoogleMap>
        }
      />
    </section>
  );
}
