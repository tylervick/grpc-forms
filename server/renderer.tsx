import { AppProps } from '@/App';
import { uneval } from 'devalue';
import { FC } from 'react';
import { renderToString } from 'react-dom/server';

function createRoute(
  {
    handler,
    errorHandler,
    route,
  }: { handler: unknown; errorHandler: unknown; route: { path: unknown } },
  scope: {
    route: (arg0: {
      url: unknown;
      method: string;
      handler: unknown;
      errorHandler: unknown;
    }) => void;
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _config: unknown,
) {
  scope.route({
    url: route.path,
    method: 'GET',
    handler,
    errorHandler,
  });
}

function createRenderFunction({ App }: { App: FC<AppProps> }) {
  return async function (
    _server: unknown,
    req: { url: string | Partial<Location> },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _reply: unknown,
  ) {
    const element = renderToString(<App url={req.url} />);
    return {
      element,
      hydration: `<script>window.hydration = ${uneval({})}</script>`,
    };
  };
}

export default { createRenderFunction, createRoute };
