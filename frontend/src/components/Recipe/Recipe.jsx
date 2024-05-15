import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Photo from "../Photo/Photo";
import Ingredients from "../Ingredients/Ingredients";
import Instruction from "../Instruction/Instruction";

import api from "../../api";
import "./Recipe.css";

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
      <Photo currentRecipe={currentRecipe} />
      <h1 className="recipe-title">{currentRecipe.title}</h1>
      <section className="recipe-details">
        <div className="recipe-description">
          <h2>Description:</h2>
          <p>{currentRecipe.description}</p>
        </div>
        <section className="recipe-main">
          <Ingredients currentRecipe={currentRecipe} />
          <Instruction currentRecipe={currentRecipe} />
        </section>
      </section>
      <Link
        className="back-to-category"
        to={`/recipes/${currentRecipe.category_id}`}
      >
        {currentRecipe.category}
      </Link>
    </div>
  );
};

export default Recipe;
