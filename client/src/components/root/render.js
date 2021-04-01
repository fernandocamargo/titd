import React, { useMemo } from 'react';
import { IntlProvider as I18n } from 'react-intl';
import { Provider as StateManager } from 'react-redux';
import { PersistGate as StatePersistence } from 'redux-persist/integration/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider as Theming } from 'styled-components';

import theme from 'themes';
import { get as getLocale } from 'helpers/locale';
import { App, Debugger, Style } from 'components';
import { Loader } from 'components/widgets';

import use from './hooks';

export default () => {
  const { store, persistor } = use();
  const messages = useMemo(() => ({ hueBR: 'lolWUT' }), []);
  const locale = useMemo(() => getLocale(), []);

  return (
    <Debugger>
      <I18n messages={messages} locale={locale}>
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
      </I18n>
    </Debugger>
  );
};
