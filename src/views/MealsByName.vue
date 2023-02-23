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
    <div
      v-for="meal of meals"
      :key="meal.idMeal"
      class="bg-white shadow rounded-xl"
    >
      <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
        <img
          :src="meal.strMealThumb"
          :alt="meal.strMeal"
          class="rounded-t-xl w-full h-48 object-cover"
        />
      </router-link>

      <div class="p-3">
        <h3 class="font-semibold">{{ meal.strMeal }}</h3>
        <p class="mb-4">sad asd wadd wqx vx cxv eatwera we wa</p>
        <div class="flex items-center justify-between">
          <a
            :href="meal.strYoutube"
            target="_blank"
            class="px-3 py-2 rounded border-2 text-white border-red-600 bg-red-500 hover:bg-red-600 transition-colors"
            >Youtube</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import store from "../store";
import { ref } from "vue";
import { computed } from "@vue/reactivity";
const keyword = ref("");
const meals = computed(() => store.state.searchedMeals);
function searchMeals() {
  store.dispatch("searchMeals", keyword.value);
}
</script>
