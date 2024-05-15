import React from "react";

import "./Photo.css";

const Photo = ({ currentRecipe }) => {
  return (
    <div className="image">
      <img src={currentRecipe.photo_url} alt={currentRecipe.title} />
    </div>
  );
};

export default Photo;
