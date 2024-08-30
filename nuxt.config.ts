// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules:[
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts'
  ],

  colorMode:{
    classSuffix:"",
    preference: 'dark'
  },

  tailwindcss: {
    cssPath:"~/assets/css/tailwind.css",
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    config:{},
    injectPosition:0,
    viewer:true
  },
  googleFonts: {
    families: {
      Roboto: true,
      'Work+Sans': [300, 400, 600],
    },
    display: 'swap',
    prefetch: true,
    preload: true,
  }
})