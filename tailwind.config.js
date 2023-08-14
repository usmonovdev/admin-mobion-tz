/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      phone: "662px",
      tablet: "750px",
      laptop: "992px",
      desktop: "1100px",
      large: "1400px"
    },
    extend: {
      fontFamily: {
        black: "inter-black, sans-serif",
        extrabold: "inter-extrabold, sans-serif",
        bold: "inter-bold, sans-serif",
        semibold: "inter-semibold, sans-serif",
        medium: "inter-medium, sans-serif",
        regular: "inter-regular, sans-serif",
        light: "inter-light, sans-serif",
      },
    },
  },
  plugins: [],
}

