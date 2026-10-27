import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import adapter from '@sveltejs/adapter-auto'; // Add your adapter if needed

export default defineConfig({
  plugins: [
    sveltekit({
      adapter: adapter()
      // Any other previous svelte.config.js options (e.g., preprocess, compilerOptions) go here
    }),
    tailwindcss()
  ]
});