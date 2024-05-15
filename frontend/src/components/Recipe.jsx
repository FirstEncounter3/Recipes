import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import api from "../api";
import "../styles/App.css";

const Recipe = () => {
  const recipe = useParams();
  const [currentRecipe, setCurrentRecipe] = useState({});

  useEffect(() => {
    api.getRecipe(recipe.id).then((response) => {
      setCurrentRecipe(response.data);
    });
  }, []);

  return (
    <div className="content-container">
      <div className="image">
        <img src={currentRecipe.photo_url} alt={currentRecipe.title} />
      </div>
      <h1 className = "recipe-title">{currentRecipe.title}</h1>
      <section className="recipe-details">
        <div className="recipe-description">
          <h2>Description:</h2>
          <p>{currentRecipe.description}</p>
        </div>
        <section className="recipe-main">
          <div className="recipe-ingredients">
            <h2>Ingredients:</h2>
            <ul className="ingredient-list">
              {currentRecipe.ingredients &&
                currentRecipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
            </ul>
          </div>
          <div className="recipe-instructions">
            <h2>Instructions: </h2>
            <ul>
              {currentRecipe.instructions &&
                Object.entries(currentRecipe.instructions).map(
                  ([key, value], index) => (
                      <li>
                        <strong>{key}:</strong> {value}
                      </li>
                  )
                )}
            </ul>
            </div>
        </section>
      </section>
      <Link to={`/recipes/${currentRecipe.category_id}`}>
        {currentRecipe.category}
      </Link>
    </div>
  );
};

export default Recipe;
