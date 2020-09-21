import React, { Suspense as OnDemand } from 'react';
import { Switch } from 'react-router-dom';

import { Loader } from 'components/widgets';

export default ({ children }) => (
  <OnDemand fallback={<Loader />}>
    <Switch>{children}</Switch>
  </OnDemand>
);
