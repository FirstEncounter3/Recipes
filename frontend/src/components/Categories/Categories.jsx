import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import api from "../../api";
import "./Categories.css";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    api.getCategories().then((response) => {
      setCategories(response.data);
    });
  }, []);

  return (
    <div className="content-container">
      <ul>
        {categories.map((category) => (
          <li className="category-nav" key={category.id}>
            <Link to={`/recipes/${category.id}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
