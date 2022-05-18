const config = require('./.contentful.json');
import dotenv from "dotenv"; dotenv.config();
module.exports = {
  // ...
  env: {
    CTF_SPACE_ID: config.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: config.CTF_CDA_ACCESS_TOKEN,
    CTF_PERSON_ID: config.CTF_PERSON_ID,
    CTF_BLOG_POST_TYPE_ID: config.CTF_BLOG_POST_TYPE_ID,
  },
  // ...


  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Cerqlar',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  env: {
    CTF_SPACE_ID: config.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: config.CTF_CDA_ACCESS_TOKEN,
    CTF_ENVIRONMENT: config.CTF_ENVIRONMENT
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
      "~layouts/global.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/filters',

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
 buildModules: [ 'vue-ssr-carousel/nuxt'] ,

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
     '@nuxtjs/markdownit'

  ],
  markdownit: {
   injected: true
},


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
