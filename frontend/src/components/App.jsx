import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

import Home from "./Home";
import NotFound from "./NotFound";
import Categories from "./Categories";
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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
