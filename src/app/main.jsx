import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AppProviders } from '@/app/providers/AppProviders';
import { GlobalStyle } from '@/assets/styles/global';
import App from './App';
import { BrowserRouter } from 'react-router';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProviders>
      <GlobalStyle />
      <BrowserRouter basename="/Yumly-Recipe-App/">
        <App />
      </BrowserRouter>
    </AppProviders>
  </StrictMode>,
);
