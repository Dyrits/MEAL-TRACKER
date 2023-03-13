import { v4 as uuid } from "uuid";

import meals from "../data/meals.js";
import recipes from "../data/recipes.js";
import { hydrate } from "../services/meals.js";
import create$controller from "./index.js";

const controller = {
  ...create$controller(meals),
  get: {
    all: (request, response) => {
      response.json(hydrate(meals));
    }
  },
  create: ({ body }, response) => {
    if (~recipes.findIndex(recipe => recipe.id === body.recipe)) {
      const meal = { id: uuid(), date: new Date(meal.date), ...body };
      meals.push(meal);
      response.json(hydrate(meals));
    } else {
      response.status(400).json({ error: "The request body contains invalid data." });
    }
  }
};


export default controller;
