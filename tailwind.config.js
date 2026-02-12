const plugin = require('tailwindcss/plugin')

// Rotate Y custom utility
const rotateY = plugin(function ({ addUtilities }) {
  addUtilities({
    '.rotate-y-90': {
      transform: 'rotateY(90deg)'
    }
  })
})

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
        'glass-light': '0 8px 32px 0 rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [rotateY],
}
