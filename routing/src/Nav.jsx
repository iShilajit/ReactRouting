import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
   <nav className="nav">
    <h3>logo</h3>
    <ul className="navlink">
        <Link to="/about"> <li>About</li></Link>
        <Link to="/shop">
        <li>Shop</li> </Link>
       
    </ul>
   </nav>
    </>
  )
}

export default Nav