/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    // Remove Tailwind CSS's preflight style so it can use the MUI's preflight instead (CssBaseline).
    preflight: false,
  },
  content: ["./src/**/*.jsx"],
  important: "#root",
  theme: {
    extend: {},
  },
};
