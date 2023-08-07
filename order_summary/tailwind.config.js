/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'design-back':
					"url('/assets/images/pattern-background-desktop.svg')",
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				'desaturated-blue': 'hsl(224, 23%, 55%)',
				'pale-blue': {
					light: 'hsl(225, 100%, 94%)',
					dark: 'hsl(225, 100%, 98%)',
				},
				blue: {
					dark: 'hsl(223, 47%, 23%)',
					light: 'hsl(245, 75%, 52%)',
				},
			},
		},
	},
	plugins: [],
};
