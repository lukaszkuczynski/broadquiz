// vite.config.js
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

import path from 'path';

export default defineConfig({
	plugins: [svelte()],

	resolve: {
		alias: {
			$lib: path.resolve('./src/lib'),
		},
	},

	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: './src/setupTests.js', // optional setup
	},
})
