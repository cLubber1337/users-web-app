import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/main.scss';
import '@fontsource/jura/400.css';
import '@fontsource/jura/500.css';
import '@fontsource/jura/600.css';
import { TanQueryClientProvider } from '@/app/providers/tan-query-client-provider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <TanQueryClientProvider>
    <App />
  </TanQueryClientProvider>
);
