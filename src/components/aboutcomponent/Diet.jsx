import { useState } from 'react';
import './diet.css';

// Meal sections array
const mealSections = [
  "Breakfast",
  "Mid-Morning Snack",
  "Lunch",
  "Afternoon Snack",
  "Dinner",
  "Evening Snack (Optional)"
];

// Diet plans for weight loss and weight gain
const weightLossPlan = {
  "Breakfast": [
    "Oatmeal with chia seeds, berries, and a spoon of almond butter.",
    "3 scrambled egg whites and 1 whole egg with spinach and a slice of whole-grain toast.",
    "Greek yogurt with flax seeds, nuts, and a few slices of apple or berries."
  ],
  "Mid-Morning Snack": [
    "A handful of almonds or walnuts.",
    "A piece of fruit like an apple, pear, or orange.",
    "Low-fat cottage cheese or Greek yogurt."
  ],
  "Lunch": [
    "Grilled chicken breast or tofu, mixed salad (leafy greens, cucumber, tomatoes), and olive oil vinaigrette.",
    "Quinoa or brown rice bowl with grilled veggies and a lean protein source (chicken, fish, or legumes).",
    "Tuna or salmon salad with avocado, mixed greens, and lemon dressing."
  ],
  "Afternoon Snack": [
    "Carrot or cucumber sticks with hummus.",
    "A small handful of mixed nuts or seeds.",
    "A boiled egg or a small portion of cottage cheese."
  ],
  "Dinner": [
    "Grilled salmon or chicken, steamed broccoli, and a small sweet potato or cauliflower rice.",
    "Stir-fried tofu or lean beef with mixed veggies (broccoli, peppers, onions) and a side of brown rice.",
    "Baked cod or tilapia, roasted Brussels sprouts, and a quinoa salad."
  ],
  "Evening Snack (Optional)": [
    "A small handful of almonds or a protein shake.",
    "A cup of herbal tea and a small serving of low-fat Greek yogurt."
  ]
};

const weightGainPlan = {
  "Breakfast": [
    "3 scrambled eggs with cheese and avocado on whole-grain toast.",
    "Oatmeal with whole milk, mixed nuts, chia seeds, and honey.",
    "Greek yogurt parfait with granola, berries, and a drizzle of peanut butter."
  ],
  "Mid-Morning Snack": [
    "A protein smoothie with banana, spinach, almond butter, and full-fat yogurt.",
    "A handful of trail mix with mixed nuts, seeds, and dried fruits.",
    "Cottage cheese with sliced avocado and whole-grain crackers."
  ],
  "Lunch": [
    "Grilled chicken breast or tofu, quinoa salad with avocado, nuts, and olive oil dressing.",
    "Brown rice, lentils, and roasted veggies topped with tahini or hummus.",
    "Whole-grain pasta with ground turkey, spinach, and marinara sauce, sprinkled with parmesan."
  ],
  "Afternoon Snack": [
    "Peanut butter and banana sandwich on whole-grain bread.",
    "Full-fat yogurt with honey and granola.",
    "Protein bar or a small bowl of almonds and dried apricots."
  ],
  "Dinner": [
    "Grilled salmon or steak, sweet potato, and a side of sautéed spinach with olive oil.",
    "Chicken stir-fry with mixed veggies, brown rice, and a sesame oil dressing.",
    "Baked tofu, quinoa, roasted Brussels sprouts, and avocado."
  ],
  "Evening Snack (Optional)": [
    "A protein shake with full-fat milk, whey protein, and a spoon of peanut butter.",
    "Cottage cheese with honey and sliced peaches.",
    "A handful of walnuts or almonds with dried figs or dates."
  ]
};

export default function DietPlans() {
  const [activeTab, setActiveTab] = useState("lose");

  // Function to render the meal plan based on the selected tab
  const renderMealPlan = (plan) => (
    <div className="meal-plan">
      {mealSections.map((section, index) => (
        <div key={index} className="meal-section">
          <h3>{section}</h3>
          <ul>
            {plan[section].map((option, optionIndex) => (
              <li key={optionIndex}>{option}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );

  return (
    <div className="diet-image">
    <div className="container">
      <h1 className="title-diet">Diet Plans</h1>
      <div className="tabs">
        <button 
          className={`tab ${activeTab === "lose" ? "active" : ""}`} 
          onClick={() => setActiveTab("lose")}
        >
          Weight Loss Plan
        </button>
        <button 
          className={`tab ${activeTab === "gain" ? "active" : ""}`} 
          onClick={() => setActiveTab("gain")}
        >
          Weight Gain Plan
        </button>
      </div>
      <div className="tab-content">
        {activeTab === "lose" ? (
          <div className="plan">
            <h2>Weight Loss Diet Plan</h2>
            {renderMealPlan(weightLossPlan)}
          </div>
        ) : (
          <div className="plan">
            <h2>Weight Gain Diet Plan</h2>
            {renderMealPlan(weightGainPlan)}
          </div>
        )}
      </div>
    </div>
    </div>
  );
}

