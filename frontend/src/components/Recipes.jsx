import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import api from "../api";
import "../styles/App.css";

const Recipes = () => {
  const category = useParams();

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    api.getRecipeByCategoryId(category.id).then((response) => {
      setRecipes(response.data);
    });
  }, []);
  console.log(recipes);
  return (
    <div className="content-container">
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id} className="recipe-category-nav">
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
          </li>
        ))}
      </ul>
      <Link to="/categories" className="back">Back</Link>
    </div>
  );
};

export default Recipes;
