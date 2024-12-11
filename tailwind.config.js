/** @type {import('tailwindcss').Config} */

const path = require(`path`);

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'contact-img': `url(${path.resolve(__dirname, 'src/assets/img/contact.jpg')})`,
      }
    },
  },
  plugins: [],
}