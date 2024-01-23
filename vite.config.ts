import react from '@vitejs/plugin-react';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

const path = fileURLToPath(import.meta.url);
const root = resolve(dirname(path), 'src');

export default defineConfig({
  root,
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      '@': root,
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts',
  },
});
