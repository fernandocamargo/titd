import React from 'react';

import { useApp } from './hooks';

export default ({ className }) => {
  const { timestamp } = useApp();

  return <h1 className={className}>Timestamp: {timestamp}</h1>;
};
