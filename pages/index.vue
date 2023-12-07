<script lang="ts" setup></script>

<template>
  <!-- <div class="bg-cover bg-center h-screen bg-image"> -->
  <div class="bg-gray-400">
  <div class="container flex justify-center items-center mx-auto py-8 px-4 min-h-screen">
    <div class="grid grid-cols-2 gap-x-8 gap-y-10 flex-1">
        <button class="btn">多一直崖例 1</button>
        <button class="btn">超級數字例 2</button>
        <button class="btn">Button 3</button>
        <button class="btn">Button 4</button>
        <button class="btn">Button 5</button>
        <button class="btn">Button 6</button>
        <button class="btn">Button 7</button>
        <button class="btn">Button 8</button>
        <button class="btn">Button 9</button>
        <button class="btn">Button 10</button>
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

.btn {
  @apply text-white bg-gradient-to-b from-rose-400 via-rose-500 to-rose-600 hover:bg-gradient-to-br focus:outline-none focus:ring-rose-300 dark:focus:ring-rose-800 shadow-lg shadow-rose-500/50 dark:shadow-lg dark:shadow-rose-800/80 font-medium rounded-xl text-sm px-5 py-10 text-center text-2xl font-bold tracking-wider me-2 mb-2 opacity-95 transition duration-1000;
}

.btn:hover {
  @apply transform translate-y-[-5px] translate-x-[-2px] transition duration-500;
}
</style>
