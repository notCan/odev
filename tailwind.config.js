const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class",
  plugins: [require("@tailwindcss/typography")],
  content: ["content/**/*.{md,yml,json,json5,csv}"],
  theme: {
    extend: {
      colors: {
        // Customize the feeling of your site
        // gray: colors.stone,
        warning: colors.yellow,
        secondary: colors.slate,
        danger: colors.red,
        success: colors.green,
        primary: {
          DEFAULT: "#33C0CB",
          50: "#C5EDF0",
          100: "#B5E8EC",
          200: "#94DEE4",
          300: "#74D4DC",
          400: "#53CAD4",
          500: "#33C0CB",
          600: "#28969E",
          700: "#1C6B71",
          800: "#114144",
          900: "#061618",
        },
        info: {
          DEFAULT: "#267EFF",
          50: "#DEEBFF",
          100: "#C9DFFF",
          200: "#A0C7FF",
          300: "#78AFFF",
          400: "#4F96FF",
          500: "#267EFF",
          600: "#0060ED",
          700: "#0049B5",
          800: "#00337D",
          900: "#001C45",
        },
      },
      screens: {
        "2xl": "1280px",
      },
      fontFamily: {
        spaceGrotesk: ["Space Grotesk", 'sans-serif'],
      },
    },
  },
};
