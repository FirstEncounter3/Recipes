import React from "react";
import { Link } from "react-router-dom";

// import "../styles/App.css";

const NotFound = () => {
  return (
    <div className="content-container">
      <h1>Not Found</h1>
      <Link to="/">Home</Link>
    </div>
  );
};

export default NotFound;
