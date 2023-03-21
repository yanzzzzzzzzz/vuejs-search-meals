<template>
  <Meals :meals="meals" />
</template>

<script setup>
import { computed } from "@vue/reactivity";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import axiosClient from "../axiosClient";
import Meals from "../components/Meals.vue";
import store from "../store";
const ingredients = ref([]);

const route = useRoute();
const meals = computed(() => store.state.mealsByIngredient);
onMounted(() => {
  store.dispatch("searchMealsByIngredient", route.params.ingredient);
});
</script>
