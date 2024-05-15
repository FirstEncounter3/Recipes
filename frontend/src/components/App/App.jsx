import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";

import Nav from "../Nav/Nav";
import Home from "../Home/Home";
import NotFound from "../NotFound/NotFound";
import Categories from "../Categories/Categories";
import Recipes from "../Recipes/Recipes";
import Recipe from "../Recipe/Recipe";
import Footer from "../Footer/Footer";

import "./App.css";

const App = () => {
  return (
    <HashRouter>
      <Nav />
      <Routes>
        <Route path="/categories" element={<Categories />} />
        <Route path="/recipes/:id" element={<Recipes />} />
        <Route path="/recipe/:id" element={<Recipe />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
};

export default App;
