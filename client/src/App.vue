<template>
  <h1><RouterLink to="/">Meal Tracker</RouterLink></h1>
  <RouterView
      :ingredients="ingredients"
      :meals="meals"
      :recipes="recipes"
      @addIngredient="addIngredient"
      @addMeal="addMeal"
      @removeMeal="removeMeal"
  />
</template>

<script>
import recipes from "./recipes";

export default {
  name: "App",
  data() {
    return {
      recipes,
      meals: {},
      ingredients: [
        {name: "Chicken Breast Halves", amount: 4, units: "units"},
        {name: "Salt", amount: 0.25, units: "teaspoons"},
        {name: "Black Pepper", amount: 0.125, units: "teaspoons"},
        {name: "Swiss Cheese Slices", amount: 6, units: "units"},
        {name: "Ham", amount: 4, units: "units"},
        {name: "Bread Crumbs", amount: 0.5, units: "cups"}
      ],
    };
  },
  methods: {
    addIngredient(ingredient) {
      this.ingredients.push(ingredient);
    },
    addMeal({ date, recipe }) {
      this.meals[date] = recipe;
    },
    removeMeal(date) {
      delete this.meals[date];
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2C3E50;
}
</style>
