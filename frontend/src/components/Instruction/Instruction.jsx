import React from "react";

import "./Instruction.css";

const Instruction = ({ currentRecipe }) => {
  return (
    <div className="recipe-instructions">
      <h2>Instructions: </h2>
      <ul>
        {currentRecipe.instructions &&
          Object.entries(currentRecipe.instructions).map(
            ([key, value], index) => (
              <li key={index}>
                <strong className="instruction-key">{key}</strong>: {value}
              </li>
            )
          )}
      </ul>
    </div>
  );
};

export default Instruction;
