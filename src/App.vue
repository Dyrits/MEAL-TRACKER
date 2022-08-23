<template>
  <h1>Meal Tracker</h1>
  <RouterView :ingredients="ingredients" :meals="meals" @addIngredient="addIngredient" />
</template>

<script>
export default {
  name: "App",
  data () {
    return {
      ingredients: [
        { name: "Chicken Breast Halves", amount: 4, units: "units" },
        { name: "Salt", amount: 0.25, units: "teaspoons" },
        { name: "Black Pepper", amount: 0.125, units: "teaspoons" },
        { name: "Swiss Cheese Slices", amount: 6, units: "units" },
        { name: "Ham", amount: 4, units: "units" },
        { name: "Bread Crumbs", amount: 0.5, units: "cups" }
      ],
      meals: []
    };
  },
  methods: {
    addIngredient (ingredient) {
      this.ingredients.push(ingredient);
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
