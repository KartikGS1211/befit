import { Dumbbell } from "lucide-react";
import './workout.css'
// import body from '../assets/images/body.jpg';

export default function WorkoutPage() {
  return (
    <div className="workout-container">
      <div className="header">
      <div class="main-image"></div>
        <div className="input-section">
          <div className="input-group">
            <label htmlFor="goal" className="input-label">
              ENTER YOUR GOAL
            </label>
            <input
              id="goal"
              className="custom-input"
              type="text"
              placeholder="Enter your goal"
            />
          </div>
          <div className="input-group">
            <label htmlFor="weight" className="input-label">
              WEIGHT
            </label>
            <input
              id="weight"
              className="custom-input"
              type="text"
              placeholder="Enter your weight"
            />
          </div>
        </div>
        <div className="icon-section">
          <Dumbbell className="dumbbell-icon" />
          <span className="icon-label">WORKOUT</span>
        </div>
      </div>
      <button className="show-workout-btn">SHOW WORKOUT</button>
      <div className="splits-section">
        <h2>SPLITS</h2>

      </div>
    </div>
  );
}
