import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import Home from "@/pages/Home.vue";
import SearchRecipe from "@/pages/SearchRecipe.vue";
import AddIngredient from "@/pages/AddIngredient.vue";
import ShoppingList from "@/pages/ShoppingList.vue";

import "./main.css";

const routes = [
  { path: "/", component: Home },
  { path: "/search-recipe", component: SearchRecipe },
  { path: "/add-ingredient", component: AddIngredient },
  { path: "/shopping-list", component: ShoppingList }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

createApp(App).use(router).mount("#app");
