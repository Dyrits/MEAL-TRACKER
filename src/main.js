import { createApp } from "vue";
import App from "./App.vue";
import HomePage from "@/pages/HomePage";
import RecipeSearchPage from "@/pages/RecipeSearchPage";
import AddIngredientPage from "@/pages/AddIngredientPage";
import ShoppingListPage from "@/pages/ShoppingListPage";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    { path: "/", component: HomePage },
    { path: "/search-recipe", component: RecipeSearchPage },
    { path: "/add-ingredient", component: AddIngredientPage },
    { path: "/shopping-list", component: ShoppingListPage }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

createApp(App).use(router).mount("#app");
