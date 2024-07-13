/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        halfscreen: "50vh",
      },
      fontSize: {
        fs_xs: 28,
        fs_sm: 40,
        fs_md: 50,
        toosmall: 8,
      },
    },
  },
  plugins: [require("daisyui")],
};
