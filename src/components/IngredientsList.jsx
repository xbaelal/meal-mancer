import React from "react";

function IngredientsList(props) {
  const ingredientsListItems = props.ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));
  return (
    <section className="ingredients-content">
      <div className="ingredients-content__headingWrapper">
        <h2>Ingredients on hand:</h2>
      </div>
      <ul aria-live="polite">{ingredientsListItems}</ul>
      {props.ingredients.length > 3 ? (
        <div className="get-recipe-container">
          <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button onClick={props.getRecipe}>Get a recipe</button>
        </div>
      ) : (
        <div className="get-recipe-container">
          <p>
            <strong>Note: </strong>Atleast add {4 - props.ingredients.length} more Ingredients to get a Recipe
          </p>
        </div>
      )}
    </section>
  );
}

export default IngredientsList;
