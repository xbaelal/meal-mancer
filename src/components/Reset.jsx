import React from "react";

const Reset = ({ resetIngredients }) => {
  return (
    <div className="reset-btn-wrapper">
      <button
        onClick={resetIngredients}
        className="button-primary reset-button">
        Clear All Ingredients
      </button>
      <p>
        <em>
          *The previous recipe will stay available until you create a new one,
          with the flexibility to clear all existing ingredients and add new
          ones accordingly.*
        </em>
      </p>
    </div>
  );
};

export default Reset;
