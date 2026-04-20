/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1a2332",
        brown: {
          50: "#faf8f3",
          100: "#f5f5dc",
          200: "#e8dcc8",
          300: "#d4af37",
          400: "#b8956a",
          500: "#8b6f47",
          600: "#744210",
          700: "#5a340f",
          800: "#3d230a",
          900: "#2a1810",
        },
        accent: "#8A5218",
        gold: "#8A5218",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
