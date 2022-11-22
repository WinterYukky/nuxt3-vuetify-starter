// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  css: ['vuetify/lib/styles/main.sass'],
  typescript: {
    shim: false,
    strict: true,
  },
  experimental: {
    reactivityTransform: true,
  },
})
