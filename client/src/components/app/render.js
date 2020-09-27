import React from 'react';

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
import Footer from './footer';
import Header from './header';

export default ({ className }) => {
  const app = use();

  return (
    <main className={className} {...app}>
      <Header />
      <Routes>
        <Skippable path="/login" component={Login} exact />
        <Restricted path="/" component={Home} exact />
        <Restricted path="/repositories" component={Repositories} />
        <Restricted path="/editor" component={Editor} />
        <Public path="/about-us" component={AboutUs} exact />
        <Public path="*" component={NotFound} />
      </Routes>
      <Footer />
    </main>
  );
};
