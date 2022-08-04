<template>
  <h1>This is the #HomePage.vue!</h1>
  <MealList :meals="meals" />
  <IngredientsList :ingredients="ingredients" />
</template>

<script>
import MealList from "@/components/MealList";
import IngredientsList from "@/components/IngredientsList";

export default {
  name: "HomePage",
  components: {
    MealList, IngredientsList
  },
  data () {
    return {
      ingredients: [
        { name: "Chicken Breast Halves", amount: 4, units: "count" },
        { name: "Salt", amount: 0.25, units: "teaspoons" },
        { name: "Black Pepper", amount: 0.125, units: "teaspoons" },
        { name: "Swiss Cheese Slices", amount: 6, units: "count" },
        { name: "Ham", amount: 4, units: "count" },
        { name: "Bread Crumbs", amount: 0.5, units: "cups" }
      ],
      meals: []
    };
  },
};
</script>

<style scoped>

</style>