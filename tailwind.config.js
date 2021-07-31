module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "hero-img": "url('/src/assets/img/pexels-olia-danilevich-4974915.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
