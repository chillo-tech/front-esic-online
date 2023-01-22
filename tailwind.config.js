/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{html,js,tsx,ts}",
    "./src/components/**/*.{html,js,tsx,ts}",
    "./src/containers/**/*.{html,js,tsx,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        contact: "url('/images/esic-image-5-blue.png')"
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '2rem',
          xl: '2rem',
          '2xl': '2rem',
        }
      },
      colors: {      
        'white': '#ffffff',
        primary: "#2C7CBB",
        secondary: "#418106",
        'app-blue': '#207CBB',
        'app-light-blue': '#EEF5FA',
        'app-light-green': '#EAEDEE',
        'app-green': '#008100',
        'app-gray': '#333333',
        'app-light-gray': '#545F76',
        'app-stone': '#29303F'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
