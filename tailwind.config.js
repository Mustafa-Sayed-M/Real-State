/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "purple-color": {
          "60": "#703BF7",
          "65": "#1A64FF",
          "70": "#FF9533",
          "75": "#FFCA99",
          "90": "#FFE4CC",
          "95": "#FFF1E5",
          "97": "#FFF7F0",
          "99": "#FFFCFA",
        },
        "white-color": {
          "90": "#E4E4E7",
          "95": "#F1F1F3",
          "97": "#F7F7F8",
          "99": "#FCFCFD",
        },
        "grey-color": {
          "8": "#141414",
          "10": "#1A1A1A",
          "15": "#262626",
          "20": "#333333",
          "30": "#4D4D4D",
          "40": "#666666",
          "50": "#808080",
          "60": "#999999",
        },
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [],
}