import React from 'react'
import "./footer.css"

import instagramlogo from '../assets/images/instagramlogo.png'
import linkdinlogo from '../assets/images/linkdinlogo.png'
const footer = () => {
  return (
    <div>
      {/* Footer Section */}
      <footer>
        <div className="text">
        <p className="content">Stronger <span className="highlight">Every</span> Day</p>
        <div className="social-icons">
          <a href="#instagram"><img src={instagramlogo} alt="Instagram" /></a>
          <a href="#linkedin"><img src={linkdinlogo} alt="LinkedIn" /></a>
        </div>
        </div>
        <div>
        <p className="privacy">
          <a href="#privacy" >Privacy & Policy </a></p>
        </div>
      </footer>
      
    </div>
  )
}

export default footer
