import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

import Categories from "./Categories";
import Home from "./Home";
import Recipes from "./Recipes";
import Recipe from "./Recipe";

import "../styles/App.css";

const App = () => {
  return (
    <BrowserRouter>
      <nav className="App-header">
        <Link to="/">
          <h1>Home</h1>
        </Link>
        <Link to="/categories">
          <h1>Categories</h1>
        </Link>
      </nav>
      <Routes>
        <Route path="/categories" element={<Categories />} />
        <Route path="/recipes/:id" element={<Recipes />} />
        <Route path="/recipe/:id" element={<Recipe />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
