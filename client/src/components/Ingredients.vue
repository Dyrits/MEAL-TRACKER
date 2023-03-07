<template>
  <div class="list-container">
    <h3 class="subtitle">Ingredients</h3>
    <div class="list-item" v-for="ingredient in ingredients" :key="ingredient.name">
      <h4 class="left-list-item">{{ ingredient.name }}</h4>
      <p>{{ ingredient.amount }} {{ ingredient.units }}</p>
    </div>
    <div class="right-action">
      <RouterLink to="/add-ingredient">
        <button class="full-width space-before">Add an ingredient</button>
      </RouterLink>
    </div>
  </div>
</template>

<script>
export default {
  name: "Ingredients",
  props: ["ingredients"]
};
</script>
