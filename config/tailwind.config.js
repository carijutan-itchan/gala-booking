const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.{tsx,ts}',
    './app/views/**/*.{erb,haml,html,slim}'
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        "2xl": "128px",
      },
      fontFamily: {
        display: ["var(--font-display)", ...defaultTheme.fontFamily.sans],
        body: ["var(--font-body)", ...defaultTheme.fontFamily.sans],
      },
      extend: {
        lineClamp: {
          7: '7',
          8: '8',
          9: '9',
          10: '10',
        }
      }
    },
    variants: {
      lineClamp: ['responsive', 'hover']
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ]
}
