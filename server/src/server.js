import express from "express";
import { config } from "dotenv";

// Environment variables~
config();
const port = process.env.PORT || 8000;

// Express app~
const app = express();

// JSON body parser~
app.use(express.json());

// Routes~
const routes = {
  recipes: await import("./routes/recipes.js").then((module) => module.default),
  ingredients: await import("./routes/ingredients.js").then((module) => module.default),
  meals: await import("./routes/meals.js").then((module) => module.default),
  "shopping-list": await import("./routes/shopping-list.js").then((module) => module.default),
};

// API~
app.use("/api/recipes", routes.recipes);
app.use("/api/ingredients", routes.ingredients);
app.use("/api/meals", routes.meals);
app.use("/api/shopping-list", routes["shopping-list"]);

app.listen(port, () => {
  console.info(`Server is listening on port ${port}~`);
});
