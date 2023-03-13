import recipes from "../data/recipes.js";

export const hydrate = (meals) => {
  return meals.map(meal => {
    meal.recipe = recipes.find(recipe => recipe.id === meal.recipe);
    return meal;
  });
}
