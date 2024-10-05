import React, { useState } from 'react';
import './bmi.css'
import { Link } from 'react-router-dom';

const bmi=() => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [heightUnit, setHeightUnit] = useState('cm');
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState('');

  const calculateBMI = (e) => {
    e.preventDefault();
    
    if (weight && height) {
      let heightInMeters;
      if (heightUnit === 'cm') {
        heightInMeters = height / 100;
      } else {
        heightInMeters = height * 0.0254; // convert inches to meters
      }
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);
      
      if (bmiValue < 18.5) {
        setMessage('Underweight');
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        setMessage('Normal weight');
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        setMessage('Overweight');
      } else {
        setMessage('Obesity');
      }
    }
  };

  return (
    <div className="bmi-container">
      <h1>BEFIT BMI Calculator</h1>
      <form onSubmit={calculateBMI}>
        <div className="input-group">
          <label htmlFor="weight">Weight (kg)</label>
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Enter weight"
          />
        </div>
        <div className="input-group height-group">
          <label htmlFor="height">Height</label>
          <div className="height-input">
            <input
              type="number"
              id="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder={`Enter height in ${heightUnit}`}
            />
            <select
              value={heightUnit}
              onChange={(e) => setHeightUnit(e.target.value)}
              className="height-unit"
            >
              <option value="cm">cm</option>
              <option value="in">in</option>
            </select>
          </div>
        </div>
        <button type="submit">Calculate BMI</button>
      </form>
      {bmi && (
        <div className="result">
          <h2>Your BMI: {bmi}</h2>
          <p>{message}</p>
        </div>
      )}
    </div>
  );
}

export default bmi
