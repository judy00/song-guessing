<script setup lang="ts">
import { ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

const rules = ref([
  {
    title: '誰是大歌星',
    content: '八組搶答賽，隊長代表猜拳，勝利者選擇題庫及題目\n題目下有星星代表可以拿一萬、三萬、五萬分\n搶答時要需唸出「場上所有人的名字」才能答題\n答對可繼續選題，別組答對可搶題目選擇權\n但離開題庫後不可返回上個題庫'
  },
  {
    title: '詞海底撈',
    content: '兩組上台 PK，每組排成隊伍，會連續播 5 首歌\n要輪流找出正確的字放到字卡架\n一人一次只能放一個字、移一次位置、刪一個字\n不用照順序，但位置要擺對\n完成後組員全部舉手 通知裁判對答案\n如果答對就會直接進下一首歌\n「星星」萬用卡 可以替代任何的字，ㄧ輪五首歌裡面只能用一次'
  },
  {
    title: '明星搶麥戰',
    content: '每一首都是一小段，會唱會跳就上來\n沒有限一組幾人，上來有唱或跳的每人一萬，加在該組積分上\n如果台上已經滿了就不可以再上\n每段歌曲播完後會有一段 beat\n請大家在這時候下台清空，去找 Eric 拿分數\n等到下一首開始再重新搶麥上台'
  }
])

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  const horizontalContent = document.querySelector('.home-rule__horizontal-content')
  const slides = gsap.utils.toArray('.home-rule__slide')

  const t = gsap.to(horizontalContent, {
    x: () => window.innerWidth - horizontalContent.scrollWidth,
    ease: 'none',
    scrollTrigger: {
      trigger: '.home-rule-section',
      start: 'top top',
      end: '+=' + slides.length * 100 + '%',
      pin: true,
      scrub: true,
      invalidateOnRefresh: true,
      markers: true
    }
  })

  const st = t.scrollTrigger
  const totalScroll = st.end - st.start

  const links = gsap.utils.toArray('nav .link')
  const scrollPerLink = totalScroll / (links.length - 1)

  links.forEach((link, i) => {
    link.addEventListener('click', () => {
      gsap.to(window, {
        scrollTo: {
          y: st.start + scrollPerLink * i
        },
        duration: 1,
        autoKill: false
      })
    })
  })
})
</script>

<template>
  <div class="page-home">
    <section class="home-intro">
      <video class="home-intro__bg-video" autoplay muted loop playsinline>
        <source src="@/assets/imgs/background.mp4" type="video/mp4">
      </video>

      <div class="home-intro__mask" />
      <video class="home-intro__logo-video" autoplay muted loop playsinline>
        <source src="@/assets/imgs/home-title.mp4" type="video/mp4">
      </video>
    </section>
    <video class="home-intro__ball-video" autoplay muted loop playsinline>
      <source src="@/assets/imgs/ball.mp4" type="video/mp4">
    </video>

    <section class="home-rule-section">
      <div class="home-rule__container">
        <div class="home-rule__horizontal-content">
          <div class="home-rule__slide">
            <div class="home-rule__content">
              <!-- Slide 1 -->
              <div class="home-rule__header">
                <h2 class="home-rule__title">
                  {{ rules[0].title }}
                </h2>
                <div class="home-rule__deco-line" />
              </div>

              <div class="home-rule__body">
                <div class="home-rule__video-wrap">
                  <video class="home-rule__video" autoplay muted loop playsinline>
                    <source src="@/assets/imgs/rule-video-1.mp4" type="video/mp4">
                  </video>
                  <div class="home-rule__mask" />
                </div>
                <p class="home-rule__desc">
                  {{ rules[0].content }}
                </p>
              </div>
            </div>
          </div>
          <div class="home-rule__slide">
            <div class="home-rule__content">
              <!-- Slide 2 -->
              <div class="home-rule__header">
                <h2 class="home-rule__title">
                  計分方式
                </h2>
                <div class="home-rule__deco-line" />
              </div>

              <div class="home-rule__body">
                <div class="home-rule__video-wrap">
                  <video class="home-rule__video" autoplay muted loop playsinline>
                    <source src="@/assets/imgs/rule-video-1.mp4" type="video/mp4">
                  </video>
                  <div class="home-rule__mask" />
                </div>
                <div class="home-rule__desc">
                  <div class="home-rule__circle home-rule__circle--yellow">
                    <div>10000</div>
                  </div>
                  <div class="home-rule__circle home-rule__circle--orange">
                    <div>30000</div>
                  </div>
                  <div class="home-rule__circle home-rule__circle--purple">
                    <div>50000</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="home-rule__slide">
            <div class="home-rule__content">
              <!-- Slide 3 -->
              <div class="home-rule__header">
                <h2 class="home-rule__title">
                  {{ rules[1].title }}
                </h2>
                <div class="home-rule__deco-line" />
              </div>

              <div class="home-rule__body">
                <div class="home-rule__video-wrap">
                  <video class="home-rule__video" autoplay muted loop playsinline>
                    <source src="@/assets/imgs/rule-video-2.mp4" type="video/mp4">
                  </video>
                  <div class="home-rule__mask" />
                </div>
                <p class="home-rule__desc">
                  {{ rules[1].content }}
                </p>
              </div>
            </div>
          </div>
          <div class="home-rule__slide">
            <div class="home-rule__content">
              <!-- Slide 4 -->
              <div class="home-rule__header">
                <h2 class="home-rule__title">
                  PK 順序
                </h2>
                <div class="home-rule__deco-line" />
              </div>

              <div class="home-rule__body">
                <div class="home-rule__video-wrap">
                  <video class="home-rule__video" autoplay muted loop playsinline>
                    <source src="@/assets/imgs/rule-video-2.mp4" type="video/mp4">
                  </video>
                  <div class="home-rule__mask" />
                </div>
                <p class="home-rule__desc">
                  <img src="@/assets/imgs/home-chart.png">
                </p>
              </div>
            </div>
          </div>
          <div class="home-rule__slide">
            <div class="home-rule__content">
              <!-- Slide 5 -->
              <div class="home-rule__header">
                <h2 class="home-rule__title">
                  {{ rules[2].title }}
                </h2>
                <div class="home-rule__deco-line" />
              </div>

              <div class="home-rule__body">
                <div class="home-rule__video-wrap">
                  <video class="home-rule__video" autoplay muted loop playsinline>
                    <source src="@/assets/imgs/rule-video-2.mp4" type="video/mp4">
                  </video>
                  <div class="home-rule__mask" />
                </div>
                <p class="home-rule__desc">
                  {{ rules[2].content }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <nav>
          <div class="link">
            誰是大歌星
          </div>
          <div class="link">
            計分方式
          </div>
          <div class="link">
            詞海底撈
          </div>
          <div class="link">
            PK 順序
          </div>
          <div class="link">
            明星搶麥戰
          </div>
        </nav>
      </div>
    </section>
  </div>
</template>

<style>
.page-home {
  background-color: #000;
}

.home-intro {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  mask: linear-gradient(90deg, #000 50%, transparent 95%);
  -webkit-mask: linear-gradient(180deg, #000 50%, transparent 95%);
}

.home-intro__mask {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #000;
  opacity: 0.5;
  z-index: -1;
}

.home-intro__bg-video {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

.home-intro__logo-video {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  mix-blend-mode: lighten;
}

.home-rules {
  overflow: hidden;
  background: linear-gradient(179deg, #000 0%, #28182b 50%, #000 100%);
}

.home-rule {
  position: relative;
  width: 100%;
  text-shadow: 2px 2px 6px #553738;
  color: #fff;
  padding: 10rem 8rem;
}

.home-rule__deco-ball-1 {
  position: absolute;
  top: 0;
  left: -10%;
  width: 500px;
  transform: rotate(6deg);
}

.home-rule__deco-ball-2 {
  position: absolute;
  right: -10%;
  bottom: -40%;
  width: 500px;
  transform: rotate(6deg);
  z-index: 1;
}

.home-rule__deco-ball-3 {
  position: absolute;
  left: 0%;
  bottom: -22%;
  transform: rotate(188deg);
}

.home-rule__deco-ball-4 {
  position: absolute;
  right: -6%;
  bottom: -30%;
  transform: rotate(230deg);
  z-index: 1;
}

.home-rule__deco-line {
  width: 100%;
  height: 5px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 2px 2px 15px 8px #f152ff;
}

.home-rule__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  gap: 3rem;
  width: 100%;
  margin-bottom: 3rem;
  z-index: 1;
}

.home-rule:nth-child(even) .home-rule__header {
  flex-direction: row-reverse;
}

.home-rule__title {
  flex: 1 0 auto;
  color: #fff;
  font-size: 6.5rem;
  font-weight: bold;
  text-shadow: 0 0 45px #f152ff;
}

.home-rule__video-wrap {
  position: relative;
  width: 100%;
  padding-top: 40%;
  overflow: hidden;
}

.home-rule__video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  object-fit: cover;
}

.home-rule__mask {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.6;
}

.home-rule__desc {
  display: flex;
  justify-content: space-around;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  z-index: 1;
}

.home-intro__ball-video {
  position: fixed;
  left: 50%;
  bottom: -87%;
  transform: translateX(-50%) scale(2);
  opacity: 0.2;
  clip-path: circle(25% at 50% 50%);
  -webkit-clip-path: circle(25% at 50% 50%);
}

.home-rule__body {
  position: relative;
  width: 100%;
  margin: 0 auto;
  white-space: pre-line;
  text-align: left;
}

.home-rule__circle {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  font-size: 2.5rem;
}

.home-rule__circle div {
  position: relative;
  top: -70px;
}

.home-rule__circle--yellow {
  background-color: #fff774;
  box-shadow: 2px 2px 10px 3px #fff774;
}

.home-rule__circle--orange {
  background-color: #fea73d;
  box-shadow: 2px 2px 10px 3px #fea73d;
}

.home-rule__circle--purple {
  background-color: #c870ff;
  box-shadow: 2px 2px 10px 3px #c870ff;
}

.home-rule-section {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
}

.home-rule-section nav {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 35px;
  display: flex;
  justify-content: center;
  padding: 0 20px;
  gap: 1px;
}

.home-rule-section nav .link {
  height: 100%;
  padding: 0 30px;
  background-color: black;
  color: white;
  font-size: 1rem;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.home-rule__container {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
}

.home-rule__horizontal-content {
  display: flex;
  flex-wrap: nowrap;
}

.home-rule__slide {
  width: 100vw;
  flex-basis: 100%;
  color: white;
  font-size: 30px;
  padding: 10rem 8rem;
}

.home-rule__content {
  width: 100%;
  height: 100%;
}
</style>
