import React from "react";
import { Link } from "react-router-dom";

import "./Nav.css";

const Nav = () => {
  return (
    <nav className="app-header">
      <Link to="/">
        <h1>Home</h1>
      </Link>
      <Link to="/categories">
        <h1>Categories</h1>
      </Link>
    </nav>
  );
};

export default Nav;
