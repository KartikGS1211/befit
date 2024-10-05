import React, {useState} from 'react'
import './register.css';
import img from '../assets/images/befitlogo.jpg'
import Login from './Login'
import { Link } from 'react-router-dom';


const Register = () => {
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
            <h2>Register to BEFIT</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                <label htmlFor="name">Name</label>
                <input
                  type="name"
                  id="name"
                  
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
              <button type="Register" className="Register-button">Register</button>
            </form>
            <div>
            <p>Already have an account?
            <span className="Login">
          <Link to="/login" > Login </Link></span></p></div>
            
          </div>
        </div>
      );
}

export default Register;
