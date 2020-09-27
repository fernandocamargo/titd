import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';

import { Navigation } from 'components/widgets';

import use from './hooks';

export default ({ className }) => {
  const { logged, logout } = use();
  const navigation = useMemo(
    () => [
      {
        label: 'About us',
        url: '/about-us',
        title: 'Click to know more about us',
      },
      {
        label: 'Repositories',
        url: '/repositories',
        title: 'Click to list your repositories',
      },
      { label: 'Logout', title: 'Click to logout', url: logout },
    ],
    [logout]
  );

  return (
    <header className={className}>
      <h2>
        <Link to="/" title="Click to go home">
          Today is the day (this is the documentation)
        </Link>
      </h2>
      {logged && <Navigation items={navigation} />}
    </header>
  );
};
