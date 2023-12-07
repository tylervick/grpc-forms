import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';
import routes from './routes';
import { theme } from './theme';

const Router = import.meta.env.SSR ? StaticRouter : BrowserRouter;

export type AppProps = {
  url: Partial<Location> | string;
};

export default function App({ url }: AppProps) {
  return (
    <MantineProvider theme={theme}>
      <Router location={url}>
        <Routes>
          {routes.map(({ path, component: Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Routes>
      </Router>
    </MantineProvider>
  );
}
