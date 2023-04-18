import { collection } from "../data/database.js";

export const hydrate = async (meals, recipes) => {
  recipes = recipes || await collection("recipes").find({}).toArray();
  return meals.map(meal => {
    meal.recipe = recipes.find(recipe => recipe._id.toString() === meal.recipe);
    return meal;
  });
}
