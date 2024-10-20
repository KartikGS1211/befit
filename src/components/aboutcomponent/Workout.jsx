import { useState } from 'react'
import "./workout.css"

export default function WorkoutPlanner() {
  const [goal, setGoal] = useState('')
  const [weight, setWeight] = useState('')
  const [showWorkout, setShowWorkout] = useState(false)

  const handleShowWorkout = () => {
    setShowWorkout(true)
  }

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
              <ul className="workout-list-workout">
              <li>Monday: Chest</li>
              <ol>
                <li>Flat-chest press:3 set</li>
                <li>Incline-chest pressL3 set</li>
                <li>Pecdeck fly:3 set </li>
                <li>Cable cross:3set </li>
                <li>Pushup :3 set</li>
              </ol>
              <li>Tuesday: Backworkout</li>
              <ol>
                <li>Latpulldown:3set </li>
                <li>Bentover row:3set </li>
                <li>Seated cable row:3 set </li>
                <li>Reverse grip Latpulldown:3 set </li>
                <li>Cable pullover:3 set </li>
                <li>Pullups:2 set </li>
              </ol>
              <li>Wednesday:Arm workout </li>
              <ol>
                <li>Biscep curl 3 set</li>
                <li>Incline Bicep curl</li>
                <li>Prechal curl 3 set </li>
                <li>hammer curl</li>
                <li>overhead dumbell progress</li>
                <li>tricep push down 3 set </li>
                <li>over head rope</li>
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
                <li>Leg extension </li>
                <li>Reverse</li>
                <li>Calf</li>
              </ol>
              <li>Sunday: Rest</li>
            </ul>
            </div>
          </div>
        )}
      </div>
    </div>
    </div>
  )
}
