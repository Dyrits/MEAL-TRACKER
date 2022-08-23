<template>
  <h1>This is the #HomePage.vue!</h1>
  <MealList :meals="meals" />
  <IngredientsList :ingredients="ingredients" />
  <div class="right-action">
    <RouterLink to="/add-ingredient">
      <button>[+] Add</button>
    </RouterLink>
  </div>
</template>

<script>
import MealList from "@/components/MealList";
import IngredientsList from "@/components/IngredientsList";

export default {
  name: "HomePage",
  props: ["meals", "ingredients"],
  components: {
    MealList, IngredientsList
  }
};
</script>

<style scoped>

</style>