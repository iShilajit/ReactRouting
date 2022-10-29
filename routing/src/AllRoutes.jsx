import React from 'react'
import { Route,  Routes } from 'react-router-dom'
import About from './About'
import Nav from './Nav'
import Shop from './Shop'

const AllRoutes = () => {
  return (
    <>
    <Nav/>
    <Routes>
        
        <Route path="/about" element={<About/>}/>
        <Route path="/shop" element={<Shop/>}/>
    </Routes>
    
    </>
  )
}

export default AllRoutes