/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
	'inter-bold': ['Inter_18pt-Bold'],
	'inter-semibold': ['Inter_18pt-SemiBold'],
	'inter-regular': ['Inter_18pt-Regular'],
      },
    },
  },
  plugins: [],
  assets: ['./assets/fonts'],
 
};
