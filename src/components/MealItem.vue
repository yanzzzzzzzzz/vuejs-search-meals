<template>
  <div class="bg-white shadow rounded-xl">
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
        <YTButton :href="meal.strYoutube">Youtube</YTButton>
      </div>
    </div>
  </div>
</template>
<script setup>
import YTButton from "../components/YTButton.vue";
const { meal } = defineProps({
  meal: {
    required: true,
    type: Object,
  },
});
</script>
