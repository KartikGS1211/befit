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
          <ul class="nav-list">
            <li className="nav-item"><Link to="/home" className="nav-link">Home</Link>
            <span class="underline"></span></li>
            <li className="nav-item"><Link to="/about" className="nav-link">About</Link>
            <span class="underline"></span></li>
            <li className="nav-item"><Link to="/user" className="nav-link">User</Link>
            <span class="underline"></span></li>
            <li className="nav-item"><Link to="/login" className="signup-btn">Login</Link>
            <span class="underline"></span></li>
          </ul>
        </nav>
        
      </header>
    
    </>
  )
}

export default navbar;
