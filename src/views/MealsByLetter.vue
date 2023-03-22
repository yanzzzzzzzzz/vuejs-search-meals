<template>
  <div class="flex justify-center gap-2 mt-2">
    <router-link
      v-for="letter of letters"
      :to="{ name: 'byLetter', params: { letter } }"
      :key="letter"
    >
      {{ letter }}
    </router-link>
  </div>
  <Meals :meals="meals" />
</template>
<script setup>
import { onMounted, watch } from "vue";
import { computed } from "@vue/reactivity";
import store from "../store";
import { useRoute } from "vue-router";
import Meals from "../components/Meals.vue";
const route = useRoute();
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const meals = computed(() => store.state.mealsByLetter);

watch(route, () => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});

onMounted(() => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});
</script>
