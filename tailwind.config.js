/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heroText: "Montserrat Alternates",
      },
      fontSize: {
        medium: "32px",
      },
      backgroundImage: {
        myGradient: "linear-gradient(to right, #063E53 20%, #604704 83%)",
        blueGradient:
          "linear-gradient(to right, #3398D7 0%, #1975AE 33%, #243C4B 53%)",
        yellowGradient: "linear-gradient(to right, #E9B62B, #877134 63%)",
        deepNavy: "linear-gradient(to right , #063E53 20%, #000000 100% )",
      },
      width: {
        bigCard: "560px",
      },
      height: {
        hero: "634px",
        imgCard: "400px",
      },
      backgroundColor: {
        offBlue: "#C8E6E8",
        fadedBlue: "#EFF4F8",
      },
      colors: {
        offwhite: "#FEF7A7",
        deepblue: "#243C4B",
      },
    },
  },
  plugins: [],
};
