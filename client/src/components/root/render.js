import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider as Theming } from 'styled-components';

import theme from 'themes';
import { App, Debugger, Style } from 'components';

export default () => (
  <Debugger>
    <Theming theme={theme}>
      <Style />
      <Router>
        <App />
      </Router>
    </Theming>
  </Debugger>
);
