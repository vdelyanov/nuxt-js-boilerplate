export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  css: [
    '~/assets/scss/app.scss'
  ],
  app: {
    head: {
      title: 'Nuxt Boilerplate',
      meta: [
        { name: 'description', content: 'Nuxt Boilerplate' }
      ],
      script: [
        { src: 'https://code.jquery.com/jquery-3.6.0.min.js' }
      ]
    }
  },
  ssr: true,
})

