/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        primary: "#E70104",
        secondary: "#F0BF05",
        third: "#D71920",
      },
      fontFamily: {
        primary: ["Kungfu", "sans-serif"],
        secondary: ["Chunq", "sans-serif"],
        Sunday: ["Kenyan Coffee", "sans-serif"],
      },
    },
  },
  plugins: [],
};
