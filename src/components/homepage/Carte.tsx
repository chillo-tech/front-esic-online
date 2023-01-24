import {ApplicationContext} from 'context/ApplicationContext'
import React, {useContext} from 'react'
import {GoogleMap, Marker, withGoogleMap, withScriptjs} from "react-google-maps"


const MyMapComponent = withScriptjs(withGoogleMap((props: { isMarkerShown: any; }) =>
    <GoogleMap
        defaultZoom={8}
        defaultCenter={{lat: -34.397, lng: 150.644}}
    >
        {props.isMarkerShown && <Marker position={{lat: -34.397, lng: 150.644}}/>}
    </GoogleMap>
))

function Carte() {
    const {state} = useContext(ApplicationContext);

    return (
        <>
            <MyMapComponent
                isMarkerShown
                // googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDO8jbdTf30mE9Bg4bknk19JV2k90O4C-w&libraries=geometry,drawing,places&callback=Function.prototype"
                googleMapURL="http://maps.googleapis.com/maps/api/js?key=AIzaSyDO8jbdTf30mE9Bg4bknk19JV2k90O4C-w&callback=Function.prototype"
                // googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry&callback=Function.prototype"
                loadingElement={<div style={{height: `100%`}}/>}
                containerElement={<div style={{height: `400px`}}/>}
                mapElement={<div style={{height: `100%`}}/>}
            />

            {/*<section className='bg-app-white overflow-hidden lg:ml-10'>*/}
            {/*    <div className="mapouter !w-screen">*/}
            {/*        <div className="gmap_canvas !w-screen">*/}
            {/*            <iframe width="2000" height="458" id="gmap_canvas"*/}
            {/*                    src="https://maps.google.com/maps?q=36%20Av.%20Pierre%20Brossolette,%2092240%20Malakoff&t=&z=11&ie=UTF8&iwloc=&output=embed"*/}
            {/*                    frameBorder="0"></iframe>*/}
            {/*            <a href="https://123movies-to.org">123movies</a><br/>*/}
            {/*            <a href="https://www.embedgooglemap.net">embed custom google map</a>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}
        </>
    )
}

export default Carte