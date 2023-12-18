<script lang="ts" setup>
const route = useRoute()

const rule = ref([
  {
    title: '誰是大歌星',
    content: '八組搶答賽，隊長代表猜拳，勝利者選擇題庫及題目\n題目下有星星代表可以拿一萬、三萬、五萬分\n搶答時要需唸出「場上所有人的名字」才能答題\n答對可繼續選題，別組答對可搶題目選擇權\n但離開題庫後不可返回上個題庫'
  },
  {
    title: '詞海底撈',
    content: '兩組上台 PK，每組排成隊伍，會連續播 5 首歌\n要輪流找出正確的字放到字卡架\n一人一次只能放一個字、移一次位置、刪一個字\n不用照順序，但位置要擺對\n放好就要回到隊伍線後，下一棒才能出發\n完成後組員全部舉手 通知裁判對答案\n如果答對就會直接進下一首歌\n「星星」萬用卡 可以替代任何的字，ㄧ輪五首歌裡面只能用一次'
  },
  {
    title: '歌星搶麥戰',
    content: '每一首都是一小段，會唱會跳就上來\n沒有限一組幾人，上來有唱或跳的每人一萬，加在該組積分上\n如果台上已經滿了就不可以再上\n每段歌曲播完後會有一段 beat\n請大家在這時候下台清空，並自己去找 Eric 拿分數\n等到下一首開始再重新搶麥上台'
  }
])

const currentRule = computed(() => {
  return rule.value[route.params.id - 1]
})

</script>

<template>
  <div class="w-screen h-screen bg-slate-300">
    <div class="container flex flex-col justify-between items-center h-full mx-auto py-20 px-4">
      <h1>{{ currentRule.title }}</h1>
      <p class="text-white text-center text-4xl leading-relaxed whitespace-pre-line">
        {{ currentRule.content }}
      </p>
    </div>
  </div>
</template>

<style>
</style>
