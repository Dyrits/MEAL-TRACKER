import { v4 as uuid } from "uuid";

import meals from "../data/meals.js";
import recipes from "../data/recipes.js";
import ingredients from "../data/ingredients.js";
import { generate, stringify } from "../services/shopping-list.js";
import { hydrate } from "../services/meals.js";

const controller = {
  get: (request, response) => {
      response.json(stringify(generate(hydrate(meals), ingredients)));
    }
};


export default controller;
