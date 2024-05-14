import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import api from "../api";
import "../styles/App.css";

const Recipes = () => {
  const category = useParams();

  const [recipes, setRecipes] = React.useState([]);

  useEffect(() => {
    api.getRecipeByCategoryId(category.id).then((response) => {
      console.log(response.data);
      setRecipes(response.data);
    });
  }, []);
  return (
    <div className="content-container">
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recipes;
