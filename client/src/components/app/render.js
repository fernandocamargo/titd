import React from 'react';

import { useApp } from './hooks';

export default () => {
  const { timestamp } = useApp();

  return <h1>Timestamp: {timestamp}</h1>;
};
