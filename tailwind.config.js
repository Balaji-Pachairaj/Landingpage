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
               },

               fontFamily: {
                    syne: ["Syne", "sans-serif"],
               },

               colors: {
                    gradientcolor: "#00BD94",
               },
          },
     },
     plugins: [],
};
