<template>
  <div class="page">
    <div class="centered-container">
      <h1>Shopping list</h1>
      <p v-for="item in items" :key="item" class="list-item">
        {{ item }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShoppingList",
  data() {
    return {
      items: ["3 cups of flour", "5 tablespoons of sugar", "1 cup of milk"]
    };
  }
};
</script>
