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
