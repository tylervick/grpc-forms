import { ThemeProvider } from '@/components/theme-provider';
import { memo } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';
import routes from './routes';

export type AppProps = {
  url: Partial<Location> | string;
};

const Router = import.meta.env.SSR ? StaticRouter : BrowserRouter;

const App = memo(function App({ url }: AppProps) {
  return (
    <ThemeProvider>
      <Router location={url}>
        <Routes>
          {routes.map(({ path, component: Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Routes>
      </Router>
    </ThemeProvider>
  );
});

export { App };
