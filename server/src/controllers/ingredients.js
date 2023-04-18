import ingredients from "../data/ingredients.js";
import create$controller from "./index.js";

const controller = create$controller(ingredients, "ingredients", {search: ["name"]});

export default controller;
