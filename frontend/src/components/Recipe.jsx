import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import api from "../api";
import "../styles/App.css";

const Recipe = () => {
  const recipe = useParams();
  const [currentRecipe, setCurrentRecipe] = useState({});

  useEffect(() => {
    api.getRecipe(recipe.id).then((response) => {
      console.log(response.data);
      setCurrentRecipe(response.data);
    });
  }, []);

  return (
    <div className="content-container">
      <h1>{currentRecipe.title}</h1>
      <p>{currentRecipe.description}</p>
      <p>{currentRecipe.ingredients}</p>
      <p>{currentRecipe.instructions}</p>
      <Link to={`/recipes/${currentRecipe.category_id}`}>
        {currentRecipe.category}
      </Link>
    </div>
  );
};

export default Recipe;
