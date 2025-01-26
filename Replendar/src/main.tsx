import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './components/App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './assets/css/Theme.tsx';
import ThemedApp from './assets/css/GlobalStyle.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={ThemedApp}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
