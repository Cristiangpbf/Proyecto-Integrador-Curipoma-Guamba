import React from 'react'
import {
    GoogleMap,
    Marker,
    withScriptjs,
    withGoogleMap
} from 'react-google-maps'

//-0.182830, -78.484377
const Map=(props)=>{
    return(
        <GoogleMap
            defaultZoom={15}
            defaultCenter={{lat: -0.182830, lng: -78.484377}}
        >
            <Marker
                position={{ lat: -0.182830, lng: -78.484377 }}
            />
        </GoogleMap>
    );
}

export default withScriptjs(
    withGoogleMap(Map)
)