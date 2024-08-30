// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules:['@nuxtjs/color-mode', '@nuxtjs/tailwindcss'],
  colorMode:{
    classSuffix:""
  },
  tailwindcss: {
    cssPath:"~/assets/css/tailwind.css",
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    config:{},
    injectPosition:0,
    viewer:true
  }
})
