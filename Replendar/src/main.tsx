// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './components/App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './assets/css/Theme.tsx';
import { GlobalStyle } from './assets/css/GlobalStyle.ts';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();
const basename =
  process.env.NODE_ENV === 'production' ? process.env.PUBLIC_URL : '/';

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <ThemeProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter basename={basename}>
        <GlobalStyle />

        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </ThemeProvider>
  // </StrictMode>
);
