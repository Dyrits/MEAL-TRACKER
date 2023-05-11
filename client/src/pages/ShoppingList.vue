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
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api"
});

export default {
  name: "ShoppingList",
  data() {
    return {
      items: []
    };
  },
  created() {
    api.get("/shopping-list").then(({ data }) => {
      this.items = data;
    });
  }
};
</script>
