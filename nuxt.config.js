export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'skore-challenge',
    htmlAttrs: {
      lang: 'en'
    },
    bodyAttrs: {
      class: 'body-background'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Default description' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/scss/app.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/utils.js' },
    { src: '@/plugins/material-design-icons', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/fontawesome',
    '@nuxtjs/style-resources',
    '@nuxtjs/google-fonts',
    '~/modules/material-design-icons.js'
  ],

  fontawesome: {
    icons: {
      solids: true,
      brands: true
    }
  },

  styleResources: {
    scss: [
      '@/assets/scss/mixins.scss',
    ],
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/apollo'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Apollo module configuration
  apollo: {
    clientConfigs: {
      default: {
        // httpEndpoint: 'https://rickandmortyapi.com/graphql',
        httpEndpoint: 'https://us-central1-challenge-334613.cloudfunctions.net/api/graphql'
      }
    }
  },

  googleFonts: {
    families: {
      'Material+Icons': true,
      'Open+Sans': [400, 600],
      Sono: [400, 600]
    },
    display: 'swap'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
