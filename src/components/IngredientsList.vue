<template>
  <div class="list-container">
    <h3>Ingredients</h3>
    <div class="list-item" v-for="ingredient in ingredients" :key="ingredient.name">
      <h4>{{ ingredient.name }}</h4>
      <p>{{ ingredient.amount }} {{ ingredient.unit }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "IngredientsList",
  props: ["ingredients"],
};
</script>

<style scoped>

</style>