import { createElement, useCallback } from 'react';

import { useAuthentication } from 'hooks';

export default ({ component, ...route }) => {
  const { logged } = useAuthentication();
  const render = useCallback(props => createElement(component, props), [
    component,
  ]);

  return { route: { render, ...route }, redirect: { to: '/' }, logged };
};
