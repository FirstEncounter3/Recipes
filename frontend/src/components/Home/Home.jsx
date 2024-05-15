import React from "react";

import "./Home.css";

const Home = () => {
  return (
    <div className="content-container">
      <h1>Home</h1>
      <div className="internal-content">
        <p>Welcome to the Recipe App!</p>
        <p>Please select a category from the categories menu to get started.</p>
      </div>
    </div>
  );
};

export default Home;
