import React from 'react';
import { ThemeProvider as Theming } from 'styled-components';

import theme from 'themes';
import { App, Debugger, Style } from 'components';

export default () => (
  <Debugger>
    <Theming theme={theme}>
      <Style />
      <App />
    </Theming>
  </Debugger>
);
