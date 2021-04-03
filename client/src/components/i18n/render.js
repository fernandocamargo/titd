import React from 'react';
import { IntlProvider } from 'react-intl';

import { useI18n } from './hooks';

export default ({ children }) => {
  const { locale, messages } = useI18n();

  return (
    <IntlProvider messages={messages} locale={locale}>
      {children}
    </IntlProvider>
  );
};
