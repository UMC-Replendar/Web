import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './components/App.tsx';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './assets/css/Theme.tsx';
import { GlobalStyle } from './assets/css/GlobalStyle.ts';

// const basename =
//   process.env.NODE_ENV === 'production' ? process.env.PUBLIC_URL : '/';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <HashRouter>
        <GlobalStyle />
        <App />
      </HashRouter>
    </ThemeProvider>
  </StrictMode>
);
