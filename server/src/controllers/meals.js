import { ObjectId } from "mongodb";

import { collection } from "../data/database.js";
import { hydrate } from "../services/meals.js";
import create$controller from "./index.js";

const controller = {
  ...create$controller("meals"),
  get: {
    all: async (request, response) => {
      const $meals = await collection("meals").find({}).toArray();
      response.json(await hydrate($meals));
    }
  },
  create: async ({ body }, response) => {
    const $recipes = await collection("recipes").find({}).toArray();
    if (~$recipes.findIndex(recipe => recipe._id.toString() === body.recipe)) {
      await collection("meals").insertOne({ date: new Date(body.date), ...body });
      const $meals = await collection("meals").find({}).toArray();
      response.json(await hydrate($meals, $recipes));
    } else {
      response.status(400).json({ error: "The request body contains invalid data." });
    }
  },
  update: async ({ body, params }, response) => {
    const _id = new ObjectId(params.id);
    const meal = await collection("meals").findOne({ _id });
    for (const key in body) {
      if (meal.hasOwnProperty(key)) {
        meal[key] = key === "date" ? new Date(body[key]) : body[key];
      }
    }
    await collection("meals").updateOne({ _id }, { $set: meal });
    const $meals = await collection("meals").find({}).toArray();
    response.json(await hydrate($meals));
  }
};


export default controller;
