<script lang="ts" setup>
import { gsap } from 'gsap'
import { useSongStore } from '@/stores/song'

const coverName = ref('')

const store = useSongStore()

const getImageUrl = (name: string) => {
  const assets = import.meta.glob('~/assets/imgs/*', { eager: true, import: 'default' })
  return assets[`/assets/imgs/${name}`]
}

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
    <video class="category-bg-video" autoplay muted loop playsinline>
      <source src="@/assets/imgs/song-background-5.mp4" type="video/mp4">
    </video>

    <video class="category-bg-title-video" autoplay muted loop playsinline>
      <source src="@/assets/imgs/game-background-1-2.mp4" type="video/mp4">
    </video>

    <img class="category__cover" :src="getImageUrl(coverName)" alt="category-cover">
    <div class="container relative flex items-center mx-auto py-20 px-4 min-h-screen">
      <img class="category__deco" src="@/assets/imgs/deco-ball-4.gif">
      <div class="relative left-[-10%] grid grid-cols-2 gap-x-8 gap-y-10 flex-1 max-w-6xl">
        <NuxtLink
          v-for="category in store.songQuestions"
          :key="category.id"
          :to="{ name: 'category-id', params: { id: category.id } }"
          :class="[
            'category__btn',
            { 'category__btn--disable': store.answeredCategoryIds.includes(category.id) }
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
  position: absolute;
  width: 100%;
  height: 110%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) ;
  object-fit: cover;
  opacity: 0.4;
}

.category-bg-title-video {
  position: absolute;
  width: 70%;
  position: absolute;
  transform: rotate(-90deg);
  top: 0;
  right: -20%;
  opacity: 0.4;
  mix-blend-mode: screen;
}

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
  @apply text-white shadow-lg rounded-xl text-sm px-5 py-10 text-center text-3xl font-semibold tracking-wider me-2 mb-2 opacity-95 transition duration-1000;
  background: linear-gradient(to bottom, #da71fb, #9b3ff4 , #ddbaff);
  box-shadow: 0 10px 15px -3px #6b1ec8, 0 4px 6px -4px #652e8dcc;
}

.category__btn:hover {
  @apply transform translate-y-[-5px] translate-x-[-2px] transition duration-500;
  background: linear-gradient(to bottom, #ecaeff, #b86eff , #ddbaff);
}

.category__btn--disable {
  @apply opacity-50 cursor-not-allowed;
}

.category__deco {
  position: absolute;
  bottom: -30%;
  left: -30%;
  transform: rotate(289deg);
  width: 500px;
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
