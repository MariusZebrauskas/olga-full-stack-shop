import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../src/Shared/GlobalStyles.css';
import { Theme } from './Shared/Theme';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <Router>
      <App />
    </Router>
  </ThemeProvider>,
  document.getElementById('root')
);
