/* eslint import/no-webpack-loader-syntax: off */

import React from "react";
import mbxGeocoding from '@mapbox/mapbox-sdk/services/geocoding';
import mapboxgl from '!mapbox-gl/dist/mapbox-gl.js';
import './Map.css';

const  PK_TOKEN_MAP  = "pk.eyJ1IjoiYWd1c3RpbmFyZW5hcyIsImEiOiJja3ZrMWp1dDBkMDdoMnBtYTVzNGs5eGlzIn0.-b5vu-xR5fvCib6EI-Z_9A";

mapboxgl.accessToken = PK_TOKEN_MAP;

export default function Map({ address }) {

    /* <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3175.9144539253894!2d-93.2850573!3d37.2497371!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87cf629e7ad3f35f%3A0xc7eb0fb7f8530349!2s742%20E%20Evergreen%20St%2C%20Springfield%2C%20MO%2065803%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1635216943191!5m2!1ses-419!2sar"
        width="600"
        height="450"
        allowfullscreen=""
        loading="lazy"
    >

    </iframe> */

    // paso el token
    const mapboxClient = mbxGeocoding({ accessToken: mapboxgl.accessToken });
    mapboxClient
        .forwardGeocode({
            // direccion
            query: address,
            autocomplete: false,
            limit: 1
        })
        .send()
        .then((response) => {
            if (
                !response ||
                !response.body ||
                !response.body.features ||
                !response.body.features.length
            ) {
                console.error('Invalid response:');
                console.error(response);
                return;
            }
            const feature = response.body.features[0];

            const map = new mapboxgl.Map({
                container: 'map',
                style: 'mapbox://styles/mapbox/streets-v11',
                center: feature.center,
                //Zoom de la ubicacion
                zoom: 15
            });

            // crea un marker y lo agrega al mapa.
            new mapboxgl.Marker().setLngLat(feature.center).addTo(map);
        });

    return <div id='map'></div>
}

