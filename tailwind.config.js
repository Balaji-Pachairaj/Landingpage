/** @type {import('tailwindcss').Config} */
module.exports = {
     content: [
          "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
          "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
          "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
     ],
     theme: {
          extend: {
               backgroundImage: {
                    "gradient-radial":
                         "radial-gradient(var(--tw-gradient-stops))",
                    "gradient-conic":
                         "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",

                    dharangradient:
                         "linear-gradient(109deg, #00BD94 32.98%, #019BA2 79.81%)",
                    dharangradient2:
                         " linear-gradient(275deg, #0095cb, #3fb49a)",
                    dharangradient3:
                         " linear-gradient(90deg, #017BA2 45.02%, #00BD94 99.79%)",

                    whitelight:
                         "linear-gradient(96deg, #FFF -4.79%, rgba(255, 255, 255, 0.35) 98.05%)",

                    meethover:
                         "linear-gradient(122deg, #27bbae 5%, #7ebe42 92%)",
                    meetnormal: "#27BBAE ",
               },

               fontFamily: {
                    syne: ["Syne", "sans-serif"],
                    poppins: ["Poppins", "sans-serif"],
               },

               colors: {
                    gradientcolor: "#00BD94",
               },
               boxShadow: {
                    socialborder: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
               },
               animation: {
                    slideleft1: "slideleft 25s  linear infinite",
                    slideleft2: "slideleft 20s  linear infinite",
                    slideright: "slideright 25s  linear infinite",
               },
          },
     },
     plugins: [],
};
