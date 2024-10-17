import React, { useState } from 'react';
import './Login.css';
import img from '../assets/images/befitlogo.jpg'
// import Register from './Register'
// import { login } from "../services/user-service"
import { Link } from 'react-router-dom';


const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempted with:', { email, password });
    // Here you would typically handle the login logic
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="logo">
          <img src={img} alt="Fitness Logo" />
        </div>
        <h2>Login to BEFIT</h2>
        <form onSubmit={handleSubmit}>
          <div className="login-input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="login-input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">Sign In</button>
        </form>
        <a href="#" className="forgot-password">Forgot Password?</a>
        <div>
          <p>Don't have an account?
          <span className="Register">
          <Link to="/register" >  Register </Link></span></p>
        </div>
      
      </div>
    </div>
  );
};

export default LoginPage;