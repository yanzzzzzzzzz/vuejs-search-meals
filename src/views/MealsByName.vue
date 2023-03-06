<template>
  <div class="p-8">
    <input
      type="text"
      class="rounded border-2 border-gray-200 w-full"
      placeholder="search for Meals"
      v-model="keyword"
      @change="searchMeals"
    />
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
    <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
  </div>
</template>
<script setup>
import store from "../store";
import { ref } from "vue";
import { computed } from "@vue/reactivity";
import MealItem from "../components/MealItem.vue";
const keyword = ref("");
const meals = computed(() => store.state.searchedMeals);
function searchMeals() {
  store.dispatch("searchMeals", keyword.value);
}
</script>
