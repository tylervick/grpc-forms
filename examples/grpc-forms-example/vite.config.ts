import react from '@vitejs/plugin-react';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig, mergeConfig } from 'vitest/config';

const path = fileURLToPath(import.meta.url);
const root = resolve(dirname(path), 'src');

export default defineConfig((envConfig) =>
  mergeConfig(envConfig, {
    root,
    plugins: [react(), tsconfigPaths()],
    resolve: {
      alias: {
        '@': resolve(dirname(path), '..', '..', 'src'),
      },
    },
    build: {
      target: 'ESNext',
    },
  }),
);
