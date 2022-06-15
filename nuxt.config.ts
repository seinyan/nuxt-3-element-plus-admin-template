import {defineNuxtConfig} from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  runtimeConfig: {
    apiUrl: '',
    public: {
      apiUrl: '',
    }
  },
  meta: {
    title: 'Nuxt 3 App',
    meta: [
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Nuxt 3 App'},
    ],
    link: [{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}],
  },

  head: {

  },
  css: [
    '~/assets/styles/dashboard.scss'
  ],

  // router: {
  //   middleware: ['auth']
  // }
})
