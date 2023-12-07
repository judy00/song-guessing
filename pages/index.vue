<script lang="ts" setup></script>

<template>
  <!-- <div class="bg-cover bg-center h-screen bg-image"> -->
  <div class="bg-gray-400">
    <div class="container flex justify-center items-center mx-auto py-8 px-4 min-h-screen">
      <div class="grid grid-cols-2 gap-x-8 gap-y-10 flex-1">
        <NuxtLink class="category-btn" :to="{ name: 'category-id', params: { id: 1 } }">① 多益職涯力</NuxtLink>
        <NuxtLink class="category-btn" :to="{ name: 'category-id', params: { id: 6 } }">⑥ 治療師的體態改良全攻略</NuxtLink>
        <NuxtLink class="category-btn" :to="{ name: 'category-id', params: { id: 2 } }">② 超級數字力</NuxtLink>
        <NuxtLink class="category-btn" :to="{ name: 'category-id', params: { id: 7 } }">⑦ 陳茻國文</NuxtLink>
        <NuxtLink class="category-btn" :to="{ name: 'category-id', params: { id: 3 } }">③ 換成日文腦</NuxtLink>
        <NuxtLink class="category-btn" :to="{ name: 'category-id', params: { id: 8 } }">⑧ 韓國個人色彩鑑定課</NuxtLink>
        <NuxtLink class="category-btn" :to="{ name: 'category-id', params: { id: 4 } }">④ 跟著修復師，重新愛上西洋藝術</NuxtLink>
        <NuxtLink class="category-btn" :to="{ name: 'category-id', params: { id: 9 } }">⑨ 葉丙成的簡報表達課</NuxtLink>
        <NuxtLink class="category-btn" :to="{ name: 'category-id', params: { id: 5 } }">⑤ 百萬業配王的內容創作課</NuxtLink>
        <NuxtLink class="category-btn" :to="{ name: 'category-id', params: { id: 10 } }">①⓪ 白瑜占星課</NuxtLink>
      </div>
    </div>
  </div>
</template>

<style>
.bg-image {
  /* background-image: url('https://sat-knowledge.imgix.net/banner/1700824226_%E9%9F%93%E5%9C%8B%E5%80%8B%E4%BA%BA%E8%89%B2%E5%BD%A9BANNER_%E9%A6%96%E9%A0%81_1360x520-3.jpg?fit=crop&auto=format&w=2000');  */
  /* background-image: url('https://cdn.dribbble.com/userupload/7692721/file/original-b8d6150c3e01a622996ff092fc0af737.jpg?resize=752x501&vertical=center'); */
  /* background-image: url('https://cdn.dribbble.com/userupload/8296196/file/original-a6cac059754f74ddba4c79d3a142cf74.jpg?resize=1024x768'); */
}

.category-btn {
  @apply text-white bg-gradient-to-b from-rose-400 via-rose-500 to-rose-600 hover:bg-gradient-to-br focus:outline-none focus:ring-rose-300 dark:focus:ring-rose-800 shadow-lg shadow-rose-500/50 dark:shadow-lg dark:shadow-rose-800/80 rounded-xl text-sm px-5 py-10 text-center text-3xl font-semibold tracking-wider me-2 mb-2 opacity-95 transition duration-1000;
}

.category-btn:hover {
  @apply transform translate-y-[-5px] translate-x-[-2px] transition duration-500;
}
</style>
