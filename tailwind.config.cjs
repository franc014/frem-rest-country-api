/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'dark-blue': 'hsl(var(--color-dark-blue) / <alpha-value>)',
				'darker-blue': 'hsl(var(--color-darker-blue) / <alpha-value>)',
				'darker-blue-text': 'hsl(var(--color-darker-blue-text) / <alpha-value>)',
				'dark-gray': 'hsl(var(--color-dark-gray) / <alpha-value>)',
				'lighter-gray': 'hsl(var(--color-lighter-gray) / <alpha-value>)',
				'theme-white': 'hsl(var(--color-white) / <alpha-value>)',
			},
			fontFamily: {
				primary: 'Nunito Sans, sans-serif'
			}
		},
	},
	plugins: [],
}
