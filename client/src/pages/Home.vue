<template>
  <div class="page-container">
    <div class="column">
      <Meals :meals="meals" @removeMeal="removeMeal" />
    </div>
    <div class="column">
      <Ingredients :ingredients="ingredients"/>
      <RouterLink to="/shopping-list">
        <div class="list-container">
          <button class="shopping-list-button full-width">Generate the shopping list</button>
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<script>
import Meals from "@/components/Meals.vue";
import Ingredients from "@/components/Ingredients.vue";

export default {
  name: "Home",
  props: ["meals", "ingredients"],
  components: {
    Meals, Ingredients
  },
  methods: {
    removeMeal(date) {
      this.$emit("removeMeal", date);
    }
  }
};
</script>
