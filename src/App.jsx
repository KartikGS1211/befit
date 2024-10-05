import react, { useState } from 'react'
import './App.css'

import Header from './components/Header';
import About from './components/About';
import Login from './components/Login';
import Register from './components/Register';
import Bmi from './components/Bmi'

import {Routes, Route} from 'react-router-dom';

function App() {

  return (
    <>
      <Routes>
        <Route path="/home" element={<Header />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/user" element={<user />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Bmi" element={<Bmi />} />
       
      </Routes>
        
      
    </>

  )
}

export default App
