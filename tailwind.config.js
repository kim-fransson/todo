/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#93A9FF",
        "light-gray": "#E5E5E5",
        "dark-gray": "#212121",
        "dark-blue-gray": "#181824",
        "blue-gray": "#25273C",
      },
      opacity: {
        8: ".08",
        32: ".32",
        87: ".87",
      },
    },
  },
  plugins: [
    // https://github.com/tailwindlabs/tailwindcss-intellisense/issues/227#issuecomment-1139895799
    ({ addUtilities }) => {
      addUtilities({
        ".heading-m": {
          "font-weight": "500",
          "font-size": "48px",
          "letter-spacing": "0.12px",
        },
        ".heading-s": {
          "font-weight": "400",
          "font-size": "24px",
          "letter-spacing": "0.06px",
        },
        ".body-1": {
          "font-weight": "400",
          "font-size": "18px",
          "letter-spacing": "0.045px",
        },
        ".body-2": {
          "font-weight": "400",
          "font-size": "16px",
        },
        ".subtext": {
          "font-weight": "300",
          "font-size": "17px",
        },
        ".button": {
          "font-weight": "400",
          "font-size": "16px",
        },
      });
    },
  ],
};
