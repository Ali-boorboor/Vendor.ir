/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-gray-100": "#f5f5f5",
        "color-gray-200": "#7E8299",
        "color-gray-300": "#656565",
        "color-gray-400": "#707070",
        "color-gray-500": "#2F362F",
        "color-pink-600": "rgba(232, 5, 102, 0.9)",
        "color-pink-700": "rgba(232, 5, 102, 0.9)",
        "color-purple-400": "#9561d4",
        "color-blue-600": "rgba(26, 44, 121, 0.8)",
        "color-orange-400": "rgba(250, 82, 82, 0.8)",
        "color-red-500": "#b5191f",
      },
      backgroundImage: {
        "login-background-img": "url('/images/jpg/login-background-img.jpg')",
        "signup-header-gradient":
          "linear-gradient(-135deg,#990fc3 0,#760fc3 16%,#652ec3 52%,#652ec3 52%,#0dd3c5 100%,#7db9e8 100%)",
      },
      fontFamily: {
        "Iranian-Sans": "Iranian-Sans",
      },
      boxShadow: {
        "Radio-input-box-shadow": "0px 0px 15px rgb(250 82 82)",
      },
      maxWidth: {
        "signup-container": "1170px",
      },
    },
  },
  plugins: [],
};
