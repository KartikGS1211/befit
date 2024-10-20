import './goal.css'; // Import your new CSS file
import { Link } from 'react-router-dom';
export default function ChallengeComponent() {
  return (
    <div className="challenge-container">
      <div className="goal-overlay"></div>
      <div className="content">
        <h1 className="main-title"><span className="highlight"> 21</span>-DAY CHALLENGE</h1>
        <h2 className="sub-title-goal">TO IMPROVE YOUR HABIT</h2>
        <p className="intro-text-goal">21-Day Fitness & Wellness Challenge</p>
        <div className="goals">
          <section>
            <h3 className="section-title-goal">Fitness Goals:</h3>
            <ol className="list-decimal">
              <li>
                Day 1-7: Build a Routine
                <ul className="sub-list">
                  <li>Day 1: 20-minute brisk walk or jog.</li>
                  <li>Day 2: 10 push-ups, 10 squats, 20 jumping jacks.</li>
                  <li>Day 3: Stretching and mobility (20 minutes).</li>
                  <li>Day 4: 15-minute core workout (planks, crunches).</li>
                  <li>Day 5: 15-minute yoga or flexibility exercises.</li>
                  <li>Day 6: Strength training (arms and legs) for 20 minutes.</li>
                  <li>Day 7: Rest day (or light stretching).</li>
                </ul>
              </li>
              <br />
              <li>
                Day 8-14: Increase Intensity
                <ul className="sub-list">
                  <li>Day 8: 30-minute HIIT workout (High Intensity Interval Training).</li>
                  <li>Day 9: 20 squats, 20 lunges, 30-second plank, repeat 3x.</li>
                  <li>Day 10: Active recovery (swimming, cycling, etc.).</li>
                  <li>Day 11: Upper body workout (push-ups, dips, etc.).</li>
                  <li>Day 12: Core strengthening (Russian twists, leg raises).</li>
                  <li>Day 13: 25-minute full-body circuit workout.</li>
                  <li>Day 14: Rest day (or light stretching).</li>
                </ul>
              </li>
              <br />
              <li>
                Day 15-21: Push to the Finish
                <ul className="sub-list">
                  <li>Day 15: 40-minute cardio (run, cycle, or swim).</li>
                  <li>Day 16: Lower body workout (squats, lunges, etc.).</li>
                  <li>Day 17: Full-body stretching session (30 minutes).</li>
                  <li>Day 18: 20-minute core workout with plank variations.</li>
                  <li>Day 19: Tabata workout (8 rounds of intense exercises).</li>
                  <li>Day 20: Full-body strength circuit (45 minutes).</li>
                  <li>Day 21: Fun workout of choice (dancing, sports, etc.).</li>
                </ul>
              </li>
            </ol>
          </section>
          <section>
            <h3 className="section-title">Nutrition Goals:</h3>
            <ul className="list-disc">
              <li>Day 1-7: Increase water intake to 8 glasses a day.</li>
              <li>Day 8-14: Include at least 2 servings of vegetables with lunch and dinner.</li>
              <li>Day 15-21: Reduce processed sugar and include a healthy protein source in every meal.</li>
            </ul>
          </section>
          <section>
            <h3 className="section-title">Mental Wellness:</h3>
            <ul className="list-disc">
              <li>Daily Meditation: Start with 5 minutes of mindfulness or breathing exercises and increase by 2 minutes each week.</li>
              <li>Gratitude Journal: Write 3 things you're grateful for at the end of each day.</li>
              <li>Digital Detox: Spend at least 1 hour every day without your phone or social media.</li>
            </ul>
          </section>
        </div>
        <Link to="/home" ><button className="cta-button">PRESS IF COMPLETED</button></Link>
      </div>
    </div>
  );
}
