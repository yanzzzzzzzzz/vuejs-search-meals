<template>
  <div class="max-w-[800px] mx-auto p-8">
    <h1 class="text-5xl font-bold mb-5">{{ meal.strMeal }}</h1>
    <img :src="meal.strMealThumb" :alt="meal.strMeal" class="max-w-[100%]" />
    <div class="grid grid-cols-1 md:grid-cols-3 text-lg py-2">
      <div>
        <strong class="font-bold">Category:</strong>{{ meal.strCategory }}
      </div>
      <div><strong class="font-bold">Area:</strong>{{ meal.strArea }}</div>
      <div><strong class="font-bold">Tags:</strong>{{ meal.strTags }}</div>
    </div>
    <div class="mt-3">
      {{ meal.strInstructions }}
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2">
      <div>
        <h2 class="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul>
          <template
            v-for="(el, ind) of Array.from({ length: 20 }, (_, i) => i + 1)"
          >
            <li v-if="meal && meal[`strIngredient${ind}`]">
              {{ ind }}.{{ meal[`strIngredient${ind}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div>
        <h2 class="text-2xl font-semibold mb-2">Measures</h2>
        <ul>
          <template
            v-for="(el, ind) of Array.from({ length: 20 }, (_, i) => i + 1)"
          >
            <li v-if="meal && meal[`strIngredient${ind}`]">
              {{ ind }}.{{ meal[`strMeasure${ind}`] }}
            </li>
          </template>
        </ul>
      </div>
    </div>
    <div class="mt-4">
      <YTButton :href="meal.strYoutube">Watch On Youtube</YTButton>
      <OriginalSourceButton :href="meal.strSource" class="ml-4"
        >View Original Source</OriginalSourceButton
      >
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import axiosClient from "../axiosClient.js";
import YTButton from "../components/YTButton.vue";
import OriginalSourceButton from "../components/OriginalSourceButton.vue";
const meal = ref({});
const route = useRoute();
onMounted(async () => {
  const response = await axiosClient
    .get(`/lookup.php?i=${route.params.id}`)
    .then(({ data }) => {
      meal.value = data.meals[0] || {};
    });
});
</script>
