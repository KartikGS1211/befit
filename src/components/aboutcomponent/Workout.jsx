import { useState } from 'react';
import './workout.css';

export default function WorkoutPlanner() {
  const [goal, setGoal] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState(''); // Store age as string initially
  const [showWorkout, setShowWorkout] = useState(false);

  const handleShowWorkout = () => {
    setShowWorkout(true);
  };

  const renderWorkoutPlan = () => {
    const ageNumber = Number(age); // Convert age to number for validation

    // Ensure age is a valid number before rendering the workout plan
    if (isNaN(ageNumber) || age === '') return null;

    if (ageNumber < 25) {
      return (
        <ul className="workout-list-workout">
          <li>Monday: Chest</li>
          <ol>
            <li>Flat-chest press: 3 sets</li>
            <li>Incline-chest press: 3 sets</li>
            <li>Pecdeck fly: 3 sets</li>
            <li>Cable cross: 3 sets</li>
            <li>Pushup: 3 sets</li>
          </ol>
          <li>Tuesday: Back workout</li>
          <ol>
            <li>Lat pulldown: 3 sets</li>
            <li>Bent-over row: 3 sets</li>
            <li>Seated cable row: 3 sets</li>
            <li>Reverse grip Lat pulldown: 3 sets</li>
            <li>Cable pullover: 3 sets</li>
            <li>Pullups: 2 sets</li>
          </ol>
          <li>Wednesday: Arm workout</li>
          <ol>
            <li>Bicep curl: 3 sets</li>
            <li>Incline Bicep curl</li>
            <li>Preacher curl: 3 sets</li>
            <li>Hammer curl</li>
            <li>Overhead dumbbell press</li>
            <li>Tricep pushdown: 3 sets</li>
            <li>Overhead rope extension</li>
          </ol>
          <li>Thursday: Shoulder</li>
          <ol>
            <li>Shoulder press</li>
            <li>Lateral raise</li>
            <li>Front raise</li>
            <li>Shrugs</li>
          </ol>
          <li>Friday: Rest</li>
          <li>Saturday: Legs</li>
          <ol>
            <li>Squats</li>
            <li>Leg press</li>
            <li>Leg extension</li>
            <li>Reverse leg curl</li>
            <li>Calf raises</li>
          </ol>
          <li>Sunday: Rest</li>
        </ul>
      );
    } else {
      return (
        <ul className="workout-list-workout">
          <li>Monday: bdfjfhdfsdhfg   </li>
          <ol>
            <li>Flat-chest press: 3 sets</li>
            <li>Incline-chest press: 3 sets</li>
            <li>Pecdeck fly: 3 sets</li>
            <li>Cable cross: 3 sets</li>
            <li>Pushup: 3 sets</li>
          </ol>
          <li>Tuesday: Back workout</li>
          <ol>
            <li>Lat pulldown: 3 sets</li>
            <li>Bent-over row: 3 sets</li>
            <li>Seated cable row: 3 sets</li>
            <li>Reverse grip Lat pulldown: 3 sets</li>
            <li>Cable pullover: 3 sets</li>
            <li>Pullups: 2 sets</li>
          </ol>
          <li>Wednesday: Arm workout</li>
          <ol>
            <li>Bicep curl: 3 sets</li>
            <li>Incline Bicep curl</li>
            <li>Preacher curl: 3 sets</li>
            <li>Hammer curl</li>
            <li>Overhead dumbbell press</li>
            <li>Tricep pushdown: 3 sets</li>
            <li>Overhead rope extension</li>
          </ol>
          <li>Thursday: Shoulder</li>
          <ol>
            <li>Shoulder press</li>
            <li>Lateral raise</li>
            <li>Front raise</li>
            <li>Shrugs</li>
          </ol>
          <li>Friday: Rest</li>
          <li>Saturday: Legs</li>
          <ol>
            <li>Squats</li>
            <li>Leg press</li>
            <li>Leg extension</li>
            <li>Reverse leg curl</li>
            <li>Calf raises</li>
          </ol>
          <li>Sunday: Rest</li>
        </ul>
      );
    }
  };

  return (
    <div className="workout-image-workout">
      <div className="container-workout">
        <div className="input-section-workout">
          <h2 className="heading-workout">ENTER YOUR GOAL</h2>
          <input
            type="text"
            placeholder="Enter your goal"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            className="input-field-workout"
          />
          <h2 className="heading-workout">WEIGHT</h2>
          <input
            type="text"
            placeholder="Enter your weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="input-field-workout"
          />
          <h2 className="heading-workout">AGE</h2>
          <input
            type="number"
            placeholder="Enter your age"
            value={age}
            onChange={(e) => setAge(e.target.value)} // Age input handled as a string
            className="input-field-workout"
          />
        </div>
        <div className="workout-section-workout">
          <button onClick={handleShowWorkout} className="show-workout-btn">
            SHOW WORKOUT
          </button>
          {showWorkout && (
            <div className="workout-plan-workout">
              <h2 className="plan-title-workout">SPLITS</h2>
              <div className="workout-details-workout">
                <h3 className="details-heading-workout">Your Personalized Workout</h3>
                <p><strong>Goal:</strong> {goal}</p>
                <p><strong>Weight:</strong> {weight}</p>
                <p><strong>Age:</strong> {age}</p>
                {renderWorkoutPlan()}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
