import recipes from "../data/recipes.js";
import create$controller from "./index.js";

export default create$controller(recipes, { search: ["name", "ingredients.name"]});
