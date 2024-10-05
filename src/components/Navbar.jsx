import React from 'react'
import "./navbar.css"

import logoimage from '../assets/images/logo-image.jpg';
import { Link } from 'react-router-dom';
const navbar = () => {
  

  
  return (
    <>
     {/* Header Section  */}
    <header className="navbar">
      
        <div className="logo">
        <div >
            <img src={logoimage} alt="logo" className='img1' />
          </div>
          <div className="text"><span className="red"> BEFIT </span> FITNESS </div>
          </div>
        <nav>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/user">User</Link></li>
            <li><Link to="/login" className="signup-btn">Login</Link></li>
          </ul>
        </nav>
      </header>
    
    </>
  )
}

export default navbar;
