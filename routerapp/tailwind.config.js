module.exports = {
  purge: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#3498db',
        secondary: '#2ecc71',
      },
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

