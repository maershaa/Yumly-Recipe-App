import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';

import { AppProviders } from '@/app/providers/AppProviders';
import { GlobalStyle } from '@/assets/styles/global';

import App from './App';

const root = document.getElementById('root');

if (!root) {
  throw new Error('Root element not found');
}

createRoot(root).render(
  <StrictMode>
    <AppProviders>
      <GlobalStyle />
      <BrowserRouter basename="/Yumly-Recipe-App/">
        <App />
      </BrowserRouter>
    </AppProviders>
  </StrictMode>,
);
