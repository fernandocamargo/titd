import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import use from './hooks';

export default props => {
  const { logged, route, redirect } = use(props);

  return logged ? <Route {...route} /> : <Redirect {...redirect} />;
};
