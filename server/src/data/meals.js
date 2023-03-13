import { v4 as uuid } from "uuid";

import recipes from "./recipes.js";

const meals = [{ id: uuid(), date: new Date(), recipe: recipes[0].id }, { id: uuid(), date: new Date(), recipe: recipes[1].id}];

export default meals;
