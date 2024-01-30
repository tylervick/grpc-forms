import react from '@vitejs/plugin-react';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

const path = fileURLToPath(import.meta.url);
export const root = resolve(dirname(path));
export const src = resolve(root, 'src');

export default defineConfig({
  root: src,
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      '@': resolve(dirname(path), '..', '..', 'src'),
    },
  },
  build: {
    target: 'ESNext',
  },
});
