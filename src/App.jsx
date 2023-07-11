import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid'; 
import Navbar from './Components/Navbar';
// import Sidebar from './components/Sidebar';
import Map from './Components/Map';
import Sidebar from './Components/Sidebar'
import { useState,useEffect } from 'react';
import { getPlaceData } from './api';


const App = () =>{
const [places, setplaces] = useState([]);

useEffect(()=>{
  getPlaceData().then((data)=>{
    console.log(data);
    setplaces(data);
  })
},[]);


  return (<>
    <CssBaseline/>
<Navbar/>
<Grid style={{width:'100%'}} container spacing= {3}>
<Grid item xs={12} md={4}>
<Sidebar></Sidebar>
</Grid>
<Grid item xs={12} md={8}>
<Map></Map>
</Grid>

</Grid>
</> )
}

export default App