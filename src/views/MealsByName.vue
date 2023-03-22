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
  <Meals :meals="meals" />
</template>
<script setup>
import store from "../store";
import { ref } from "vue";
import { computed } from "@vue/reactivity";
import Meals from "../components/Meals.vue";
const keyword = ref("");
const meals = computed(() => store.state.searchedMeals);
function searchMeals() {
  store.dispatch("searchMeals", keyword.value);
}
</script>
