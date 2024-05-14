import React, { useEffect } from "react";
import { Link, Routes, Route, BrowserRouter } from "react-router-dom";

import api from "../api";
import "../styles/App.css";

import Recipes from "./Recipes";

const Categories = () => {
  const [categories, setCategories] = React.useState([]);

  useEffect(() => {
    api.getCategories().then((response) => {
      setCategories(response.data);
    });
  }, []);

  return (
    <div className="content-container">
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <Link to={`/recipes/${category.id}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
