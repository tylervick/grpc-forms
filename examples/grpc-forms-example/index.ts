#!/usr/bin/env node
import FastifyVite from '@fastify/vite';
import Fastify, { FastifyInstance } from 'fastify';
import { fileURLToPath } from 'node:url';
import renderer from './server/renderer';

const logConfig = {
  development: {
    transport: {
      target: 'pino-pretty',
      options: {
        translateTime: 'HH:MM:ss Z',
        ignore: 'pid,hostname',
        colorize: true,
      },
    },
  },
  production: true,
  test: false,
};

export async function main(dev: boolean | undefined = undefined): Promise<FastifyInstance> {
  const isDev = dev || process.argv.includes('--dev');

  const server = Fastify({
    logger: isDev ? logConfig.development : logConfig.production,
  });

  await server.register(FastifyVite, {
    root: import.meta.url,
    renderer,
    dev: isDev,
    spa: false,
  });

  await server.vite.ready();

  return server;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const server = await main();
  await server.listen({ port: 3000 });
}
