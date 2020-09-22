import React from 'react';
import { Link } from 'react-router-dom';

import Routes from 'components/routes';
import { Public, Restricted, Skippable } from 'components/route';
import {
  AboutUs,
  Editor,
  Home,
  Login,
  NotFound,
  Repositories,
} from 'components/pages';

import use from './hooks';

export default ({ className }) => {
  const { logout } = use();

  return (
    <main className={className}>
      <header>
        <h2>
          <Link to="/" title="Click to go home">
            Today is the day (this is the documentation)
          </Link>
        </h2>
        <nav>
          <h3>Navigate through:</h3>
          <ul>
            <li>
              <Link to="/repositories" title="Click to list your repositories">
                Repositories
              </Link>
            </li>
            <li>
              <Link to="/logout" title="Click to logout" onClick={logout}>
                Logout
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Skippable path="/login" component={Login} exact />
        <Restricted path="/" component={Home} exact />
        <Restricted path="/repositories" component={Repositories} />
        <Restricted path="/editor" component={Editor} />
        <Public path="/about-us" component={AboutUs} exact />
        <Public path="*" component={NotFound} />
      </Routes>
      <footer>
        <p>All rights reserved</p>
      </footer>
    </main>
  );
};
