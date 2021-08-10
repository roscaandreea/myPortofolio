import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from "styled-components";
import './index.css';
import App from './App';
import { theme } from "./themes/theme";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <ThemeProvider theme={theme}>
      <App />
  </ThemeProvider>,
  document.getElementById('root')
);
serviceWorker.register();

