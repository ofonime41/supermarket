/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",

    
  "./node_modules/flowbite/**/*.{js,ts}"
  ],
  theme: {
    extend: {
      fontFamily: {
        // bitter: ['Bitter', 'serif',],
        // ubuntu: ['Ubuntu', 'sans-serif',],
        montserrat: ['Montserrat','sans-serif'],
        sacramento: ['Sacramento', 'sans-serif',],
      },
      
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}


