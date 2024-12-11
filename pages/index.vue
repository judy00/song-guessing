<script lang="ts" setup>
import { gsap } from 'gsap'
import { useSongStore } from '@/stores/song'

const store = useSongStore()

const coverName = ref('')

const getImageUrl = (name: string) => {
  const assets = import.meta.glob('~/assets/imgs/*', { eager: true, import: 'default' })
  return assets[`/assets/imgs/${name}`]
}

const slideInBackground = (cover:string) => {
  coverName.value = cover

  gsap.fromTo('.category__cover',
    { xPercent: 50, opacity: 0 },
    { xPercent: 0, opacity: 1, duration: 0.8 }
  )
}

const slideOutBackground = () => {
  gsap.to('.category__cover', { xPercent: 100, opacity: 0, duration: 0.5 })
}
</script>

<template>
  <div class="relative overflow-hidden bg-slate-950">
    <video class="category-bg-video" autoplay muted loop playsinline>
      <source src="@/assets/imgs/song-background-5.mp4" type="video/mp4">
    </video>
    <video class="category-bg-title-video" autoplay muted loop playsinline>
      <source src="@/assets/imgs/game-background-1-2.mp4" type="video/mp4">
    </video>

    <div class="container relative flex items-center mx-auto px-4 min-h-screen">
      <img class="category__cover" :src="getImageUrl(coverName)" alt="category-cover">
      <img class="category__deco" src="@/assets/imgs/deco-ball-4.gif">
      <div class="relative grid grid-cols-2 gap-x-5 gap-y-6 max-w-4xl">
        <NuxtLink
          v-for="category in store.songQuestions"
          :key="category.id"
          :to="{ name: 'category-id', params: { id: category.id } }"
          :class="[
            'category__btn',
            { 'category__btn--disable': store.fullyAnsweredCategoryIds.includes(category.id) }
          ]"
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
.category-bg-video {
  @apply absolute w-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-40;
}

.category-bg-title-video {
  @apply absolute w-2/3 top-0 right-[-20%] transform rotate-[-90deg] opacity-40 mix-blend-screen;
}

.category__cover {
  @apply absolute left-1/2 w-[1100px] transform rotate-[6deg];
  mask: linear-gradient(297deg,#000 55%,transparent 80%);
}

.category__btn {
  @apply text-white text-3xl text-center tracking-wider font-bold shadow-lg rounded-xl px-7 py-6 opacity-95 transition duration-1000;
  background: linear-gradient(to bottom, #da71fb, #9b3ff4 , #ddbaff);
  box-shadow: 0 10px 15px -3px #6b1ec8, 0 4px 6px -4px #652e8dcc;
}

.category__btn:hover {
  @apply transform translate-y-[-5px] translate-x-[-2px] transition duration-500;
  background: linear-gradient(to bottom, #ecaeff, #b86eff , #ddbaff);
}

.category__btn:last-child {
  @apply col-span-2 w-1/2 justify-self-center;
}

.category__btn--disable {
  @apply opacity-50 cursor-not-allowed;
}

.category__deco {
  @apply absolute left-[-20%] bottom-[-20%] w-[400px];
  animation: floater 3s ease-in-out infinite;
}

@keyframes floater {
  0% {
    transform: rotate(289deg) translateY(0);
  }
  50% {
    transform: rotate(289deg) translateY(-100px);
  }
  100% {
    transform: rotate(289deg) translateY(0);
  }
}
</style>
