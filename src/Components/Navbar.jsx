import React from 'react'
import './App.css'
function Navbar() {
  return (
    <div className="topnav">
    <a className="active" href="#home">Travel advisor</a>
   
   <div className="searchText">
   <button type="submit" className='submit'>Submit</button>
    <input type="text" placeholder="Search.."/>
   
   </div> 
  </div>
  )
}

export default Navbar