export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "frontend",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["normalize.css/normalize.css", "@assets/scss/base.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "@/plugins/accessor",
    "@/plugins/axios",
    "@/plugins/notifications.client",
    "@/plugins/socket.client",
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [{ path: "@/components/", pathPrefix: false }],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    "@nuxtjs/fontawesome",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/style-resources",
    "@nuxtjs/axios",
    "cookie-universal-nuxt",
    [
      "nuxt-fontawesome",
      {
        component: "fa",
        imports: [
          {
            set: "@fortawesome/free-solid-svg-icons",
            icons: ["faBars", "faTimes", "faChevronLeft", "faPlus", "faSearch", "faPaperPlane", "faArrowUp", "faPlay"],
          },
        ],
      },
    ],
  ],

  fontawesome: {
    component: 'fa'
  },

  axios: {
    baseUrl: "http://127.0.0.1:3333",
  },

  styleResources: {
    scss: ["@/components/bosons/*.scss"],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // server: {
  //   port: 3000,
  //   host: "0.0.0.0",
  // },
};
