import Markdown from "react-markdown";

export default function MealRecipe(props) {
  return (
    <section className="generated-recipe">
      <Markdown>{props.recipe}</Markdown>
    </section>
  );
}
