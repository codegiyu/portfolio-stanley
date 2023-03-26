/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      xs: "350px",
      sm: "425px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1536px",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        md: "2rem",
        lg: "1.5rem",
        xl: "4rem",
        "2xl": "5rem",
      },
      center: true,
    },
    extend: {
      colors: {
        blue: "#3A6EF1",
        grey: "#666874",
        grey42: "#66687442",
        white20: "#FFFFFF20",
        white70: "#FFFFFF70",
        black20: "#00000020",
        black70: "#00000070",
        black44: "#00000044",
        lightGrey70: "#D9D9D970",
        red: "#E45F5F",
        green: "#1f780b",
      },
      boxShadow: {
        profile: "0 4px 20px rgba(255, 252, 252, 0.25)",
      },
      fontFamily: {
        montserrat: ["'Montserrat'", "sans-serif"],
        alternate: ["'Montserrat Alternates'", "sans-serif"],
      },
      spacing: {
        textarea: "calc(100% - 24px)",
        projectHalf: "calc(50% - 1rem)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
