import React from 'react';
import { ThemeProvider as Theming } from 'styled-components';

import theme from 'themes';
import { App, Style } from 'components';

export default () => (
  <Theming theme={theme}>
    <Style />
    <App />
  </Theming>
);
