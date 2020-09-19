import React from 'react';
import { Provider as StateManager } from 'react-redux';
import { PersistGate as StatePersistence } from 'redux-persist/integration/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider as Theming } from 'styled-components';

import theme from 'themes';
import { App, Debugger, Style } from 'components';
import { Loader } from 'components/widgets';

import use from './hooks';

export default () => {
  const { store, persistor } = use();

  return (
    <Debugger>
      <StateManager store={store}>
        <StatePersistence persistor={persistor} loading={<Loader />}>
          <Router>
            <Theming theme={theme}>
              <Style />
              <App />
            </Theming>
          </Router>
        </StatePersistence>
      </StateManager>
    </Debugger>
  );
};
