/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primaryModerate_cyan: "hsl(176, 50%, 47%)",
        primaryDark_cyan: "hsl(176, 72%, 28%)",
        neutralBlack: "hsl(0, 0%, 0%)",
        neutralDark_gray: "hsl(0, 0%, 48%)",
      },
      fontFamily: {
        Commissioner: ["Commissioner", "Arial", "Sans-Serif"],
      },
      fontWeight: {
        Commissioner400: "400",
        Commissioner500: "500",
        Commissioner700: "700",
      },
      fontSize: {
        bodyCopy: "16px",
      },
      backgroundImage: {
        hero_desktop: "url('/src/images/image-hero-desktop.jpg')",
        hero_mobile: "url('/src/images/image-hero-mobile.jpg')",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
