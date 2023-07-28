/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'transparent': 'transparent',
      'cream': '#fefff6',
      'coral': '#d43900',
      'blue': '#3455db',
      'yellow': '#fbff00',
    },
    extend: {},
  },
  plugins: [],
}
