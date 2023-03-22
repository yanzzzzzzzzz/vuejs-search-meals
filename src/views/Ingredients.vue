<template>
  <div class="p-8">
    <h1 class="text-4xl font-bold mb-4">Ingredients</h1>
    <input
      type="text"
      class="rounded border-2 border-gray-200 w-full mb-2"
      placeholder="search by Ingredients"
      v-model="keyword"
    />
    <router-link
      :to="{
        name: 'byIngredient',
        params: { ingredient: ingredient.strIngredient },
      }"
      v-for="ingredient of computedIngredients"
      :key="ingredient.id"
      class="block bg-white rounded p-3 mb-3 shadow"
    >
      <h3 class="text-2xl font-bold mb-2">{{ ingredient.strIngredient }}</h3>
      <p>{{ ingredient.strDescription }}</p>
    </router-link>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import axiosClient from "../axiosClient";
import { computed } from "@vue/reactivity";
const ingredients = ref([]);
const keyword = ref("");
const computedIngredients = computed(() => {
  return ingredients.value.filter(
    (ingredient) =>
      ingredient.strIngredient
        .toLowerCase()
        .includes(keyword.value.toLowerCase()) ||
      (ingredient.strDescription || "")
        .toLowerCase()
        .includes(keyword.value.toLowerCase())
  );
});
onMounted(() => {
  axiosClient.get("list.php?i=list").then(({ data }) => {
    ingredients.value = data.meals;
  });
});
</script>
