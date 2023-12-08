<script lang="ts" setup>
const route = useRoute()
const step = ref(1)

const question = ref(`孔子的中心思想是個仁 仁的表現是？
★★★★★★  ★★★★★★  ★★★★  ★★★★★`)

const answer = ref(`孔子的中心思想是個仁 仁的表現是？
己欲立而立人 己欲達而達人 己所不欲 他勿施於人`)

const onClickNext = () => {
  if (step.value === 1) {
    step.value++
    return
  }

  if (step.value === 2) {
    // isAnswered.value = true
    navigateTo({
      name: 'category-id',
      params: { id: route.params.id }
    })
  }
}
</script>

<template>
  <div class="bg-gray-400">
    <div class="container relative flex flex-col justify-around items-center mx-auto py-8 min-h-screen">
      <h1 class="song-title text-8xl font-extrabold text-center text-white">
        《論語》(1000)
      </h1>

      <h2 v-show="step === 1" class="text-zinc-900 text-6xl text-center font-semibold leading-snug tracking-wide whitespace-pre">
        {{ question }}
      </h2>

      <h2 v-show="step === 2" class="text-zinc-900 text-6xl text-center font-semibold leading-snug tracking-wide whitespace-pre">
        {{ answer }}
      </h2>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 37" class="song-arrow w-4" @click="onClickNext">
        <path fill="#5D5F60" fill-rule="evenodd" d="M.293.293a1 1 0 0 1 1.414 0L6 4.586 10.293.293a1 1 0 1 1 1.414 1.414l-5 5a1 1 0 0 1-1.414 0l-5-5a1 1 0 0 1 0-1.414Z" clip-rule="evenodd" class="arrow" />
        <path fill="#5D5F60" fill-rule="evenodd" d="M.293 15.293a1 1 0 0 1 1.414 0L6 19.586l4.293-4.293a1 1 0 0 1 1.414 1.414l-5 5a1 1 0 0 1-1.414 0l-5-5a1 1 0 0 1 0-1.414Z" clip-rule="evenodd" class="arrow" />
        <path fill="#5D5F60" fill-rule="evenodd" d="M.293 30.293a1 1 0 0 1 1.414 0L6 34.586l4.293-4.293a1 1 0 0 1 1.414 1.414l-5 5a1 1 0 0 1-1.414 0l-5-5a1 1 0 0 1 0-1.414Z" clip-rule="evenodd" class="arrow" />
      </svg>
    </div>
  </div>
</template>

<style>
.song-title {
  text-shadow: #61c4bf 4px 4px 10px;
}

.song-arrow {
  cursor: pointer;
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
