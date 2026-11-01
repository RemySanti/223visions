import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import { initClarity, initGa4 } from './lib/analytics';
import './styles/globals.css';

initGa4();
initClarity();

// Static fallbacks from index.html; SEOHead renders the per-page versions
document.querySelectorAll('[data-default-seo]').forEach((el) => el.remove());

createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);
