// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt'
  ],
  css: ['~/assets/main.css'],
  app: {
    head: {
      title: '塞特百萬大歌星'
    },
    baseURL: process.env.NODE_ENV === 'production' ? '/song-guessing/' : '/',
    buildAssetsDir: '/static/'
  }
})
