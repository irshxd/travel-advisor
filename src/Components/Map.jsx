import React, { useState } from 'react'
import mapboxgl from 'mapbox-gl';
import ReactMapGl from 'react-map-gl'
import { Paper,Typography,useMediaQuery } from '@mui/material'
import 'mapbox-gl/dist/mapbox-gl.css';

function Map() {
  const [view,setView]=useState({
    latitude:28.6448,longitude:77.216,zoom:6,
  })
    // const coordinates= {latitude:28.6448,longitude:77.216};
  return (
    <div className="mapConainer">
      <ReactMapGl
      {...view}
 mapboxAccessToken='pk.eyJ1IjoiaXgtaXJzaGFkIiwiYSI6ImNsang4bWlybzB4eTEzaW4xbGY5M2JheDkifQ.Ev9aXrDivjWQdVaIMvuhLg'
// defaultCenter={coordinates}
// center={coordinates}
// defaultZoom={12}`npm run 
margin={[50,50,50,50]}
mapStyle={'mapbox://styles/ix-irshad/cljx8w3f1000y01o82kf8258q'}
width='100%' height='100%' transitionDuration='200' >
</ReactMapGl>

    </div>
  );
}

export default Map