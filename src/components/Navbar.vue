<template>
  <header class="bg-white shadow h-16 flex justify-between items-center">
    <router-link :to="{ name: 'home' }" class="ml-2"> Home </router-link>
    <div>
      <router-link
        :to="{ name: 'byName' }"
        class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100"
      >
        Search Meals
      </router-link>
      <router-link
        :to="{ name: 'byLetter' }"
        class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100"
      >
        Meals By Letter
      </router-link>
      <router-link
        :to="{ name: 'ingredients' }"
        class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100"
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
