import react from '@vitejs/plugin-react';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

const path = fileURLToPath(import.meta.url);
const root = resolve(dirname(path), 'src');

export default defineConfig({
  root,
  plugins: [
    react(),
    tsconfigPaths(),
    dts({ include: [resolve(root, 'components', 'descriptor')] }),
  ],
  resolve: {
    alias: {
      '@': root,
    },
  },
  build: {
    lib: {
      entry: resolve(root),
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts',
  },
});
