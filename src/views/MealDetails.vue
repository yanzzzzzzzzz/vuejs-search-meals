<template>
  <div>
    <pre>{{ meal }}</pre>
    <h1 class="text-5xl font-bold mb-5">{{ meal.strMeal }}</h1>
    <img :src="meal.strMealThumb" :alt="meal.strMeal" />
    <div class="grid grid-cols-1 md:grid-cols-3">
      <div>
        <strong class="font-bold">Category:</strong>{{ meal.strCategory }}
      </div>
      <div><strong class="font-bold">Area:</strong>{{ meal.strArea }}</div>
      <div><strong class="font-bold">Tags:</strong>{{ meal.strTags }}</div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import axiosClient from "../axiosClient.js";
const meal = ref({});
const route = useRoute();
onMounted(async () => {
  console.log("id", route.params.id);
  const response = await axiosClient
    .get(`/lookup.php?i=${route.params.id}`)
    .then(({ data }) => {
      meal.value = data.meals[0] || {};
    });
  console.log("meal", response.data.meals);
});
</script>
