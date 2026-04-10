module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#030014", // Deep Luxury Midnight
        secondary: "#94a3b8", // Slate for text
        tertiary: "#111219", // Deep obsidian surface
        "black-100": "#151622",
        "black-200": "#05060f",
        "white-100": "#f8fafc",
        luxury: "#915eff", // Signature Amethyst
        gold: "#e2b714", // Subtle Gold accent
      },
      boxShadow: {
        luxury: "0px 0px 50px rgba(145, 94, 255, 0.2)",
        card: "0px 15px 45px rgba(0, 0, 0, 0.45)",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "luxury-gradient": "linear-gradient(to right, #030014, #160033, #030014)",
      },
    },
  },
  plugins: [],
};
