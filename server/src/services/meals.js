import { collection } from "../data/database.js";

export const hydrate = async (meals) => {
  const recipes = await collection("recipes").find({}).toArray();
  return meals.map(meal => {
    meal.recipe = recipes.find(recipe => recipe.id === meal.recipe);
    return meal;
  });
}
