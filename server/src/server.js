import { config } from "dotenv";
import express from "express";
import cors from "cors";

import { connect } from "./data/database.js";

// Environment variables~
config();
const port = process.env.PORT;

// Express app~
const app = express();

// CORS~
app.use(cors());

// JSON body parser~
app.use(express.json());

// Database~
await connect();

// Routes~
const routes = {
  recipes: await import("./routes/recipes.js").then((module) => module.default),
  ingredients: await import("./routes/ingredients.js").then((module) => module.default),
  meals: await import("./routes/meals.js").then((module) => module.default),
  "shopping-list": await import("./routes/shopping-list.js").then((module) => module.default)
};

// API~
app.use("/api/recipes", routes.recipes);
app.use("/api/ingredients", routes.ingredients);
app.use("/api/meals", routes.meals);
app.use("/api/shopping-list", routes["shopping-list"]);

app.listen(port, () => {
  console.info(`Server is listening on port ${port}~`);
});
