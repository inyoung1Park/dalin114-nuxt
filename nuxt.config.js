module.exports = {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: "dalin 114",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900",
      },
      {
        rel: "stylesheet",
        href:
          "https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css",
      },
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.min.css",
      },
      {
        rel: "shortcut icon",
        href: "https://cdn.vuetifyjs.com/images/logos/favicon.ico",
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons",
      },

      {
        rel: "stylesheet",
        href:
          "https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css",
      },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: "~/plugins/fullpage", mode: "client" }],
  //plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxtjs/vuetify"],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // "fullpage-vue",
    // Doc: https://bootstrap-vue.js.org
    "bootstrap-vue/nuxt",
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/auth",

    //"@nuxtjs/vuetify",
  ],

  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */

  components: true,

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: "/api/users/login",
            method: "post",
            propertyName: "token",
          },
          logout: true,
          user: {
            url: "/api/users/user",
            method: "get",
            propertyName: "user",
          },
        },
        tokenRequired: true,
        tokenType: "Bearer",
      },
    },
    redirect: {
      login: "/user/login", // User will be redirected to this path if login is required
      logout: "/", // User will be redirected to this path if after logout, current route is protected
      home: "/", // User will be redirect to this path after login if accessed login page directly
    },
    rewriteRedirects: true,
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */

    //vendor: ["external_library"],
    extend(config, ctx) {},
  },

  serverMiddleware: ["~/api/index.js"],
};
