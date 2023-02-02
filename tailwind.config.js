/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{html,js,tsx,ts}',
    './src/components/**/*.{html,js,tsx,ts}',
    './src/containers/**/*.{html,js,tsx,ts}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '2rem',
          xl: '2rem',
          '2xl': '2rem',
        },
      },
      gridTemplateRows: {
        // Simple 8 row grid
        '8': 'repeat(8, minmax(0, 1fr))',

        // Complex site-specific row configuration
        'layout': '200px minmax(900px, 1fr) 100px',
      },
      colors: {      
        'white': '#ffffff',
        primary: "#2C7CBB",
        secondary: "#418106",
        'app-blue': '#2C7CBB',
        'app-light-blue': '#EEF5FA',
        'app-light-green': '#EAEDEE',
        'app-green': '#008100',
        'app-gray': '#333333',
        'app-light-gray': '#545F76',
        'app-stone': '#29303F',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar-hide'),
    require('flowbite/plugin'),
  ],
};
