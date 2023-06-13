import { mergeConfig } from 'vite';
import { defineConfig } from 'vitest/config';
import viteConfig from './vite.config';

export default mergeConfig(viteConfig, defineConfig({
  test: {
    environment: 'jsdom',
    setupFiles: './setup.js',
    exclude: ['**/node_modules/**', '**/dist/**', '**/e2e.(test|spec).(js|jsx)'],
    alias: {
      '@/': new URL('./src/', import.meta.url).pathname,
    },
  },
}));
