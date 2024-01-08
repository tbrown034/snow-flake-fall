/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      animation: {
        fall: "fall 5s linear infinite", // Define a custom name for the animation
      },
      keyframes: {
        fall: {
          "0%": { transform: "translateY(0)", opacity: 1 },
          "100%": { transform: "translateY(100vh)", opacity: 0 },
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
