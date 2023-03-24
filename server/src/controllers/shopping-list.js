import { collection } from "../data/database.js";
import { generate, stringify } from "../services/shopping-list.js";
import { hydrate } from "../services/meals.js";

const controller = {
  get: async (request, response) => {
    const meals = await collection("meals").find({}).toArray();
    const ingredients = await collection("ingredients").find({}).toArray();
    response.json(stringify(generate(await hydrate(meals), ingredients)));
  }
};


export default controller;
