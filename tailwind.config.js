/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   screens: {
      xsm: "250px",
      "sm-xs": "400px",
      "sm-s": "500px",
      sm: "640px",
      md: "768px",
      "md-l": "850px",
      lg: "1024px",
      "lg-l": "1060px",
      xl: "1280px",
      "xl-l": "1375px",
      "2xl": "1536px",
      "3xl": "2000px",
      "4K": "2800px",
    },
  },
  plugins: [],
}
