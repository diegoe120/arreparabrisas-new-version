/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'Roboto': ['Roboto', '"sant serif"'],
			},
			colors: {
				'primario': '#bd6457',
				'bg-color': '#242c31',
				'claro': '#cedbd7'
			}
		},
	},
	plugins: [],
}
