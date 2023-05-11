<template>
  <div class="page">
    <div class="centered-container">
      <h1># Add a recipe to the planned meals</h1>
      <input
          type="text"
          class="full-width space-before space-after"
          placeholder="Enter keyword here~"
          v-model="keyword"
          v-on:keyup.enter="search"
      />
      <button class="full-width space-after" @click="search">Search</button>
      <p v-if="!searched">Enter a keyword and click on "Search" to find recipes.</p>
      <div v-if="searched">
        <div v-if="results.length > 0">
          <div class="search-list-item" v-for="result in results" :key="result.id" @click="addAsMeal(result)">
            <h3>{{ result.name }}</h3>
          </div>
        </div>
        <p v-else>There is no recipe found with this keyword.</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api"
});

export default {
  name: "RecipeSearch",
  data() {
    return {
      keyword: String(),
      searched: false,
      results: [],
    };
  },
  methods: {
    search() {
      api.get(`/recipes/search?query=${this.keyword}`).then(({ data }) => {
        this.searched = true;
        this.results = data;
      });
    },
    addAsMeal(recipe) {
      const { date } = this.$route.query;
      this.$emit("addMeal", { date, recipe });
      this.$router.push("/");
    }
  }
};
</script>
