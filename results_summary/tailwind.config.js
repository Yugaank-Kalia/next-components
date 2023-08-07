/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				"pale-blue": "hsl(221, 100%, 96%)",
				"slate-blue": {
					light: "hsl(252, 100%, 67%)",
					dark: "hsl(241, 81%, 54%)",
				},
				"violet-blue": "hsla(256, 72%, 46%, 1)",
				"dark-gray-blue": "hsl(224, 30%, 27%)",
				"light-red": "hsl(0, 100%, 67%)",
				"orange-yellow": "hsl(39, 100%, 56%)",
				"green-teal": "hsl(166, 100%, 37%)",
				"cobalt-blue": "hsl(234, 85%, 45%)",
			},
		},
	},
	plugins: [],
};
