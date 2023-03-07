import { v4 as uuid } from "uuid";

import meals from "../data/meals.js";
import recipes from "../data/recipes.js";
import create$controller from "./index.js";

const controller = {
  ...create$controller(meals),
  get: {
    all: (request, response) => {
      response.json(meals.map(meal => {
        meal.recipe = recipes.find(recipe => recipe.id === meal.recipe);
        return meal;
      }));
    }
  },
  create: ({ body }, response) => {
    if (~recipes.findIndex(recipe => recipe.id === body.recipe)) {
      const meal = { id: uuid(), date: new Date(meal.date), ...body };
      meals.push(meal);
      response.json(meals);
    } else {
      response.status(400).json({ error: "The request body contains invalid data." });
    }
  }
};


export default controller;
