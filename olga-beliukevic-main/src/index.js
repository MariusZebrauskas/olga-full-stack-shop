import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../src/Shared/GlobalStyles.css';
import { Theme } from './Shared/Theme';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './context/AuthContex.js';

ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <AuthProvider>
      <Router>
        <App />
      </Router>
    </AuthProvider>
  </ThemeProvider>,
  document.getElementById('root')
);
