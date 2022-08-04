<template>
  <div class="list-container">
    <h3>Meals / Planning</h3>
    <div class="list-item" v-for="day in week" :key="day.getDate()">
      <h4>{{ day.getDate() }}</h4>
      <p>No meal planned.</p>
      <div class="right-action">
        <RouterLink to="/search-recipe">
          <button>Add</button>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MealList",
  props: ["meals"],
  data () {
    return {
      week: Array(7).fill(0).map((_, index) => new Date(new Date().getTime() + index * 24 * 60 * 60 * 1000))
    };
  }
};
</script>

<style scoped>

</style>