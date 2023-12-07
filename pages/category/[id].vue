<script lang="ts" setup></script>

<template>
  <div class="bg-gray-400">
    <NuxtLink :to="{ name: 'index', params: { id: 1 } }">back {{ $route.params.id }}</NuxtLink>

    <div class="container flex justify-center items-center mx-auto py-8 px-40 min-h-screen">
      <div class="grid gap-x-8 gap-y-10 flex-1">
        <h1 class="mb-8 text-8xl font-extrabold text-center text-gray-900 dark:text-white">
          <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-200 from-sky-400">多益</span>職涯力
        </h1>
        <NuxtLink class="song-btn" :to="{ name: 'category-id', params: { id: 1 } }">⭐ 西洋夜店勁曲 (2010)</NuxtLink>
        <NuxtLink class="song-btn" :to="{ name: 'category-id', params: { id: 2 } }">⭐⭐ 超級變變變 (2003)</NuxtLink>
        <NuxtLink class="song-btn" :to="{ name: 'category-id', params: { id: 3 } }">⭐ 女力駕到 (2000)</NuxtLink>
        <NuxtLink class="song-btn" :to="{ name: 'category-id', params: { id: 4 } }">⭐⭐⭐ 科技執法中 (2013)</NuxtLink>
      </div>
    </div>
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
