<template>
  <div class="flex flex-col p-8">Random Meals</div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import store from "../store";
import axiosClient from "../axiosClient.js";

const meals = computed(() => store.state.meals);

onMounted(async () => {
  const response = await axiosClient.get("/list.php?a=list");
  console.log(response.data);
});
</script>
