<template>
  <header class="bg-white shadow h-16 flex justify-between items-center">
    <router-link :to="{ name: 'home' }" class="pl-2"> Home </router-link>
    <div>
      <router-link
        :to="{ name: 'byName' }"
        class="inline-flex items-center px-2 h-full"
      >
        Search Meals
      </router-link>
      <router-link
        :to="{ name: 'byLetter' }"
        class="inline-flex items-center px-2 h-full"
      >
        Meals By Letter
      </router-link>
      <router-link
        :to="{ name: 'byIngredient' }"
        class="inline-flex items-center px-2 h-full"
      >
        Meals By Ingredients
      </router-link>
      <router-link
        :to="{ name: 'signIn' }"
        class="inline-flex items-center px-2 h-full"
      >
        Sign in
      </router-link>
    </div>
  </header>
</template>
