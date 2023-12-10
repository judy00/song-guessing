<script lang="ts" setup>
import { gsap } from 'gsap'
import { useSongStore } from '@/stores/song'

const coverName = ref('')

const store = useSongStore()

const slideInBackground = (cover:string) => {
  coverName.value = cover

  gsap.to('.category__cover', { xPercent: 0, yPercent: -50, opacity: 1, duration: 0.8 })
}

const slideOutBackground = () => {
  gsap.to('.category__cover', { xPercent: 100, yPercent: -50, opacity: 0, duration: 0.5 })
}
</script>

<template>
  <div class="relative overflow-hidden bg-slate-950">
    <iframe
      class="category__background-video"
      src="https://www.youtube.com/embed/pfLRFrgRoj8?si=bw4YK8o_amVy5Wx7&amp;controls=0&amp;start=5&amp;mute=1&amp;loop=1&amp;autoplay=1"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    />
    <img class="category__cover" :src="`/_nuxt/assets/imgs/${coverName}`" alt="image">

    <div class="container flex  items-center mx-auto py-20 px-4 min-h-screen">
      <div class="grid grid-cols-2 gap-x-8 gap-y-10 flex-1 max-w-5xl">
        <NuxtLink
          v-for="category in store.songQuestions"
          :key="category.id"
          :to="{ name: 'category-id', params: { id: category.id } }"
          class="category__btn"
          @mouseenter="slideInBackground(category.cover)"
          @mouseleave="slideOutBackground"
        >
          {{ category.name }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style>
.category__cover {
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 1200px;
  transform: translate(0%, -50%) rotate(6deg) scale(1.5);
  mask: linear-gradient(297deg,#000 55%,transparent 80%);
}

.category__background-video {
  position: absolute;
  width: 224%;
  height: 143%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.category__btn {
  @apply text-white bg-gradient-to-b from-rose-400 via-rose-500 to-rose-600 hover:bg-gradient-to-br focus:outline-none focus:ring-rose-300 dark:focus:ring-rose-800 shadow-lg shadow-rose-500/50 dark:shadow-lg dark:shadow-rose-800/80 rounded-xl text-sm px-5 py-10 text-center text-3xl font-semibold tracking-wider me-2 mb-2 opacity-95 transition duration-1000;
}

.category__btn:hover {
  @apply transform translate-y-[-5px] translate-x-[-2px] transition duration-500;
}
</style>
