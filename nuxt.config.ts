// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss'
  ],
    css: [
      
      "~/assets/css/main.css",
      // "~/assets/css/splide.min.css",
      
  
  ], 

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [

        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap',
        },

        {
          rel: 'apple-touch-icon',
          sizes: "180x180",
           href:"",
         
        },
        {
          rel: 'icon',
          type:"image/png",
          sizes:"32x32",
           href:"",
         
        },
        {
          rel: 'icon',
          type:"image/png",
          sizes:"16x16",
           href:"",
         
        },

        {
          rel: 'manifest',
           href:"",
         
        },

        {
          rel: 'stylesheet',
           href:"",
         
        },

        {
          rel: 'stylesheet',
           href:"https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css",
         
        },

        

      ],
      script: [
  
        {
          src: "https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js",
          type: "text/javascript",
        },


      ],

      
    },
  },

})
