import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import handimage from '../assets/images/handimage.jpg';
import dumbbelllogo from '../assets/images/dumbbelllogo.png';
import dumbimage from '../assets/images/dumbimage.png';
import befitlogo from '../assets/images/befitlogo.jpg';
import Navbar from './Navbar'
import Footer from './Footer'

const HomePage = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="homepage">
      <div className="overlay">
        <div className="text-container">
        <h1>TRAIN LIKE A
             <span className="highlight">  CHAMPION</span></h1>
          <div className="services">
          <div><img src={handimage} alt="handimage" className="hand" /></div>
            <span>BOXING</span>
            <div><img src={dumbbelllogo} alt="dumbbelllogo" className="dumbbell" /></div>
            <span>WEIGHT</span>
            <div><img src={dumbimage} alt="dumbimage" className="dumb" /></div>
            <span>EXERCISE</span>
          </div>
        </div>
    </div>
      </div>
      
      
      <section className="why-only">
        <div className="why-logo">
          <img src={befitlogo} alt="Stay Fit Logo" />
        </div>
        <div className="why-content">
          <h2>Why Only Befit</h2>
          <p>
            Choosing our fitness app means investing in your health with the best tools at your fingertips.
            Our app offers personalized workout plans, progress tracking, and expert guidance, all in one place.
          </p>
          <p>
            With a user-friendly interface and motivation boosts, achieving your fitness goals has never been easier or more fun!
          </p>
          {/* <a href="#free-lesson" className="free-lesson-btn">Take a Free Lesson</a> */}
          {/* <Link> </Link> */}
          <Link to="/Freelesson" className="free-lesson-btn">Take a Free Lesson</Link>
        </div>
      </section>

    <Footer/>
    </div>
  );
};

export default HomePage;
