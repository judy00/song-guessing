<script lang="ts" setup>
const route = useRoute()

console.log(route)
</script>

<template>
  <div class="bg-gray-400">
    <div v-if="$route.name === 'category-id'" class="container relative flex justify-center items-center mx-auto py-8 px-40 min-h-screen">
      <NuxtLink class="flex items-center mr-8 bg-white/80 p-4 rounded-full shadow shadow-xl shadow-teal-500/40 hover:shadow-teal-500/30 hover:bg-white/100 duration-300" :to="{ name: 'index' }">
        <svg class="w-6 h-6 text-teal-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
        </svg>
      </NuxtLink>
      <div class="grid gap-x-8 gap-y-10 flex-1">
        <h1 class="mb-8 text-8xl font-extrabold text-center text-gray-900 dark:text-white">
          <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-200 from-sky-400">多益</span>職涯力
        </h1>
        <NuxtLink class="song-btn"
          :to="{ name: 'category-id-song-songId', params: { id: $route.params.id, songId: 1 } }">
          ⭐ 西洋夜店勁曲 (2010)
        </NuxtLink>
        <NuxtLink class="song-btn"
          :to="{ name: 'category-id-song-songId', params: { id: $route.params.id, songId: 2 } }">
          ⭐⭐ 超級變變變 (2003)
        </NuxtLink>
        <NuxtLink class="song-btn"
          :to="{ name: 'category-id-song-songId', params: { id: $route.params.id, songId: 3 } }">
          ⭐ 女力駕到 (2000)
        </NuxtLink>
        <NuxtLink class="song-btn"
          :to="{ name: 'category-id-song-songId', params: { id: $route.params.id, songId: 5 } }">
          ⭐⭐⭐ 科技執法中 (2013)
        </NuxtLink>
      </div>
    </div>
    <NuxtPage></NuxtPage>
  </div>
</template>

<style>
.song-btn {
  @apply text-white bg-gradient-to-b from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-xl text-sm px-5 py-10 text-center text-4xl font-bold tracking-wider me-2 mb-2 opacity-95 transition duration-1000;
}

.song-btn:hover {
  @apply transform translate-y-[-5px] translate-x-[-2px] transition duration-500;
}
</style>
