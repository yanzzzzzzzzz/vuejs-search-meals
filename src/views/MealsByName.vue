<template>
  <div class="p-6">
    <input
      type="text"
      class="rounded border-2 border-gray-200 w-full"
      placeholder="search for Meals"
      v-model="keyword"
      @change="searchMeals"
    />
  </div>
  <div>
    <pre>{{ meals }}</pre>
  </div>
</template>
<script setup>
import axiosClient from "../axiosClient";
import store from "../store";
import { ref } from "vue";
import { computed } from "@vue/reactivity";
const keyword = ref("");
const meals = computed(() => store.state.searchedMeals);
function searchMeals() {
  store.dispatch("searchMeals", keyword.value);
}
</script>
