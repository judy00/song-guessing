<script lang="ts" setup>

</script>

<template>
  <div class="relative overflow-hidden bg-slate-950 min-h-screen">
    <video class="visual-video" autoplay muted loop playsinline>
      <source src="@/assets/imgs/game-background-2.mp4" type="video/mp4">
    </video>
  </div>
</template>

<style>
.visual-video {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  object-fit: cover;
}
</style>
