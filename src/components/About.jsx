import React from 'react';
import './About.css'
import Navbar from './Navbar'
import { Link } from 'react-router-dom';

const FitnessPage = () => {
  return (
    <div className="fitness-page">
      <Navbar />
      <main>
        <h2>
          PERSONALIZE YOUR <span className="highlight">TRAINING</span> AND <span className="highlight">HEALTH</span>
        </h2>
        
        <div className="grid-container">
          <Card title="BMI">
            <p>BMI (Body Mass Index) is a measure used to assess whether a person has a healthy bodyweight relative to their height. It is calculated by dividing a person's weight in kilograms by the square of their height in meters (kg/m²).</p>
          <Link to="/Bmi" ><button>CALCULATE</button></Link>
          
          </Card>
          
          <Card title="DIET">
            <p>Personalized diets are tailored nutrition plans designed to meet an individual's unique needs and goals. Unlike generic diets, they take into account factors like age, weight, body composition, metabolic rate, health conditions, and lifestyle. Personal diet plans also consider food preferences (e.g., vegetarianism or veganism) and personal goals, like weight loss, muscle gain, or improved energy levels.</p>
            <Link to="/Diet" ><button>CLICK ME!</button></Link>
          </Card>
          
          <Card title="WORKOUT">
            <p>A Personalized workout aligns with your specific fitness goals, whether it's weight loss, muscle building, or endurance. It considers your current fitness level, available equipment, time, and any limitations. By focusing on targeted exercises, it helps you achieve results faster and more efficiently, optimizing your progress.</p>
            <Link to="/Workout" ><button>VIEW CONTENT</button></Link>
          </Card>
        </div>
        
        <div className="grid-container">
          <Card title="GOALS" >
            <p>Unlock your full potential and achieve your fitness goals with our 21-day challenge—designed to transform your body and mindset in just three weeks!</p>
            <Link to="/Goals" ><button>START</button></Link>
          </Card>
          
          <Card title="PERSONAL TRAINING" >
            <p>Get your workout planed with our expert trainer under excellent guidance and years of experience to see a better version of yourself. </p>
            <Link to="/Training" ><button>VIEW</button></Link>
          </Card>
          
        </div>
      </main>
      
      <footer>
        <h2>
          RAISE THE <span className="highlight">BAR</span> OF YOUR <span className="highlight">FITNESS</span>
        </h2>
      </footer>
    </div>
  );
};

const Card = ({ title, children, buttonText }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
};



export default FitnessPage;
