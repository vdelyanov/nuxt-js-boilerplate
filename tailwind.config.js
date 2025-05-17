// tailwind.config.js
module.exports = {
    content: [
      './components/**/*.{js,vue,ts}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js,ts}',
      './nuxt.config.{js,ts}',
      './app.vue',
    ],
    theme: {
      extend: {
        // Add custom colors
        colors: {
          'black': '#080705',
          'white': '#f8f8f8',
          'primary': '#0048A7',
          'accent': '#F8FF33',
          'third-color': '#FADD9E',
          'gray': '#DFDFDF',
        },
        
        spacing: {
        },
        
        // Add custom fonts
        fontFamily: {
        },
        
        // Add custom breakpoints
        screens: {
          '3xl': '1920px',
        },
        
        // Add custom utilities
        borderRadius: {
        }
      }
    },
    plugins: [],
  } 