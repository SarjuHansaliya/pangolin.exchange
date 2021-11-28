const colors = require("tailwindcss/colors");

module.exports = {
  purge: {
    mode: "all",
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    options: {
      safelist: [/^texture-/, /svelte-announcer/],
    },
  },
  plugins: [require("@tailwindcss/typography")],
  theme: {
    extend: {
      colors: {
        orange: colors.orange,
        fuchsia: colors.fuchsia,
        cyan: colors.cyan,
        sky: colors.sky,
      },
      screens: {
        laptop: "940px",
      },
    },
  },
}
