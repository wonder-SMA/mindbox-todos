import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'url';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: '@/main', replacement: fileURLToPath(new URL('./src/main', import.meta.url)) },
      { find: '@/components', replacement: fileURLToPath(new URL('./src/components', import.meta.url)) },
      { find: '@/helpers', replacement: fileURLToPath(new URL('./src/helpers', import.meta.url)) },
      { find: '@/store', replacement: fileURLToPath(new URL('./src/store', import.meta.url)) },
      { find: '@/styles', replacement: fileURLToPath(new URL('./src/styles', import.meta.url)) },
    ],
  },
  plugins: [
    react(),
  ],
});
