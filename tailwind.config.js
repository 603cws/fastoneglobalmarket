/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        Raleway: ["Raleway"],
        Convergence: ["Convergence"],
        zcool: ['"ZCOOL KuaiLe"', "cursive"],
        sans: ["DM Sans", "sans-serif"],
        montaga: ["Montaga", "serif"],
        montserratAlt: ["Montserrat Alternates", "sans-serif"],
        lora: ["Lora", "serif"], // Add Lora font with a fallback
        lato: ["Lato", "sans-serif"], // Add Lato font with a fallback
        lexend: ["Lexend Deca", "sans-serif"], // Add Lexend Deca with a fallback
      },
      colors: {
        customYellow: "#fff9c9",
        customGray: "#817a78",
        customTop: "#D3DAD8", // Light grayish-green
        customMiddle: "#85A59E", // Muted green
        customBottom: "#2C5C4E", // Dark green
      },

      screens: {
        "3xl": "1800px",
      },
      //   container: {
      //     center: true,
      //     padding: {
      //       DEFAULT: "3rem",
      //     },
      //   },

      container: {
        center: true,
        padding: {
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
          "3xl": "8rem", // Optional custom padding for 3xl
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
