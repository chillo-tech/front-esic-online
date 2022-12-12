/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{html,js,tsx,ts}",
    "./src/components/**/*.{html,js,tsx,ts}",
    "./src/containers/**/*.{html,js,tsx,ts}",
  ],
  theme: {
    extend: {
      colors : {
        primary: "#2C7CBB",
        secondary: "#418106"
      }
    },
  },
  plugins: [],
}
