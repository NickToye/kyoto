module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: '#bada55',
    },
    fontFamily: {
      display: ['Oswald', 'sans-serif'],
      body: ['Open Sans', 'serif'],
    },
    spacing: {
      sm: '8px',
      md: '12px',
      lg: '16px',
      xl: '24px',
    },
    extend: {},
  },
  variants: {
    extend: {
      borderWidth: ['last'],
    },
  },
  plugins: [],
};
