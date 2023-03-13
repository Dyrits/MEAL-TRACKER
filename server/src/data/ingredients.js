import { v4 as uuid } from "uuid";

const ingredients = [
  { name: "Chicken Breast Halves", amount: 4, units: "units" },
  { name: "Salt", amount: 0.25, units: "teaspoons" },
  { name: "Black Pepper", amount: 0.125, units: "teaspoons" },
  { name: "Swiss Cheese Slices", amount: 6, units: "units" },
  { name: "Ham", amount: 4, units: "units" },
  { name: "Bread Crumbs", amount: 0.5, units: "cups" }
];

export default ingredients.map(ingredient => ({ id: uuid(), ...ingredient }));
