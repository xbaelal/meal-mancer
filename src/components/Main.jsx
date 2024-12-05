import React, { useState } from "react";
import IngredientsList from "./IngredientsList";
import { getRecipeFromMistral } from "../ai";
import MealRecipe from "./MealRecipe";
import Loader from "./Loader";
import Reset from "./Reset";

const Main = () => {
  const [ingredients, setIngredients] = useState([]);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input.trim()) {
      setError("Please enter an ingredient.");
      return;
    }

    console.log("Form Submitted!");
    setIngredients((prevIngredients) => [...prevIngredients, input]);
    setInput("");
    setError("");
  };

  const [recipe, setRecipe] = React.useState("");

  async function getRecipe() {
    setLoading(true);
    const recipeMarkdown = await getRecipeFromMistral(ingredients);
    setRecipe(recipeMarkdown);
    setLoading(false);
  }

  function resetIngredients() {
    setIngredients((prevIngredients) => []);
  }

  return (
    <main className="main">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          aria-label="Add Ingredients"
          placeholder="eg. Potato, Carrot, Tomato"
          name="ingredient"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            if (e.target.value.trim()) {
              setError("");
            }
          }}
        />

        <button className="button-primary" type="submit">
          + Add Ingredient
        </button>
      </form>
      {error && <p className="red">{error}</p>}
      {ingredients.length > 0 && (
        <IngredientsList ingredients={ingredients} getRecipe={getRecipe} />
      )}
      {loading && <Loader />}
      {recipe && <MealRecipe recipe={recipe} />}
      {recipe && <Reset resetIngredients={resetIngredients} />}
    </main>
  );
};

export default Main;
