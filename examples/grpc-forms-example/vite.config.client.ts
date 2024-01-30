import { resolve } from 'node:path';
import { defineConfig, mergeConfig } from 'vite';
import common, { root } from './vite.config';

export default defineConfig(() =>
  mergeConfig(common, {
    build: {
      outDir: resolve(root, 'dist', 'client'),
      ssrManifest: true,
    },
  }),
);
