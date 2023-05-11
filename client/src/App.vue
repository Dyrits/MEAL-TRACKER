<template>
  <h1><RouterLink to="/">Meal Tracker</RouterLink></h1>
  <RouterView
      :ingredients="ingredients"
      :meals="meals"
      @addIngredient="addIngredient"
      @removeIngredient="removeIngredient"
      @addMeal="addMeal"
      @removeMeal="removeMeal"
  />
</template>

<script>
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api"
});

export default {
  name: "App",
  data() {
    return {
      meals: {},
      ingredients: [],
    };
  },
  created() {
    api.get("/ingredients").then(({ data }) => {
      this.ingredients = data;
    });
    api.get("/meals").then(({ data }) => {
      data.map(meal => {
        const { _id, recipe, date } = meal;
        this.meals[new Date(date)] = { _id, recipe };
      })
    });
  },
  methods: {
    addIngredient(ingredient) {
      api.post("/ingredients", ingredient).then(({ data }) => {
        this.ingredients = data;
      });
    },
    removeIngredient(id) {
      api.delete(`/ingredients/${id}`).then(({ data }) => {
        this.ingredients = data;
      });
    },
    addMeal({ date, recipe }) {
      api.post("/meals", { date, recipe }).then(({ data }) => {
        data.map(meal => {
          const { _id, recipe, date } = meal;
          this.meals[new Date(date)] = { _id, recipe };
        })
      });
    },
    removeMeal(date) {
      const { _id } = this.meals[date];
      api.delete(`/meals/${_id}`).then(() => {
        delete this.meals[date];
      });
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
