import { hydrateRoot } from 'react-dom/client';
import App from './App';

const mountElement = document.querySelector('main') as HTMLElement;

hydrateRoot(mountElement, <App url='' />);
