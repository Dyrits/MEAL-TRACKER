<template>
  <div class="centered-container">
    <h1># Add an ingredient</h1>
    <input type="number" class="space-before full-width" v-model="amount">
    <input type="text" placeholder="--Name" min="0" class="space-after space-before full-width" v-model="name">
    <select v-model="units" class="space-before full-width">
      <option selected disabled>--Units</option>
      <option v-for="option in options" :key="option" value="element">{{ option }}</option>
    </select>
    <button class="space-before full-width" @click.prevent="addIngredient">Add</button>
  </div>
</template>

<script>
export default {
  name: "AddIngredient",
  data () {
    return {
      name: String(),
      amount: 0,
      units: "--Units",
      options: ["unit(s)", "pound(s)", "tablespoon(s)", "teaspoon(s)", "cup(s)"]
    };
  },
  methods: {
    addIngredient () {
      if (this.amount > 0 && this.name.trim().length > 0 && this.units.trim().length > 0 && this.units !== "--Units") {
        this.$emit("addIngredient", {
          name: this.name,
          amount: this.amount,
          units: this.units
        });
        this.$router.push("/");
      }
    }
  }
};
</script>
