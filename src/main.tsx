import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// import { createGlobalStyle } from 'styled-components'
import * as styled from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

const GlobalStyle = styled.createGlobalStyle`
  h1 {
    padding: 0;
  }
  body {
    margin: 0;
    padding: 0;
    background-color: antiquewhite;
    font-family: Tahoma, sans-serif;

    .app {
      padding: 0.5rem 1rem;
    }
  }
`;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
