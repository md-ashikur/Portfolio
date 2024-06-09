/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#76F5BC",
      secondary: "#DE63A0",
      
      third: {
        DEFAULT: "#3D3D45",
        100: "#BDBDBE",
        200: "#18274B",
      },
      base: "#FFFFFF",
    },
    fontFamily: {
      sans: ["Helvetica", "sans-serif"],
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
