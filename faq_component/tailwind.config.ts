import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				'soft-violet': 'hsl(273, 75%, 66%)',
				'soft-blue': 'hsl(240, 73%, 65%)',
				'greyish-blue': {
					light: 'hsl(240, 5%, 91%)',
					dark: 'hsl(237, 12%, 33%)',
				},
				'dark-saturated-blue': 'hsl(238, 29%, 16%)',
			},
		},
	},
	plugins: [],
};
export default config;
