<script lang="ts" setup>
import { useSongStore } from '@/stores/song'

const store = useSongStore()
const route = useRoute()

const songInfo = store.getSongInfo({
  categoryId: route.params.id,
  songId: route.params.songId
})

const step = ref(1)

const onClickNext = () => {
  if (step.value < 3) {
    step.value++
    return
  }

  if (step.value === 3) {
    songInfo.isAnswered = true
    navigateTo({
      name: 'category-id',
      params: { id: route.params.id }
    })
  }
}

if (songInfo.isShowQuestionFirst) {
  step.value = 2
}
</script>

<template>
  <div class="relative overflow-hidden bg-slate-950">
    <video class="song-bg-video" autoplay muted loop playsinline>
      <source src="@/assets/imgs/song-background-1.mp4" type="video/mp4">
    </video>

    <div class="container relative flex flex-col justify-between items-center mx-auto py-40 min-h-screen text-center">
      <div>
        <h1 class="song-title text-7xl font-extrabold text-center text-white">
          {{ songInfo.name }}
        </h1>
        <div v-if="songInfo.type" class="text-white text-3xl mt-5">
          {{ songInfo.type }}
        </div>
      </div>
      <h2 v-show="step === 2" class="text-slate-200 text-5xl text-center font-semibold leading-snug tracking-wide whitespace-pre">
        {{ songInfo.question }}
      </h2>
      <h2 v-show="step === 3" class="text-slate-200 text-5xl text-center font-semibold leading-snug tracking-wide whitespace-pre">
        {{ songInfo.answer }}
      </h2>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 37" class="song-arrow w-5 cursor-pointer" @click="onClickNext">
        <path fill="#ffacf7" fill-rule="evenodd" d="M.293.293a1 1 0 0 1 1.414 0L6 4.586 10.293.293a1 1 0 1 1 1.414 1.414l-5 5a1 1 0 0 1-1.414 0l-5-5a1 1 0 0 1 0-1.414Z" clip-rule="evenodd" class="arrow" />
        <path fill="#ffacf7" fill-rule="evenodd" d="M.293 15.293a1 1 0 0 1 1.414 0L6 19.586l4.293-4.293a1 1 0 0 1 1.414 1.414l-5 5a1 1 0 0 1-1.414 0l-5-5a1 1 0 0 1 0-1.414Z" clip-rule="evenodd" class="arrow" />
        <path fill="#ffacf7" fill-rule="evenodd" d="M.293 30.293a1 1 0 0 1 1.414 0L6 34.586l4.293-4.293a1 1 0 0 1 1.414 1.414l-5 5a1 1 0 0 1-1.414 0l-5-5a1 1 0 0 1 0-1.414Z" clip-rule="evenodd" class="arrow" />
      </svg>
    </div>
  </div>
</template>

<style>
.song-bg-video {
  @apply absolute w-full transform scale-125 object-cover opacity-40;
}

.song-title {
  text-shadow: #945bff 4px 4px 10px;
}

.song-arrow {
  animation: floatAnimation 2s infinite ease-in-out;
}

@keyframes floatAnimation {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
</style>
