import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';

import { useI18n } from 'hooks';
import { Navigation } from 'components/widgets';

import use from './hooks';
import messages from './messages';

export default ({ className }) => {
  const i18n = useI18n(messages);
  const { logged, logout } = use();
  const navigation = useMemo(
    () => [
      { url: '/about-us', ...i18n.navigation['about-us'] },
      { url: '/repositories', ...i18n.navigation.repositories },
      { url: logout, ...i18n.navigation.logout },
    ],
    [i18n, logout]
  );

  return (
    <header className={className}>
      <h2>
        <Link to="/" title={i18n.title.title}>
          {i18n.title.label}
        </Link>
      </h2>
      {logged && <Navigation items={navigation} />}
    </header>
  );
};
