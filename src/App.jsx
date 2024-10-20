import react, { useState } from 'react'
import './App.css'

import Header from './components/Header';
import About from './components/About';
import Login from './components/Login';
import Register from './components/Register';
import Freelesson from './components/Freelesson';
import Bmi from './components/aboutcomponent/Bmi';
import Workout from './components/aboutcomponent/Workout';
import Goal from './components/aboutcomponent/Goal';
import Diet from './components/aboutcomponent/Diet';
import Training from './components/aboutcomponent/Training';
import {Routes, Route} from 'react-router-dom';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/home" element={<Header />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/user" element={<user />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Bmi" element={<Bmi />} />
        <Route path="/Workout" element={<Workout />} />
        <Route path="/freelesson" element={<Freelesson />} />
        <Route path="/Diet" element={<Diet />} />
        <Route path="/Training" element={<Training/>} />
        <Route path="/Goal" element={<Goal/>} />
        
       
      </Routes>
        
      
    </>

  )
}

export default App
