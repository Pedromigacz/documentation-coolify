module.exports = {
	content: [
		'./docs/.vitepress/**/*.{js,ts,vue}',
		'./docs/**/*.md',
	],
	darkMode: 'class',
	plugins: [
		require('@tailwindcss/typography'),
	],
}