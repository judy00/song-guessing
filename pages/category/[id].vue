<script lang="ts" setup>
import { useSongStore } from '@/stores/song'
const store = useSongStore()
const route = useRoute()

const categoryInfo = store.getCategoryInfo({ categoryId: route.params.id })
</script>

<template>
  <div class="relative overflow-hidden bg-slate-950">
    <template v-if="$route.name === 'category-id'">
      <video class="song-bg-video" autoplay muted loop playsinline>
        <source src="@/assets/imgs/song-background-3.mp4" type="video/mp4">
      </video>

      <div class="container relative flex justify-center items-center mx-auto py-8 px-32 min-h-screen">
        <NuxtLink class="flex items-center mr-8 bg-white/80 p-4 rounded-full shadow shadow-xl shadow-violet-500/40 hover:shadow-violet-400/30 hover:bg-white/100 duration-300" :to="{ name: 'index' }">
          <svg class="w-6 h-6 text-violet-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
  @apply relative flex flex-col items-center gap-y-4 text-white shadow-lg  font-medium rounded-xl text-sm px-5 py-5 text-center text-4xl font-bold tracking-wider me-2 mb-2 overflow-hidden opacity-95 transition duration-1000;
  background: linear-gradient(to bottom, #c39dff, #6a53ff , #b5dffc);
  text-shadow: 2px 2px 6px #614bb8;
  box-shadow: 0 10px 15px -3px #6b1ec8, 0 4px 6px -4px #652e8dcc;
}

.song__btn:hover {
  @apply transform translate-y-[-5px] translate-x-[-2px] transition duration-500;
  background: linear-gradient(to bottom, #d4b9ff, #8875ff , #c7e8ff);
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
  @apply line-through cursor-auto shadow-gray-500/50;
  color: #848484;
  text-shadow: none;
  box-shadow: none;
  background: linear-gradient(to bottom, #909090, #aaaaaa , #616161);
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
