// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      external: [
        'virtual:astro-icon'
        // Add other external modules here if needed
      ]
    }
  }
});

