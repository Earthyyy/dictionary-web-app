/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: "375px",
        tablet: "768px",
        desktop: "1440px",
      },
      colors: {
        primary: "var(--text-color-primary)",
        secondary: "var(--text-color-secondary)",
        tertiary: "var(--text-color-tertiary)",
        inputColor: "var(--input-bg-color)",
        toggleColor: "var(--toggle-bg-color)",
      },
    },
  },
  plugins: [],
};
