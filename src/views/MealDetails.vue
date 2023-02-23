<template>
  <div>
    <pre>{{ meal }}</pre>
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
  const response = await axiosClient.get(`/lookup.php?i=${route.params.id}`);
  console.log("meal", response.data.meals);
});
</script>
