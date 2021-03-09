module.exports = {
	purge: ['./index.html', './src/pages/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			header: ["Heebo", "sans-serif"],
			body: ["Montserrat", "sans-serif"]
		},
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}