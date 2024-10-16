import React, { useState } from 'react';
import './register.css';
import img from '../assets/images/befitlogo.jpg';
import { Link } from 'react-router-dom';
import { register } from '../services/user-service';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const user = { name, email, password };
    console.log("Registered: ",  user);

    // register(user)
    //   .then((response) => {
    //     console.log('Registration successful:', response);
    //     setSuccessMessage('Registration successful! Please log in.');
    //     setErrorMessage('');  // Clear any error messages
    //   })
    //   .catch((error) => {
    //     console.error('Registration failed:', error);
    //     setErrorMessage('Registration failed. Please try again.');
    //     setSuccessMessage('');  // Clear any success message
    //   });
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="logo">
          <img src={img} alt="Fitness Logo" />
        </div>
        <h2>Register to BEFIT</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="register-button">
            Register
          </button>
        </form>
        
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}

        <div>
          <p>
            Already have an account?
            <span className="login">
              <Link to="/login"> Login </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
