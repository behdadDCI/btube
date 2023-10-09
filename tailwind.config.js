/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
      Viga: ["Viga", "sans-serif"],
    },
    extend: {
      colors: {
        BACKGROUND: "#082f49",
        CURRENT_LINE: "#44475a",
        FOREGROUND: "#f8f8f2",
        COMMENT: "#6272a4",
        CYAN: "#8be9fd",
        GREEN: "#50fa7b",
        ORANGE: "#ffb86c",
        PINK: "#ff79c6",
        PURPLE: "#bd93f9",
        RED: "#ff5555",
        YELLOW: "#f1fa8c",
        BLUE_400: "#60a5fa",
        BLUE_500: "#3b82f6",
        BLUE_600: "#2563eb",
        SKY_700:"#0369a1",
        SKY_800:"#075985",
        SKY_900:"#0c4a6e",
      },
    },
  },
  plugins: [],
};
