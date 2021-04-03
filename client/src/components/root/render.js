import React from 'react';
import { Provider as StateManager } from 'react-redux';
import { PersistGate as StatePersistence } from 'redux-persist/integration/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider as Theming } from 'styled-components';

import theme from 'themes';
import { App, Debugger, I18n, Style } from 'components';
import { Loader } from 'components/widgets';

import { useRoot } from './hooks';

export default () => {
  const { store, persistor } = useRoot();

  return (
    <Debugger>
      <StateManager store={store}>
        <StatePersistence persistor={persistor} loading={<Loader />}>
          <I18n>
            <Router>
              <Theming theme={theme}>
                <Style />
                <App />
              </Theming>
            </Router>
          </I18n>
        </StatePersistence>
      </StateManager>
    </Debugger>
  );
};
