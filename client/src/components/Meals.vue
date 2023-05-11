<template>
  <div class="list-container">
    <h3 class="subtitle">Meals / Planning</h3>
    <div class="list-item" v-for="day in week" :key="day.getDate()">
      <h4 class="left-list-item">{{ day.getDate() }}</h4>
      <p>{{ getMeal(day) || "No meal is planned for this day." }}</p>
      <div class="right-action">
        <RouterLink v-if="!getMeal(day)" :to="{path: '/search-recipe', query: { date: day }}">
          <button>Add</button>
        </RouterLink>
        <button v-if="getMeal(day)" @click.prevent="removeMeal(day);">Remove</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Meals",
  props: ["meals"],
  data() {
    return {
      week: Array(7).fill(0).map((_, index) => new Date(new Date().getTime() + index * 24 * 60 * 60 * 1000))
    };
  },
  methods: {
    getMeal(date) {
      return this.meals[date]?.name;
    },
    removeMeal(date) {
      this.$emit('remove-meal', date);
    }
  }
};
</script>
