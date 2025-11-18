/** @type {import('tailwindcss').Config} */
import fluid, { extract } from "fluid-tailwind";

export default {
  content: {
    files: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    extract,
  },
  theme: {
    screens: require("./src/tailwind/screens"),
    fontFamily: require("./src/tailwind/font-family"),
    colors: require("./src/tailwind/colors"),
  },
  plugins: [
    fluid({
      values: {
        md: { from: "20px", to: "26px" },
      },
    }),
  ],
};
