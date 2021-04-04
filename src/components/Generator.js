import recipes from "../recipes.json";
import React, {useState } from "react";
import {calculateRecipeAverageCarbon} from './CarbonCalculator'
import './generator.css'

let breakfast = recipes["Breakfast"];
let lunch = recipes["Lunch"];
let dinner = recipes["Dinner"];

const compareCalories = (a, b) => {
  return a.CaloriesPerServing - b.CaloriesPerServing;
};

const sortMeals = (recipeArr) => {
  recipeArr.sort(compareCalories);
  return recipeArr;
};

let breakfastPointer = 49;
let lunchPointer = 49;
let dinnerPointer = 49;

function generateMealPlan(breakfast, lunch, dinner, calorieGoal) {
  if (
    breakfast[breakfastPointer].CaloriesPerServing +
      lunch[lunchPointer].CaloriesPerServing +
      dinner[dinnerPointer].CaloriesPerServing >=
    calorieGoal
  ) {
    console.log("Combination is greater than calorie need");
  }
}
function generateRandomRecipes() {
  const myMealPlan = [];
  let randomIndex = Math.floor(Math.random() * 49 + 1);
  myMealPlan.push(breakfast[randomIndex]);
  randomIndex = Math.floor(Math.random() * 49 + 1);
  myMealPlan.push(lunch[randomIndex]);
  randomIndex = Math.floor(Math.random() * 49 + 1);
  myMealPlan.push(dinner[randomIndex]);
  return myMealPlan;
}
const Generator = () => {
  const [mealPlan, setMealPlan] = useState([]);

  const handleClick = () => {
    setMealPlan(generateRandomRecipes());
  };
  const res = mealPlan.map((item, k) => {
      let carbonFootprint=calculateRecipeAverageCarbon(item.ProteinPerServing)
    return (
      <div className="mp-div">
        <div className="mp-recipes">
          <h3>Name: {item.Name}</h3>
          <p>Category: {item.Type}</p>
          <p> Yields: {item.Yield}</p>
          <p>Ingredients: {item.Ingredients}</p>
          <p>Nutritional Information</p>
          <p>Calories: {item.CaloriesPerServing}</p>
          <p>Protein: {item.ProteinPerServing}</p>
        </div>
        <div>
            <p>{carbonFootprint / 39.2} Miles Driven Equivalent</p>
        </div>
      </div>
    );
  });
  return (
    <div className="mp-ctn">
      <button onClick={handleClick}>Generate Meal Plan</button>
      {res}
    </div>
  );
};

export default Generator;
