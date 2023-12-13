<script lang="ts" setup>
import { useSongStore } from '@/stores/song'
const store = useSongStore()
const route = useRoute()

const categoryInfo = store.getCategoryInfo({ categoryId: route.params.id })
</script>

<template>
  <div class="relative overflow-hidden bg-slate-950">
    <template v-if="$route.name === 'category-id'">
      <iframe
        class="songs__background-video"
        src="https://www.youtube.com/embed/1Oiql0_ZDf0?si=7AduTiv4yfBsKuHa&amp;controls=0&amp;start=5&amp;mute=1&amp;loop=1&amp;autoplay=1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      />

      <div class="container relative flex justify-center items-center mx-auto py-8 px-32 min-h-screen">
        <NuxtLink class="flex items-center mr-8 bg-white/80 p-4 rounded-full shadow shadow-xl shadow-rose-500/40 hover:shadow-rose-500/30 hover:bg-white/100 duration-300" :to="{ name: 'index' }">
          <svg class="w-6 h-6 text-rose-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </NuxtLink>
        <div class="grid gap-x-8 gap-y-10 flex-1">
          <h1 class="mb-8 text-8xl font-extrabold text-center text-white">
            <span class="text-transparent bg-clip-text bg-gradient-to-r to-pink-200 from-sky-400">{{ categoryInfo.name.slice(0, 5) }}</span>{{ categoryInfo.name.slice(5) }}
          </h1>
          <NuxtLink
            v-for="song in categoryInfo.songs"
            :key="song.id"
            :class="['song__btn', { 'song__btn--disable': song.isAnswered }]"
            :to="{ name: 'category-id-song-songId', params: { id: $route.params.id, songId: song.id } }"
          >
            {{ song.name }}
            <div class="flex gap-x-3">
              <img
                v-for="(star, idx) in song.star"
                :key="idx"
                :class="['w-10', { 'opacity-50': song.isAnswered }]"
                src="https://64.media.tumblr.com/c7962f0a224f88f965e375a33953a8c5/tumblr_msh4mj2arL1scncwdo1_500.gif"
                alt="star"
              >
            </div>
          </NuxtLink>
        </div>
      </div>
    </template>
    <NuxtPage />
  </div>
</template>

<style>
.songs__background-video {
  position: absolute;
  width: 180%;
  height: 110%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.5;
  filter: blur(5px);
}

.song__btn {
  @apply relative flex flex-col items-center gap-y-4 text-white shadow-lg shadow-gray-500/50 dark:shadow-lg dark:shadow-gray-800/80 font-medium rounded-xl text-sm px-5 py-5 text-center text-4xl font-bold tracking-wider me-2 mb-2 overflow-hidden opacity-95 transition duration-1000;
  background: linear-gradient(315deg, #f89b9e 0%, #c9d9ff 74%);
  text-shadow: 2px 2px 6px #553738;
}

.song__btn:hover {
  @apply transform translate-y-[-5px] translate-x-[-2px] transition duration-500;
  background: linear-gradient(315deg, #ffb8ba 0%, #d1dfff 74%);
}

.song__btn::after {
  content:'';
  position: absolute;
  top:0;
  width:300%;
  height:300%;
  transform:translateX(100%) rotate(30deg);
  z-index:1;
  animation: shine 2s infinite ease-in;
  opacity: 0.5;
  background:
    linear-gradient( to right,
      rgba(255,255,255,0) 0%,
      rgba(255,255,255,0.8) 50%,
      rgba(128,186,232,0) 99%,
      rgba(128,186,232,0) 100%);
}

.song__btn--disable {
  @apply text-gray-700 line-through cursor-auto bg-gradient-to-t from-gray-400 to-gray-600 shadow-gray-500/50;
  text-shadow: none;
}

.song__btn--disable::after {
  animation: none;
}

.song__btn--disable:hover {
  @apply transform-none bg-gradient-to-t from-gray-400 to-gray-600;
}

@keyframes shine {
  0% {transform:translateX(-100%) translateY(-100%) rotate(30deg);}
  80% {transform:translateX(-100%) translateY(-100%) rotate(30deg);}
  100% {transform:translateX(100%) translateY(100%) rotate(30deg);}
}
</style>
