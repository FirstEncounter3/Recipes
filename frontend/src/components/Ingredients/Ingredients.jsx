import React from "react";

import "./Ingredients.css";

const Ingredients = ({ currentRecipe }) => {
  return (
    <div className="recipe-ingredients">
      <h2>Ingredients:</h2>
      <ul className="ingredient-list">
        {currentRecipe.ingredients &&
          currentRecipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
      </ul>
    </div>
  );
};

export default Ingredients;
