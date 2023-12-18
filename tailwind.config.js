/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      aspectRatio: {
        video: "16 / 9",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".min-h-dscreen": generate("minHeight"),
        ".h-dscreen": generate("height"),
      });

      function generate(property) {
        return {
          [property]: [
            "calc(100vh - env(safe-area-inset-bottom, 0) - env(safe-area-inset-top, 0))",
            "100dvh",
          ],
          "@supports (-webkit-touch-callout: none)": {
            [property]: ["-webkit-fill-available", "100dvh"],
          },
        };
      }
    }),
  ],
};
