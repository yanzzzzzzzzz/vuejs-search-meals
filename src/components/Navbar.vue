<template>
  <header class="bg-white shadow h-16 flex justify-between items-center">
    <router-link :to="{ name: 'home' }" class="ml-2"> Home </router-link>
    <div>
      <router-link
        :to="{ name: 'byName' }"
        class="inline-flex items-center px-2 h-full transition-colors hover:bg-orange-500 hover:text-white"
      >
        Search Meals
      </router-link>
      <router-link
        :to="{ name: 'byLetter' }"
        class="inline-flex items-center px-2 h-full transition-colors hover:bg-orange-500 hover:text-white"
      >
        Meals By Letter
      </router-link>
      <router-link
        :to="{ name: 'ingredients' }"
        class="inline-flex items-center px-2 h-full transition-colors hover:bg-orange-500 hover:text-white"
      >
        Meals By Ingredients
      </router-link>
      <router-link
        :to="{ name: 'signIn' }"
        class="inline-flex items-center px-2 h-full transition-colors hover:bg-orange-500 hover:text-white"
      >
        Sign in
      </router-link>
    </div>
  </header>
</template>
